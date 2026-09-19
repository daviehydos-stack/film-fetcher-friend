const SUPABASE_URL="https://bnuyhrsezkepsaebwlmu.supabase.co";
const SUPABASE_ANON_KEY=import.meta.env.VITE_SUPABASE_ANON_KEY||import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY||"";
export const ADMIN_EMAIL="hydrocephcare@gmail.com";
export type AdminSession={admin:boolean;role?:string;requireMfa?:boolean;email?:string;reason?:string};
export function getAdminToken(){return typeof window==="undefined"?null:window.localStorage.getItem("avant_admin_token")}
export function setAdminToken(token:string|null){if(typeof window==="undefined")return;token?window.localStorage.setItem("avant_admin_token",token):window.localStorage.removeItem("avant_admin_token")}
async function request<T>(name:string,token?:string|null,init:RequestInit={}){const adminProof=typeof window!=="undefined"&&name.startsWith("admin-")?sessionStorage.getItem("avant_admin_mfa_proof"):null;const headers={...(SUPABASE_ANON_KEY?{apikey:SUPABASE_ANON_KEY}:{}),...(token?{Authorization:`Bearer ${token}`} :{}),...(adminProof?{"x-admin-mfa":adminProof}:{}),"Content-Type":"application/json",...(init.headers||{})};let last:any;for(let attempt=0;attempt<2;attempt++){const controller=new AbortController();const timer=typeof window!=="undefined"?window.setTimeout(()=>controller.abort(),30000):null;try{const r=await fetch(`${SUPABASE_URL}/functions/v1/${name}`,{...init,signal:init.signal||controller.signal,headers});const body=await r.json().catch(()=>({}));if(!r.ok){const e:any=new Error(body.error||body.detail||`${name} failed (${r.status})`);e.status=r.status;e.body=body;throw e}return body as T}catch(e:any){last=e;if(e?.status||attempt===1)break;if(typeof window!=="undefined")await new Promise(x=>window.setTimeout(x,900))}finally{if(timer)window.clearTimeout(timer)}}if(last?.name==="AbortError")throw new Error("Avant services took too long to respond. Please retry.");throw last||new Error("Unable to reach Avant services. Check your connection and retry.")}
let publicCatalogueCache:any=null,publicCataloguePending:Promise<any>|null=null,publicCatalogueAt=0;export const publicCatalogue=()=>{const now=Date.now();if(publicCatalogueCache&&now-publicCatalogueAt<60000)return Promise.resolve(publicCatalogueCache);if(publicCataloguePending)return publicCataloguePending;publicCataloguePending=request<any>("catalogue-public").then(x=>{publicCatalogueCache=x;publicCatalogueAt=Date.now();return x}).finally(()=>{publicCataloguePending=null});return publicCataloguePending};
export const resolveCatalogueKey=(key:string)=>request<any>(`catalogue-public?key=${encodeURIComponent(key)}`);
let publicPagesCache:any=null,publicPagesAt=0;export const publicPages=()=>{const now=Date.now();if(publicPagesCache&&now-publicPagesAt<60000)return Promise.resolve(publicPagesCache);return request<any>("public-pages?navigation=1").then(x=>{publicPagesCache=x;publicPagesAt=Date.now();return x})};
export const publicPage=(slug:string)=>request<any>(`public-pages?slug=${encodeURIComponent(slug)}`);
export const startPalplussPayment=(token:string,input:{productId:string;phone:string;idempotencyKey:string})=>request<any>("palpluss-checkout",token,{method:"POST",body:JSON.stringify(input)});
export const paymentStatus=(token:string,reference:string)=>request<any>("payment-status",token,{method:"POST",body:JSON.stringify({reference})});
export const reconcilePayments=()=>request<any>("payment-reconcile",null,{method:"POST",body:"{}"});
export const recoverPayment=(token:string,input:{phone?:string;mpesaCode?:string})=>request<any>("payment-recover",token,{method:"POST",body:JSON.stringify(input)});
export const issueAccessCode=(paymentId:string)=>request<any>("access-code-issue",null,{method:"POST",body:JSON.stringify({paymentId})});
export const loginWithAccessCode=(accessCode:string,deviceId:string,deviceName?:string)=>request<any>("access-code-login",null,{method:"POST",body:JSON.stringify({accessCode,deviceId,deviceName})});
export const authorizeWatch=(token:string,contentId:string,seasonId?:string)=>request<any>("authorize-watch",token,{method:"POST",body:JSON.stringify({contentId,seasonId})});
export const resolvePlayback=(token:string,contentId:string)=>request<any>("resolve-playback",token,{method:"POST",body:JSON.stringify({contentId})});
export const getWatchProgress=(token:string)=>request<any>("get-watch-progress",token,{method:"GET"});
export const saveWatchProgress=(token:string,input:{contentId:string;episodeId?:string;progressSeconds:number;durationSeconds:number})=>request<any>("save-watch-progress",token,{method:"POST",body:JSON.stringify(input)});
export const adminSession=(token:string)=>request<AdminSession>("admin-session",token,{method:"POST"});
const adminScopeQuery=()=>typeof window!=="undefined"&&sessionStorage.getItem("avant-admin-workspace")==="production"?"&scope=production":"";export const adminDashboard=(token:string)=>request<any>(`admin-api?view=dashboard${adminScopeQuery()}`,token,{method:"GET"});
export const adminApiPost=(token:string,payload:Record<string,unknown>)=>request<any>("admin-api",token,{method:"POST",body:JSON.stringify(payload)});
export type AdminView="content"|"customers"|"payments"|"products"|"entitlements"|"audit"|"pages"|"seo"|"appearance"|"media"|"system_settings"|"gemini_settings"|"cloudinary_settings"|"settings_bundle"|"integration_settings";
export const adminView=(token:string,view:AdminView)=>request<any>(`admin-api?view=${view}${adminScopeQuery()}`,token,{method:"GET"});
export const adminContent=(token:string,payload:Record<string,unknown>)=>request<any>("admin-content",token,{method:"POST",body:JSON.stringify(payload)});
export const adminVideoVariants=(token:string,input:{titleId?:string;episodeId?:string})=>adminContent(token,{operation:"list_video_variants",...input});
export const saveAdminVideoVariant=(token:string,input:Record<string,unknown>)=>adminContent(token,{operation:"upsert_video_variant",...input});
export const publishAdminVideoVariant=(token:string,id:string)=>adminContent(token,{operation:"publish_video_variant",id});
export const deleteAdminVideoVariant=(token:string,id:string)=>adminContent(token,{operation:"delete_video_variant",id});
export const adminCustomers=(token:string,payload:Record<string,unknown>)=>request<any>("admin-customers",token,{method:"POST",body:JSON.stringify(payload)});
export async function hasAdminSession(){const token=getAdminToken();if(!token)return false;try{return (await adminSession(token)).admin===true}catch{return false}}

