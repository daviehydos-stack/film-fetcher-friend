import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { absoluteUrl, SEO_BRAND, SEO_DEFAULT_DESCRIPTION, SEO_DEFAULT_TITLE, SEO_SITE_NAME } from "../lib/seo";
import { accountAccess, publicCatalogue, rememberSubscriber, subscribeAccessChanged } from "../lib/avant-backend";
import { customerToken } from "../lib/google-auth";
import { AvantTransitionEngine } from "../components/streaming/AvantTransitionEngine";
import { claimMedia, stopAllMedia } from "../lib/media-session";
import { AvantAuthProvider } from "../lib/avant-auth";


function PendingPage() {
  return (
    <div className="min-h-[100svh] bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 h-[64px] border-b border-white/[.06] bg-black/95 sm:h-[72px]">
        <div className="mx-auto flex h-full max-w-[1800px] items-center px-5 sm:px-10 lg:px-14">
          <img src={`${import.meta.env.BASE_URL}avant-movies-logo.png`} alt="" className="h-8 w-auto object-contain" />
          <span className="ml-3 text-lg font-black text-white">Avant Cinema</span>
        </div>
      </div>
      <main className="mx-auto max-w-[1800px] px-5 pb-20 pt-28 sm:px-10 sm:pt-36 lg:px-14">
        <div className="max-w-3xl">
          <div className="h-3 w-28 rounded-full bg-white/[.08]" />
          <div className="mt-5 h-12 w-3/4 max-w-xl rounded-md bg-white/[.07]" />
          <div className="mt-4 h-4 w-full max-w-lg rounded-full bg-white/[.05]" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => <div key={i} className="aspect-video rounded-lg border border-white/[.04] bg-white/[.035]" />)}
        </div>
      </main>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-[100svh] bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95">
        <div className="mx-auto flex h-[64px] max-w-[1800px] items-center px-4 sm:h-[72px] sm:px-8 lg:px-12">
          <Link to="/" aria-label="Avant Cinema home" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}avant-movies-logo.png`} alt="" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            <span className="whitespace-nowrap text-sm font-black tracking-tight text-white sm:text-base">Avant Cinema</span>
          </Link>
        </div>
      </header>
      <div className="flex min-h-[100svh] items-center justify-center px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-black tracking-tight text-foreground">Content unavailable</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This link may be old, or the title may have moved. Browse the current Avant Cinema catalogue instead.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Avant Cinema
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-background px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
      <div className="max-w-md text-center">
        <img src={`${import.meta.env.BASE_URL}avant-movies-logo.png`} alt="Avant Cinema" className="mx-auto h-14 w-auto object-contain" />
        <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
          We couldn't open this page
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Your account and purchases are safe. Retry the page, or return to the Avant Cinema catalogue.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Browse catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SEO_DEFAULT_TITLE },
      { name: "description", content: SEO_DEFAULT_DESCRIPTION },
      { name: "author", content: SEO_BRAND },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Avant Cinema" },
      { property: "og:description", content: "It’s time to feel again. Independent Kenyan storytelling." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SEO_SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Avant Cinema — It’s time to feel again" },
      { name: "twitter:description", content: SEO_DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#111318" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: `${import.meta.env.BASE_URL}avant-movies-logo.png`, type: "image/png" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}avant-movies-logo.png`, type: "image/png", sizes: "32x32" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}avant-movies-logo.png`, type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}avant-movies-logo.png`, sizes: "180x180" },
      { rel: "manifest", href: `${import.meta.env.BASE_URL}site.webmanifest` },
      { rel: "preconnect", href: "https://player.vimeo.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://i.vimeocdn.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://f.vimeocdn.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://cdn.jsdelivr.net", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "//i.vimeocdn.com" },
      { rel: "dns-prefetch", href: "//f.vimeocdn.com" },
      { rel: "preconnect", href: "https://bnuyhrsezkepsaebwlmu.supabase.co" },
      { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "//res.cloudinary.com" },
      { rel: "dns-prefetch", href: "//player.vimeo.com" },
      { rel: "shortcut icon", href: `${import.meta.env.BASE_URL}avant-movies-logo.png`, type: "image/png" },
      ...(absoluteUrl("/") ? [{ rel: "home", href: absoluteUrl("/")! }] : []),
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": absoluteUrl("/#organization"),
            name: SEO_BRAND,
            alternateName: "Avant",
            description: SEO_DEFAULT_DESCRIPTION,
            ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}),
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/avant-movies-logo.png"),
              width: 180,
              height: 180,
            },
            image: absoluteUrl("/avant-movies-logo.png"),
            foundingLocation: { "@type": "Country", name: "Kenya" },
            areaServed: { "@type": "Country", name: "Kenya" },
            knowsAbout: ["Kenyan films", "Kenyan television series", "independent cinema", "video streaming"],
          },
          {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            name: SEO_BRAND,
            description: SEO_DEFAULT_DESCRIPTION,
            ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}),
            publisher: { "@id": absoluteUrl("/#organization") },
            inLanguage: "en",
          },
        ],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  pendingComponent: PendingPage,
  pendingMs: 120,
  pendingMinMs: 180,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const deepLink = params.get("__spa");
    if (!deepLink) return;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    let safePath = deepLink.startsWith("/") ? deepLink : "/" + deepLink;
    while (base && base !== "/" && safePath.startsWith(base + base)) safePath = safePath.slice(base.length);
    if (base && base !== "/" && safePath.startsWith(base)) safePath = safePath.slice(base.length) || "/";
    const clean = new URL(window.location.href);
    clean.searchParams.delete("__spa");
    window.history.replaceState({}, "", clean.pathname + clean.search + clean.hash);
    void router.navigate({ to: safePath as any, replace: true });
  }, [router]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "avant_scroll:" + location.pathname + window.location.search;
    const restore = sessionStorage.getItem(key);
    const onScroll = () => sessionStorage.setItem(key, String(Math.round(window.scrollY || 0)));
    if (restore !== null) window.requestAnimationFrame(() => window.scrollTo({ top: Number(restore) || 0, left: 0, behavior: "auto" }));
    else window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { onScroll(); window.removeEventListener("scroll", onScroll); };
  }, [location.pathname]);
  useEffect(() => { let dead=false; let timer:number|undefined; const sync=async()=>{const token=await customerToken(false);if(dead)return;if(!token){rememberSubscriber(false);return}try{const a=await accountAccess(token);if(!dead)rememberSubscriber(Boolean(a.subscriber))}catch{}};timer=window.setTimeout(()=>void sync(),1800);const off=subscribeAccessChanged(()=>void sync());return()=>{dead=true;if(timer)window.clearTimeout(timer);off()}; }, []);
  useEffect(() => {
    const onPlayerStarted = (event: Event) => {
      const player = (event as CustomEvent<{ player?: HTMLIFrameElement | HTMLMediaElement }>).detail?.player;
      if (player) claimMedia(player);
    };
    window.addEventListener("avant:player-started", onPlayerStarted);
    return () => {
      window.removeEventListener("avant:player-started", onPlayerStarted);
      stopAllMedia();
    };
  }, []);
  useEffect(() => { let dead=false; const timer=window.setTimeout(()=>void publicCatalogue().then((x:any)=>{if(dead)return;const favicon=x?.appearance?.branding?.faviconUrl;if(!favicon)return;document.querySelectorAll<HTMLLinkElement>('link[rel="icon"],link[rel="shortcut icon"]').forEach(el=>{el.href=favicon});}).catch(()=>{}),2200);return()=>{dead=true;window.clearTimeout(timer)}; }, []);
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    const register = () => navigator.serviceWorker.register(import.meta.env.BASE_URL + "sw.js", { scope: import.meta.env.BASE_URL }).catch(() => undefined);
    if (document.readyState === "complete") void register();
    else window.addEventListener("load", register, { once: true });
    const warm = () => navigator.serviceWorker.ready.then(reg => reg.active?.postMessage({ type: "AVANT_WARM_URLS", urls: ["/","/movies","/tv-shows","/watch-free"].map(p => import.meta.env.BASE_URL.replace(/\/$/,"") + p) })).catch(() => undefined);
    const id = window.setTimeout(warm, 1200);
    return () => window.clearTimeout(id);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sync = () => document.documentElement.toggleAttribute("data-avant-offline", !navigator.onLine);
    sync(); window.addEventListener("online", sync); window.addEventListener("offline", sync);
    return () => { window.removeEventListener("online", sync); window.removeEventListener("offline", sync); };
  }, []);
  // Do not auto-reload the SPA when a newer deployment is detected.
  // On GitHub Pages a deep-link reload is handled by 404.html via ?__spa=.
  // Reloading here created an endless direct-URL <-> ?__spa redirect loop.

  return (
    <QueryClientProvider client={queryClient}>
      <AvantAuthProvider>
      <AvantTransitionEngine />
      <div key={location.pathname} className="avant-route-surface"><Outlet /></div>
      </AvantAuthProvider>
    </QueryClientProvider>
  );
}
