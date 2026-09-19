import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Check, CheckCircle2, CircleAlert, Clock3, LockKeyhole, Phone, RefreshCw, ShieldCheck, Smartphone } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { broadcastAccessChanged, paymentStatus, publicCatalogue, recoverPayment, resolveCatalogueKey, startPalplussPayment } from '@/lib/avant-backend'
import { productForLegacyContent } from '@/lib/backend-catalogue-map'
import { customerSession, rememberedCustomer, requireCustomerToken, signInCustomer, watchCustomerSession } from '@/lib/google-auth'
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
  const [customer, setCustomer] = useState<any>(null)
  const [authBusy, setAuthBusy] = useState(false)
  const [stage, setStage] = useState<PaymentUiState>('ready')
  const [reference, setReference] = useState('')

  useEffect(() => { void customerSession().then(setCustomer); return watchCustomerSession(() => void customerSession().then(setCustomer)) }, [])
  useEffect(() => { try { setReference(sessionStorage.getItem(`avant_payment_${productId}`) || '') } catch { /* unavailable */ } }, [productId])
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
    { label: 'Account', done: Boolean(customer), active: !customer },
    { label: 'Phone prompt', done: ['confirming', 'success'].includes(stage), active: ['sending', 'phone'].includes(stage) },
    { label: 'Verified access', done: stage === 'success', active: stage === 'confirming' },
  ], [customer, stage])

  function clearSavedPayment() { try { sessionStorage.removeItem(`avant_payment_${productId}`); sessionStorage.removeItem(`avant_payment_key_${productId}`) } catch { /* unavailable */ } }
  async function finish(referenceValue: string) {
    clearSavedPayment(); setStage('success'); setBusy(false)
    broadcastAccessChanged({ reference: referenceValue, source: 'checkout' })
    if (embedded) window.parent.postMessage({ type: 'avant-payment-success', reference: referenceValue, returnTo }, window.location.origin)
    else await router.navigate({ to: '/payment/success', search: { reference: referenceValue, returnTo: returnTo || origin, origin, originScroll: String(originScroll) } })
  }
  function handleTerminal(state: PaymentUiState) { setBusy(false); setStage(state); setError(paymentStateMessage(state)) }
  async function loginFirst() { setAuthBusy(true); setError(''); try { setCustomer(await signInCustomer(rememberedCustomer()?.email)) } catch { setError('Sign-in could not be completed. Please try again.') } finally { setAuthBusy(false) } }
  async function start() {
    if (!customer) { setError('Sign in first to continue to M-PESA.'); return }
    setStage('sending'); setBusy(true); setError('')
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
    try {
      const token = await requireCustomerToken()
      const resolved = product?.id || productForLegacyContent(productId) || productId
      let key = ''
      try { key = sessionStorage.getItem(`avant_payment_key_${productId}`) || '' } catch { /* unavailable */ }
      if (!key) { key = crypto.randomUUID(); try { sessionStorage.setItem(`avant_payment_key_${productId}`, key) } catch { /* unavailable */ } }
      const result = await startPalplussPayment(token, { productId: resolved, phone: mobile, idempotencyKey: key })
      const nextReference = result.reference || result.payment?.reference
      if (!nextReference) throw new Error('Payment was not started.')
      setReference(nextReference); try { sessionStorage.setItem(`avant_payment_${productId}`, nextReference) } catch { /* unavailable */ }
      setStage('phone'); window.setTimeout(() => setStage('confirming'), 1400)
      if (!embedded) { await router.navigate({ to: '/payment/success', search: { reference: nextReference, returnTo: returnTo || origin, origin, originScroll: String(originScroll) } }); return }
      let attempts = 0
      const poll = async () => {
        attempts += 1
        try {
          const freshToken = await requireCustomerToken()
          const response = await paymentStatus(freshToken, nextReference)
          const state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
          if (state === 'success') { await finish(nextReference); return }
          if (['failed', 'cancelled', 'timed_out'].includes(state)) { handleTerminal(state); return }
        } catch { /* retry safely */ }
        if (attempts < 80) window.setTimeout(poll, attempts < 10 ? 2500 : attempts < 30 ? 4000 : 7000)
        else { setBusy(false); setStage('pending'); setError('Confirmation is delayed. Do not pay again—verify this payment below.') }
      }
      void poll()
    } catch { setStage('ready'); setBusy(false); setError('We could not send the M-PESA request. Check the number and try again.') }
  }
  async function checkPayment(referenceValue = reference) {
    if (!referenceValue) { setError('No payment reference is saved on this device.'); return }
    setBusy(true); setStage('confirming'); setError('')
    try {
      const token = await requireCustomerToken()
      const response = await paymentStatus(token, referenceValue)
      const state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
      if (state === 'success') { await finish(referenceValue); return }
      if (['failed', 'cancelled', 'timed_out'].includes(state)) { handleTerminal(state); return }
      setBusy(false); setStage('pending'); setError('Still awaiting provider confirmation. Do not pay again; check again shortly.')
    } catch { setBusy(false); setStage('pending'); setError('We could not check right now. Your payment is not lost—try again shortly.') }
  }
  async function recoverPaid() {
    if (!mobile.trim() && !mpesaCode.trim()) { setError('Enter the M-PESA number or transaction code.'); return }
    setBusy(true); setStage('confirming'); setError('')
    try {
      const token = await requireCustomerToken()
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

  const stageCopy = stage === 'sending' ? ['Sending request', 'Connecting securely to M-PESA…'] : stage === 'phone' ? ['Check your phone', 'Enter your M-PESA PIN on your phone.'] : ['Confirming payment', 'Keep this screen open while Avant verifies your payment.']
  return <main className={`${embedded ? 'min-h-full' : 'min-h-[100svh]'} bg-background text-foreground`}><div className={`mx-auto w-full ${embedded ? 'max-w-3xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-6' : 'max-w-6xl px-4 py-4 sm:px-6 sm:py-7 lg:px-8'}`}>
    {!embedded && <header className="flex items-center justify-between border-b border-border pb-4"><Button type="button" variant="ghost" onClick={goBack} className="min-h-11 px-2 text-muted-foreground"><ArrowLeft/>Back</Button><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-primary"><LockKeyhole className="size-4"/>Secure checkout</span></header>}
    <div className={`grid gap-5 ${embedded ? 'py-1' : 'py-5 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-10'}`}><section className="min-w-0">
      {!embedded && <div className="mb-5"><p className="eyebrow">Complete your access</p><h1 className="mt-2 text-3xl font-black sm:text-5xl">One step from the story.</h1><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Confirm on your phone. Avant unlocks this title only after M-PESA verifies the payment.</p></div>}
      {embedded && <CompactSummary product={product} loading={loading} amount={amount}/>}<ol className="mb-4 grid grid-cols-3 gap-2" aria-label="Checkout progress">{steps.map((step, index) => <li key={step.label} className={`rounded-md border px-2 py-2.5 ${step.active ? 'border-primary/50 bg-primary/10' : 'border-border bg-card/40'}`}><div className="flex items-center gap-2"><span className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${step.done ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>{step.done ? <Check className="size-3.5"/> : index + 1}</span><span className="text-[10px] font-semibold sm:text-xs">{step.label}</span></div></li>)}</ol>
      {busy || ['phone', 'confirming'].includes(stage) ? <div className="rounded-lg border border-primary/30 bg-primary/10 p-5" role="status" aria-live="polite"><div className="flex items-start gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">{stage === 'phone' ? <Phone/> : <Clock3 className="animate-pulse"/>}</div><div><p className="font-bold">{stageCopy[0]}</p><p className="mt-1 text-sm text-muted-foreground">{stageCopy[1]}</p>{reference && <p className="mt-3 font-mono text-[10px] text-muted-foreground">Avant ref · {reference}</p>}</div></div><div className="mt-5 h-1 overflow-hidden rounded-full bg-secondary"><div className="h-full w-2/3 animate-pulse bg-primary"/></div></div> : <div className="space-y-3"><section className="rounded-lg border border-border bg-card p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-muted-foreground">1 · Your account</p>{customer ? <div className="mt-3 flex items-center gap-3"><CheckCircle2 className="size-5 text-primary"/><div className="min-w-0"><p className="truncate text-sm font-bold">{customer.name || 'Signed in'}</p><p className="truncate text-xs text-muted-foreground">{customer.email}</p></div></div> : <Button onClick={() => void loginFirst()} disabled={authBusy} className="mt-3 min-h-12 w-full">{authBusy ? 'Signing in…' : 'Continue with Google'}</Button>}</section><section className="overflow-hidden rounded-lg border border-border bg-card"><div className="border-b border-border px-4 py-3 sm:px-5"><p className="flex items-center gap-2 text-sm font-bold"><Smartphone className="size-4 text-primary"/>M-PESA on your phone</p><p className="mt-1 text-xs text-muted-foreground">No PIN is entered on this website.</p></div><div className="p-4 sm:p-5"><label htmlFor="mpesa-number" className="text-sm font-bold">M-PESA mobile number</label><div className="mt-3 flex min-h-12 items-center rounded-md border border-input bg-background px-3 focus-within:ring-2 focus-within:ring-ring"><span className="mr-3 border-r border-border pr-3 text-sm text-muted-foreground">KE</span><input id="mpesa-number" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="07XX XXX XXX" inputMode="tel" autoComplete="tel" className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-muted-foreground"/></div><Button onClick={() => void start()} disabled={!customer || mobile.trim().length < 9 || loading} size="lg" className="mt-3 min-h-12 w-full"><Smartphone/>Pay {amount} with M-PESA</Button><Button type="button" variant="ghost" onClick={() => setRecoveryOpen((value) => !value)} disabled={!customer} className="mt-2 min-h-11 w-full text-muted-foreground"><RefreshCw/>I already paid</Button></div></section></div>}
      {recoveryOpen && !busy && <section className="mt-3 rounded-lg border border-border bg-card p-4"><p className="text-sm font-bold">Find a completed payment</p><p className="mt-1 text-xs text-muted-foreground">Use the phone number above or your M-PESA transaction code. This never creates a second charge.</p><input value={mpesaCode} onChange={(event) => setMpesaCode(event.target.value.toUpperCase())} placeholder="M-PESA transaction code" autoCapitalize="characters" className="mt-3 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"/><Button type="button" onClick={() => void recoverPaid()} disabled={!mobile.trim() && !mpesaCode.trim()} className="mt-2 min-h-11 w-full">Verify payment</Button></section>}
      {reference && !busy && <Button type="button" variant="outline" onClick={() => void checkPayment()} className="mt-3 min-h-11 w-full"><RefreshCw/>Check saved payment</Button>}{error && <div className="mt-3 flex gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm" role="alert"><CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive"/><span>{error}</span></div>}<p className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary"/>Your price and access are verified by Avant’s server. A prompt alone never unlocks a title.</p>
    </section>{!embedded && <OrderSummary product={product} loading={loading} amount={amount} regularAmount={regularAmount}/>}</div>
  </div></main>
}

function CompactSummary({ product, loading, amount }: { product: any; loading: boolean; amount: string }) { return <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-4"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary">Your access</p><h1 className="mt-1 truncate text-lg font-bold">{loading ? 'Loading access…' : product?.name || 'Avant Movies access'}</h1><p className="mt-1 text-xs text-muted-foreground">{product?.duration_days ? `${product.duration_days} days` : 'Duration confirmed before payment'}</p></div><strong className="shrink-0 text-xl">{amount}</strong></div> }
function OrderSummary({ product, loading, amount, regularAmount }: { product: any; loading: boolean; amount: string; regularAmount: string }) { return <aside className="order-first h-fit overflow-hidden rounded-lg border border-border bg-card shadow-reel lg:order-none lg:sticky lg:top-24"><div className="h-1 bg-primary"/><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.18em] text-muted-foreground">You are unlocking</p>{loading ? <div className="mt-5 h-28 animate-pulse rounded-md bg-secondary"/> : product ? <><h2 className="mt-5 text-xl font-bold">{product.name}</h2>{product.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>}<dl className="mt-5 space-y-3 border-t border-border pt-5"><div className="flex justify-between gap-4"><dt className="text-sm text-muted-foreground">Access</dt><dd className="text-sm font-semibold">{product.duration_days ? `${product.duration_days} days` : 'As listed'}</dd></div><div className="flex items-end justify-between gap-4"><dt className="text-sm text-muted-foreground">Total</dt><dd className="text-right">{regularAmount && <span className="block text-xs text-muted-foreground line-through">{regularAmount}</span>}<strong className="text-2xl">{amount}</strong></dd></div></dl></> : <p className="mt-5 text-sm text-muted-foreground">The access option will be verified before payment.</p>}<div className="mt-6 space-y-3 border-t border-border pt-5 text-xs text-muted-foreground"><p className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-primary"/>One M-PESA confirmation on your phone.</p><p className="flex gap-2"><ShieldCheck className="size-4 shrink-0 text-primary"/>Watch access activates only after verification.</p></div></div></aside> }