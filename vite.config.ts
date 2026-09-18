// @lovable.dev/vite-tanstack-config already includes the core TanStack Start,
// React, Tailwind, Nitro, env and path-alias plugins. Do not duplicate them here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    // GitHub project Pages is served below /film-fetcher-friend/.
    // Production server deployments continue to use the normal root base.
    base: isGitHubPages ? "/film-fetcher-friend/" : "/",
  },
  tanstackStart: {
    // Keep the real application SSR/server capable.
    server: { entry: "server" },

    // Pages is a static preview host. TanStack Start SPA mode generates the
    // hydration-aware shell instead of us fabricating an index.html.
    ...(isGitHubPages
      ? {
          spa: {
            enabled: true,
            prerender: {
              outputPath: "/index.html",
              crawlLinks: false,
              retryCount: 0,
            },
          },
          prerender: {
            enabled: true,
            crawlLinks: true,
            retryCount: 1,
            autoSubfolderIndex: true,
            filter: ({ path }) =>
              !path.startsWith("/admin") &&
              !path.startsWith("/checkout/") &&
              !path.startsWith("/payment/") &&
              !path.startsWith("/watch/") &&
              path !== "/search" &&
              path !== "/my-list",
          },
        }
      : {}),
  },
});
