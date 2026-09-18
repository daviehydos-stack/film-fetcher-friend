const INTERNAL_GOOGLE_CLIENT_ID="12797178987-c8vk15t4gplabjhap4d0ebbv8s2fhk9a.apps.googleusercontent.com";
const GIS_URL="https://accounts.google.com/gsi/client";
const TOKEN_KEY="avant_google_id_token";
const GOOGLE_ORIGIN="https://daviehydos-stack.github.io";
let loading:Promise<void>|null=null;

declare global { interface Window { google?: any } }

function loadGoogle(){if(typeof window==="undefined")return Promise.reject(new Error("Google Sign-In requires a browser."));if(window.google?.accounts?.id)return Promise.resolve();if(loading)return loading;loading=new Promise((resolve,reject)=>{const existing=document.querySelector<HTMLScriptElement>(`script[src="${GIS_URL}"]`);const script=existing||document.createElement("script");script.src=GIS_URL;script.async=true;script.defer=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error("Unable to load Google Sign-In."));if(!existing)document.head.appendChild(script)});return loading}

function payload(token:string){try{const part=token.split(".")[1];const json=decodeURIComponent(atob(part.replace(/-/g,"+").replace(/_/g,"/")).split("").map(c=>"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(json)}catch{return null}}
function validToken(){if(typeof window==="undefined")return null;const token=localStorage.getItem(TOKEN_KEY);if(!token)return null;const p=payload(token);if(!p?.sub||p.aud!==INTERNAL_GOOGLE_CLIENT_ID||Number(p.exp||0)*1000<=Date.now()+30000){localStorage.removeItem(TOKEN_KEY);return null}return token}

async function googleCredential(){await loadGoogle();return new Promise<string>((resolve,reject)=>{const shade=document.createElement("div");shade.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.82);display:grid;place-items:center;padding:24px";const card=document.createElement("div");card.style.cssText="width:min(92vw,390px);background:#181818;border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:28px;color:white;font-family:Arial,sans-serif;text-align:center";const title=document.createElement("div");title.textContent="Sign in to Avant Movies";title.style.cssText="font-size:22px;font-weight:700;margin-bottom:8px";const copy=document.createElement("div");copy.textContent="Use your Google account to keep purchases, My List and viewing progress together.";copy.style.cssText="font-size:14px;line-height:1.5;color:rgba(255,255,255,.62);margin-bottom:22px";const mount=document.createElement("div");mount.style.cssText="display:flex;justify-content:center";const cancel=document.createElement("button");cancel.textContent="Cancel";cancel.style.cssText="margin-top:18px;background:none;border:0;color:rgba(255,255,255,.6);cursor:pointer;padding:8px 16px";const close=()=>shade.remove();cancel.onclick=()=>{close();reject(Object.assign(new Error("Sign-in cancelled."),{name:"AbortError"}))};card.append(title,copy,mount,cancel);shade.append(card);document.body.append(shade);window.google.accounts.id.initialize({client_id:INTERNAL_GOOGLE_CLIENT_ID,ux_mode:"popup",context:"signin",itp_support:true,callback:(r:any)=>{if(!r?.credential){close();reject(new Error("Google did not return a credential."));return}localStorage.setItem(TOKEN_KEY,r.credential);close();resolve(r.credential)}});window.google.accounts.id.renderButton(mount,{theme:"filled_black",size:"large",shape:"pill",text:"continue_with",width:300});window.setTimeout(()=>{if(!mount.childElementCount){close();reject(new Error("Google Sign-In could not start. Make sure "+GOOGLE_ORIGIN+" is authorized in the Google OAuth client."))}},5000)})}

export async function customerToken(interactive=false){const token=validToken();if(token)return token;if(!interactive)return null;return googleCredential()}
export async function requireCustomerToken(){const token=await customerToken(true);if(!token)throw new Error("Please sign in to continue.");return token}
export async function customerSession(){const token=validToken();if(!token)return null;const p=payload(token);return p?{email:p.email??"",name:p.name??"",photoURL:p.picture??""}:null}
export async function customerEmail(){return (await customerSession())?.email??null}
export async function signInCustomer(){await requireCustomerToken();return customerSession()}
export async function signOutCustomer(){if(typeof window!=="undefined"){localStorage.removeItem(TOKEN_KEY);try{await loadGoogle();window.google.accounts.id.disableAutoSelect()}catch{}}}


export const GOOGLE_CLIENT_ID="12797178987-c8vk15t4gplabjhap4d0ebbv8s2fhk9a.apps.googleusercontent.com";