export const getCloudMyList=(token:string)=>request<{ids:string[]}>("my-list",token,{method:"GET"});
export const setCloudMyList=(token:string,key:string,saved:boolean)=>request<any>("my-list",token,{method:"POST",body:JSON.stringify({key,saved})});

export const myLibrary=(token:string)=>request<any>("my-library",token,{method:"GET"});
export type AccountAccess={authenticated:boolean;subscriber:boolean;email?:string;customerId?:string;subscription?:{active:boolean;plan:string;productType:string;expiresAt:string|null}|null;reason?:string};
export const accountAccess=(token:string)=>request<AccountAccess>("account-access",token,{method:"GET"}).then(x=>{rememberSubscriber(Boolean(x.subscriber));return x});
export function cachedSubscriber(){if(typeof window==="undefined")return false;return sessionStorage.getItem("avant_subscriber")==="1"}
export function rememberSubscriber(active:boolean){if(typeof window!=="undefined")sessionStorage.setItem("avant_subscriber",active?"1":"0")}
export type AccessState="loading"|"signed_out"|"authorized"|"locked"|"unavailable"|"error";
export async function accessForContent(contentId:string,seasonId?:string){const {customerToken}=await import("./google-auth");const token=await customerToken(false);if(!token)return{state:"signed_out" as AccessState,authorized:false,reason:"login_required"};try{const r=await authorizeWatch(token,contentId,seasonId);return{...r,state:r.authorized?"authorized" as AccessState:"locked" as AccessState}}catch(e:any){const reason=e?.body?.reason;if(reason==="payment_required")return{state:"locked" as AccessState,authorized:false,reason};if(reason==="content_unavailable")return{state:"unavailable" as AccessState,authorized:false,reason};if(reason==="login_required")return{state:"signed_out" as AccessState,authorized:false,reason};return{state:"error" as AccessState,authorized:false,reason:reason||"authorization_failed"}}}
export const ACCESS_CHANGED_EVENT="avant:access-changed";
export function broadcastAccessChanged(detail:Record<string,unknown>={}){if(typeof window==="undefined")return;window.dispatchEvent(new CustomEvent(ACCESS_CHANGED_EVENT,{detail}));try{localStorage.setItem("avant_access_changed",JSON.stringify({at:Date.now(),...detail}))}catch{}}
export function subscribeAccessChanged(handler:()=>void){if(typeof window==="undefined")return()=>{};const local=()=>handler();const storage=(e:StorageEvent)=>{if(e.key==="avant_access_changed")handler()};window.addEventListener(ACCESS_CHANGED_EVENT,local);window.addEventListener("storage",storage);return()=>{window.removeEventListener(ACCESS_CHANGED_EVENT,local);window.removeEventListener("storage",storage)}}

export const adminVimeoGet=(token:string)=>request<any>("admin-vimeo",token,{method:"GET"});
export const adminVimeoSave=(token:string,payload:{clientId?:string;clientSecret?:string;accessToken?:string;testOnly?:boolean})=>request<any>("admin-vimeo",token,{method:"POST",body:JSON.stringify(payload)});
export const adminVimeoDisconnect=(token:string)=>request<any>("admin-vimeo",token,{method:"DELETE"});

export const adminVimeoVideos=(token:string,query="")=>request<any>(`admin-vimeo?view=videos&query=${encodeURIComponent(query)}`,token,{method:"GET"});

export const adminUsersGet=(token:string)=>request<any>("admin-users",token,{method:"GET"});
export const adminUserSave=(token:string,payload:{email:string;role:string;active:boolean;requireMfa:boolean})=>request<any>("admin-users",token,{method:"POST",body:JSON.stringify(payload)});

export const adminAssistant=(token:string,payload:Record<string,unknown>)=>request<any>("admin-assistant",token,{method:"POST",body:JSON.stringify(payload)});
