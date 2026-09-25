const CACHE = "avant-shell-v10";
const RUNTIME = "avant-runtime-v10";
const MEDIA = "avant-media-v1";

const SHELL = [
  "./",
  "./movies",
  "./tv-shows",
  "./watch-free",
  "./site.webmanifest",
  "./favicon.ico",
  "./avant-movies-logo.png",
];

const MAX_RUNTIME = 160;
const MAX_MEDIA = 120;

const PRIVATE_PATHS = [
  "/admin",
  "/checkout",
  "/payment",
  "/account",
  "/my-list",
];

const WATCH_PATH = "/watch";

const SAFE_WARM = [
  "/",
  "/movies",
  "/tv-shows",
  "/watch-free",
];

function scopedPath(url) {
  const u =
    typeof url === "string"
      ? new URL(url, self.location.origin)
      : url;

  const scope = new URL(self.registration.scope)
    .pathname
    .replace(/\/$/, "");

  let p = u.pathname;

  if (scope && scope !== "/" && p.startsWith(scope)) {
    p = p.slice(scope.length) || "/";
  }

  return p.startsWith("/") ? p : "/" + p;
}

function matches(path, prefix) {
  return path === prefix || path.startsWith(prefix + "/");
}

function privatePath(path) {
  return PRIVATE_PATHS.some((p) => matches(path, p));
}

function watchPath(path) {
  return matches(path, WATCH_PATH);
}

function safeWarm(path) {
  return SAFE_WARM.includes(path);
}

async function trim(cache, max = MAX_RUNTIME) {
  const keys = await cache.keys();

  if (keys.length <= max) return;

  await Promise.all(
    keys
      .slice(0, keys.length - max)
      .map((key) => cache.delete(key))
  );
}

async function put(cache, key, res) {
  try {
    if (!res || !res.ok || res.type === "opaque") return;

    await cache.put(key, res);
    await trim(cache);
  } catch {
    // Cache failure must never break the website.
  }
}

/* -------------------------------------------------------
   INSTALL
------------------------------------------------------- */

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // A protected preview host may reject optional shell files (for example
      // site.webmanifest). One failed asset must never abort SW installation.
      await Promise.allSettled(
        SHELL.map(async (url) => {
          try {
            const response = await fetch(url, { cache: "no-cache" });
            if (response.ok) await cache.put(url, response);
          } catch {
            // Optional shell asset; continue installing.
          }
        }),
      );
      await self.skipWaiting();
    })
  );
});

/* -------------------------------------------------------
   ACTIVATE
------------------------------------------------------- */

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                ![CACHE, RUNTIME, MEDIA].includes(key)
            )
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* -------------------------------------------------------
   MESSAGES
------------------------------------------------------- */

self.addEventListener("message", (event) => {
  if (event.data?.type === "AVANT_CLEAR_RUNTIME") {
    event.waitUntil(caches.delete(RUNTIME));
  }

  if (
    event.data?.type === "AVANT_WARM_URLS" &&
    Array.isArray(event.data.urls)
  ) {
    event.waitUntil(
      caches.open(RUNTIME).then(async (cache) => {
        for (const raw of event.data.urls.slice(0, 20)) {
          try {
            const url = new URL(
              raw,
              self.location.origin
            );

            const path = scopedPath(url);

            if (
              url.origin !== self.location.origin ||
              !safeWarm(path)
            ) {
              continue;
            }

            const response = await fetch(url.toString(), {
              credentials: "same-origin",
              cache: "no-cache",
            });

            if (response.ok) {
              await put(
                cache,
                url.toString(),
                response.clone()
              );
            }
          } catch {
            // Warming failure is non-fatal.
          }
        }
      })
    );
  }
});

/* -------------------------------------------------------
   FETCH
------------------------------------------------------- */

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  const sameOrigin =
    url.origin === self.location.origin;

  const mediaHost =
    /^(?:res\.cloudinary\.com|i\.vimeocdn\.com|f\.vimeocdn\.com)$/.test(
      url.hostname
    );

  if (!sameOrigin && !mediaHost) return;

  const path = sameOrigin
    ? scopedPath(url)
    : url.pathname;

  /* ---------------------------------------------------
     MEDIA
  --------------------------------------------------- */

  if (
    mediaHost &&
    request.destination === "image"
  ) {
    event.respondWith(
      caches.open(MEDIA).then(async (cache) => {
        const cached = await cache.match(request);

        if (cached) {
          fetch(request)
            .then((response) => {
              const copy = response.clone();

              return put(
                cache,
                request,
                copy
              ).then(() =>
                trim(cache, MAX_MEDIA)
              );
            })
            .catch(() => {});

          return cached;
        }

        try {
          const response = await fetch(request);

          if (response.ok) {
            await put(
              cache,
              request,
              response.clone()
            );
          }

          await trim(cache, MAX_MEDIA);

          return response;
        } catch {
          return new Response("", {
            status: 504,
          });
        }
      })
    );

    return;
  }

  /* ---------------------------------------------------
     PRIVATE / PAYMENT ROUTES

     NEVER cache checkout, payments, account or admin.
  --------------------------------------------------- */

  if (privatePath(path)) {
    event.respondWith(
      fetch(request, {
        cache: "no-store",
      })
    );

    return;
  }

  /* ---------------------------------------------------
     WATCH ROUTES

     Always prefer the live network version.
  --------------------------------------------------- */

  if (watchPath(path)) {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match("./")
      )
    );

    return;
  }

  /* ---------------------------------------------------
     PAGE NAVIGATION

     Network first.
     Cache is only an offline fallback.

     IMPORTANT:
     Every response is cloned synchronously, before any
     further async work (caches.open, etc.) and before the
     response is returned to the browser. Cloning after an
     await/.then() hop risks the body already being locked
     by the browser's own consumption of the returned
     response, which throws:
     "Failed to execute 'clone' on 'Response':
      Response body is already used"
  --------------------------------------------------- */

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const clean = new URL(request.url);
        clean.search = "";

        const cached =
          (await caches.match(request)) ||
          (await caches.match(clean.toString()));

        try {
          const response = await fetch(request, {
            cache: "no-cache",
          });

          if (response.ok) {
            const copy = response.clone();

            caches
              .open(RUNTIME)
              .then((cache) =>
                put(
                  cache,
                  request,
                  copy
                )
              )
              .catch(() => {});
          }

          return response;
        } catch {
          return (
            cached ||
            caches.match("./")
          );
        }
      })()
    );

    return;
  }

  /* ---------------------------------------------------
     JS / CSS
  --------------------------------------------------- */

  if (/\.(?:js|css)$/i.test(path)) {
    // Hashed application chunks must never be served cache-first. Mixing a
    // previous deployment's runtime with a newer route chunk can crash the
    // router before the page renders. Always request the deployed asset.
    event.respondWith(
      fetch(request, { cache: "no-store" }).catch(async () => {
        const cached = await caches.match(request);
        return cached || new Response("", { status: 504 });
      })
    );

    return;
  }

  /* ---------------------------------------------------
     STATIC ASSETS
  --------------------------------------------------- */

  if (
    /\.(?:png|jpg|jpeg|webp|svg|ico|woff2?)$/i.test(
      path
    )
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();

              caches
                .open(RUNTIME)
                .then((cache) =>
                  put(
                    cache,
                    request,
                    copy
                  )
                )
                .catch(() => {});
            }

            return response;
          })
      )
    );
  }
});