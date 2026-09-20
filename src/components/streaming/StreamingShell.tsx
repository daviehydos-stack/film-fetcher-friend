import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function ConnectionNotice(){const [online,setOnline]=useState(true);const [reconnected,setReconnected]=useState(false);useEffect(()=>{setOnline(navigator.onLine);let timer:number|undefined;const off=()=>{setOnline(false);setReconnected(false)};const on=()=>{setOnline(true);setReconnected(true);timer=window.setTimeout(()=>setReconnected(false),2600)};window.addEventListener("offline",off);window.addEventListener("online",on);return()=>{window.removeEventListener("offline",off);window.removeEventListener("online",on);if(timer)window.clearTimeout(timer)}},[]);if(online&&!reconnected)return null;return <div role="status" aria-live="polite" className={`fixed inset-x-0 top-[64px] z-[49] mx-auto w-fit max-w-[calc(100%-2rem)] rounded-b-lg border border-t-0 px-4 py-2 text-xs font-bold shadow-xl backdrop-blur sm:top-[72px] ${online?"border-emerald-400/20 bg-emerald-950/90 text-emerald-100":"border-amber-400/20 bg-black/90 text-amber-100"}`}>{online?"Connection restored · Avant is back online":"You’re offline · cached Avant pages remain available; streaming needs a connection"}</div>}

export function StreamingShell({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) {
  return (
    <div className="min-h-[100svh] bg-background text-foreground">
      <SiteHeader />
      <ConnectionNotice />
      {children}
      {footer ? <SiteFooter /> : null}
    </div>
  );
}
