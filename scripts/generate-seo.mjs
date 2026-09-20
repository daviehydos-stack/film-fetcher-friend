import { mkdirSync, writeFileSync } from "node:fs";

const configuredOrigin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const productionOrigin = configuredOrigin || "https://www.avantcinema.com";
const siteUrl = new URL(productionOrigin);
const basePath = siteUrl.pathname.replace(/\/$/, "");
const supabaseUrl = "https://bnuyhrsezkepsaebwlmu.supabase.co";

// Only canonical, indexable landing pages belong here. Legacy title routes are
// intentionally omitted: they declare noindex and canonicalize to /title/:slug.
const staticPaths = [
  "/",
  "/movies",
  "/tv-shows",
  "/about",
  "/contact",
  "/betterlife-episodes",
  "/this-is-life-episodes",
  "/watch-free",
];

mkdirSync("public", { recursive: true });

const dateOnly = (value) => {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
};

const entries = new Map();
const addEntry = (path, lastmod) => {
  if (!path || !path.startsWith("/")) return;
  const current = entries.get(path);
  const next = dateOnly(lastmod);
  if (!current || (next && next > current)) entries.set(path, next);
};
staticPaths.forEach((path) => addEntry(path));

try {
  const response = await fetch(`${supabaseUrl}/functions/v1/catalogue-public`);
  if (response.ok) {
    const body = await response.json();
    const titles = (body?.titles || []).filter(
      (title) => title?.status === "published" && title?.slug,
    );

    for (const title of titles) {
      addEntry(`/title/${title.slug}`, title.updated_at || title.published_at || title.created_at);
    }

    const episodeLists = await Promise.all(
      titles.map(async (title) => {
        try {
          const r = await fetch(
            `${supabaseUrl}/functions/v1/catalogue-public?key=${encodeURIComponent(title.slug)}`,
          );
          if (!r.ok) return [];
          const d = await r.json();
          return (d?.episodes || [])
            .filter((episode) => episode?.status === "published")
            .sort((a, b) => (a.episode_number || 0) - (b.episode_number || 0))
            .map((episode, index) => ({
              path: `/episode/${title.slug}/${index + 1}`,
              lastmod: episode.updated_at || episode.visible_from || episode.created_at || title.updated_at,
            }));
        } catch {
          return [];
        }
      }),
    );
    episodeLists.flat().forEach(({ path, lastmod }) => addEntry(path, lastmod));
  }
} catch (error) {
  console.warn(
    "SEO: live catalogue unavailable; dynamic catalogue URLs will be omitted.",
    error?.message || error,
  );
}

try {
  const response = await fetch(`${supabaseUrl}/functions/v1/public-pages`);
  if (response.ok) {
    const body = await response.json();
    (body?.pages || [])
      .filter((page) => page?.status === "published" && page?.indexable !== false && page?.slug)
      .forEach((page) =>
        addEntry(`/${page.slug}`, page.updated_at || page.published_at || page.created_at),
      );
  }
} catch (error) {
  console.warn(
    "SEO: CMS pages unavailable; continuing without dynamic page URLs.",
    error?.message || error,
  );
}

const prefixed = (path) => `${basePath}${path === "/" ? "/" : path}`;

// Keep private/utility pages out of the sitemap and mark them noindex in their
// route metadata. Do not disallow them here: Google must be able to crawl a URL
// in order to see its noindex directive.
const robots = [
  "User-agent: *",
  `Allow: ${prefixed("/")}`,
  "",
  `Sitemap: ${productionOrigin}/sitemap.xml`,
  "",
].join("\n");
writeFileSync("public/robots.txt", robots);

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const urls = [...entries.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, lastmod]) => {
    const loc = escapeXml(`${productionOrigin}${path === "/" ? "/" : path}`);
    const modified = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : "";
    return `  <url><loc>${loc}</loc>${modified}</url>`;
  })
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`SEO: generated robots.txt and sitemap.xml for ${productionOrigin} (${entries.size} URLs).`);
