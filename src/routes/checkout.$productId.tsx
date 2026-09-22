import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Check, CheckCircle2, CircleAlert, Clock3, LockKeyhole, Phone, RefreshCw, ShieldCheck, Smartphone } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { broadcastAccessChanged, paymentStatus, publicCatalogue, recoverPayment, resolveCatalogueKey, startPalplussPayment } from '@/lib/avant-backend'
import { productForLegacyContent } from '@/lib/backend-catalogue-map'
import { customerToken } from '@/lib/google-auth'
import { normalizePaymentState, paymentStateMessage, type PaymentUiState } from '@/lib/payments/status'

export const Route = createFileRoute('/checkout/$productId')({
  head: () => ({ meta: [
    { title: 'Secure M-PESA Checkout — Avant Movies' },
    { name: 'description', content: 'Complete your Avant Movies access securely with M-PESA.' },
    { property: 'og:title', content: 'Secure Checkout — Avant Movies' },
    { property: 'og:description', content: 'Complete your Avant Movies access securely with M-PESA.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: CheckoutRoute,
})

function CheckoutRoute() {
  const { productId } = Route.useParams()
  const router = useRouter()
  const query = typeof window === 'undefined' ? new URLSearchParams() : new URLSearchParams(window.location.search)
  const embedded = query.get('embedded') === '1'
  const returnTo = query.get('returnTo') || ''
  const origin = query.get('origin') || returnTo || '/movies'
  const originScroll = Number(query.get('originScroll') || 0)
  const [mobile, setMobile] = useState('')
  const [mpesaCode, setMpesaCode] = useState('')
  const [recoveryOpen, setRecoveryOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stage, setStage] = useState<PaymentUiState>('ready')
  const [reference, setReference] = useState('')
  const [online, setOnline] = useState(() => typeof navigator === 'undefined' ? true : navigator.onLine)

  useEffect(() => { try { setReference(sessionStorage.getItem(`avant_payment_${productId}`) || '') } catch { /* unavailable */ } }, [productId])
  useEffect(() => { const sync=()=>setOnline(navigator.onLine); window.addEventListener('online',sync); window.addEventListener('offline',sync); return()=>{window.removeEventListener('online',sync);window.removeEventListener('offline',sync)} }, [])
  useEffect(() => {
    let active = true
    const mapped = productForLegacyContent(productId) || productId
    Promise.allSettled([resolveCatalogueKey(productId), publicCatalogue()]).then(([resolvedResult, catalogueResult]) => {
      if (!active) return
      const resolved = resolvedResult.status === 'fulfilled' ? resolvedResult.value?.product : null
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
    { label: 'M-PESA number', done: ['sending', 'phone', 'confirming', 'success'].includes(stage), active: stage === 'ready' },
    { label: 'Phone prompt', done: ['confirming', 'success'].includes(stage), active: ['sending', 'phone'].includes(stage) },
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
    const normalizedMobile = normalizeKenyanMobile(mobile)
    if (!normalizedMobile) { setError('Enter a valid Kenyan mobile number, for example 0712 345 678 or 0115 475 543.'); return }
    setMobile(normalizedMobile)
    setStage('sending'); setBusy(true); setError('')
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
    try {
      const token = await customerToken(false)
      const resolved = product?.id || productForLegacyContent(productId) || productId
      let key = ''
      try { key = sessionStorage.getItem(`avant_payment_key_${productId}`) || '' } catch { /* unavailable */ }
      if (!key) { key = crypto.randomUUID(); try { sessionStorage.setItem(`avant_payment_key_${productId}`, key) } catch { /* unavailable */ } }
      const result = await startPalplussPayment(token, { productId: resolved, phone: normalizedMobile, idempotencyKey: key })
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
    if (embedded) { window.parent.postMessage({ type: 'avant-checkout-close' }, window.location.origin); return }
    if (window.history.length > 1) window.history.back()
    else window.location.assign(new URL((returnTo || origin).replace(/^\//, ''), document.baseURI).href)
  }

  const stageCopy = stage === 'sending' ? ['Sending M-PESA prompt', 'Connecting securely to your phone…'] : stage === 'phone' ? ['Check your phone', 'Approve the M-PESA request with your PIN.'] : ['Verifying your payment', 'Payment received? Avant will unlock automatically as soon as M-PESA confirms it.']
  return <main className={`${embedded ? 'min-h-full' : 'min-h-[100svh]'} bg-background text-foreground`}><div className={`mx-auto w-full ${embedded ? 'max-w-3xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-6' : 'max-w-6xl px-4 py-4 sm:px-6 sm:py-7 lg:px-8'}`}>
    {!embedded && <header className="flex items-center justify-between border-b border-border pb-4"><Button type="button" variant="ghost" onClick={goBack} className="min-h-11 px-2 text-muted-foreground"><ArrowLeft/>Back</Button><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-primary"><LockKeyhole className="size-4"/>Secure checkout</span></header>}
    <div className={`grid gap-5 ${embedded ? 'py-1' : 'py-5 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-10'}`}><section className="min-w-0">
      {!embedded && <div className="mb-5"><p className="eyebrow">Complete your access</p><h1 className="mt-2 text-3xl font-black sm:text-5xl">Unlock and start watching.</h1><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Enter your M-PESA number, approve the prompt, and this title unlocks automatically.</p></div>}
      {embedded && <CompactSummary product={product} loading={loading} amount={amount}/>}<ol className="mb-5 flex items-center gap-2 px-1" aria-label="Checkout progress">{steps.map((step, index) => <li key={step.label} className="flex min-w-0 flex-1 items-center gap-2"><span className={`grid size-7 shrink-0 place-items-center rounded-full border text-[11px] font-black transition ${step.done ? 'border-primary bg-primary text-primary-foreground' : step.active ? 'border-primary/70 bg-primary/15 text-primary' : 'border-border bg-secondary/50 text-muted-foreground'}`}>{step.done ? <Check className="size-3.5"/> : index + 1}</span><span className={`hidden truncate text-[10px] font-bold uppercase tracking-[.12em] sm:block ${step.active ? 'text-foreground' : 'text-muted-foreground'}`}>{step.label}</span>{index < steps.length - 1 && <span className={`ml-auto h-px min-w-2 flex-1 ${step.done ? 'bg-primary/70' : 'bg-border'}`}/>}</li>)}</ol>
      {busy || ['phone', 'confirming'].includes(stage) ? <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card to-background p-6 shadow-2xl sm:p-8" role="status" aria-live="polite"><div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-primary/10 blur-3xl"/><div className="relative flex flex-col items-center text-center"><div className="relative grid size-16 place-items-center rounded-full border border-primary/35 bg-primary/15 text-primary shadow-lg"><span className="absolute inset-[-7px] rounded-full border border-primary/15 animate-ping"/>{stage === 'phone' ? <Phone className="size-7"/> : <Clock3 className="size-7 animate-pulse"/>}</div><p className="mt-5 text-[10px] font-black uppercase tracking-[.2em] text-primary">{stage === 'sending' ? 'Requesting payment' : stage === 'phone' ? 'Action required' : 'Secure verification'}</p><h2 className="mt-2 text-xl font-black sm:text-2xl">{stageCopy[0]}</h2><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{stageCopy[1]}</p>{stage === 'phone' && <p className="mt-4 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-foreground/80">Keep this page open after entering your PIN</p>}{reference && <p className="mt-5 font-mono text-[10px] text-muted-foreground">Avant ref · {reference}</p>}<div className="mt-6 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-secondary"><div className="h-full w-2/3 animate-pulse rounded-full bg-primary"/></div><p className="mt-3 text-[11px] text-muted-foreground">Do not pay twice. Confirmation can take a few moments.</p></div></div> : <div className="space-y-3"><section className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background shadow-2xl"><div className="border-b border-border/70 px-5 py-4 sm:px-6"><p className="flex items-center gap-2 text-sm font-bold"><Smartphone className="size-4 text-primary"/>M-PESA on your phone</p><p className="mt-1 text-xs text-muted-foreground">Your M-PESA PIN stays on your phone.</p></div><div className="p-5 sm:p-6"><label htmlFor="mpesa-number" className="text-sm font-bold">M-PESA mobile number</label><div className="mt-3 flex min-h-14 items-center rounded-xl border border-white/15 bg-black/30 px-4 transition focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20"><span className="mr-3 border-r border-border pr-3 text-sm text-muted-foreground">KE</span><input id="mpesa-number" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="07XX XXX XXX or 01XX XXX XXX" inputMode="tel" autoComplete="tel" className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-muted-foreground"/></div><Button onClick={() => void start()} disabled={!online || !normalizeKenyanMobile(mobile) || loading} size="lg" className="mt-4 min-h-14 w-full rounded-xl text-base font-black shadow-lg transition hover:-translate-y-0.5"><Smartphone/>Pay {amount} with M-PESA</Button><Button type="button" variant="ghost" onClick={() => setRecoveryOpen((value) => !value)} disabled={!online} className="mt-2 min-h-11 w-full rounded-xl text-muted-foreground hover:text-foreground"><RefreshCw/>Already paid? Verify payment</Button></div></section></div>}
      {recoveryOpen && !busy && <section className="mt-3 rounded-lg border border-border bg-card p-4"><p className="text-sm font-bold">Find a completed payment</p><p className="mt-1 text-xs text-muted-foreground">Use the phone number above or your M-PESA transaction code. This never creates a second charge.</p><input value={mpesaCode} onChange={(event) => setMpesaCode(event.target.value.toUpperCase())} placeholder="M-PESA transaction code" autoCapitalize="characters" className="mt-3 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"/><Button type="button" onClick={() => void recoverPaid()} disabled={!mobile.trim() && !mpesaCode.trim()} className="mt-2 min-h-11 w-full">Verify payment</Button></section>}
      {reference && !busy && <Button type="button" variant="outline" onClick={() => void checkPayment()} className="mt-3 min-h-11 w-full"><RefreshCw/>Check saved payment</Button>}{!online && <div className="mt-3 flex gap-3 rounded-lg border border-border bg-card p-4 text-sm" role="status"><CircleAlert className="mt-0.5 size-4 shrink-0"/><span>Checkout is paused while you’re offline. Reconnect to pay or verify an existing payment.</span></div>}{error && <div className="mt-3 flex gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm shadow-lg" role="alert"><CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive"/><span>{error}</span></div>}<p className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary"/>Secure M-PESA checkout. Keep this page open until your title is unlocked.</p>
    </section>{!embedded && <OrderSummary product={product} loading={loading} amount={amount} regularAmount={regularAmount}/>}</div>
  </div></main>
}

function CompactSummary({ product, loading, amount }: { product: any; loading: boolean; amount: string }) { return <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 via-card to-card shadow-xl"><div className="p-5 sm:p-6"><div className="flex items-end justify-between gap-5"><div className="min-w-0"><p className="text-[10px] font-black uppercase tracking-[.2em] text-primary">Unlock on Avant</p><h1 className="mt-2 truncate text-xl font-black sm:text-2xl">{loading ? 'Loading access…' : product?.name || 'Avant Movies access'}</h1><p className="mt-1 text-xs text-muted-foreground">{product?.duration_days ? `${product.duration_days} days of access` : 'Access duration confirmed before payment'}</p></div><div className="shrink-0 text-right"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-muted-foreground">Total</p><strong className="mt-1 block text-2xl font-black sm:text-3xl">{amount}</strong></div></div></div></div> }
function OrderSummary({ product, loading, amount, regularAmount }: { product: any; loading: boolean; amount: string; regularAmount: string }) { return <aside className="order-last h-fit overflow-hidden rounded-lg border border-border bg-card shadow-reel lg:sticky lg:top-24"><div className="h-1 bg-primary"/><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.18em] text-muted-foreground">You are unlocking</p>{loading ? <div className="mt-5 h-28 animate-pulse rounded-md bg-secondary"/> : product ? <><h2 className="mt-4 text-xl font-bold">{product.name}</h2>{product.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>}<dl className="mt-4 space-y-3 border-t border-border pt-4"><div className="flex justify-between gap-4"><dt className="text-sm text-muted-foreground">Access</dt><dd className="text-sm font-semibold">{product.duration_days ? `${product.duration_days} days` : 'As listed'}</dd></div><div className="flex items-end justify-between gap-4"><dt className="text-sm text-muted-foreground">Total</dt><dd className="text-right">{regularAmount && <span className="block text-xs text-muted-foreground line-through">{regularAmount}</span>}<strong className="text-2xl">{amount}</strong></dd></div></dl></> : <p className="mt-5 text-sm text-muted-foreground">The access option will be verified before payment.</p>}<div className="mt-5 space-y-3 border-t border-border pt-4 text-xs text-muted-foreground"><p className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-primary"/>One M-PESA confirmation on your phone.</p><p className="flex gap-2"><ShieldCheck className="size-4 shrink-0 text-primary"/>Watch access activates only after verification.</p></div></div></aside> }