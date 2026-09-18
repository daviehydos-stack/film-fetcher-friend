const SUPABASE_URL="https://bnuyhrsezkepsaebwlmu.supabase.co";
export const ADMIN_EMAIL="hydrocephcare@gmail.com";
export type AdminSession={admin:boolean;role?:string;requireMfa?:boolean;email?:string;reason?:string};
export function getAdminToken(){return typeof window==="undefined"?null:window.sessionStorage.getItem("avant_admin_token")}
export function setAdminToken(token:string|null){if(typeof window==="undefined")return;token?window.sessionStorage.setItem("avant_admin_token",token):window.sessionStorage.removeItem("avant_admin_token")}
async function request<T>(name:string,token?:string|null,init:RequestInit={}){const r=await fetch(`${SUPABASE_URL}/functions/v1/${name}`,{...init,headers:{...(token?{Authorization:`Bearer ${token}`}:{}),"Content-Type":"application/json",...(init.headers||{})}});const body=await r.json().catch(()=>({}));if(!r.ok)throw new Error(body.error||`${name} failed (${r.status})`);return body as T}
export const publicCatalogue=()=>request<any>("catalogue-public");
export const resolveCatalogueKey=(key:string)=>request<any>(`catalogue-public?key=${encodeURIComponent(key)}`);
export const adminSession=(token:string)=>request<AdminSession>("admin-session",token,{method:"POST"});
export const adminDashboard=(token:string)=>request<any>("admin-api",token,{method:"GET"});
export const adminView=(token:string,view:"customers"|"payments"|"products"|"entitlements"|"audit")=>request<any>(`admin-api?view=${view}`,token,{method:"GET"});
export const adminContent=(token:string,payload:Record<string,unknown>)=>request<any>("admin-content",token,{method:"POST",body:JSON.stringify(payload)});
export const adminCustomers=(token:string,payload:Record<string,unknown>)=>request<any>("admin-customers",token,{method:"POST",body:JSON.stringify(payload)});
export async function hasAdminSession(){const token=getAdminToken();if(!token)return false;try{return (await adminSession(token)).admin===true}catch{return false}}
