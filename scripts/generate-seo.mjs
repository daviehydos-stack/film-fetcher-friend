import { mkdirSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";

const origin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const staticPaths = ["/", "/movies", "/tv-shows", "/about", "/contact", "/betterlife-episodes", "/this-is-life-episodes"];

mkdirSync("public", { recursive: true });

const source = await readFile(new URL("../src/lib/site-data.ts", import.meta.url), "utf8");
const catalogueBlock = source.split("export const catalogue: CatalogueTitle[] = [")[1]?.split("export const avantVideoLibrary")[0] || "";
const titleSlugs = [...catalogueBlock.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]);
const paths = [...new Set([...staticPaths, ...titleSlugs.map((slug) => `/title/${slug}`)])];

const robots = [
  "User-agent: *",
  "Allow: /",
  ...(origin ? ["", `Sitemap: ${origin}/sitemap.xml`] : []),
  "",
].join("\n");
writeFileSync("public/robots.txt", robots);

if (origin) {
  const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const urls = paths.map((path) => `  <url><loc>${escapeXml(origin + path)}</loc></url>`).join("\n");
  writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
} else {
  writeFileSync("public/sitemap.xml", "");
}
