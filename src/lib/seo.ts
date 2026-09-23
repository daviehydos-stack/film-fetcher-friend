import type { CatalogueTitle } from "./site-data";

export const SEO_SITE_NAME = "Avant Cinema";
export const SEO_BRAND = "Avant Cinema";
export const SEO_DEFAULT_TITLE = "Avant Cinema — It’s time to feel again";
export const SEO_DEFAULT_DESCRIPTION = "Watch independent Kenyan films, short films and original series on Avant Cinema — stories made in Kenya for audiences everywhere.";
export const SEO_ORIGIN = (import.meta.env["VITE_PUBLIC_SITE_URL"] || "https://avantmovies.vercel.app").replace(/\/$/, "");

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
  const socialImage = image ? (image.startsWith("http://") || image.startsWith("https://") ? image : absoluteUrl(image)) : undefined;
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SEO_SITE_NAME },
    ...(url ? [{ property: "og:url", content: url }] : []),
    ...(socialImage ? [{ property: "og:image", content: socialImage }, { property: "og:image:alt", content: `${title} artwork` }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(socialImage ? [{ name: "twitter:image", content: socialImage }, { name: "twitter:image:alt", content: `${title} artwork` }] : []),
  ];
}

export function titleSchema(item: CatalogueTitle) {
  const pageUrl = absoluteUrl(`/title/${item.slug}`);
  const images = [item.artwork, item.backdrop].filter(Boolean).map((url) =>
    url.startsWith("http://") || url.startsWith("https://") ? url : absoluteUrl(url)
  ).filter(Boolean);
  const base: any = {
    "@type": item.type === "movie" ? "Movie" : "TVSeries",
    "@id": pageUrl ? `${pageUrl}#title` : undefined,
    url: pageUrl,
    name: item.title,
    headline: item.title,
    description: item.synopsis || item.shortDescription,
    image: images,
    genre: item.genres,
    ...(item.year ? { dateCreated: item.year } : {}),
    ...(item.countries?.length ? { countryOfOrigin: item.countries.map((name) => ({ "@type": "Country", name })) } : {}),
    ...(item.shortDescription ? { abstract: item.shortDescription } : {}),
    ...(item.directors?.length ? { director: item.directors.map((name) => ({ "@type": "Person", name })) } : {}),
    ...(item.cast?.length ? { actor: item.cast.map((name) => ({ "@type": "Person", name })) } : {}),
    ...(item.creators?.length ? { creator: item.creators.map((name) => ({ "@type": "Person", name })) } : {}),
    ...(item.maturityRating ? { contentRating: item.maturityRating } : {}),
    ...(item.languages?.length ? { inLanguage: item.languages } : {}),
    publisher: { "@type": "Organization", name: SEO_SITE_NAME, ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}) },
    ...(item.type === "series" && item.episodes?.length ? {
      numberOfEpisodes: item.episodes.length,
      episode: item.episodes.map((episode, index) => ({
        "@type": "TVEpisode",
        name: episode.title,
        episodeNumber: index + 1,
        ...(episode.duration ? { duration: isoDuration(episode.duration) } : {}),
        ...(absoluteUrl(`/episode/${item.slug}/${index + 1}`) ? { url: absoluteUrl(`/episode/${item.slug}/${index + 1}`) } : {}),
      })),
    } : {}),
  };
  const previewId = item.previewYoutubeId;
  const previewVimeoId = item.previewVimeoId;
  if (previewId || previewVimeoId) base.trailer = videoObjectSchema({
    name: `${item.title} trailer`,
    description: item.shortDescription || item.synopsis || `Watch the ${item.title} trailer on Avant Cinema.`,
    youtubeId: previewId,
    vimeoId: previewVimeoId,
    duration: item.previewDuration ? secondsToIso(item.previewDuration) : undefined,
    pagePath: `/title/${item.slug}`,
    alreadyIsoDuration: true,
    thumbnailUrl: item.backdrop || item.artwork,
  });
  return base;
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
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function videoObjectSchema(input: { name: string; description: string; youtubeId?: string; vimeoId?: string; duration?: string | undefined; pagePath: string; episodeNumber?: number; seriesName?: string; seriesPath?: string; alreadyIsoDuration?: boolean; uploadDate?: string; thumbnailUrl?: string }) {
  const pageUrl = absoluteUrl(input.pagePath);
  const uploadDate = input.uploadDate || new Date().toISOString();
  const embedUrl = input.youtubeId ? `https://www.youtube-nocookie.com/embed/${input.youtubeId}` : input.vimeoId ? `https://player.vimeo.com/video/${input.vimeoId}` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    thumbnailUrl: [input.thumbnailUrl || (input.youtubeId ? youtubeThumbnail(input.youtubeId) : undefined)].filter(Boolean),
    uploadDate,
    ...(embedUrl ? { embedUrl } : {}),
    ...(pageUrl ? { url: pageUrl, mainEntityOfPage: pageUrl } : {}),
    ...((input.alreadyIsoDuration ? input.duration : isoDuration(input.duration)) ? { duration: input.alreadyIsoDuration ? input.duration : isoDuration(input.duration) } : {}),
    ...(input.episodeNumber ? { episodeNumber: input.episodeNumber } : {}),
    ...(input.seriesName ? { partOfSeries: { "@type": "TVSeries", name: input.seriesName, ...(input.seriesPath && absoluteUrl(input.seriesPath) ? { url: absoluteUrl(input.seriesPath) } : {}) } } : {}),
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
