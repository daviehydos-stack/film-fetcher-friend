import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import{createClient}from"npm:@supabase/supabase-js@2";import{createHash}from"node:crypto";import{customerUser}from"./customer-auth.ts";
const H={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, apikey, content-type, x-avant-guest","Content-Type":"application/json","Cache-Control":"no-store"};
function secret(){const k=JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS")||"{}");return k.default||Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")||""}
function db(){return createClient(Deno.env.get("SUPABASE_URL")!,secret(),{auth:{persistSession:false}})}
const hash=(s:string)=>createHash("sha256").update(s).digest("hex");
function makeCode(){const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",a=new Uint8Array(8);crypto.getRandomValues(a);let s="";for(let i=0;i<a.length;i++)s+=chars[a[i]%chars.length];return s.slice(0,4)+"-"+s.slice(4)}
const esc=(s:any)=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]!));
async function sendReceipt(c:any,p:any,code:string,expiresAt:string|null){
 const{data:r}=await c.from("admin_integration_credentials").select("api_key,metadata").eq("provider","resend").maybeSingle();
 const key=Deno.env.get("RESEND_API_KEY")||r?.api_key;if(!key||r?.metadata?.enabled===false||!p.account_email)return{sent:false,id:null,error:"email_not_configured"};
 const{data:prod}=await c.from("access_products").select("name").eq("id",p.product_id).maybeSingle();
 const from=Deno.env.get("RESEND_FROM_EMAIL")||(`${String(r?.metadata?.from_name||"Avant Cinema")} <${String(r?.metadata?.from_email||"onboarding@resend.dev")}>`);
 const reply=Deno.env.get("RESEND_REPLY_TO")||"hydrocephcare@gmail.com",title=prod?.name||"your Avant title";
 const html=`<div style="font-family:Arial,sans-serif;background:#090b0f;color:#fff;padding:32px"><h2>Avant Cinema</h2><p>Payment confirmed for <b>${esc(title)}</b>.</p><div style="font-size:28px;font-weight:800;letter-spacing:4px;padding:20px;background:#111;border-radius:12px;text-align:center">${esc(code)}</div><p>Use this code to restore your access.${expiresAt?` Access expires ${esc(new Date(expiresAt).toLocaleDateString("en-KE"))}.`:""}</p><a href="https://www.avantcinematic.com/">Watch on Avant</a></div>`;
 const resp=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({from,to:[p.account_email],reply_to:reply,subject:`Your Avant access — ${title}`,html})});
 const body=await resp.json().catch(async()=>({message:(await resp.text().catch(()=>"")).slice(0,300)}));
 if(!resp.ok){console.error("resend_failed",resp.status,JSON.stringify(body).slice(0,500));return{sent:false,id:null,error:JSON.stringify(body).slice(0,1000)}}
 console.log("resend_sent",body?.id||"accepted");return{sent:true,id:body?.id||null,error:null};
}
Deno.serve(async r=>{if(r.method==="OPTIONS")return new Response("ok",{headers:H});if(r.method!=="POST")return Response.json({error:"method_not_allowed"},{status:405,headers:H});try{
 const bearer=r.headers.get("Authorization")?.replace(/^Bearer\s+/,"")||"";const internal=!!secret()&&bearer===secret();const u=internal?{sub:"service_role",internal:true}:await customerUser(r);if(!u)return Response.json({error:"authentication_required"},{status:401,headers:H});
 const body=await r.json().catch(()=>({})),key=String(body.paymentId||body.reference||"").trim(),c=db();if(!key)return Response.json({error:"paymentId required"},{status:400,headers:H});
 let q=c.from("payments").select("id,reference,status,external_customer_id,account_email,product_id");q=/^[0-9a-f-]{36}$/i.test(key)?q.eq("id",key):q.eq("reference",key);const{data:p}=await q.maybeSingle();
 if(!p||p.status!=="successful")return Response.json({error:"payment_not_confirmed"},{status:409,headers:H});if(!internal&&p.external_customer_id!==u.sub)return Response.json({error:"payment_owner_mismatch"},{status:403,headers:H});
 const{data:existing}=await c.from("subscription_access_codes").select("id,code_hint,starts_at,expires_at,max_devices,status,email_status,email_delivery_id,created_at").eq("payment_id",p.id).maybeSingle();
 const ageMin=existing?.created_at?(Date.now()-new Date(existing.created_at).getTime())/60000:1e9;const revealNow=!internal&&body.reveal===true&&(body.resend===true||ageMin<30);if(existing?.email_status==="sent"&&!revealNow)return Response.json({accessCode:null,...existing,accountEmail:p.account_email,alreadyIssued:true,emailSent:true},{headers:H});
 const code=makeCode(),h=hash(code),hint=code.slice(-4);
 let id=existing?.id;if(existing){const{error}=await c.from("subscription_access_codes").update({code_hash:h,code_hint:hint,recipient_email:p.account_email,email_status:"pending",email_error:null}).eq("id",existing.id);if(error)throw error}
 else{const x=await c.rpc("issue_access_code_for_payment",{p_payment_id:p.id,p_plain_code:code,p_code_hash:h,p_code_hint:hint});if(x.error)throw x.error;id=x.data}
 const{data:issued}=await c.from("subscription_access_codes").select("starts_at,expires_at,max_devices,status").eq("id",id).maybeSingle();const email=await sendReceipt(c,p,code,issued?.expires_at||null);
 await c.from("subscription_access_codes").update({recipient_email:p.account_email,email_status:email.sent?"sent":"failed",email_delivery_id:email.id,email_error:email.error}).eq("id",id);
 return Response.json({accessCode:code,id,code_hint:hint,max_devices:issued?.max_devices||2,starts_at:issued?.starts_at,expires_at:issued?.expires_at,accountEmail:p.account_email,productId:p.product_id,emailSent:email.sent,emailDeliveryId:email.id},{headers:H});
}catch(e){console.error("access_code_issue_failed",e);return Response.json({error:"access_code_issue_failed"},{status:500,headers:H})}});