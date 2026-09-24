import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Check, CheckCircle2, CircleAlert, Clapperboard, Clock3, LockKeyhole, Mail, Phone, RefreshCw, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { broadcastAccessChanged, paymentStatus, publicCatalogue, publicPaymentChannels, recoverPayment, resolveCatalogueKey, startPalplussPayment } from '@/lib/avant-backend'
import { productForLegacyContent } from '@/lib/backend-catalogue-map'
import { customerToken } from '@/lib/google-auth'
import { normalizePaymentState, paymentStateMessage, type PaymentUiState } from '@/lib/payments/status'

export const Route = createFileRoute('/checkout/$productId')({
  head: () => ({ meta: [
    { title: 'Secure Checkout — Avant Movies' },
    { name: 'description', content: 'Complete your Avant Movies access securely with PayPal or M-PESA.' },
    { property: 'og:title', content: 'Secure Checkout — Avant Movies' },
    { property: 'og:description', content: 'Complete your Avant Movies access securely with PayPal or M-PESA.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: CheckoutRoute,
})

type Method = 'mpesa' | 'paypal'

function CheckoutRoute() {
  const { productId } = Route.useParams()
  const router = useRouter()
  const query = typeof window === 'undefined' ? new URLSearchParams() : new URLSearchParams(window.location.search)
  const embedded = query.get('embedded') === '1'
  const returnTo = query.get('returnTo') || ''
  const origin = query.get('origin') || returnTo || '/movies'
  const originScroll = Number(query.get('originScroll') || 0)
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [mpesaCode, setMpesaCode] = useState('')
  const [recoveryOpen, setRecoveryOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [product, setProduct] = useState<any>(null)
  const [backendProductId, setBackendProductId] = useState('')
  const [paymentChannels, setPaymentChannels] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stage, setStage] = useState<PaymentUiState>('ready')
  const [reference, setReference] = useState('')
  const [online, setOnline] = useState(() => typeof navigator === 'undefined' ? true : navigator.onLine)
  const [leaving, setLeaving] = useState(false)
  const [method, setMethod] = useState<Method>('mpesa')
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const paypalOn = paymentChannels?.paypal?.enabled === true
  const palplusOn = paymentChannels?.palpluss?.enabled !== false
  const activeMethod: Method = paypalOn ? method : 'mpesa'

  useEffect(() => { try { setReference(sessionStorage.getItem(`avant_payment_${productId}`) || '') } catch { /* unavailable */ } }, [productId])
  useEffect(() => { const sync=()=>setOnline(navigator.onLine); window.addEventListener('online',sync); window.addEventListener('offline',sync); return()=>{window.removeEventListener('online',sync);window.removeEventListener('offline',sync)} }, [])
  useEffect(() => { let active=true; publicPaymentChannels().then((x:any)=>{if(active)setPaymentChannels(x)}).catch(()=>{}); return()=>{active=false} }, [])
  useEffect(() => {
    let active = true
    const mapped = productForLegacyContent(productId) || productId
    Promise.allSettled([resolveCatalogueKey(productId), publicCatalogue()]).then(([resolvedResult, catalogueResult]) => {
      if (!active) return
      const resolved = resolvedResult.status === 'fulfilled' ? resolvedResult.value?.product : null
      setBackendProductId(resolved?.id || '')
      const list = catalogueResult.status === 'fulfilled' ? catalogueResult.value?.products || [] : []
      setProduct(resolved || list.find((entry: any) => entry.id === mapped) || null)
      setLoading(false)
    })
    return () => { active = false }
  }, [productId])

  const payableMinor = product ? product.promotional_price_minor ?? product.price_minor : 0
  const amount = product ? `${product.currency || 'KES'} ${(payableMinor / 100).toLocaleString()}` : '—'
  const regularAmount = product?.promotional_price_minor != null ? `${product.currency || 'KES'} ${(product.price_minor / 100).toLocaleString()}` : ''
  const steps = useMemo(() => [
    { label: 'Your details', done: ['sending', 'phone', 'confirming', 'success'].includes(stage), active: stage === 'ready' },
    { label: 'Approve payment', done: ['confirming', 'success'].includes(stage), active: ['sending', 'phone'].includes(stage) },
    { label: 'Start watching', done: stage === 'success', active: stage === 'confirming' },
  ], [stage])

  function clearSavedPayment() { try { sessionStorage.removeItem(`avant_payment_${productId}`); sessionStorage.removeItem(`avant_payment_key_${productId}`) } catch { /* unavailable */ } }
  async function finish(referenceValue: string) {
    clearSavedPayment(); setStage('success'); setBusy(false)
    broadcastAccessChanged({ reference: referenceValue, source: 'checkout' })
    if (embedded) window.parent.postMessage({ type: 'avant-payment-success', reference: referenceValue, returnTo }, window.location.origin)
    else await router.navigate({ to: '/payment/success', search: { reference: referenceValue, returnTo: returnTo || origin, origin, originScroll: String(originScroll) } })
  }
  function handleTerminal(state: PaymentUiState) { setBusy(false); setStage(state); setError(paymentStateMessage(state)) }
  function normalizeKenyanMobile(value: string) {
    const digits = value.replace(/\D/g, '')
    let local = digits
    if (digits.startsWith('254')) local = '0' + digits.slice(3)
    else if (digits.length === 9 && (digits.startsWith('7') || digits.startsWith('1'))) local = '0' + digits
    if (!/^0(?:7|1)\d{8}$/.test(local)) return null
    return '254' + local.slice(1)
  }

  async function start() {
    if (!online) { setError('You are offline. Reconnect before starting an M-PESA payment.'); return }
    if (!validEmail) { setError('Enter a valid email address. Your Avant access code will be sent there.'); return }
    const normalizedMobile = normalizeKenyanMobile(mobile)
    if (!normalizedMobile) { setError('Enter a valid Kenyan mobile number, for example 0712 345 678 or 0115 475 543.'); return }
    setMobile(normalizedMobile)
    setStage('sending'); setBusy(true); setError('')
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
    try {
      const token = await customerToken(false)
      const resolved = product?.id || backendProductId || productForLegacyContent(productId) || productId
      let key = ''
      try { key = sessionStorage.getItem(`avant_payment_key_${productId}`) || '' } catch { /* unavailable */ }
      if (!key) { key = crypto.randomUUID(); try { sessionStorage.setItem(`avant_payment_key_${productId}`, key) } catch { /* unavailable */ } }
      const result = await startPalplussPayment(token, { productId: resolved, phone: normalizedMobile, email: email.trim().toLowerCase(), idempotencyKey: key })
      const nextReference = result.reference || result.payment?.reference
      if (!nextReference) throw new Error('Payment was not started.')
      setReference(nextReference); try { sessionStorage.setItem(`avant_payment_${productId}`, nextReference) } catch { /* unavailable */ }
      setStage('phone'); window.setTimeout(() => setStage('confirming'), 1400)
      if (!embedded) { await router.navigate({ to: '/payment/success', search: { reference: nextReference, returnTo: returnTo || origin, origin, originScroll: String(originScroll) } }); return }
      let attempts = 0
      const poll = async () => {
        attempts += 1
        try {
          const freshToken = await customerToken(false)
          const response = await paymentStatus(freshToken, nextReference)
          const state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
          if (state === 'success') { await finish(nextReference); return }
          if (['failed', 'cancelled', 'timed_out'].includes(state)) { handleTerminal(state); return }
        } catch { /* retry safely */ }
        if (attempts < 80) window.setTimeout(poll, attempts < 10 ? 2500 : attempts < 30 ? 4000 : 7000)
        else { setBusy(false); setStage('pending'); setError('Confirmation is delayed. Do not pay again—verify this payment below.') }
      }
      void poll()
    } catch (e: any) { const raw=String(e?.body?.error||e?.body?.message||e?.message||'').trim(); const authError=/invalid or expired customer session|customer session|401/i.test(raw); setStage('ready'); setBusy(false); setError(authError?'Your Avant session expired. Sign in again, then retry the payment.':(raw||'We could not send the M-PESA request. Please try again.')) }
  }
  async function checkPayment(referenceValue = reference) {
    if (!online) { setError('You are offline. Reconnect to verify this payment.'); return }
    if (!referenceValue) { setError('No payment reference is saved on this device.'); return }
    setBusy(true); setStage('confirming'); setError('')
    try {
      const token = await customerToken(false)
      const response = await paymentStatus(token, referenceValue)
      const state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
      if (state === 'success') { await finish(referenceValue); return }
      if (['failed', 'cancelled', 'timed_out'].includes(state)) { handleTerminal(state); return }
      setBusy(false); setStage('pending'); setError('Still awaiting provider confirmation. Do not pay again; check again shortly.')
    } catch { setBusy(false); setStage('pending'); setError('We could not check right now. Your payment is not lost—try again shortly.') }
  }
  async function recoverPaid() {
    if (!online) { setError('You are offline. Reconnect to verify this payment.'); return }
    if (!mobile.trim() && !mpesaCode.trim()) { setError('Enter the M-PESA number or transaction code.'); return }
    setBusy(true); setStage('confirming'); setError('')
    try {
      const token = await customerToken(false)
      const response = await recoverPayment(token, { ...(mobile.trim() ? { phone: mobile.trim() } : {}), ...(mpesaCode.trim() ? { mpesaCode: mpesaCode.trim() } : {}) })
      if (response.confirmed && response.reference) { await finish(response.reference); return }
      setBusy(false); setStage('pending'); setError(response.message || 'No confirmed payment matches those details yet.')
    } catch { setBusy(false); setStage('pending'); setError('Payment verification is temporarily unavailable. Please try again shortly.') }
  }
  function goBack() {
    if (leaving) return
    setLeaving(true)
    window.setTimeout(() => {
      if (embedded) { window.parent.postMessage({ type: 'avant-checkout-close' }, window.location.origin); return }
      if (window.history.length > 1) window.history.back()
      else window.location.assign(new URL((returnTo || origin).replace(/^\//, ''), document.baseURI).href)
    }, 220)
  }

  const stageCopy = stage === 'sending' ? ['Sending your M-PESA request', 'Connecting securely to your phone…'] : stage === 'phone' ? ['Check your phone', 'Enter your M-PESA PIN to approve the payment.'] : ['Confirming your payment', 'Avant unlocks automatically the moment M-PESA confirms.']
  const processing = busy || ['phone', 'confirming'].includes(stage)
  const fieldWrap = 'flex min-h-14 items-center gap-3 rounded-xl border border-border bg-background/60 px-4 transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/15'
  const fieldInput = 'min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground/60'

  return <main className={`${embedded ? 'min-h-full' : 'min-h-[100svh]'} relative overflow-hidden bg-background text-foreground transition-[opacity,filter,transform] duration-200 ease-out ${leaving ? 'pointer-events-none scale-[.992] opacity-0 blur-[3px]' : 'scale-100 opacity-100 blur-0'}`}>
    {!embedded && <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"/>}
    <div className={`relative mx-auto w-full ${embedded ? 'max-w-xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-6' : 'max-w-5xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8'}`}>
      {!embedded && <header className="flex items-center justify-between pb-6">
        <Button type="button" variant="ghost" onClick={goBack} className="-ml-2 min-h-11 gap-2 px-2 text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4"/>Back</Button>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur"><LockKeyhole className="size-3.5 text-primary"/>Encrypted checkout</span>
      </header>}

      <div className={`grid gap-6 ${embedded ? '' : 'lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-10'}`}>
        <section className="order-2 min-w-0 lg:order-1">
          {!embedded && <div className="mb-6">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Get your access pass</h1>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">Pay once, and your title unlocks right here. We also email you an access code so you can watch on any device.</p>
          </div>}

          <ol className="mb-5 grid grid-cols-3 gap-2" aria-label="Checkout progress">
            {steps.map((step) => <li key={step.label} className="min-w-0">
              <span className={`block h-1 rounded-full transition-colors duration-500 ${step.done ? 'bg-primary' : step.active ? 'bg-primary/50' : 'bg-border'}`}/>
              <span className={`mt-2 flex items-center gap-1.5 truncate text-xs font-semibold ${step.active || step.done ? 'text-foreground' : 'text-muted-foreground'}`}>{step.done && <Check className="size-3 shrink-0 text-primary"/>}<span className="truncate">{step.label}</span></span>
            </li>)}
          </ol>

          {processing ? <div className="rounded-2xl border border-border bg-card/70 px-6 py-12 text-center shadow-2xl backdrop-blur" role="status" aria-live="polite">
            <div className="relative mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
              <span className="absolute inset-0 rounded-full border-2 border-primary/30 motion-safe:animate-ping"/>
              {stage === 'phone' ? <Phone className="size-6"/> : <Clock3 className="size-6 motion-safe:animate-pulse"/>}
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">{stageCopy[0]}</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{stageCopy[1]}</p>
            {stage === 'phone' && <div className="mx-auto mt-6 max-w-sm rounded-xl border border-border bg-background/60 px-4 py-3 text-left"><p className="text-sm font-semibold">Approve on your phone</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Your PIN is entered on your phone only. We detect the confirmation for you.</p></div>}
            {reference && <p className="mx-auto mt-6 max-w-full truncate font-mono text-[11px] text-muted-foreground/60">Ref {reference}</p>}
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground"><span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"/>Keep this screen open and don’t pay twice</p>
          </div> : <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl backdrop-blur">
            <div className="p-5 sm:p-7">
              <label htmlFor="avant-email" className="text-sm font-semibold">Email for your access code</label>
              <div className={`mt-2 ${fieldWrap}`}>
                <Mail className="size-4 shrink-0 text-muted-foreground"/>
                <input id="avant-email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" inputMode="email" autoComplete="email" className={fieldInput}/>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Your receipt and code are sent here and saved to your Avant account.</p>

              <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-secondary/30 px-4 py-3"><div><p className="text-sm font-bold">Payment methods</p><p className="mt-0.5 text-xs text-muted-foreground">Choose how you want to pay securely.</p></div>{palplusOn && <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">Palplus · M-PESA</span>}</div>
              {paypalOn && <div role="tablist" aria-label="Payment method" className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-secondary/60 p-1">
                {([['paypal', 'PayPal'], ['mpesa', 'M-PESA']] as [Method, string][]).map(([id, label]) => <button key={id} type="button" role="tab" aria-selected={activeMethod === id} onClick={() => { setMethod(id); setError('') }} className={`min-h-11 rounded-lg text-sm font-bold transition ${activeMethod === id ? 'bg-background text-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}>{label}</button>)}
              </div>}

              {activeMethod === 'mpesa' && <div className={paypalOn ? 'mt-5' : 'mt-6'}>
                {!paypalOn && <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Smartphone className="size-4 text-primary"/>Pay with M-PESA</p>}
                <label htmlFor="mpesa-number" className="text-sm font-semibold">M-PESA phone number</label>
                <div className={`mt-2 ${fieldWrap}`}>
                  <span className="border-r border-border pr-3 text-sm font-semibold text-muted-foreground">KE +254</span>
                  <input id="mpesa-number" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="07XX XXX XXX or 01XX XXX XXX" inputMode="tel" autoComplete="tel" className={fieldInput}/>
                </div>
                <Button onClick={() => void start()} disabled={!online || !validEmail || !normalizeKenyanMobile(mobile) || loading} size="lg" className="mt-4 min-h-14 w-full gap-2 rounded-xl text-base font-black shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"><Smartphone className="size-5"/>Pay {amount} with M-PESA</Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">{palplusOn ? 'Secure M-PESA checkout powered by Palplus. ' : ''}You’ll get a prompt on your phone. Your PIN never touches Avant.</p>
              </div>}

              {activeMethod === 'paypal' && <div className="mt-5">
                <Button type="button" disabled className="min-h-14 w-full rounded-xl text-base font-black">Pay {amount} with PayPal</Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">PayPal is connected in Admin. Checkout activates when the PayPal order endpoint is available.</p>
              </div>}

              {paymentChannels?.paybill?.enabled === true && paymentChannels?.paybill?.number && <div className="mt-5 rounded-xl border border-dashed border-border bg-secondary/30 p-4 text-sm"><p className="font-bold">Prefer Paybill? Use {paymentChannels.paybill.number}</p>{paymentChannels.paybill.account && <p className="mt-1 text-xs text-muted-foreground">Account: {paymentChannels.paybill.account}</p>}</div>}
            </div>

            {activeMethod === 'mpesa' && <div className="border-t border-border bg-background/30 px-5 py-3 sm:px-7">
              <Button type="button" variant="ghost" onClick={() => setRecoveryOpen((value) => !value)} disabled={!online} className="min-h-11 w-full gap-2 rounded-xl text-muted-foreground hover:text-foreground"><RefreshCw className="size-4"/>Already paid? Verify your payment</Button>
            </div>}
          </div>}

          {recoveryOpen && !busy && <section className="mt-3 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur">
            <p className="text-sm font-bold">Find a completed payment</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Use the phone number above or your M-PESA transaction code. This never creates a second charge.</p>
            <input value={mpesaCode} onChange={(event) => setMpesaCode(event.target.value.toUpperCase())} placeholder="M-PESA transaction code" autoCapitalize="characters" className="mt-3 min-h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm font-medium outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"/>
            <Button type="button" onClick={() => void recoverPaid()} disabled={!mobile.trim() && !mpesaCode.trim()} className="mt-3 min-h-12 w-full rounded-xl font-bold">Verify payment</Button>
          </section>}

          {reference && !busy && <Button type="button" variant="outline" onClick={() => void checkPayment()} className="mt-3 min-h-12 w-full gap-2 rounded-xl"><RefreshCw className="size-4"/>Check saved payment</Button>}
          {!online && <div className="mt-3 flex gap-3 rounded-xl border border-border bg-card p-4 text-sm" role="status"><CircleAlert className="mt-0.5 size-4 shrink-0"/><span>Checkout is paused while you’re offline. Reconnect to pay or verify a payment.</span></div>}
          {error && <div className="mt-3 flex gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm" role="alert"><CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive"/><span>{error}</span></div>}

          <ul className="mt-6 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
            <li className="flex items-center gap-2"><ShieldCheck className="size-4 shrink-0 text-primary"/>Verified before unlocking</li>
            <li className="flex items-center gap-2"><Zap className="size-4 shrink-0 text-primary"/>Instant access on confirmation</li>
            <li className="flex items-center gap-2"><Mail className="size-4 shrink-0 text-primary"/>Access code sent by email</li>
          </ul>
        </section>

        <AccessPass product={product} loading={loading} amount={amount} regularAmount={regularAmount} compact={embedded}/>
      </div>
    </div>
  </main>
}

function AccessPass({ product, loading, amount, regularAmount, compact }: { product: any; loading: boolean; amount: string; regularAmount: string; compact: boolean }) {
  return <aside className={`relative order-1 h-fit overflow-hidden rounded-2xl border border-border bg-card shadow-2xl lg:order-2 ${compact ? '' : 'lg:sticky lg:top-8'}`}>
    <div className="bg-gradient-to-br from-primary/25 via-primary/5 to-transparent p-5 sm:p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary"><Clapperboard className="size-4"/>Avant Movies access pass</div>
      {loading ? <div className="mt-5 h-16 animate-pulse rounded-lg bg-secondary"/> : <>
        <h2 className={`mt-4 font-black leading-tight tracking-tight ${compact ? 'text-xl' : 'text-2xl'}`}>{product?.name || 'Avant Movies access'}</h2>
        {!compact && product?.description && <p className="mt-2 line-clamp-4 text-sm leading-6 text-muted-foreground">{product.description}</p>}
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground"><CheckCircle2 className="size-3.5 text-primary"/>{product?.duration_days ? `${product.duration_days} days of access` : 'Access length confirmed before you pay'}</p>
      </>}
    </div>
    <div className="relative">
      <div aria-hidden className="absolute -left-3 -top-3 size-6 rounded-full border border-border bg-background"/>
      <div aria-hidden className="absolute -right-3 -top-3 size-6 rounded-full border border-border bg-background"/>
      <div className="mx-6 border-t-2 border-dashed border-border"/>
    </div>
    <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
      <div><p className="text-xs font-semibold text-muted-foreground">Total today</p>{regularAmount && <p className="mt-1 text-xs text-muted-foreground line-through">{regularAmount}</p>}</div>
      <strong className="text-3xl font-black tracking-tight">{amount}</strong>
    </div>
  </aside>
}
