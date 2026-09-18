const SUPABASE_URL="https://bnuyhrsezkepsaebwlmu.supabase.co";
export const ADMIN_EMAIL="hydrocephcare@gmail.com";
export type AdminSession={admin:boolean;role?:string;requireMfa?:boolean;email?:string;reason?:string};
export function getAdminToken(){return typeof window==="undefined"?null:window.localStorage.getItem("avant_admin_token")}
export function setAdminToken(token:string|null){if(typeof window==="undefined")return;token?window.localStorage.setItem("avant_admin_token",token):window.localStorage.removeItem("avant_admin_token")}
async function request<T>(name:string,token?:string|null,init:RequestInit={}){const adminProof=typeof window!=="undefined"&&name.startsWith("admin-")?sessionStorage.getItem("avant_admin_mfa_proof"):null;const r=await fetch(`${SUPABASE_URL}/functions/v1/${name}`,{...init,headers:{...(token?{Authorization:`Bearer ${token}`}:{}),...(adminProof?{"x-admin-mfa":adminProof}:{}),"Content-Type":"application/json",...(init.headers||{})}});const body=await r.json().catch(()=>({}));if(!r.ok){const e:any=new Error(body.error||`${name} failed (${r.status})`);e.status=r.status;e.body=body;throw e}return body as T}
let publicCatalogueCache:any=null,publicCataloguePending:Promise<any>|null=null,publicCatalogueAt=0;export const publicCatalogue=()=>{const now=Date.now();if(publicCatalogueCache&&now-publicCatalogueAt<60000)return Promise.resolve(publicCatalogueCache);if(publicCataloguePending)return publicCataloguePending;publicCataloguePending=request<any>("catalogue-public").then(x=>{publicCatalogueCache=x;publicCatalogueAt=Date.now();return x}).finally(()=>{publicCataloguePending=null});return publicCataloguePending};
export const resolveCatalogueKey=(key:string)=>request<any>(`catalogue-public?key=${encodeURIComponent(key)}`);
let publicPagesCache:any=null,publicPagesAt=0;export const publicPages=()=>{const now=Date.now();if(publicPagesCache&&now-publicPagesAt<60000)return Promise.resolve(publicPagesCache);return request<any>("public-pages?navigation=1").then(x=>{publicPagesCache=x;publicPagesAt=Date.now();return x})};
export const publicPage=(slug:string)=>request<any>(`public-pages?slug=${encodeURIComponent(slug)}`);
export const startPalplussPayment=(token:string,input:{productId:string;phone:string;idempotencyKey:string})=>request<any>("palpluss-checkout",token,{method:"POST",body:JSON.stringify(input)});
export const paymentStatus=(token:string,reference:string)=>request<any>("payment-status",token,{method:"POST",body:JSON.stringify({reference})});
export const authorizeWatch=(token:string,contentId:string,seasonId?:string)=>request<any>("authorize-watch",token,{method:"POST",body:JSON.stringify({contentId,seasonId})});
export const resolvePlayback=(token:string,contentId:string)=>request<any>("resolve-playback",token,{method:"POST",body:JSON.stringify({contentId})});
export const getWatchProgress=(token:string)=>request<any>("get-watch-progress",token,{method:"GET"});
export const saveWatchProgress=(token:string,input:{contentId:string;episodeId?:string;progressSeconds:number;durationSeconds:number})=>request<any>("save-watch-progress",token,{method:"POST",body:JSON.stringify(input)});
export const adminSession=(token:string)=>request<AdminSession>("admin-session",token,{method:"POST"});
export const adminDashboard=(token:string)=>request<any>("admin-api",token,{method:"GET"});
export const adminApiPost=(token:string,payload:Record<string,unknown>)=>request<any>("admin-api",token,{method:"POST",body:JSON.stringify(payload)});
export type AdminView="content"|"customers"|"payments"|"products"|"entitlements"|"audit"|"pages"|"seo"|"appearance"|"media"|"system_settings"|"gemini_settings"|"cloudinary_settings"|"settings_bundle"|"integration_settings";
export const adminView=(token:string,view:AdminView)=>request<any>(`admin-api?view=${view}`,token,{method:"GET"});
export const adminContent=(token:string,payload:Record<string,unknown>)=>request<any>("admin-content",token,{method:"POST",body:JSON.stringify(payload)});
export const adminCustomers=(token:string,payload:Record<string,unknown>)=>request<any>("admin-customers",token,{method:"POST",body:JSON.stringify(payload)});
export async function hasAdminSession(){const token=getAdminToken();if(!token)return false;try{return (await adminSession(token)).admin===true}catch{return false}}

export const getCloudMyList=(token:string)=>request<{ids:string[]}>("my-list",token,{method:"GET"});
export const setCloudMyList=(token:string,key:string,saved:boolean)=>request<any>("my-list",token,{method:"POST",body:JSON.stringify({key,saved})});

export const myLibrary=(token:string)=>request<any>("my-library",token,{method:"GET"});

export const adminVimeoGet=(token:string)=>request<any>("admin-vimeo",token,{method:"GET"});
export const adminVimeoSave=(token:string,payload:{clientId?:string;clientSecret?:string;accessToken?:string;testOnly?:boolean})=>request<any>("admin-vimeo",token,{method:"POST",body:JSON.stringify(payload)});
export const adminVimeoDisconnect=(token:string)=>request<any>("admin-vimeo",token,{method:"DELETE"});

export const adminVimeoVideos=(token:string,query="")=>request<any>(`admin-vimeo?view=videos&query=${encodeURIComponent(query)}`,token,{method:"GET"});

export const adminUsersGet=(token:string)=>request<any>("admin-users",token,{method:"GET"});
export const adminUserSave=(token:string,payload:{email:string;role:string;active:boolean;requireMfa:boolean})=>request<any>("admin-users",token,{method:"POST",body:JSON.stringify(payload)});

export const adminAssistant=(token:string,payload:Record<string,unknown>)=>request<any>("admin-assistant",token,{method:"POST",body:JSON.stringify(payload)});
