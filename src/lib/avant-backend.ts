const SUPABASE_URL="https://bnuyhrsezkepsaebwlmu.supabase.co";
export const ADMIN_EMAIL="hydrocephcare@gmail.com";
export type AdminSession={admin:boolean;role?:string;requireMfa?:boolean;email?:string;reason?:string};
export function getAdminToken(){return typeof window==="undefined"?null:window.localStorage.getItem("avant_admin_token")}
export function setAdminToken(token:string|null){if(typeof window==="undefined")return;token?window.localStorage.setItem("avant_admin_token",token):window.localStorage.removeItem("avant_admin_token")}
async function request<T>(name:string,token?:string|null,init:RequestInit={}){const adminProof=typeof window!=="undefined"&&name.startsWith("admin-")?sessionStorage.getItem("avant_admin_mfa_proof"):null;const r=await fetch(`${SUPABASE_URL}/functions/v1/${name}`,{...init,headers:{...(token?{Authorization:`Bearer ${token}`}:{}),...(adminProof?{"x-admin-mfa":adminProof}:{}),"Content-Type":"application/json",...(init.headers||{})}});const body=await r.json().catch(()=>({}));if(!r.ok){const e:any=new Error(body.error||`${name} failed (${r.status})`);e.status=r.status;e.body=body;throw e}return body as T}
export const publicCatalogue=()=>request<any>("catalogue-public");
export const resolveCatalogueKey=(key:string)=>request<any>(`catalogue-public?key=${encodeURIComponent(key)}`);
export const startPalplussPayment=(token:string,input:{productId:string;phone:string;idempotencyKey:string})=>request<any>("palpluss-checkout",token,{method:"POST",body:JSON.stringify(input)});
export const paymentStatus=(token:string,reference:string)=>request<any>("payment-status",token,{method:"POST",body:JSON.stringify({reference})});
export const authorizeWatch=(token:string,contentId:string,seasonId?:string)=>request<any>("authorize-watch",token,{method:"POST",body:JSON.stringify({contentId,seasonId})});
export const resolvePlayback=(token:string,contentId:string)=>request<any>("resolve-playback",token,{method:"POST",body:JSON.stringify({contentId})});
export const getWatchProgress=(token:string)=>request<any>("get-watch-progress",token,{method:"GET"});
export const saveWatchProgress=(token:string,input:{contentId:string;episodeId?:string;progressSeconds:number;durationSeconds:number})=>request<any>("save-watch-progress",token,{method:"POST",body:JSON.stringify(input)});
export const adminSession=(token:string)=>request<AdminSession>("admin-session",token,{method:"POST"});
export const adminDashboard=(token:string)=>request<any>("admin-api",token,{method:"GET"});
export const adminView=(token:string,view:"content"|"customers"|"payments"|"products"|"entitlements"|"audit")=>request<any>(`admin-api?view=${view}`,token,{method:"GET"});
export const adminContent=(token:string,payload:Record<string,unknown>)=>request<any>("admin-content",token,{method:"POST",body:JSON.stringify(payload)});
export const adminCustomers=(token:string,payload:Record<string,unknown>)=>request<any>("admin-customers",token,{method:"POST",body:JSON.stringify(payload)});
export async function hasAdminSession(){const token=getAdminToken();if(!token)return false;try{return (await adminSession(token)).admin===true}catch{return false}}

export const getCloudMyList=(token:string)=>request<{ids:string[]}>("my-list",token,{method:"GET"});
export const setCloudMyList=(token:string,key:string,saved:boolean)=>request<any>("my-list",token,{method:"POST",body:JSON.stringify({key,saved})});

export const myLibrary=(token:string)=>request<any>("my-library",token,{method:"GET"});
