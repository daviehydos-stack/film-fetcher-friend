import { Link } from "@tanstack/react-router";
import { LogIn, LogOut, Menu, Search, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/streaming/BrandMark";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ADMIN_EMAIL, hasAdminSession } from "@/lib/avant-backend";
import { customerSession, signInCustomer, signOutCustomer } from "@/lib/google-auth";

export function SiteHeader(){
 const[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),[admin,setAdmin]=useState(false),[customer,setCustomer]=useState<any>(null),[authBusy,setAuthBusy]=useState(false);
 useEffect(()=>{void customerSession().then(user=>{setCustomer(user);setAdmin(String(user?.email||"").toLowerCase()===ADMIN_EMAIL);if(user)void hasAdminSession().then(ok=>{if(ok)setAdmin(true)})})},[]);
 useEffect(()=>{if(!open)return;const p=document.body.style.overflow;document.body.style.overflow="hidden";const key=(e:KeyboardEvent)=>e.key==="Escape"&&setOpen(false);window.addEventListener("keydown",key);return()=>{document.body.style.overflow=p;window.removeEventListener("keydown",key)}},[open]);
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>16);scroll();window.addEventListener("scroll",scroll,{passive:true});return()=>window.removeEventListener("scroll",scroll)},[]);
 async function login(){setAuthBusy(true);try{const user=await signInCustomer();setCustomer(user);setAdmin(String(user?.email||"").toLowerCase()===ADMIN_EMAIL)}finally{setAuthBusy(false)}} async function logout(){setAuthBusy(true);try{await signOutCustomer();setCustomer(null);setAdmin(false)}finally{setAuthBusy(false)}}
 return <header className={cn("fixed inset-x-0 top-0 z-50 text-white transition-all duration-300",scrolled||open?"border-b border-white/10 bg-[#050608]/95 shadow-2xl backdrop-blur-xl":"bg-gradient-to-b from-black/95 via-black/65 to-transparent")}>
  <div className="mx-auto flex h-[72px] max-w-[1800px] items-center gap-7 px-5 sm:px-10 lg:px-14">
   <Link to="/" aria-label="Avant Movies home" className="shrink-0"><BrandMark/></Link>
   <nav className="hidden items-center gap-1 rounded-full border border-white/[.07] bg-white/[.04] p-1 md:flex">{navLinks.map(l=><Link key={l.to} to={l.to} className="rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white/[.07] hover:text-white" activeProps={{className:"bg-white/[.12] text-white hover:bg-white/[.16] shadow-inner"}} activeOptions={{exact:l.to==="/"}}>{l.label}</Link>)}</nav>
   <div className="ml-auto flex items-center gap-2">
    <Link to="/search" className="grid size-10 place-items-center rounded-full border border-transparent transition hover:border-white/10 hover:bg-white/10" aria-label="Search"><Search className="size-5"/></Link>
    {admin?<Link to="/admin" className="hidden rounded-full px-3 py-2 text-xs font-semibold text-orange-300 hover:bg-orange-400/10 lg:block">Admin</Link>:null}
    {customer?<><Link to="/account" aria-label="Account" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.06] py-1.5 pl-2 pr-3 sm:flex">{customer.photoURL?<img src={customer.photoURL} alt="" className="size-7 rounded-full object-cover"/>:<span className="grid size-7 place-items-center rounded-full bg-orange-400/20"><UserRound className="size-4"/></span>}<span className="max-w-28 truncate text-xs font-bold">{customer.name||customer.email}</span></Link><button onClick={()=>void logout()} disabled={authBusy} className="hidden size-10 place-items-center rounded-full hover:bg-white/10 sm:grid" aria-label="Sign out"><LogOut className="size-4"/></button></>:<button onClick={()=>void login()} disabled={authBusy} className="hidden min-h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-black shadow-lg transition hover:scale-[1.02] hover:bg-white/90 sm:inline-flex"><LogIn className="size-4"/>{authBusy?"Signing in…":"Sign in"}</button>}
    <button className="grid size-10 place-items-center rounded-full hover:bg-white/10 md:hidden" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
   </div>
  </div>
  {open?<nav className="border-t border-white/10 bg-[#07080a] px-5 py-4 shadow-2xl md:hidden">{navLinks.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-white/5">{l.label}</Link>)}{customer?<button onClick={()=>void logout()} className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left font-semibold hover:bg-white/5"><LogOut className="size-5"/>Sign out</button>:<button onClick={()=>void login()} className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 font-black text-black"><LogIn className="size-5"/>Sign in with Google</button>}{admin?<Link to="/admin" onClick={()=>setOpen(false)} className="mt-2 flex min-h-12 items-center rounded-xl px-3 font-semibold text-orange-300">Admin</Link>:null}</nav>:null}
 </header>
}
