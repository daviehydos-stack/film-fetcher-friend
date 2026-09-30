import { mkdirSync, writeFileSync } from "node:fs";

const configuredOrigin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const productionOrigin = configuredOrigin || "https://www.avantcinematic.com";
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
  "/watch-free",
  "/privacy",
  "/terms",
];

mkdirSync("public", { recursive: true });

const dateOnly = (value) => {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
};

const entries = new Map();
const genreEntries = new Set();
const personEntries = new Set();
const slugify = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const videoEntries = new Map();
const imageEntries = new Map();
const addEntry = (path, lastmod) => {
  if (!path || !path.startsWith("/")) return;
  const current = entries.get(path);
  const next = dateOnly(lastmod);
  if (!current || (next && next > current)) entries.set(path, next);
};
staticPaths.forEach((path) => addEntry(path));

// Safety net: these canonical titles stay in the sitemap even if the live
// catalogue API is unreachable during a build.
const fallbackTitleSlugs = [
  "a-better-life",
  "this-is-life",
  "back-to-us",
  "granted",
  "nairobby",
  "relationship-goals",
  "jennifer-gatero-writing-masterclass",
];
fallbackTitleSlugs.forEach((slug) => addEntry(`/title/${slug}`));


try {
  const response = await fetch(`${supabaseUrl}/functions/v1/catalogue-public`);
  if (response.ok) {
    const body = await response.json();
    const norm = (x) => String(x || "").toLowerCase().replace(/\btrailer\b|\bthe\b|\ba\b/g, " ").replace(/[^a-z0-9]/g, "");
    const isTrailerTitle = (t) => /trailer/i.test(`${t?.title} ${t?.slug}`);
    const rawTitles = body?.titles || [];
    const trailerFor = new Map();
    for (const t of rawTitles.filter(isTrailerTitle)) {
      const parent = rawTitles.find((x) => x !== t && !isTrailerTitle(x) && norm(x.title) === norm(t.title));
      if (parent && t.vimeo_video_id) trailerFor.set(parent.slug, String(t.vimeo_video_id));
    }
    const titles = rawTitles.filter((title) => !isTrailerTitle(title)).filter((title) => title?.status === "published" && title?.slug && (!title?.scheduled_publish_at || new Date(title.scheduled_publish_at).getTime() <= Date.now()));

    for (const title of titles) {
      const path = `/title/${title.slug}`;
      addEntry(path, title.updated_at || title.scheduled_publish_at || title.published_at || title.created_at);
      (title.genres || []).forEach((genre) => { const slug = slugify(genre); if (slug) genreEntries.add(slug); });
      [...(title.cast_names || []), ...(title.director_names || []), ...(title.creator_names || [])].forEach((person) => { const slug = slugify(person); if (slug) personEntries.add(slug); });
      const images = [title.poster_url, title.backdrop_url].filter(Boolean);
      if (images.length) imageEntries.set(path, [...new Set(images)]);
      const isFree = (title.genres || []).some((g) => /free to watch/i.test(g)) || ["granted", "relationship-goals"].includes(title.slug);
      // The public catalogue API does not expose every trailer, so known ones are listed here as a safety net.
      const knownTrailers = { "back-to-us": "1189285049", "a-better-life": "1229459523" };
      const trailerId = title.trailer_vimeo_id || trailerFor.get(title.slug) || knownTrailers[title.slug];
      const videoId = trailerId || (isFree ? title.vimeo_video_id : undefined);
      const player = videoId ? `https://player.vimeo.com/video/${videoId}` : undefined;
      const thumb = title.backdrop_url || title.poster_url;
      if (player && thumb) videoEntries.set(path, {
        title: trailerId ? `${title.title} — Official Trailer | Avant Cinema` : `${title.title} — Watch Free | Avant Cinema`,
        description: title.short_description || title.synopsis || `Watch ${title.title} on Avant Cinema.`,
        thumbnail: thumb,
        player,
        paid: false,
        publicationDate: title.scheduled_publish_at || title.published_at || title.created_at,
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
          const seasonNo = (episode) => (d?.seasons || []).find((season) => season.id === episode.season_id)?.season_number || 1;
          const isFreeSeries = (title.genres || []).some((g) => /free to watch/i.test(g));
          return (d?.episodes || [])
            .filter((episode) => episode?.status === "published" && (!episode.visible_from || new Date(episode.visible_from).getTime() <= Date.now()))
            .sort((a, b) => seasonNo(a) - seasonNo(b) || (a.episode_number || 0) - (b.episode_number || 0))
            .map((episode, index) => {
              const episodeKey = episode.legacy_key || episode.id || `${title.slug}-${index + 1}`;
              const episodePath = `/episode/${title.slug}/${index + 1}`;
              const episodeThumb = episode.thumbnail_url || title.backdrop_url || title.poster_url;
              const episodePlayer = episode.vimeo_video_id
                ? `https://player.vimeo.com/video/${episode.vimeo_video_id}`
                : undefined;
              if (episodeThumb) imageEntries.set(episodePath, [episodeThumb]);
              if (episodePlayer && episodeThumb) videoEntries.set(episodePath, {
                title: `${episode.title} — ${title.title} | Avant Cinema`,
                description: episode.description || `Watch ${episode.title} from ${title.title} on Avant Cinema.`,
                thumbnail: episodeThumb,
                player: episodePlayer,
                publicationDate: episode.visible_from || episode.created_at || title.published_at || title.created_at,
                duration: Number(episode.duration_seconds) > 0 ? Number(episode.duration_seconds) : undefined,
                paid: !isFreeSeries,
              });
              return {
                path: episodePath,
                lastmod: episode.updated_at || episode.visible_from || episode.created_at || title.updated_at,
              };
            });
        } catch {
          return [];
        }
      }),
    );
    episodeLists.flat().forEach(({ path, lastmod }) => addEntry(path, lastmod));
    genreEntries.forEach((slug) => addEntry(`/genre/${slug}`));
    personEntries.forEach((slug) => addEntry(`/person/${slug}`));
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
  `Sitemap: ${productionOrigin}/pages-sitemap.xml`,
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

const videoTags = ["Kenyan movies", "Kenyan series", "African cinema", "Swahili drama", "Avant Cinema"];
const videoUrls = [...videoEntries.entries()].map(([path, video]) => {
  const loc = escapeXml(`${productionOrigin}${path}`);
  const published = video.publicationDate && !Number.isNaN(new Date(video.publicationDate).getTime()) ? `<video:publication_date>${escapeXml(new Date(video.publicationDate).toISOString())}</video:publication_date>` : "";
  const duration = video.duration ? `<video:duration>${Math.min(28800, Math.max(1, Math.round(video.duration)))}</video:duration>` : "";
  const tags = videoTags.map((tag) => `<video:tag>${escapeXml(tag)}</video:tag>`).join("");
  const extras = `<video:family_friendly>yes</video:family_friendly><video:requires_subscription>${video.paid ? "yes" : "no"}</video:requires_subscription><video:live>no</video:live><video:uploader info="${escapeXml(productionOrigin)}/">Avant Cinema</video:uploader>${tags}`;
  return `  <url><loc>${loc}</loc><video:video><video:thumbnail_loc>${escapeXml(video.thumbnail)}</video:thumbnail_loc><video:title>${escapeXml(video.title)}</video:title><video:description>${escapeXml(video.description.slice(0, 2048))}</video:description><video:player_loc>${escapeXml(video.player)}</video:player_loc>${duration}${published}${extras}</video:video></url>`;
}).join("\n");

writeFileSync("public/video-sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${videoUrls}\n</urlset>\n`);

writeFileSync(
  "public/pages-sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${escapeXml(productionOrigin)}/pages-sitemap.xml</loc></sitemap>\n  <sitemap><loc>${escapeXml(productionOrigin)}/video-sitemap.xml</loc></sitemap>\n  <sitemap><loc>${escapeXml(productionOrigin)}/image-sitemap.xml</loc></sitemap>\n</sitemapindex>\n`,
);

console.log(`SEO: generated robots.txt, sitemap index, pages-sitemap.xml, video-sitemap.xml and image-sitemap.xml for ${productionOrigin} (${entries.size} URLs, ${videoEntries.size} videos, ${imageEntries.size} image pages).`);
