import { mkdirSync, writeFileSync } from "node:fs";

const origin = (process.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const staticPaths = ["/", "/movies", "/tv-shows", "/about", "/contact", "/privacy", "/terms", "/betterlife-episodes", "/this-is-life-episodes"];
const titleSlugs = ["back-to-us","nairobby","a-better-life","this-is-life","better-days","another-way","adui","relationship-goals","granted","best-friends-forever","isabella"];
const paths = [...staticPaths, ...titleSlugs.map((slug) => `/title/${slug}`)];

mkdirSync("public", { recursive: true });

const robots = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /admin",
  "Disallow: /checkout/",
  "Disallow: /payment/",
  "Disallow: /watch/",
  ...(origin ? ["", `Sitemap: ${origin}/sitemap.xml`] : []),
  "",
].join("\n");
writeFileSync("public/robots.txt", robots);

if (origin) {
  const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
  writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
} else {
  try { writeFileSync("public/sitemap.xml", ""); } catch {}
}
