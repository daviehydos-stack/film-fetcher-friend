import { useEffect, useState } from "react";
import { publicCatalogue } from "./avant-backend";
import { catalogue, type CatalogueTitle, type Episode } from "./site-data";

type PublicTitle = Record<string, unknown>;

function text(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function textList(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function numberValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function mapPublicEpisode(value: unknown): Episode | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const title = text(raw["title"]);
  if (!title) return null;
  const durationSeconds = numberValue(raw["duration_seconds"]);
  const season = numberValue(raw["season_number"]);
  const previewStart = numberValue(raw["preview_start_seconds"]);
  const previewDuration = numberValue(raw["preview_duration_seconds"]);
  const youtubeId = text(raw["youtube_video_id"]) || text(raw["youtubeId"]);
  const vimeoVideoId = text(raw["vimeo_video_id"]) || text(raw["vimeoVideoId"]);
  return {
    title,
    duration: text(raw["duration"]) || (durationSeconds ? `${Math.floor(durationSeconds / 60)}:${String(durationSeconds % 60).padStart(2, "0")}` : ""),
    ...(season !== undefined ? { season } : {}),
    ...(youtubeId ? { youtubeId } : {}),
    ...(vimeoVideoId ? { vimeoVideoId } : {}),
    ...(text(raw["thumbnail_url"]) ? { poster: text(raw["thumbnail_url"]) } : {}),
    ...(typeof raw["access_required"] === "boolean" ? { locked: raw["access_required"] } : {}),
    ...(text(raw["description"]) ? { description: text(raw["description"]) } : {}),
    ...(text(raw["legacy_key"]) ? { legacyKey: text(raw["legacy_key"]) } : {}),
    ...(previewStart !== undefined ? { previewStart } : {}),
    ...(previewDuration !== undefined ? { previewDuration } : {}),
  };
}

export function mapPublicTitle(raw: PublicTitle): CatalogueTitle | null {
  const slug = text(raw["slug"]);
  const title = text(raw["title"]);
  const contentType = raw["content_type"];
  if (!slug || !title || (contentType !== "movie" && contentType !== "series")) return null;

  const legacyKey = text(raw["legacy_key"]);
  const fallback = catalogue.find((item) => item.slug === slug || item.id === legacyKey);
  const youtubeVideoId = text(raw["youtube_video_id"]);
  const vimeoVideoId = text(raw["vimeo_video_id"]);
  const liveEpisodes = Array.isArray(raw["episodes"])
    ? raw["episodes"].map(mapPublicEpisode).filter((episode): episode is Episode => Boolean(episode))
    : undefined;
  const movieEpisode: Episode[] | undefined =
    contentType === "movie" && (youtubeVideoId || vimeoVideoId)
      ? [{ title, duration: "", ...(youtubeVideoId ? { youtubeId: youtubeVideoId } : {}), ...(vimeoVideoId ? { vimeoVideoId } : {}), locked: false, legacyKey: slug }]
      : undefined;

  return {
    ...fallback,
    id: legacyKey || slug,
    slug,
    title,
    type: contentType,
    ...(raw["year"] ? { year: String(raw["year"]) } : fallback?.year ? { year: fallback.year } : {}),
    genres: textList(raw["genres"]).length ? textList(raw["genres"]) : (fallback?.genres ?? []),
    synopsis: text(raw["synopsis"]) || fallback?.synopsis || "",
    shortDescription: text(raw["short_description"]) || fallback?.shortDescription || text(raw["synopsis"]) || "",
    artwork: text(raw["poster_url"]) || fallback?.artwork || "",
    backdrop: text(raw["backdrop_url"]) || fallback?.backdrop || text(raw["poster_url"]) || "",
    legacyPath: fallback?.legacyPath || `/${slug}`,
    featured: Boolean(raw["featured"]),
    available: raw["published"] !== false,
    ...(text(raw["trailer_youtube_id"])
      ? { trailerEmbedUrl: `https://www.youtube-nocookie.com/embed/${text(raw["trailer_youtube_id"])}?rel=0`, previewYoutubeId: text(raw["trailer_youtube_id"]) }
      : fallback?.trailerEmbedUrl
        ? { trailerEmbedUrl: fallback.trailerEmbedUrl, ...(fallback.previewYoutubeId ? { previewYoutubeId: fallback.previewYoutubeId } : {}) }
        : {}),
    ...(youtubeVideoId ? { youtubeVideoId } : {}),
    ...(vimeoVideoId ? { vimeoVideoId } : {}),
    ...(text(raw["quality_label"]) ? { quality: text(raw["quality_label"]) } : fallback?.quality ? { quality: fallback.quality } : {}),
    ...(text(raw["maturity_rating"]) ? { maturityRating: text(raw["maturity_rating"]) } : fallback?.maturityRating ? { maturityRating: fallback.maturityRating } : {}),
    ...(liveEpisodes?.length ? { episodes: liveEpisodes } : movieEpisode ? { episodes: movieEpisode } : fallback?.episodes ? { episodes: fallback.episodes } : {}),
  } as CatalogueTitle;
}

export function mergePublicCatalogue(payload: unknown) {
  const titles = payload && typeof payload === "object" && Array.isArray((payload as { titles?: unknown[] }).titles)
    ? (payload as { titles: PublicTitle[] }).titles.map(mapPublicTitle).filter((item): item is CatalogueTitle => Boolean(item))
    : [];
  return titles.length ? titles : catalogue;
}

export function isFreeTitle(item: CatalogueTitle) {
  if (item.type === "movie" && Boolean(item.youtubeVideoId || item.vimeoVideoId)) return true;
  return Boolean(item.episodes?.some(isFreeEpisode));
}

export function isFreeEpisode(episode: Episode | undefined) {
  return Boolean(episode && (episode.youtubeId || episode.vimeoVideoId) && episode.locked !== true);
}

export function useCatalogue() {
  const [items, setItems] = useState<CatalogueTitle[]>(catalogue);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;
    publicCatalogue()
      .then((payload) => {
        if (!active) return;
        setItems(mergePublicCatalogue(payload));
        setUsingFallback(false);
      })
      .catch(() => {
        if (active) setUsingFallback(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { items, loading, usingFallback };
}