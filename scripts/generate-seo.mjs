import { mkdirSync, writeFileSync } from "node:fs";

const configuredOrigin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const productionOrigin = configuredOrigin || "https://avantmovies.vercel.app";
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
const videoEntries = new Map();
const imageEntries = new Map();
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
      const path = `/title/${title.slug}`;
      addEntry(path, title.updated_at || title.published_at || title.created_at);
      const images = [title.poster_url, title.backdrop_url].filter(Boolean);
      if (images.length) imageEntries.set(path, [...new Set(images)]);
      const player = title.trailer_youtube_id
        ? `https://www.youtube-nocookie.com/embed/${title.trailer_youtube_id}`
        : title.trailer_vimeo_id
          ? `https://player.vimeo.com/video/${title.trailer_vimeo_id}`
          : undefined;
      const thumb = title.backdrop_url || title.poster_url || (title.trailer_youtube_id ? `https://i.ytimg.com/vi/${title.trailer_youtube_id}/hqdefault.jpg` : undefined);
      if (player && thumb) videoEntries.set(path, {
        title: `${title.title} — Official Trailer | Avant Movies`,
        description: title.short_description || title.synopsis || `Watch the official trailer for ${title.title} on Avant Movies.`,
        thumbnail: thumb,
        player,
        publicationDate: title.published_at || title.created_at,
      });
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
  `Sitemap: ${productionOrigin}/video-sitemap.xml`,
  `Sitemap: ${productionOrigin}/image-sitemap.xml`,
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


const imageUrls = [...imageEntries.entries()].map(([path, images]) => {
  const loc = escapeXml(`${productionOrigin}${path}`);
  const imageXml = images.map((image) => `<image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`).join("");
  return `  <url><loc>${loc}</loc>${imageXml}</url>`;
}).join("\n");
writeFileSync("public/image-sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${imageUrls}\n</urlset>\n`);

const videoUrls = [...videoEntries.entries()].map(([path, video]) => {
  const loc = escapeXml(`${productionOrigin}${path}`);
  const published = video.publicationDate ? `<video:publication_date>${escapeXml(new Date(video.publicationDate).toISOString())}</video:publication_date>` : "";
  return `  <url><loc>${loc}</loc><video:video><video:thumbnail_loc>${escapeXml(video.thumbnail)}</video:thumbnail_loc><video:title>${escapeXml(video.title)}</video:title><video:description>${escapeXml(video.description.slice(0, 2048))}</video:description><video:player_loc>${escapeXml(video.player)}</video:player_loc>${published}</video:video></url>`;
}).join("\n");
writeFileSync("public/video-sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${videoUrls}\n</urlset>\n`);

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for ${productionOrigin} (${entries.size} URLs, ${videoEntries.size} videos, ${imageEntries.size} image pages).`);
