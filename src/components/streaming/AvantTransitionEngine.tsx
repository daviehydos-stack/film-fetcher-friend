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
    const onWatch=()=>{stopAllMedia();setWatchTransition(true);window.setTimeout(()=>setWatchTransition(false),850)};
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
    if(location.pathname.includes("/watch/")&&!from.includes("/watch/")){setWatchTransition(true);window.scrollTo({top:0,left:0,behavior:"auto"});window.setTimeout(()=>setWatchTransition(false),850)}
  },[location.pathname]);

  return watchTransition?<div className="fixed inset-0 z-[2147483646] grid place-items-center bg-black" aria-hidden="true"><div className="relative grid size-28 place-items-center sm:size-36"><img src={`${import.meta.env.BASE_URL}avant-transition-a.webp`} alt="" className="w-20 animate-[pulse_850ms_ease-in-out_both] object-contain sm:w-28"/><span className="absolute inset-x-0 -bottom-3 text-center text-[9px] font-black uppercase tracking-[.38em] text-white/45">Avant Movies</span></div></div>:null;
}
