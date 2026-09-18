import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2, LockKeyhole, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { paymentStatus, publicCatalogue, resolveCatalogueKey, startPalplussPayment } from '../lib/avant-backend'
import { customerSession, requireCustomerToken, signInCustomer } from '../lib/google-auth'
import { productForLegacyContent } from '../lib/backend-catalogue-map'

export const Route=createFileRoute('/checkout/$productId')({head:()=>({meta:[{name:'robots',content:'noindex, nofollow'}]}),component:CheckoutRoute})

function CheckoutRoute(){
 const{productId}=Route.useParams(),router=useRouter()
 const qs=typeof window==='undefined'?new URLSearchParams():new URLSearchParams(window.location.search),embedded=qs.get('embedded')==='1',returnTo=qs.get('returnTo')||'',origin=qs.get('origin')||returnTo||'/movies',originScroll=Number(qs.get('originScroll')||0)
 const[mobile,setMobile]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[product,setProduct]=useState<any>(null),[loading,setLoading]=useState(true),[customer,setCustomer]=useState<any>(null),[authBusy,setAuthBusy]=useState(false)
 useEffect(()=>{void customerSession().then(setCustomer)},[])
 useEffect(()=>{let active=true;const mapped=productForLegacyContent(productId)||productId;setLoading(true);Promise.allSettled([resolveCatalogueKey(productId),publicCatalogue()]).then(results=>{if(!active)return;const resolved=results[0].status==='fulfilled'?results[0].value?.product:null;const list=results[1].status==='fulfilled'?(results[1].value?.products||[]):[];setProduct(resolved||list.find((p:any)=>p.id===mapped)||null);setLoading(false)});return()=>{active=false}},[productId])
 async function loginFirst(){setAuthBusy(true);setError('');try{setCustomer(await signInCustomer())}catch(e:any){setError(e?.message||'Sign-in failed')}finally{setAuthBusy(false)}}
 async function start(){if(!customer){setError('Sign in first to continue to M-PESA.');return}setBusy(true);setError('');try{const token=await requireCustomerToken();const resolved=product?.id||productForLegacyContent(productId)||productId;const result=await startPalplussPayment(token,{productId:resolved,phone:mobile,idempotencyKey:crypto.randomUUID()});const reference=result.reference||result.payment?.reference;if(!reference)throw new Error(result.message||'Payment was not started.');if(embedded){let attempts=0;const poll=async()=>{attempts++;try{const r=await paymentStatus(token,reference);const s=r.payment?.status;if(s==='successful'||(r.entitlements?.length??0)>0){window.parent.postMessage({type:'avant-payment-success',reference,returnTo},window.location.origin);return}if(s==='failed'||s==='refunded'){setBusy(false);setError('The payment was not completed.');return}}catch{}if(attempts<60)window.setTimeout(poll,3000);else{setBusy(false);setError('Payment confirmation is taking longer than expected. You can close this window and try again shortly.')}};void poll();return}await router.navigate({to:'/payment/success',search:{reference,returnTo:returnTo||origin,origin,originScroll:String(originScroll)}})}catch(e:any){setError(e?.message||'Unable to start payment')}finally{setBusy(false)}}
 const payableMinor=product?(product.promotional_price_minor??product.price_minor):0;const amount=product?`${product.currency} ${(payableMinor/100).toLocaleString()}`:'—';const regularAmount=product&&product.promotional_price_minor!=null?`${product.currency} ${(product.price_minor/100).toLocaleString()}`:''
 return <main className="min-h-[100svh] bg-[#050608] text-white">
  <div className={`mx-auto w-full ${embedded?"max-w-2xl px-4 py-4 sm:px-6 sm:py-6":"max-w-6xl px-4 py-6 sm:px-8 sm:py-10"}`}>
   <header className={`${embedded?"hidden ":""}flex items-center justify-between border-b border-white/10 pb-6`}>
    <button type="button" onClick={()=>{if(window.history.length>1)window.history.back();else window.location.assign(new URL((returnTo||origin).replace(/^\//,""),document.baseURI).href)}} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"><ArrowLeft className="size-4"/>Back</button>
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-emerald-300"><LockKeyhole className="size-4"/>Secure checkout</div>
   </header>
   <div className={embedded?"mx-auto max-w-xl py-3":"grid gap-7 py-7 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-10 lg:py-12"}>
    <section>
     <p className="text-center text-[10px] font-bold uppercase tracking-[.2em] text-orange-400 sm:text-left sm:text-xs">Complete your access</p>
     <h1 className="mx-auto mt-2 max-w-2xl text-center text-3xl font-black tracking-[-.03em] sm:mx-0 sm:text-left sm:text-5xl lg:text-6xl">Unlock. Pay. <span className="text-orange-400">Start watching.</span></h1>
     <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-white/55 sm:mx-0 sm:text-left sm:text-base">Pay securely with M-PESA. Access is attached to your Google account after the payment is verified.</p>
     <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/[.035] p-4 sm:mx-0"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40">Step 1 · Account</p>{customer?<div className="mt-2 flex items-center gap-3"><CheckCircle2 className="size-5 text-emerald-300"/><div><p className="text-sm font-bold">{customer.name||"Signed in"}</p><p className="text-xs text-white/45">{customer.email}</p></div></div>:<button onClick={()=>void loginFirst()} disabled={authBusy} className="mt-3 min-h-12 w-full rounded-xl bg-white px-5 text-sm font-bold text-black hover:bg-white/90">{authBusy?"Signing in…":"Continue with Google"}</button>}</div><div className="mx-auto mt-4 max-w-xl overflow-hidden rounded-2xl sm:mx-0 sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.07] to-white/[.025] shadow-2xl"><div className="border-b border-white/10 px-5 py-4 sm:px-6"><p className="flex items-center gap-2 text-sm font-bold"><Zap className="size-4 text-orange-400"/>M-PESA Express</p><p className="mt-1 text-xs text-white/40">Secure STK push · usually takes a few seconds</p></div><div className="p-5 sm:p-6">
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">Step 2 · Payment</p><label htmlFor="mpesa-number" className="text-sm font-bold">M-PESA mobile number</label>
      <p className="mt-1 text-xs text-white/45">Use the number that should receive the STK push.</p>
      <div className="mt-4 flex min-h-14 items-center rounded-xl border border-white/15 bg-black/35 px-4 focus-within:border-white/40 focus-within:ring-2 focus-within:ring-white/10">
       <span className="mr-3 border-r border-white/10 pr-3 text-sm font-semibold text-white/45">KE</span>
       <input id="mpesa-number" value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="07XX XXX XXX" inputMode="tel" autoComplete="tel" className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-white/25"/>
      </div>
      <button onClick={()=>void start()} disabled={!customer||busy||mobile.trim().length<9||loading} className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-white px-5 font-bold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-45">
       <Smartphone className="size-5"/><span>{busy?'Sending M-PESA prompt…':`Pay ${amount} with M-PESA`}</span>
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-white/40">You will confirm the payment on your phone. We never ask for your M-PESA PIN on this website.</p>
      {error&&<div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{error}</div>}
     </div></div>
     <div className={`${embedded?"mt-4":"mt-6"} mx-auto grid max-w-xl grid-cols-3 gap-2 sm:mx-0 sm:gap-3`}>
      {['Sign in','Pay with M-PESA','Start watching'].map((label,i)=><div key={label} className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl border border-white/10 px-2 py-2.5 text-center text-[10px] font-semibold text-white/65 sm:flex-row sm:gap-3 sm:px-4 sm:py-3 sm:text-left sm:text-xs"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] text-white">{i+1}</span>{label}</div>)}
     </div>
    </section>
    {!embedded?<aside className="h-fit overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f13] shadow-2xl sm:rounded-3xl lg:sticky lg:top-8"><div className="h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent"/><div className="p-4 sm:p-6">
     <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Order summary</p>
     {loading?<div className="mt-5 h-24 animate-pulse rounded-xl bg-white/5"/>:product?<><h2 className="mt-5 text-xl font-bold">{product.name}</h2><p className="mt-2 text-sm leading-6 text-white/50">{product.description||'Avant Movies streaming access'}</p><div className="my-6 border-t border-white/10"/><div className="flex items-end justify-between gap-4"><span className="text-sm text-white/55">Total</span><div className="text-right">{regularAmount?<p className="text-xs text-white/35 line-through">{regularAmount}</p>:null}<strong className="text-2xl">{amount}</strong></div></div><p className="mt-2 text-right text-xs text-white/40">{product.duration_days} days access</p></>:<p className="mt-5 text-sm text-white/55">Access option will be confirmed securely before payment.</p>}
     <div className="mt-7 space-y-3 border-t border-white/10 pt-5 text-xs text-white/50">
      <p className="flex gap-2"><ShieldCheck className="size-4 shrink-0 text-emerald-300"/>Price is verified by Avant's server.</p>
      <p className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-emerald-300"/>Access is activated only after payment confirmation.</p>
     </div>
    </div></aside>:<details className="mx-auto mt-4 max-w-xl rounded-2xl border border-white/10 bg-[#0d0f13]"><summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold"><span>Order summary</span><span className="text-white/55">{amount}</span></summary><div className="border-t border-white/10 px-4 py-4"><p className="font-semibold">{product?.name||"Avant access"}</p><p className="mt-1 text-xs text-white/45">{product?.duration_days?product.duration_days+" days access":"Access details verified before payment"}</p></div></details>}
   </div>
  </div>
 </main>
}
