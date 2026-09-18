import { mkdirSync, writeFileSync } from "node:fs";

const origin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const productionOrigin = origin || "https://www.avantcinema.com";
const supabaseUrl = "https://bnuyhrsezkepsaebwlmu.supabase.co";
const staticPaths = ["/", "/movies", "/tv-shows", "/about", "/contact", "/privacy", "/terms", "/betterlife-episodes", "/this-is-life-episodes", "/a-better-life", "/back-to-us", "/better-days", "/nairobby", "/this-is-life", "/watch-them-all", "/write-like-a-master"];

mkdirSync("public", { recursive: true });

let liveSlugs = [];
let livePages = [];
let liveEpisodes = [];
try {
  const response = await fetch(`${supabaseUrl}/functions/v1/catalogue-public`);
  if (response.ok) {
    const body = await response.json();
    liveSlugs = (body?.titles || []).filter((title) => title?.status === "published" && title?.slug).map((title) => title.slug);
    const episodeLists = await Promise.all(liveSlugs.map(async (slug) => { try { const r = await fetch(`${supabaseUrl}/functions/v1/catalogue-public?key=${encodeURIComponent(slug)}`); if (!r.ok) return []; const d=await r.json(); return (d?.episodes||[]).filter(e=>e?.status==="published").sort((a,b)=>(a.episode_number||0)-(b.episode_number||0)).map((e,i)=>`/episode/${slug}/${i+1}`); } catch { return []; } }));
    liveEpisodes=episodeLists.flat();
  }
} catch (error) {
  console.warn("SEO: live catalogue unavailable; dynamic catalogue URLs will be omitted.", error?.message || error);
}
try {
  const response = await fetch(`${supabaseUrl}/functions/v1/public-pages`);
  if (response.ok) {
    const body = await response.json();
    livePages = (body?.pages || []).filter((p) => p?.status === "published" && p?.indexable !== false && p?.slug).map((p) => `/${p.slug}`);
  }
} catch (error) {
  console.warn("SEO: CMS pages unavailable; continuing without dynamic page URLs.", error?.message || error);
}

const paths = [
  ...new Set([
    ...staticPaths,
    ...liveSlugs.map((slug) => `/title/${slug}`),
    ...liveEpisodes,
    ...livePages,
  ]),
];

const robots = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /admin",
  "Disallow: /account",
  "Disallow: /checkout/",
  "Disallow: /payment/",
  "Disallow: /watch/",
  "Disallow: /my-list",
  "Disallow: /search",
  "",
  `Sitemap: ${productionOrigin}/sitemap.xml`,
  "",
].join("\\n");
writeFileSync("public/robots.txt", robots);

const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const today = new Date().toISOString().slice(0, 10);
const urls = paths
  .map((path) => `  <url><loc>${escapeXml(productionOrigin + path)}</loc><lastmod>${today}</lastmod></url>`)
  .join("\\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
