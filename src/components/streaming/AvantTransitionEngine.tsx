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
    if(location.pathname.includes("/watch/")){setWatchTransition(true);window.scrollTo({top:0,left:0,behavior:"auto"});window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:"auto"})));window.setTimeout(()=>setWatchTransition(false),1120)}
  },[location.pathname]);

  return watchTransition?<div className="fixed inset-0 z-[2147483646] grid place-items-center overflow-hidden bg-black animate-in fade-in duration-150" aria-hidden="true"><div className="absolute inset-0 opacity-0 animate-[avantVeil_900ms_ease-out_forwards]" style={{background:"radial-gradient(circle at 50% 48%,rgba(232,139,74,.10),transparent 28%),linear-gradient(180deg,#020202,#000)"}}/><div className="relative grid size-32 place-items-center sm:size-40"><span className="absolute size-24 rounded-full border border-white/[.05] opacity-0 animate-[avantHalo_850ms_cubic-bezier(.16,1,.3,1)_forwards] sm:size-32"/><img src={`${import.meta.env.BASE_URL}avant-transition-a.webp`} alt="" className="relative w-20 object-contain opacity-0 will-change-transform animate-[avantWatchReveal_1080ms_cubic-bezier(.2,.75,.2,1)_forwards] sm:w-28"/><span className="absolute inset-x-0 -bottom-1 text-center text-[8px] font-semibold uppercase tracking-[.42em] text-white/40 opacity-0 animate-[avantWatchLabel_820ms_ease-out_90ms_forwards]">Avant Movies</span></div><style>{`@keyframes avantVeil{0%{opacity:0}24%,76%{opacity:1}100%{opacity:0}}@keyframes avantHalo{0%{opacity:0;transform:scale(.25)}34%{opacity:.65;transform:scale(1)}68%{opacity:.3;transform:scale(2.2)}100%{opacity:0;transform:scale(7)}}@keyframes avantWatchReveal{0%{opacity:0;transform:scale(.18);filter:blur(10px)}14%{opacity:.72;transform:scale(.42);filter:blur(5px)}38%{opacity:1;transform:scale(1);filter:blur(0)}58%{opacity:1;transform:scale(1.12);filter:blur(0)}78%{opacity:1;transform:scale(2.8);filter:blur(.5px)}100%{opacity:0;transform:scale(9);filter:blur(9px)}}@keyframes avantLightLine{0%{width:0;opacity:0;transform:translateX(-50%) scaleX(.15)}30%{width:min(38vw,360px);opacity:.6;transform:translateX(-50%) scaleX(1)}68%{width:min(28vw,260px);opacity:.24;transform:translateX(-50%) scaleX(.8)}100%{width:min(70vw,720px);opacity:0;transform:translateX(-50%) scaleX(1.8)}}@keyframes avantAtmosphere{0%{opacity:0;transform:scale(.9)}35%,72%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.08)}}@keyframes avantWatchLabel{0%{opacity:0;transform:translateY(4px);letter-spacing:.32em}30%,68%{opacity:.62;transform:translateY(0);letter-spacing:.42em}100%{opacity:0;transform:translateY(-2px);letter-spacing:.46em}}@media(prefers-reduced-motion:reduce){[class*="animate-[avant"]{animation:none!important}}`}</style></div>:null;
}
