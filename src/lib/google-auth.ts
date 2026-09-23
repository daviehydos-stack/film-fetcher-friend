const INTERNAL_GOOGLE_CLIENT_ID="12797178987-c8vk15t4gplabjhap4d0ebbv8s2fhk9a.apps.googleusercontent.com";
const GIS_URL="https://accounts.google.com/gsi/client";
const TOKEN_KEY="avant_google_id_token";
const GOOGLE_ORIGIN="https://daviehydos-stack.github.io";
const REMEMBERED_KEY="avant_google_account";
let loading:Promise<void>|null=null;
let signInFlight:Promise<string>|null=null;
let sessionVersion=0;
const sessionListeners=new Set<()=>void>();
function emitSession(){sessionVersion++;for(const listener of sessionListeners)listener();}
export function subscribeCustomerSession(listener:()=>void){sessionListeners.add(listener);return()=>sessionListeners.delete(listener)}
export function customerSessionVersion(){return sessionVersion}

declare global { interface Window { google?: any } }

function loadGoogle(){if(typeof window==="undefined")return Promise.reject(new Error("Google Sign-In requires a browser."));if(window.google?.accounts?.id)return Promise.resolve();if(loading)return loading;loading=new Promise((resolve,reject)=>{const existing=document.querySelector<HTMLScriptElement>(`script[src="${GIS_URL}"]`);const script=existing||document.createElement("script");script.src=GIS_URL;script.async=true;script.defer=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error("Unable to load Google Sign-In."));if(!existing)document.head.appendChild(script)});return loading}

function payload(token:string){try{const part=token.split(".")[1];if(!part)return null;const json=decodeURIComponent(atob(part.replace(/-/g,"+").replace(/_/g,"/")).split("").map(c=>"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(json)}catch{return null}}
function validToken(){if(typeof window==="undefined")return null;const token=localStorage.getItem(TOKEN_KEY);if(!token)return null;const p=payload(token);if(!p?.sub||p.aud!==INTERNAL_GOOGLE_CLIENT_ID||Number(p.exp||0)*1000<=Date.now()+30000){localStorage.removeItem(TOKEN_KEY);sessionStorage.removeItem("avant_subscriber");return null}return token}

export function rememberedCustomer(){if(typeof window==="undefined")return null;try{const raw=localStorage.getItem(REMEMBERED_KEY);if(!raw)return null;const v=JSON.parse(raw);return v?.email?{email:String(v.email),name:String(v.name||""),photoURL:String(v.photoURL||"")}:null}catch{return null}}
function rememberCredential(token:string){const p=payload(token);if(!p?.email)return;localStorage.setItem(REMEMBERED_KEY,JSON.stringify({email:p.email,name:p.name||"",photoURL:p.picture||""}))}

async function googleCredential(loginHint?:string){if(signInFlight)return signInFlight;signInFlight=(async()=>{await loadGoogle();return new Promise<string>((resolve,reject)=>{let settled=false;const done=(token?:string,error?:Error)=>{if(settled)return;settled=true;if(token)resolve(token);else reject(error||new Error("Google Sign-In could not complete."))};window.google.accounts.id.initialize({client_id:INTERNAL_GOOGLE_CLIENT_ID,ux_mode:"popup",context:"signin",itp_support:true,login_hint:loginHint||undefined,auto_select:Boolean(loginHint),button_auto_select:Boolean(loginHint),use_fedcm_for_prompt:true,use_fedcm_for_button:true,cancel_on_tap_outside:false,callback:(r:any)=>{if(!r?.credential){done(undefined,new Error("Google did not return a credential."));return}localStorage.setItem(TOKEN_KEY,r.credential);rememberCredential(r.credential);emitSession();window.dispatchEvent(new CustomEvent("avant:access-changed",{detail:{source:"sign-in"}}));done(r.credential)}});window.google.accounts.id.prompt((n:any)=>{if(n?.isNotDisplayed?.()||n?.isSkippedMoment?.())done(undefined,new Error("Google could not sign this account in automatically."))})});})().finally(()=>{signInFlight=null});return signInFlight}

export async function customerToken(interactive=false){const token=validToken();if(token)return token;if(!interactive)return null;return googleCredential()}
export async function requireCustomerToken(loginHint?:string){const token=validToken()||await googleCredential(loginHint);if(!token)throw new Error("Please sign in to continue.");return token}
export function hasCustomerSession(){return Boolean(validToken())}
export async function customerSession(){const token=validToken();if(!token)return null;const p=payload(token);return p?{email:p.email??"",name:p.name??"",photoURL:p.picture??""}:null}
export async function customerEmail(){return (await customerSession())?.email??null}
export async function signInCustomer(loginHint?:string){await requireCustomerToken(loginHint);return customerSession()}
export async function signInRememberedCustomer(){return signInCustomer(rememberedCustomer()?.email)}
export function watchCustomerSession(callback:()=>void){if(typeof window==="undefined")return()=>{};const onStorage=(e:StorageEvent)=>{if(e.key===TOKEN_KEY||e.key===REMEMBERED_KEY)emitSession()};const off=subscribeCustomerSession(callback);window.addEventListener("storage",onStorage);return()=>{off();window.removeEventListener("storage",onStorage)}}
export async function signOutCustomer(){if(typeof window!=="undefined"){localStorage.removeItem(TOKEN_KEY);sessionStorage.removeItem("avant_subscriber");emitSession();window.dispatchEvent(new CustomEvent("avant:access-changed",{detail:{source:"sign-out"}}));try{await loadGoogle();window.google.accounts.id.disableAutoSelect()}catch{}}}


export const GOOGLE_CLIENT_ID="12797178987-c8vk15t4gplabjhap4d0ebbv8s2fhk9a.apps.googleusercontent.com";
