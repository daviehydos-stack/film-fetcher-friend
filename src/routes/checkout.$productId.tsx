import { createFileRoute, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Check, CircleAlert, Clock3, CreditCard, LockKeyhole, Mail, Phone, RefreshCw, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { broadcastAccessChanged, capturePayPalOrder, clearPlaybackCache, createPayPalOrder, paymentStatus, publicCatalogue, publicPaymentChannels, reconcilePayments, recoverPayment, resolveCatalogueKey, startPalplussPayment } from '@/lib/avant-backend'
import { knownProduct, productForLegacyContent } from '@/lib/backend-catalogue-map'
import { optimizedArtwork } from '@/lib/episodes'
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
  const [checkoutQuery] = useState(() => typeof window === 'undefined' ? { embedded: false, returnTo: '', origin: '/movies', originScroll: 0 } : (() => {
    const query = new URLSearchParams(window.location.search)
    const base = String(import.meta.env.BASE_URL || '/').replace(/\/$/, '')
    const normalizePath = (value: string) => {
      let path = String(value || '')
      while (base && base !== '/' && path.startsWith(base + base)) path = path.slice(base.length)
      if (base && base !== '/' && path.startsWith(base)) path = path.slice(base.length) || '/'
      return path && path.startsWith('/') ? path : path ? '/' + path : ''
    }
    const returnTo = normalizePath(query.get('returnTo') || '')
    const rawOrigin = query.get('origin') || returnTo || '/movies'
    return { embedded: query.get('embedded') === '1', returnTo, origin: normalizePath(rawOrigin) || '/movies', originScroll: Number(query.get('originScroll') || 0) }
  })())
  const { embedded, returnTo, origin, originScroll } = checkoutQuery
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [mpesaCode, setMpesaCode] = useState('')
  const [recoveryOpen, setRecoveryOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [product, setProduct] = useState<any>(null)
  const [purchaseTitle, setPurchaseTitle] = useState<any>(null)
  const [backendProductId, setBackendProductId] = useState('')
  const [paymentChannels, setPaymentChannels] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stage, setStage] = useState<PaymentUiState>('ready')
  const [reference, setReference] = useState('')
  const [online, setOnline] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [method, setMethod] = useState<Method>('mpesa')
  const [methodChosen, setMethodChosen] = useState(false)
  const [switchingMethod, setSwitchingMethod] = useState(false)
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const paypalOn = paymentChannels?.paypal?.enabled === true
  const palplusOn = paymentChannels?.palpluss?.enabled !== false
  const activeMethod: Method = paypalOn ? method : 'mpesa'

  useEffect(() => { try { setReference(sessionStorage.getItem(`avant_payment_${productId}`) || '') } catch { /* unavailable */ } }, [productId])
  useEffect(() => { const sync=()=>setOnline(navigator.onLine); sync(); window.addEventListener('online',sync); window.addEventListener('offline',sync); return()=>{window.removeEventListener('online',sync);window.removeEventListener('offline',sync)} }, [])
  useEffect(() => { let active=true; publicPaymentChannels().then((x:any)=>{if(active)setPaymentChannels(x)}).catch(()=>{}); return()=>{active=false} }, [])
  useEffect(() => {
    let active = true
    const routeKey = String(productId || '').replace(/^title\//, '').replace(/^\/+|\/+$/g, '')
    const mapped = productForLegacyContent(routeKey) || routeKey
    const known = knownProduct(routeKey)
    // Paint known checkout metadata synchronously; live catalogue refreshes it.
    setBackendProductId(known?.id || mapped)
    setProduct((current:any) => current || (known ? { id: known.id, name: known.name, currency: known.currency, price_minor: known.priceMinor } : null))
    if (known) setPurchaseTitle((current:any) => current || { slug: known.slug, title: known.titleName, poster_url: known.artwork, backdrop_url: known.artwork })
    setLoading(false)
    Promise.allSettled([resolveCatalogueKey(routeKey), publicCatalogue()]).then(([resolvedResult, catalogueResult]) => {
      if (!active) return
      const resolvedPayload = resolvedResult.status === 'fulfilled' ? resolvedResult.value : null
      const resolved = resolvedPayload?.product || null
      const payload = catalogueResult.status === 'fulfilled' ? catalogueResult.value : null
      const list = payload?.products || []
      const selected = resolved || list.find((entry: any) => entry.id === mapped) || list.find((entry: any) => entry.id === routeKey) || null
      const canonicalProductId = selected?.id || resolved?.id || mapped
      setBackendProductId(canonicalProductId)
      if (selected) setProduct(selected)
      const titles = payload?.titles || []
      const directTitle = resolvedPayload?.title || null
      const season = resolvedPayload?.season || resolvedPayload?.seasons?.find?.((entry: any) => selected?.season_ids?.includes?.(entry.id)) || resolvedPayload?.seasons?.[0]
      const seasonTitle = season?.series_id ? titles.find((entry: any) => entry.id === season.series_id) : null
      const contentTitle = selected?.content_ids?.length ? titles.find((entry: any) => selected.content_ids.includes(entry.id)) : null
      const namedTitle = titles.find((entry: any) => selected?.name && String(selected.name).toLowerCase().includes(String(entry.title || '').toLowerCase()))
      setPurchaseTitle((current:any) => directTitle || seasonTitle || contentTitle || namedTitle || current)
    })
    return () => { active = false }
  }, [productId])

  const payableMinor = product ? product.promotional_price_minor ?? product.price_minor : 0
  const amount = product ? `${product.currency || 'KES'} ${(payableMinor / 100).toLocaleString()}` : '—'
  const regularAmount = product?.promotional_price_minor != null ? `${product.currency || 'KES'} ${(product.price_minor / 100).toLocaleString()}` : ''
  function clearSavedPayment() { try { sessionStorage.removeItem(`avant_payment_${productId}`); sessionStorage.removeItem(`avant_payment_key_${productId}`) } catch { /* unavailable */ } }
  async function finish(referenceValue: string) {
    clearSavedPayment(); setStage('success'); setBusy(false)
    clearPlaybackCache()
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
      const resolved = backendProductId || product?.id || productForLegacyContent(productId) || productId
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
          let response = await paymentStatus(freshToken, nextReference)
          let state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
          // A provider can mark M-PESA paid before the entitlement row is visible.
          // Reconcile immediately instead of leaving a paid customer locked.
          const providerPaid = /paid|success|successful|completed|complete/i.test(String(response.payment?.status || response.status || ''))
          if (providerPaid && (response.entitlements?.length ?? 0) === 0) {
            try {
              await reconcilePayments(freshToken)
              clearPlaybackCache()
              response = await paymentStatus(freshToken, nextReference)
              state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
            } catch { /* polling will retry safely */ }
          }
          if (state === 'success') { await finish(nextReference); return }
          if (['failed', 'cancelled', 'timed_out'].includes(state)) { handleTerminal(state); return }
        } catch { /* retry safely */ }
        if (attempts < 80) window.setTimeout(poll, attempts < 10 ? 2500 : attempts < 30 ? 4000 : 7000)
        else { setBusy(false); setStage('pending'); setError('Confirmation is delayed. Do not pay again—verify this payment below.') }
      }
      void poll()
    } catch (e: any) {
      const raw=String(e?.body?.error||e?.body?.message||e?.message||'').trim()
      const authError=/invalid or expired customer session|customer session|401/i.test(raw)
      const timeout=/took too long|abort|timeout/i.test(raw)
      let saved=''
      try { saved=sessionStorage.getItem(`avant_payment_${productId}`)||'' } catch { /* unavailable */ }
      if (timeout && saved) {
        setReference(saved); setStage('pending'); setBusy(false)
        setError('M-PESA may still be processing. Do not pay again—use Check saved payment.')
        return
      }
      setStage('ready'); setBusy(false)
      setError(authError?'Your Avant session expired. Sign in again, then retry the payment.':timeout?'M-PESA is taking longer than expected. Check your phone first; if a prompt arrived, do not pay again.':(raw||'We could not send the M-PESA request. Please try again.'))
    }
  }
  async function startPayPal() {
    if (!online) { setError('You are offline. Reconnect before starting a PayPal payment.'); return }
    if (!validEmail) { setError('Enter a valid email address. Your Avant access code will be sent there.'); return }
    if (loading) return
    setBusy(true); setError(''); setStage('sending')
    try {
      const token = await customerToken(false)
      const resolved = product?.id || backendProductId || productForLegacyContent(productId) || productId
      let key = ''
      try { key = sessionStorage.getItem(`avant_paypal_key_${productId}`) || '' } catch { /* unavailable */ }
      if (!key) { key = crypto.randomUUID(); try { sessionStorage.setItem(`avant_paypal_key_${productId}`, key) } catch { /* unavailable */ } }
      const created = await createPayPalOrder(token, { productId: resolved, email: email.trim().toLowerCase(), idempotencyKey: key })
      if (!created?.reference || !created?.orderId) throw new Error('PayPal order was not created.')
      setReference(created.reference)
      const clientId = paymentChannels?.paypal?.clientId
      if (!clientId) throw new Error('PayPal client configuration is unavailable.')
      const w = window as any
      if (!w.paypal) {
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector<HTMLScriptElement>('script[data-avant-paypal="1"]')
          if (existing) { existing.addEventListener('load', () => resolve(), { once: true }); existing.addEventListener('error', () => reject(new Error('Could not load PayPal')), { once: true }); return }
          const script = document.createElement('script')
          script.dataset['avantPaypal'] = '1'
          script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${encodeURIComponent(created?.currency || 'USD')}&intent=capture`
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Could not load PayPal'))
          document.head.appendChild(script)
        })
      }
      setBusy(false); setStage('ready')
      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
      const host = document.getElementById('avant-paypal-buttons')
      if (!host || !w.paypal?.Buttons) throw new Error('PayPal checkout unavailable.')
      host.innerHTML = ''
      await w.paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 44 },
        createOrder: () => created.orderId,
        onApprove: async (data: any) => {
          setBusy(true); setStage('confirming'); setError('')
          try {
            const freshToken = await customerToken(false)
            const done = await capturePayPalOrder(freshToken, { orderId: data.orderID, reference: created.reference })
            if (!done?.ok) throw new Error('PayPal capture failed.')
            try { sessionStorage.removeItem(`avant_paypal_key_${productId}`) } catch { /* unavailable */ }
            await finish(created.reference)
          } catch (e: any) {
            setBusy(false); setStage('ready'); setError(e?.body?.error || e?.message || 'PayPal payment could not be confirmed.')
          }
        },
        onCancel: () => { setBusy(false); setStage('ready'); setError('PayPal checkout was cancelled. You were not charged.') },
        onError: (e: any) => { setBusy(false); setStage('ready'); setError(e?.message || 'PayPal checkout failed.') },
      }).render('#avant-paypal-buttons')
    } catch (e: any) {
      setBusy(false); setStage('ready'); setError(e?.body?.error || e?.body?.message || e?.message || 'Unable to start PayPal checkout.')
    }
  }

  async function checkPayment(referenceValue = reference) {
    if (!online) { setError('You are offline. Reconnect to verify this payment.'); return }
    if (!referenceValue) { setError('No payment reference is saved on this device.'); return }
    setBusy(true); setStage('confirming'); setError('')
    try {
      const token = await customerToken(false)
      let response = await paymentStatus(token, referenceValue)
      let state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
      const providerPaid = /paid|success|successful|completed|complete/i.test(String(response.payment?.status || response.status || ''))
      if (providerPaid && (response.entitlements?.length ?? 0) === 0) {
        try {
          await reconcilePayments(token)
          clearPlaybackCache()
          response = await paymentStatus(token, referenceValue)
          state = normalizePaymentState(response.payment?.status || response.status, (response.entitlements?.length ?? 0) > 0)
        } catch { /* keep the confirmed payment recoverable */ }
      }
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
  function changePaymentMethod() {
    if (switchingMethod) return
    setSwitchingMethod(true); setError(''); setRecoveryOpen(false)
    const host=document.getElementById('avant-paypal-buttons'); if(host)host.innerHTML=''
    window.setTimeout(() => { setMethodChosen(false); setSwitchingMethod(false) }, 170)
  }
  function goBack() {
    if (leaving) return
    setLeaving(true)
    // Let the checkout visibly dissolve before changing route. Prefer the real
    // browser history entry so Back returns to the exact title/list/scroll state.
    window.setTimeout(() => {
      if (embedded) {
        window.parent.postMessage({ type: 'avant-checkout-close' }, '*')
        return
      }
      const target = (origin || returnTo || '').trim()
      // Prefer the explicit origin passed by Avant links. Mobile/preview hosts can
      // insert duplicate checkout entries, making history.back() land on checkout again.
      if (target && target.startsWith('/') && !target.startsWith('//') && !target.startsWith('/checkout/')) {
        void router.navigate({ to: target as any, replace: true })
        return
      }
      if (window.history.length > 1) {
        window.history.back()
        return
      }
      void router.navigate({ to: '/', replace: true })
    }, 180)
  }

  const stageCopy = activeMethod === 'paypal' ? (stage === 'sending' ? ['Preparing secure PayPal checkout', 'Creating your PayPal order securely…'] : ['Confirming your PayPal payment', 'Avant unlocks automatically after PayPal confirms.']) : stage === 'sending' ? ['Sending your M-PESA request', 'Connecting securely to your phone…'] : stage === 'phone' ? ['Check your phone', 'Enter your M-PESA PIN to approve the payment.'] : ['Confirming your payment', 'Avant unlocks automatically the moment M-PESA confirms.']
  const processing = busy || ['phone', 'confirming'].includes(stage)
  const fieldWrap = 'flex min-h-14 items-center gap-3 rounded-xl border border-border bg-background/60 px-4 transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/15'
  const fieldInput = 'min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground/60'

  const titleArtwork = optimizedArtwork(purchaseTitle?.backdrop_url || purchaseTitle?.poster_url || purchaseTitle?.backdrop || purchaseTitle?.artwork || '', embedded ? 640 : 960) || ''
  const displayTitle = purchaseTitle?.title || product?.name || 'Avant Cinema access'

  return <main className={`${embedded ? 'min-h-full' : 'min-h-[100svh]'} relative overflow-hidden bg-[#080808] text-foreground transition-[opacity,filter,transform] duration-[340ms] ease-[cubic-bezier(.16,1,.3,1)] will-change-[opacity,filter,transform] ${leaving ? 'pointer-events-none scale-[.975] opacity-0 blur-[8px]' : 'scale-100 opacity-100 blur-0'}`}>
    <div className={`relative mx-auto w-full ${embedded ? 'max-w-xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3' : 'max-w-6xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8'}`}>
      {!embedded && <header className="flex items-center justify-between pb-5">
        <Button type="button" variant="ghost" onClick={goBack} className="-ml-2 min-h-10 gap-2 px-2 text-white/60 hover:bg-white/5 hover:text-white"><ArrowLeft className="size-4"/>Back</Button>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-white/45"><LockKeyhole className="size-3.5 text-primary"/>Secure checkout</span>
      </header>}

      <div className={`overflow-hidden ${embedded ? '' : 'rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/60 lg:grid lg:min-h-[650px] lg:grid-cols-[.88fr_1.12fr]'}`}>
        {!embedded && <CinematicPurchase product={product} displayTitle={displayTitle} loading={loading} amount={amount} artwork={titleArtwork}/>}

        <section className={`${embedded ? '' : 'flex min-w-0 flex-col justify-center px-5 py-7 sm:px-9 sm:py-10 lg:px-12'}`}>
          {!embedded && <div className="mb-8 border-b border-white/10 pb-6">
            <p className="text-[10px] font-bold uppercase tracking-[.26em] text-primary">Your screening</p>
            <div className="mt-3 flex items-end justify-between gap-5">
              <div className="min-w-0"><h1 className="truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl">{product?.name || displayTitle}</h1><p className="mt-1.5 text-sm text-white/45">{product?.duration_days ? `${product.duration_days} days of access` : 'Access confirmed before payment'}</p></div>
              <div className="shrink-0 text-right">{regularAmount && <p className="text-xs text-white/35 line-through">{regularAmount}</p>}<strong className="text-xl font-semibold text-white sm:text-2xl">{amount}</strong></div>
            </div>
          </div>}

          {processing ? <div className="py-12 text-center" role="status" aria-live="polite">
            <div className="relative mx-auto grid size-14 place-items-center rounded-full border border-primary/30 text-primary"><span className="absolute inset-1 rounded-full border border-primary/20 motion-safe:animate-ping"/>{stage === 'phone' ? <Phone className="size-5"/> : <Clock3 className="size-5 motion-safe:animate-pulse"/>}</div>
            <h2 className="mt-6 text-xl font-semibold text-white">{stageCopy[0]}</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/45">{stageCopy[1]}</p>
            {reference && <p className="mt-5 truncate font-mono text-[10px] text-white/25">Ref {reference}</p>}
            <p className="mt-5 text-xs text-white/35">Keep this screen open · don't pay twice</p>
          </div> : <>
            <div>
              <label htmlFor="avant-email" className="text-[11px] font-bold uppercase tracking-[.16em] text-white/50">Email</label>
              <div className="mt-2 flex min-h-12 items-center gap-3 border-b border-white/20 bg-transparent transition focus-within:border-primary">
                <Mail className="size-4 shrink-0 text-white/35"/>
                <input id="avant-email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" inputMode="email" autoComplete="email" className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"/>
              </div>
              <p className="mt-2 text-xs text-white/35">Receipt and access code will be sent here.</p>
            </div>

            {!methodChosen ? <div className="mt-8 animate-in fade-in duration-300">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-white/50">Pay with</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {palplusOn && <button type="button" onClick={() => { setMethod('mpesa'); setMethodChosen(true); setError('') }} className="group flex h-[74px] w-[132px] flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[.025] transition duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/[.04]">
                  <Smartphone className="size-5 text-primary"/><span className="mt-1.5 text-sm font-bold text-white">M-PESA</span>
                </button>}
                {paypalOn && <button type="button" onClick={() => { setMethod('paypal'); setMethodChosen(true); setError('') }} className="group flex h-[74px] w-[132px] flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[.025] transition duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/[.04]">
                  <CreditCard className="size-5 text-primary"/><span className="mt-1.5 text-sm font-bold text-white">PayPal</span>
                </button>}
              </div>
              <p className="mt-4 text-xs text-white/30">Choose a payment method to continue.</p>
            </div> : <div className={`mt-8 transition-all duration-200 ${switchingMethod ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}>
              {paypalOn && <button type="button" onClick={changePaymentMethod} className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-white/45 transition hover:text-white"><ArrowLeft className="size-3.5"/>Change payment method</button>}
              <div className="mb-5 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/[.06] text-primary">{activeMethod === 'mpesa' ? <Smartphone className="size-5"/> : <CreditCard className="size-5"/>}</div>
                <div><p className="text-base font-semibold text-white">{activeMethod === 'mpesa' ? 'M-PESA' : 'PayPal'}</p><p className="text-xs text-white/35">{activeMethod === 'mpesa' ? 'Secure mobile payment' : 'Pay securely with PayPal or card'}</p></div>
              </div>

              {activeMethod === 'mpesa' && <div>
                <label htmlFor="mpesa-number" className="text-[11px] font-bold uppercase tracking-[.16em] text-white/50">Mobile number</label>
                <div className="mt-2 flex min-h-12 items-center gap-3 border-b border-white/20 transition focus-within:border-primary">
                  <span className="border-r border-white/10 pr-3 text-sm font-semibold text-white/45">+254</span>
                  <input id="mpesa-number" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="07XX XXX XXX" inputMode="tel" autoComplete="tel" className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"/>
                </div>
                <Button onClick={() => void start()} disabled={!online || !validEmail || !normalizeKenyanMobile(mobile) || loading || !product} size="lg" className="mt-6 min-h-12 w-full rounded-lg text-sm font-bold">{loading ? 'Loading price…' : product ? `Pay ${amount}` : 'Payment unavailable'}</Button>
                <p className="mt-3 text-center text-xs text-white/30">We'll send an M-PESA prompt to your phone.</p>
              </div>}

              {activeMethod === 'paypal' && <div>
                <Button type="button" onClick={() => void startPayPal()} disabled={!online || loading || busy} className="min-h-12 w-full rounded-lg text-sm font-bold">Continue with PayPal · {amount}</Button>
                {!validEmail && <p className="mt-2 text-center text-xs font-semibold text-primary">Enter your email above first.</p>}
                <div id="avant-paypal-buttons" className="mt-4 min-h-0 w-full"/>
                <p className="mt-3 text-center text-xs text-white/30">Your title unlocks after PayPal confirms payment.</p>
              </div>}
            </div>}
          </>}

          {activeMethod === 'mpesa' && methodChosen && !processing && <button type="button" onClick={() => setRecoveryOpen((value) => !value)} disabled={!online} className="mt-6 text-center text-xs font-semibold text-white/35 transition hover:text-white">Already paid? Verify payment</button>}

          {recoveryOpen && !busy && <section className="mt-4 border-t border-white/10 pt-4">
            <p className="text-sm font-semibold text-white">Find a completed payment</p>
            <input value={mpesaCode} onChange={(event) => setMpesaCode(event.target.value.toUpperCase())} placeholder="M-PESA transaction code" autoCapitalize="characters" className="mt-3 min-h-11 w-full border-b border-white/20 bg-transparent px-1 text-sm text-white outline-none focus:border-primary"/>
            <Button type="button" onClick={() => void recoverPaid()} disabled={!mobile.trim() && !mpesaCode.trim()} variant="outline" className="mt-3 min-h-11 w-full rounded-lg font-semibold">Verify payment</Button>
          </section>}

          {reference && !busy && <Button type="button" variant="ghost" onClick={() => void checkPayment()} className="mt-3 min-h-10 w-full gap-2 text-white/40"><RefreshCw className="size-4"/>Check saved payment</Button>}
          {!online && <div className="mt-4 flex gap-3 border-t border-white/10 pt-4 text-sm text-white/60" role="status"><CircleAlert className="mt-0.5 size-4 shrink-0"/>Checkout is paused while you're offline.</div>}
          {error && <div className="mt-4 flex gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm" role="alert"><CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive"/><span>{error}</span></div>}

          {!embedded && <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] text-white/30">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-primary"/>Secure payment</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="size-3.5 text-primary"/>Instant access</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="size-3.5 text-primary"/>Code by email</span>
          </div>}
        </section>
      </div>
    </div>
  </main>
}

function CinematicPurchase({ product, displayTitle, loading, amount, artwork }: { product: any; displayTitle: string; loading: boolean; amount: string; artwork: string }) {
  return <aside className="relative aspect-[16/9] overflow-hidden bg-[#111] sm:min-h-[330px] lg:aspect-auto lg:min-h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#161616] to-black"/>{artwork ? <img src={artwork} alt="" className="absolute inset-0 size-full object-cover" loading="eager" fetchPriority="high" decoding="async"/> : null}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5"/>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/35"/>
    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[.25em] text-primary">You're unlocking</p>
      {loading ? <div className="mt-3 h-9 w-2/3 animate-pulse rounded bg-white/10"/> : <h2 className="mt-2 max-w-md text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{displayTitle}</h2>}
      <div className="mt-4 flex items-center gap-3 text-xs text-white/55"><span>{product?.duration_days ? `${product.duration_days} days access` : 'Premium access'}</span><span className="size-1 rounded-full bg-primary"/><span>{amount}</span></div>
    </div>
  </aside>
}
