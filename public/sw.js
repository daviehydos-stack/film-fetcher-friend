const CACHE="avant-shell-v5";const RUNTIME="avant-runtime-v5";const SHELL=["./","./site.webmanifest","./favicon.ico"];const MAX_RUNTIME=80;const PRIVATE_PATHS=["/admin","/checkout","/payment","/account","/my-list"];const WATCH_PATH="/watch";const SAFE_WARM=["/","/movies","/tv-shows","/watch-free"];
function scopedPath(url){const u=typeof url==="string"?new URL(url,self.location.origin):url;const scope=new URL(self.registration.scope).pathname.replace(/\/$/,"");let p=u.pathname;if(scope&&scope!=="/"&&p.startsWith(scope))p=p.slice(scope.length)||"/";return p.startsWith("/")?p:"/"+p}
function matches(path,prefix){return path===prefix||path.startsWith(prefix+"/")}
function privatePath(path){return PRIVATE_PATHS.some(p=>matches(path,p))}
function watchPath(path){return matches(path,WATCH_PATH)}
function safeWarm(path){return SAFE_WARM.includes(path)}
async function trim(cache){const keys=await cache.keys();if(keys.length<=MAX_RUNTIME)return;await Promise.all(keys.slice(0,keys.length-MAX_RUNTIME).map(k=>cache.delete(k)))}
async function put(cache,key,res){try{if(!res||!res.ok||res.type==="opaque")return;await cache.put(key,res);await trim(cache)}catch{}}
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>![CACHE,RUNTIME].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("message",e=>{if(e.data?.type==="AVANT_CLEAR_RUNTIME")e.waitUntil(caches.delete(RUNTIME));if(e.data?.type==="AVANT_WARM_URLS"&&Array.isArray(e.data.urls))e.waitUntil(caches.open(RUNTIME).then(async cache=>{for(const raw of e.data.urls.slice(0,20)){try{const u=new URL(raw,self.location.origin),path=scopedPath(u);if(u.origin!==self.location.origin||!safeWarm(path))continue;const r=await fetch(u.toString(),{credentials:"same-origin",cache:"no-cache"});if(r.ok)await put(cache,u.toString(),r.clone())}catch{}}}))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;const path=scopedPath(u);
if(privatePath(path)){e.respondWith(fetch(r));return}
if(watchPath(path)){e.respondWith(fetch(r).catch(()=>caches.match("./")));return}
if(r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(RUNTIME).then(cache=>put(cache,r,copy)).catch(()=>{})}return res}).catch(async()=>{const exact=await caches.match(r);if(exact)return exact;const clean=new URL(r.url);clean.search="";return(await caches.match(clean.toString()))||caches.match("./")}));return}
if(/\.(?:js|css)$/i.test(path)){e.respondWith(fetch(r).catch(()=>caches.match(r)));return}\nif(/\.(?:png|jpg|jpeg|webp|svg|ico|woff2?)$/i.test(path)){e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(RUNTIME).then(cache=>put(cache,r,copy))}return res})))}
});