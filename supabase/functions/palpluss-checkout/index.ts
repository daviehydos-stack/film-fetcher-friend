import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { customerUser } from "./customer-auth.ts";
const cors={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, apikey, content-type, x-avant-guest"};
function admin(){const keys=JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS")??"{}");return createClient(Deno.env.get("SUPABASE_URL")!,keys.default??Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),{auth:{persistSession:false}})}
Deno.serve(async(req)=>{
 if(req.method==="OPTIONS") return new Response("ok",{headers:cors});
 try{
  const c=await customerUser(req); if(!c) return Response.json({error:"Unable to establish checkout session"},{status:401,headers:cors});
  const db=admin(); const {productId,phone,email,idempotencyKey}=await req.json();
  if(!productId||!phone||!email||!idempotencyKey) return Response.json({error:"Missing productId, phone, email or idempotencyKey"},{status:400,headers:cors});
  const accountEmail=String(email||"").trim().toLowerCase(); if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(accountEmail)) return Response.json({error:"Enter a valid email address"},{status:400,headers:cors});
  if(!c.guest) await db.from("firebase_customers").upsert({firebase_uid:c.sub,email:c.email??null,display_name:c.name??null,photo_url:c.picture??null,updated_at:new Date().toISOString()},{onConflict:"firebase_uid"});
  const {data:existing}=await db.from("payments").select("*").eq("external_customer_id",c.sub).eq("idempotency_key",idempotencyKey).maybeSingle();
  if(existing) return Response.json({payment:existing,reused:true},{headers:cors});
  const {data:product}=await db.from("access_products").select("*").eq("id",productId).eq("active",true).single();
  if(!product) return Response.json({error:"Product unavailable"},{status:404,headers:cors});
  const digits=String(phone).replace(/\D/g,""); const normalized=digits.startsWith("254")?digits:digits.startsWith("0")?"254"+digits.slice(1):"254"+digits;
  if(!/^254\d{9}$/.test(normalized)) return Response.json({error:"Invalid Kenyan mobile number"},{status:400,headers:cors});
  const reference="AVANT-"+crypto.randomUUID();
  const {data:payment,error:ie}=await db.from("payments").insert({reference,external_customer_id:c.sub,account_email:accountEmail,product_id:product.id,provider:"palpluss",method:"mpesa",amount_minor:product.price_minor,currency:product.currency,status:"pending",idempotency_key:idempotencyKey}).select().single(); if(ie) throw ie;
  const {data:cfg}=await db.from("admin_integration_credentials").select("api_key,base_url,metadata").eq("provider","palpluss").maybeSingle(); if(cfg?.metadata?.enabled===false){await db.from("payments").update({status:"failed",failure_reason:"Payment integration disabled",updated_at:new Date().toISOString()}).eq("id",payment.id);return Response.json({error:"Payments are temporarily unavailable"},{status:503,headers:cors})} const key=cfg?.api_key??Deno.env.get("PALPLUSS_API_KEY")??Deno.env.get("PALPLUS_API_KEY"); if(!key) throw new Error("Palpluss API key missing");
  const base=(cfg?.base_url??Deno.env.get("PALPLUSS_BASE_URL")??Deno.env.get("PALPLUS_BASE_URL")??"https://api.palpluss.com").replace(/\/$/,"");
  const acctRef=reference.slice(-12); const pr=await fetch(base+"/v1/payments/stk",{method:"POST",headers:{Authorization:"Basic "+key,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({phone:normalized,amount:product.price_minor/100,accountReference:acctRef,transactionDesc:"Avant Movies",callbackUrl:Deno.env.get("PALPLUSS_CALLBACK_URL")||`${Deno.env.get("SUPABASE_URL")}/functions/v1/palpluss-webhook`})});
  const t=await pr.text(); let p:any={};try{p=t?JSON.parse(t):{}}catch{p={message:t}}
  if(!pr.ok){const flat=(v:any):string=>Array.isArray(v)?v.map(flat).join("; "):v&&typeof v==="object"?flat(v.message??v.error??v.detail??JSON.stringify(v)):String(v??"");const detail=(flat(p?.error)||flat(p?.message)||"Payment initiation failed").replace(/\s+/g," ").trim().slice(0,180);console.error("palpluss_stk_rejected",pr.status,detail);await db.from("payments").update({status:"failed",failure_reason:("Palpluss initiation failed: HTTP "+pr.status+" "+detail).slice(0,240),updated_at:new Date().toISOString()}).eq("id",payment.id);return Response.json({error:detail,providerStatus:pr.status},{status:502,headers:cors})}
  const providerReference=p.data?.transactionId??p.transactionId??p.transaction_id??p.reference??null; await db.from("payments").update({status:"processing",provider_reference:providerReference,provider_account_reference:acctRef,payer_phone:normalized,updated_at:new Date().toISOString()}).eq("id",payment.id);
  return Response.json({reference,message:p.message??"Check your phone and enter your M-PESA PIN."},{headers:cors});
 }catch(e){console.error(e);return Response.json({error:"Unable to start payment"},{status:500,headers:cors})}
});