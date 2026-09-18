import type { CatalogueTitle } from "./site-data";

export const SEO_SITE_NAME = "Avant Cinema";
export const SEO_BRAND = "Avant Movies";
export const SEO_DEFAULT_TITLE = "Avant Movies — It’s time to feel again";
export const SEO_DEFAULT_DESCRIPTION = "Stream independent Kenyan films and series from Avant Movies.";
export const SEO_ORIGIN = (import.meta.env.VITE_PUBLIC_SITE_URL || "").replace(/\/$/, "");

export function absoluteUrl(path: string) {
  if (!SEO_ORIGIN) return undefined;
  return `${SEO_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function publicPageLinks(path: string) {
  const canonical = absoluteUrl(path);
  return canonical ? [{ rel: "canonical", href: canonical }] : [];
}

export function publicPageMeta(path: string, title: string, description: string, image?: string, type = "website") {
  const url = absoluteUrl(path);
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SEO_SITE_NAME },
    ...(url ? [{ property: "og:url", content: url }] : []),
    ...(image ? [{ property: "og:image", content: image }, { property: "og:image:alt", content: `${title} artwork` }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(image ? [{ name: "twitter:image", content: image }, { name: "twitter:image:alt", content: `${title} artwork` }] : []),
  ];
}

export function titleSchema(item: CatalogueTitle) {
  return {
    "@context": "https://schema.org",
    "@type": item.type === "movie" ? "Movie" : "TVSeries",
    name: item.title,
    description: item.synopsis,
    image: [item.artwork, item.backdrop].filter(Boolean),
    genre: item.genres,
    ...(item.year ? { dateCreated: item.year } : {}),
    ...(item.type === "series" && item.episodes?.length ? { numberOfEpisodes: item.episodes.length } : {}),
    ...(absoluteUrl(`/title/${item.slug}`) ? { url: absoluteUrl(`/title/${item.slug}`) } : {}),
    publisher: { "@type": "Organization", name: SEO_SITE_NAME },
  };
}
