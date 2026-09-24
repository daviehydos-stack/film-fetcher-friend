import { createFileRoute, redirect } from "@tanstack/react-router";
import { productForLegacyContent } from "@/lib/backend-catalogue-map";
import { resolveCatalogueKey } from "@/lib/avant-backend";

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

    const mapped = productForLegacyContent(slug) || slug;
    const resolved = await resolveCatalogueKey(slug).catch(() => null);
    const productId = resolved?.product?.id || mapped;

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
