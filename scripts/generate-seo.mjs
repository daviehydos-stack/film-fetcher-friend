import { mkdirSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";

const origin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const productionOrigin = origin || "https://www.avantcinema.com";
const supabaseUrl = "https://bnuyhrsezkepsaebwlmu.supabase.co";
const staticPaths = ["/", "/movies", "/tv-shows", "/about", "/contact", "/privacy", "/terms", "/betterlife-episodes", "/this-is-life-episodes", "/a-better-life", "/back-to-us", "/better-days", "/nairobby", "/this-is-life", "/watch-them-all", "/write-like-a-master"];

mkdirSync("public", { recursive: true });

const source = await readFile(new URL("../src/lib/site-data.ts", import.meta.url), "utf8");
const catalogueBlock =
  source.split("export const catalogue: CatalogueTitle[] = [")[1]?.split("export const avantVideoLibrary")[0] || "";
const titleSlugs = [...catalogueBlock.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]);

let liveSlugs = [];
try {
  const response = await fetch(`${supabaseUrl}/functions/v1/catalogue-public`);
  if (response.ok) {
    const body = await response.json();
    liveSlugs = (body?.titles || [])
      .filter((title) => title?.status === "published" && title?.slug)
      .map((title) => title.slug);
  }
} catch (error) {
  console.warn("SEO: live catalogue unavailable; using repository catalogue fallback.", error?.message || error);
}

const paths = [
  ...new Set([
    ...staticPaths,
    ...titleSlugs.map((slug) => `/title/${slug}`),
    ...liveSlugs.map((slug) => `/title/${slug}`),
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
