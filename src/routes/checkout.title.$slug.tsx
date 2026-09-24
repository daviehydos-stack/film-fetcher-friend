import { createFileRoute, redirect } from "@tanstack/react-router";
import { productForLegacyContent } from "@/lib/backend-catalogue-map";

/**
 * Legacy checkout compatibility route.
 *
 * Old links used /checkout/title/:slug while the canonical checkout route is
 * /checkout/:productId. Resolve the slug first so old cards, bookmarks and
 * stale service-worker pages never fall through to the CMS/not-found route.
 */
export const Route = createFileRoute("/checkout/title/$slug")({
  loader: async ({ params, location }) => {
    const slug = String(params.slug || "").replace(/^\/+|\/+$/g, "");
    if (!slug) throw redirect({ to: "/" });

    // Redirect immediately from the legacy URL. Do not block this guard on network data.
    // Known catalogue slugs map locally to their canonical product id; unknown slugs
    // are still handed to the canonical checkout route, which resolves them there.
    const productId = productForLegacyContent(slug) || slug;

    const search = new URLSearchParams(location.searchStr || "");
    throw redirect({
      to: "/checkout/$productId",
      params: { productId },
      search: Object.fromEntries(search.entries()),
      replace: true,
    });
  },
  component: () => null,
});
