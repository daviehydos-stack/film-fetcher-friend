import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { claimMedia, stopAllMedia } from "@/lib/media-session";

export function beginAvantWatchTransition() {
  window.dispatchEvent(new CustomEvent("avant:watch-transition"));
}

export function AvantTransitionEngine() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const [watchTransition,setWatchTransition]=useState(false);

  useEffect(() => {
    const onPlayerStarted = (event: Event) => {
      const detail=(event as CustomEvent<{player?:HTMLIFrameElement|HTMLMediaElement|null}>).detail;
      claimMedia(detail?.player??null);
    };
    const onMediaPlay=(event:Event)=>{const media=event.target instanceof HTMLMediaElement?event.target:null;if(media)claimMedia(media)};
    const onWatch=()=>{stopAllMedia();setWatchTransition(true)};
    window.addEventListener("avant:player-started",onPlayerStarted);
    window.addEventListener("avant:watch-transition",onWatch);
    document.addEventListener("play",onMediaPlay,true);
    return()=>{window.removeEventListener("avant:player-started",onPlayerStarted);window.removeEventListener("avant:watch-transition",onWatch);document.removeEventListener("play",onMediaPlay,true)};
  },[]);

  useEffect(()=>{
    if(previousPath.current===location.pathname)return;
    const from=previousPath.current;
    previousPath.current=location.pathname;
    window.dispatchEvent(new CustomEvent("avant:transition-start"));
    stopAllMedia();
    if(location.pathname.includes("/watch/")){setWatchTransition(true);window.scrollTo({top:0,left:0,behavior:"auto"});window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:"auto"})));window.setTimeout(()=>setWatchTransition(false),720)}
  },[location.pathname]);

  return watchTransition?<div className="fixed inset-0 z-[2147483646] grid place-items-center bg-black animate-in fade-in duration-150" aria-hidden="true"><div className="relative grid size-28 place-items-center sm:size-36"><img src={`${import.meta.env.BASE_URL}avant-transition-a.webp`} alt="" className="w-20 object-contain opacity-0 animate-[avantWatchReveal_650ms_cubic-bezier(.16,1,.3,1)_forwards] sm:w-28"/><span className="absolute inset-x-0 -bottom-3 text-center text-[9px] font-black uppercase tracking-[.38em] text-white/45 opacity-0 animate-[avantWatchLabel_650ms_ease-out_100ms_forwards]">Avant Movies</span></div><style>{`@keyframes avantWatchReveal{0%{opacity:0;transform:scale(.84);filter:blur(7px)}38%{opacity:1;transform:scale(1.04);filter:blur(0)}72%{opacity:1;transform:scale(1);filter:blur(0)}100%{opacity:0;transform:scale(1.025);filter:blur(2px)}}@keyframes avantWatchLabel{0%{opacity:0;transform:translateY(5px)}35%,70%{opacity:.65;transform:translateY(0)}100%{opacity:0;transform:translateY(-2px)}}@media(prefers-reduced-motion:reduce){[class*="avantWatch"]{animation:none!important}}`}</style></div>:null;
}
