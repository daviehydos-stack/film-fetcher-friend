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

export function mapPublicEpisode(value: unknown): Episode | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const title = text(raw["title"]);
  if (!title) return null;
  const durationSeconds = numberValue(raw["duration_seconds"]);
  const season = numberValue(raw["season_number"]);
  const episodeNumber = numberValue(raw["episode_number"]);
  const previewStart = numberValue(raw["preview_start_seconds"]);
  const previewDuration = numberValue(raw["preview_duration_seconds"]);
  const youtubeId = text(raw["youtube_video_id"]) || text(raw["youtubeId"]);
  const vimeoVideoId = text(raw["vimeo_video_id"]) || text(raw["vimeoVideoId"]);
  const poster = text(raw["thumbnail_url"]);
  const description = text(raw["description"]);
  const episodeLegacyKey = text(raw["legacy_key"]);
  const episodeId = text(raw["id"]);
  const previewYoutubeId = text(raw["preview_youtube_id"]);
  const previewVimeoVideoId = text(raw["preview_vimeo_video_id"]);
  const previewEmbedUrl = text(raw["preview_embed_url"]) || text(raw["trailer_embed_url"]);
  const introStart = numberValue(raw["intro_start_seconds"]);
  const introEnd = numberValue(raw["intro_end_seconds"]);
  const recapStart = numberValue(raw["recap_start_seconds"]);
  const recapEnd = numberValue(raw["recap_end_seconds"]);
  const creditsStart = numberValue(raw["credits_start_seconds"]);
  return {
    title,
    duration: text(raw["duration"]) || (durationSeconds ? `${Math.floor(durationSeconds / 60)}:${String(durationSeconds % 60).padStart(2, "0")}` : ""),
    ...(season !== undefined ? { season } : {}),
    ...(episodeNumber !== undefined ? { episodeNumber } : {}),
    ...(episodeId ? { id: episodeId } : {}),
    ...(youtubeId ? { youtubeId } : {}),
    ...(vimeoVideoId ? { vimeoVideoId } : {}),
    ...(poster ? { poster } : {}),
    locked: typeof raw["access_required"] === "boolean" ? raw["access_required"] : true,
    ...(description ? { description } : {}),
    ...(episodeLegacyKey ? { legacyKey: episodeLegacyKey } : {}),
    ...(previewStart !== undefined ? { previewStart } : {}),
    ...(previewDuration !== undefined ? { previewDuration } : {}),
    ...(previewYoutubeId ? { previewYoutubeId } : {}),
    ...(previewVimeoVideoId ? { previewVimeoVideoId } : {}),
    ...(previewEmbedUrl ? { previewEmbedUrl } : {}),
    ...(introStart !== undefined ? { introStart } : {}),
    ...(introEnd !== undefined ? { introEnd } : {}),
    ...(recapStart !== undefined ? { recapStart } : {}),
    ...(recapEnd !== undefined ? { recapEnd } : {}),
    ...(creditsStart !== undefined ? { creditsStart } : {}),
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
  const accessRequired = typeof raw["access_required"] === "boolean" ? raw["access_required"] : true;
  const movieEpisode: Episode[] | undefined =
    contentType === "movie" && (youtubeVideoId || vimeoVideoId)
      ? [{ title, duration: "", ...(youtubeVideoId ? { youtubeId: youtubeVideoId } : {}), ...(vimeoVideoId ? { vimeoVideoId } : {}), locked: accessRequired, legacyKey: slug }]
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
    available: raw["published"] !== false && (!text(raw["scheduled_publish_at"]) || new Date(text(raw["scheduled_publish_at"]) ?? 0).getTime() <= Date.now()),
    accessRequired,
    ...(textList(raw["cast_names"]).length ? { cast: textList(raw["cast_names"]) } : fallback?.cast ? { cast: fallback.cast } : {}),
    ...(textList(raw["creator_names"]).length ? { creators: textList(raw["creator_names"]) } : fallback?.creators ? { creators: fallback.creators } : {}),
    ...(textList(raw["director_names"]).length ? { directors: textList(raw["director_names"]) } : fallback?.directors ? { directors: fallback.directors } : {}),
    ...(textList(raw["languages"]).length ? { languages: textList(raw["languages"]) } : fallback?.languages ? { languages: fallback.languages } : {}),
    ...(textList(raw["countries"]).length ? { countries: textList(raw["countries"]) } : {}),
    ...(text(raw["scheduled_publish_at"]) ? { releaseAt: text(raw["scheduled_publish_at"]) } : {}),
    ...(raw["story_world"] && typeof raw["story_world"] === "object" ? { storyWorld: raw["story_world"] as CatalogueTitle["storyWorld"] } : fallback?.storyWorld ? { storyWorld: fallback.storyWorld } : {}),
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
  if (item.type === "movie") return item.accessRequired === false || isFreeEpisode(item.episodes?.[0]);
  return Boolean(item.episodes?.some(isFreeEpisode));
}

export function isFreeEpisode(episode: Episode | undefined) {
  return Boolean(episode && (episode.youtubeId || episode.vimeoVideoId) && episode.locked !== true);
}

export function freeContentId(item: CatalogueTitle) {
  if (item.type === "movie" && isFreeTitle(item)) return item.slug;
  const index = item.episodes?.findIndex(isFreeEpisode) ?? -1;
  if (index < 0) return null;
  return item.episodes?.[index]?.legacyKey ?? `${item.slug}-${index + 1}`;
}

export function useCatalogue() {
  const [items, setItems] = useState<CatalogueTitle[]>(catalogue);
  // Render the bundled catalogue immediately, then refresh it quietly.
  const [loading, setLoading] = useState(false);
  const [usingFallback, setUsingFallback] = useState(true);

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