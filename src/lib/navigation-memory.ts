const KEY="avant-return-context-v1";
export type ReturnContext={path:string;scrollY:number;label?:string;targetSlug?:string;createdAt:number};
export function rememberReturnContext(label?:string,targetSlug?:string){
 if(typeof window==="undefined")return;
 const base=(import.meta.env.BASE_URL||"/").replace(/\/$/,"");
 let pathname=window.location.pathname;
 if(base&&base!=="/"&&pathname.startsWith(base))pathname=pathname.slice(base.length)||"/";
 sessionStorage.setItem(KEY,JSON.stringify({path:pathname+window.location.search+window.location.hash,scrollY:window.scrollY,label,targetSlug,createdAt:Date.now()}));
}
export function readReturnContext():ReturnContext|null{if(typeof window==="undefined")return null;try{const v=JSON.parse(sessionStorage.getItem(KEY)||"null");return v&&typeof v.path==="string"&&Date.now()-Number(v.createdAt||0)<14400000?v:null}catch{return null}}
export function returnContextHref(fallback="/movies"){return readReturnContext()?.path||fallback}
export function restoreRememberedScroll(){if(typeof window==="undefined")return;const v=readReturnContext();if(!v)return;requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:v.scrollY||0,behavior:"auto"})))}
