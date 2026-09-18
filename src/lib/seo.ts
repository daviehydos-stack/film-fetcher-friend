import type { CatalogueTitle } from "./site-data";

export const SEO_SITE_NAME = "Avant Cinema";
export const SEO_BRAND = "Avant Movies";
export const SEO_DEFAULT_TITLE = "Avant Movies — It’s time to feel again";
export const SEO_DEFAULT_DESCRIPTION = "Stream independent Kenyan films and series from Avant Movies.";
export const SEO_ORIGIN = (import.meta.env.VITE_PUBLIC_SITE_URL || "https://www.avantcinema.com").replace(/\/$/, "");

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
    ...(image ? [{ property: "og:image", content: image }, { property: "og:image:alt", content: `${title} artwork` }, { property: "og:image:width", content: "1200" }, { property: "og:image:height", content: "630" }] : []),
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
    ...(item.previewYoutubeId ? {
      subjectOf: videoObjectSchema({
        name: `${item.title} ${item.trailerEmbedUrl ? "trailer" : "preview"}`,
        description: item.shortDescription,
        youtubeId: item.previewYoutubeId,
        duration: item.previewDuration ? secondsToIso(item.previewDuration) : undefined,
        pagePath: `/title/${item.slug}`,
        alreadyIsoDuration: true,
      }),
    } : {}),
  };
}

function secondsToIso(seconds: number) {
  const value = Math.max(0, Math.round(seconds));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const secs = value % 60;
  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}${secs ? `${secs}S` : "0S"}`;
}

function isoDuration(value?: string) {
  if (!value) return undefined;
  const parts = value.split(":").map(Number);
  if (parts.some(Number.isNaN)) return undefined;
  const seconds = parts.pop() || 0;
  const minutes = parts.pop() || 0;
  const hours = parts.pop() || 0;
  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}${seconds ? `${seconds}S` : ""}`;
}

export function youtubeThumbnail(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export function videoObjectSchema(input: { name: string; description: string; youtubeId: string; duration?: string; pagePath: string; episodeNumber?: number; seriesName?: string; alreadyIsoDuration?: boolean }) {
  const pageUrl = absoluteUrl(input.pagePath);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${input.youtubeId}`;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    thumbnailUrl: [youtubeThumbnail(input.youtubeId)],
    embedUrl,
    ...(pageUrl ? { url: pageUrl } : {}),
    ...((input.alreadyIsoDuration ? input.duration : isoDuration(input.duration)) ? { duration: input.alreadyIsoDuration ? input.duration : isoDuration(input.duration) } : {}),
    ...(input.episodeNumber ? { episodeNumber: input.episodeNumber } : {}),
    ...(input.seriesName ? { partOfSeries: { "@type": "TVSeries", name: input.seriesName } } : {}),
    publisher: { "@type": "Organization", name: SEO_SITE_NAME },
  };
}

export function episodeCollectionSchema(seriesName: string, description: string, pagePath: string, episodes: Array<{ title: string; youtubeId?: string; duration?: string }>) {
  return episodes.flatMap((episode, index) => episode.youtubeId ? [videoObjectSchema({
    name: episode.title,
    description,
    youtubeId: episode.youtubeId,
    duration: episode.duration,
    pagePath,
    episodeNumber: index + 1,
    seriesName,
  })] : []);
}
