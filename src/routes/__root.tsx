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

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-background px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
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
            Go home
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
      { name: "author", content: "Avant Cinema" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Avant Movies" },
      { property: "og:description", content: "It’s time to feel again. Independent Kenyan storytelling." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SEO_SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Avant Movies — It’s time to feel again" },
      { name: "twitter:description", content: SEO_DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#111318" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon-32x32.png`, type: "image/png", sizes: "32x32" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon-16x16.png`, type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}apple-touch-icon.png`, sizes: "180x180" },
      { rel: "manifest", href: `${import.meta.env.BASE_URL}site.webmanifest` },
      { rel: "shortcut icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
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
            name: SEO_SITE_NAME,
            description: SEO_DEFAULT_DESCRIPTION,
            ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}),
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
    const safePath = deepLink.startsWith("/") ? deepLink : "/" + deepLink;
    window.history.replaceState({}, "", import.meta.env.BASE_URL.replace(/\/$/, "") + safePath);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, []);
  useEffect(() => { let dead=false; const sync=async()=>{const token=await customerToken(false);if(dead)return;if(!token){rememberSubscriber(false);return}try{const a=await accountAccess(token);if(!dead)rememberSubscriber(Boolean(a.subscriber))}catch{}};void sync();const off=subscribeAccessChanged(()=>void sync());return()=>{dead=true;off()}; }, []);
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
  useEffect(() => { let dead=false; void publicCatalogue().then((x:any)=>{if(dead)return;const favicon=x?.appearance?.branding?.faviconUrl;if(!favicon)return;document.querySelectorAll<HTMLLinkElement>('link[rel="icon"],link[rel="shortcut icon"]').forEach(el=>{el.href=favicon});}).catch(()=>{});return()=>{dead=true}; }, []);
  useEffect(() => {
    const buildSha = import.meta.env["VITE_BUILD_SHA"]?.trim();
    if (!buildSha || typeof window === "undefined") return;

    let cancelled = false;

    fetch(import.meta.env.BASE_URL + "version.json", {
      cache: "no-store",
      headers: { "cache-control": "no-cache" },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { sha?: string } | null) => {
        if (!cancelled && payload?.sha && payload.sha !== buildSha) {
          window.location.reload();
        }
      })
      .catch(() => {
        // A version check must never break the application.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AvantTransitionEngine />
      <div key={location.pathname} className="avant-route-surface"><Outlet /></div>
    </QueryClientProvider>
  );
}
