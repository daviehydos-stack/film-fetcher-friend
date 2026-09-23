import { Link } from "@tanstack/react-router";
import { LogIn, LogOut, Menu, Search, Sparkles, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/streaming/BrandMark";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { publicCatalogue, publicPages } from "@/lib/avant-backend";
import { useAvantAuth } from "@/lib/avant-auth";

export function SiteHeader() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [cmsNav, setCmsNav] = useState<any[]>([]),
    [appearance, setAppearance] = useState<any>({}),
    [langs, setLangs] = useState<any>(null),
    [lang, setLang] = useState(() =>
      typeof window !== "undefined" ? localStorage.getItem("avant-language") || "en" : "en",
    ),
    [travelMode, setTravelMode] = useState(false),
    [online, setOnline] = useState(true),
    [cacheCleared, setCacheCleared] = useState(false);
  const {user:customer,ready:authReady,busy:authBusy,signIn,signOut}=useAvantAuth();
  useEffect(() => {
    void publicPages()
      .then((x) => setCmsNav(x?.pages || []))
      .catch(() => {});
    void publicCatalogue()
      .then((x) => {
        const s = x?.languageSettings || {
          defaultLanguage: "en",
          enabledLanguages: ["en"],
          showSelector: true,
        };
        setLangs(s);
        setAppearance(x?.appearance || {});
        if (!localStorage.getItem("avant-language")) setLang(s.defaultLanguage || "en");
      })
      .catch(() => {});
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("avant-language", lang);
  }, [lang]);
  useEffect(() => { setTravelMode(localStorage.getItem("avant-travel-mode") === "true"); const sync=()=>setOnline(navigator.onLine); window.addEventListener("online",sync); window.addEventListener("offline",sync); return()=>{window.removeEventListener("online",sync);window.removeEventListener("offline",sync)}; }, []);
  useEffect(() => {
    localStorage.setItem("avant-travel-mode", String(travelMode));
    window.dispatchEvent(new CustomEvent("avant:travel-mode-changed", { detail: { active: travelMode } }));
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.ready.then((registration) => {
      if (!travelMode) return;
      const base = import.meta.env.BASE_URL.replace(/\/$/, "");
      const urls = [base + "/", base + "/movies", base + "/tv-shows", base + "/watch-free"];
      registration.active?.postMessage({ type: "AVANT_WARM_URLS", urls });
    }).catch(() => undefined);
  }, [travelMode]);
  useEffect(() => {
    if (!open) return;
    const p = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = p;
      window.removeEventListener("keydown", key);
    };
  }, [open]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 16);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  async function clearTravelCache() {
    localStorage.removeItem("avant_catalogue_cache_v1");
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        registration.active?.postMessage({ type: "AVANT_CLEAR_RUNTIME" });
      } catch {}
    }
    setCacheCleared(true);
    window.setTimeout(() => setCacheCleared(false), 2200);
  }
  async function login() { try { await signIn(); } catch {} }
  async function logout() { await signOut(); }
  return (
    <><a href="#main-content" className="fixed left-3 top-3 z-[60] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition focus:translate-y-0">Skip to content</a><header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white transition-all duration-300",
        scrolled || open
          ? "bg-black/95 shadow-reel backdrop-blur-2xl"
          : "bg-black/80 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[64px] w-full min-w-0 max-w-[1800px] items-center gap-2 px-3 sm:h-[72px] sm:gap-7 sm:px-10 lg:px-14">
        <Link to="/" aria-label="Avant Movies home" className="min-w-0 shrink">
          {appearance?.branding?.logoUrl ? (
            <img
              src={appearance.branding.logoUrl}
              alt={appearance.siteName || "Avant Movies"}
              className="max-h-9 w-auto max-w-[9rem] object-contain sm:max-h-10 sm:max-w-44"
            />
          ) : (
            <BrandMark />
          )}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ...navLinks,
            ...cmsNav
              .filter((p: any) => !navLinks.some((n) => n.to === "/" + p.slug))
              .map((p: any) => ({ to: "/" + p.slug, label: p.navigation_label || p.title })),
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/[.06] hover:text-white"
              activeProps={{ className: "bg-white/[.09] text-white hover:bg-white/[.13]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
          {langs?.showSelector !== false && (langs?.enabledLanguages || []).length > 1 ? (
            <select
              aria-label="Website language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="hidden rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white md:block"
            >
              {(langs.enabledLanguages || []).map((id: string) => (
                <option key={id} value={id}>
                  {id === "en"
                    ? "English"
                    : id === "sw"
                      ? "Kiswahili"
                      : id === "fr"
                        ? "Français"
                        : id.toUpperCase()}
                </option>
              ))}
            </select>
          ) : null}
          <button onClick={() => setTravelMode(!travelMode)} className={cn("hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase transition-all md:flex", travelMode ? "border-primary bg-primary text-primary-foreground shadow-reel" : "border-white/20 bg-white/5 text-white/60 hover:border-white/40")} title="Use less data while browsing">
            <span className={cn("size-2 rounded-full", !online ? "bg-amber-300" : travelMode ? "bg-primary-foreground animate-pulse" : "bg-white/20")} />
            {!online ? "Offline" : "Travel Mode"}
          </button>
          {appearance?.header?.showSearch !== false ? (<>
            <Link
              to="/search"
              search={{ q: "", type: "all", sort: "curated" }}
              className="hidden min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 text-xs font-bold text-white/70 transition hover:bg-white/[.09] hover:text-white lg:inline-flex"
              aria-label="Ask Avant Concierge"
            >
              <Sparkles className="size-4 text-primary" /> Ask Avant
            </Link>
            <Link
              to="/search"
              search={{ q: "", type: "all", sort: "curated" }}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-transparent transition hover:border-white/10 hover:bg-white/10"
              aria-label="Search Avant Movies"
            >
              <Search className="size-5" />
            </Link>
          </>) : null}
          {customer ? <Link
              to="/admin"
              className="inline-flex min-h-10 items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-black text-primary hover:bg-primary/20"
            >
              Admin
            </Link> : null}
          {!authReady ? (
            <span
              className="hidden h-10 w-36 rounded-full bg-white/[.04] sm:block"
              aria-hidden="true"
            />
          ) : customer ? (
            <>
              <Link
                to="/account"
                aria-label="Account"
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.06] py-1.5 pl-2 pr-3 sm:flex"
              >
                {customer.photoURL ? (
                  <img
                    src={customer.photoURL}
                    alt=""
                    className="size-7 rounded-full object-cover"
                  />
                ) : (
                  <span className="grid size-7 place-items-center rounded-full bg-orange-400/20">
                    <UserRound className="size-4" />
                  </span>
                )}
                <span className="max-w-28 truncate text-xs font-bold">
                  {customer.name || customer.email}
                </span>
              </Link>
              <button
                onClick={() => void logout()}
                disabled={authBusy}
                className="hidden size-10 place-items-center rounded-full hover:bg-white/10 sm:grid"
                aria-label="Sign out"
              >
                <LogOut className="size-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => void login()}
              disabled={authBusy}
              className="hidden min-h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-black shadow-lg transition hover:scale-[1.02] hover:bg-white/90 sm:inline-flex"
            >
              <LogIn className="size-4" />
              {authBusy ? "Signing in…" : "Sign in"}
            </button>
          )}
          <button
            className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav aria-hidden={!open} className={cn("avant-mobile-menu max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain border-t border-border bg-background px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl md:hidden sm:px-5 sm:py-4",open?"is-open":"pointer-events-none")}>
          <button onClick={() => { setTravelMode(!travelMode); setOpen(false); }} className="flex min-h-12 w-full items-center justify-between rounded-md px-3 font-semibold hover:bg-white/5">
            <span className="flex items-center gap-3"><span className={cn("size-2 rounded-full", travelMode ? "bg-primary animate-pulse" : "bg-white/20")} />Travel Mode</span>
            <span className="text-[10px] uppercase text-muted-foreground">{!online ? "Cached pages" : travelMode ? "Active" : "Off"}</span>
          </button>
          {travelMode ? <button onClick={() => void clearTravelCache()} className="flex min-h-12 w-full items-center justify-between rounded-md px-3 text-left text-sm font-semibold text-white/60 hover:bg-white/5 hover:text-white"><span>Clear cached pages</span><span className="text-[10px] uppercase text-muted-foreground">{cacheCleared ? "Cleared" : "Device only"}</span></button> : null}
          {[
            ...navLinks,
            ...cmsNav
              .filter((p: any) => !navLinks.some((n) => n.to === "/" + p.slug))
              .map((p: any) => ({ to: "/" + p.slug, label: p.navigation_label || p.title })),
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          {!authReady ? (
            <div className="h-12" />
          ) : customer ? (
            <button
              onClick={() => void logout()}
              className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left font-semibold hover:bg-white/5"
            >
              <LogOut className="size-5" />
              Sign out
            </button>
          ) : (
            <button
              onClick={() => void login()}
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 font-black text-black"
            >
              <LogIn className="size-5" />
              Sign in with Google
            </button>
          )}
          {customer ? <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center rounded-md border border-primary/20 bg-primary/10 px-3 font-black text-primary"
            >
              Admin
            </Link> : null}
        </nav>
    </header></>
  );
}
