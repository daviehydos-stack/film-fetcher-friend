import { useEffect, useState } from "react";
import { publicCatalogue } from "./avant-backend";
import { normalizePublicCatalogue } from "./trailers";
import { catalogue, type CatalogueTitle, type Episode } from "./site-data";

type PublicTitle = Record<string, unknown>;

function text(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function textList(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function optimizedImage(value: unknown, width = 720) {
  const src = typeof value === "string" ? value : "";
  if (!src) return undefined;
  try {
    const u = new URL(src);
    if (u.hostname === "drive.google.com" && u.pathname === "/thumbnail") u.searchParams.set("sz", `w${Math.min(width, 1280)}`);
    if (u.hostname === "i.vimeocdn.com") { u.searchParams.set("mw", String(Math.min(width, 1280))); u.searchParams.set("q", "76"); }
    if (u.hostname === "res.cloudinary.com" && u.pathname.includes("/upload/") && !u.pathname.includes("/f_auto,")) {
      u.pathname = u.pathname.replace("/upload/", `/upload/f_auto,q_auto:eco,c_fill,w_${Math.min(width, 1280)},dpr_auto/`);
    }
    return u.toString();
  } catch { return src; }
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
  const vimeoVideoId = text(raw["vimeo_video_id"]) || text(raw["vimeoVideoId"]);
  const episodeLegacyKey = text(raw["legacy_key"]);
  const s2Art = /^a-better-life-s2e(\d+)$/.exec(episodeLegacyKey ?? "");
  const poster = s2Art ? `/a-better-life-s2/ep${s2Art[1]!.padStart(2, "0")}.jpg` : optimizedImage(raw["thumbnail_url"], 640);
  const description = text(raw["description"]);
  const episodeId = text(raw["id"]);
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
    ...(vimeoVideoId ? { vimeoVideoId } : {}),
    ...(poster ? { poster } : {}),
    locked: typeof raw["access_required"] === "boolean" ? raw["access_required"] : true,
    ...(description ? { description } : {}),
    ...(episodeLegacyKey ? { legacyKey: episodeLegacyKey } : {}),
    ...(previewStart !== undefined ? { previewStart } : {}),
    ...(previewDuration !== undefined ? { previewDuration } : {}),
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

  const fallbackTitle = catalogue.find((item) => item.slug === slug);
  const legacyKey = text(raw["legacy_key"]);
  const vimeoVideoId = text(raw["vimeo_video_id"]) || fallbackTitle?.vimeoVideoId;
  const previewStart = numberValue(raw["preview_start_seconds"]);
  const previewDuration = numberValue(raw["preview_duration_seconds"]);
  const rawLiveEpisodes = Array.isArray(raw["episodes"])
    ? raw["episodes"].map(mapPublicEpisode).filter((episode): episode is Episode => Boolean(episode))
    : undefined;
  const fallbackEpisodes = fallbackTitle?.episodes ?? [];
  const liveEpisodes = rawLiveEpisodes?.length
    ? rawLiveEpisodes.map((episode, index) => {
        const fallbackEpisode =
          fallbackEpisodes.find((candidate) =>
            (candidate.season ?? 1) === (episode.season ?? 1) &&
            (candidate.episodeNumber ?? index + 1) === (episode.episodeNumber ?? index + 1),
          ) ?? fallbackEpisodes[index];
        return {
          ...(fallbackEpisode ?? {}),
          ...episode,
          poster:
            episode.poster ||
            fallbackEpisode?.poster ||
            fallbackTitle?.backdrop ||
            fallbackTitle?.artwork ||
            undefined,
        } satisfies Episode;
      })
    : fallbackEpisodes.length
      ? fallbackEpisodes.map((episode) => ({
          ...episode,
          poster: episode.poster || fallbackTitle?.backdrop || fallbackTitle?.artwork || undefined,
        }))
      : undefined;
  const accessRequired = typeof raw["access_required"] === "boolean" ? raw["access_required"] : (fallbackTitle?.accessRequired ?? true);
  // Dedicated trailer: attached trailer record, the trailer field, or the verified bundled trailer.
  // It must never be the protected full video or one of its episodes, so a trailer can't unlock or expose paid content.
  const protectedVideoIds = new Set([vimeoVideoId, ...(liveEpisodes ?? []).map((episode) => episode.vimeoVideoId)].filter(Boolean) as string[]);
  const trailerCandidate = text(raw["preview_vimeo_video_id"]) || text(raw["previewVimeoVideoId"]) || text(raw["trailer_vimeo_video_id"]) || text(raw["trailer_vimeo_id"]) || fallbackTitle?.previewVimeoId;
  const previewVimeoId = text(raw["preview_mode"]) !== "none" && trailerCandidate && !protectedVideoIds.has(trailerCandidate) ? trailerCandidate : undefined;
  const trailerEmbedUrl = text(raw["trailer_embed_url"]) || text(raw["trailerEmbedUrl"]) || (previewVimeoId ? `https://player.vimeo.com/video/${previewVimeoId}` : undefined);
  const fallbackArtwork = optimizedImage(raw["poster_url"], 560) || fallbackTitle?.artwork || "";
  const fallbackBackdrop =
    optimizedImage(raw["backdrop_url"], 1120) ||
    optimizedImage(raw["poster_url"], 1120) ||
    fallbackTitle?.backdrop ||
    fallbackArtwork;
  const movieEpisode: Episode[] | undefined =
    contentType === "movie" && vimeoVideoId
      ? [{ title, duration: "", vimeoVideoId, poster: fallbackBackdrop || fallbackArtwork || undefined, locked: accessRequired, legacyKey: slug }]
      : undefined;

  return {
    id: legacyKey || slug,
    slug,
    title,
    type: contentType,
    ...(raw["year"] ? { year: String(raw["year"]) } : {}),
    genres: textList(raw["genres"]).length ? textList(raw["genres"]) : (fallbackTitle?.genres ?? []),
    synopsis: text(raw["synopsis"]) || fallbackTitle?.synopsis || "",
    shortDescription: text(raw["short_description"]) || text(raw["synopsis"]) || fallbackTitle?.shortDescription || "",
    artwork: fallbackArtwork,
    backdrop: fallbackBackdrop,
    legacyPath: `/${slug}`,
    featured: Boolean(raw["featured"]),
    available: raw["published"] !== false && (!text(raw["scheduled_publish_at"]) || new Date(text(raw["scheduled_publish_at"]) ?? 0).getTime() <= Date.now()),
    accessRequired,
    ...(textList(raw["cast_names"]).length ? { cast: textList(raw["cast_names"]) } : {}),
    ...(textList(raw["creator_names"]).length ? { creators: textList(raw["creator_names"]) } : {}),
    ...(textList(raw["director_names"]).length ? { directors: textList(raw["director_names"]) } : {}),
    ...(textList(raw["languages"]).length ? { languages: textList(raw["languages"]) } : {}),
    ...(textList(raw["countries"]).length ? { countries: textList(raw["countries"]) } : {}),
    ...(text(raw["scheduled_publish_at"]) ? { releaseAt: text(raw["scheduled_publish_at"]) } : {}),
    ...(raw["story_world"] && typeof raw["story_world"] === "object" ? { storyWorld: raw["story_world"] as CatalogueTitle["storyWorld"] } : {}),
    ...(vimeoVideoId ? { vimeoVideoId } : {}),
    ...(previewVimeoId ? { previewVimeoId } : {}),
    ...(trailerEmbedUrl ? { trailerEmbedUrl } : {}),
    // A dedicated trailer always starts at 0; the stored start applies only to previews cut from the source video.
    ...(previewStart !== undefined && !previewVimeoId ? { previewStart } : {}),
    ...(previewDuration !== undefined ? { previewDuration } : {}),
    ...(text(raw["quality_label"]) ? { quality: text(raw["quality_label"]) } : {}),
    ...(text(raw["maturity_rating"]) ? { maturityRating: text(raw["maturity_rating"]) } : {}),
    ...(liveEpisodes?.length ? { episodes: liveEpisodes } : movieEpisode ? { episodes: movieEpisode } : fallbackTitle?.episodes?.length ? { episodes: fallbackTitle.episodes } : {}),
  } as CatalogueTitle;
}

export function mergePublicCatalogue(rawPayload: unknown) {
  // Trailers are attached to their parent title and never listed as products (also cleans older cached payloads).
  const payload = normalizePublicCatalogue(rawPayload);
  const titles = payload && typeof payload === "object" && Array.isArray((payload as { titles?: unknown[] }).titles)
    ? (payload as { titles: PublicTitle[] }).titles.map(mapPublicTitle).filter((item): item is CatalogueTitle => Boolean(item))
    : [];
  return titles;
}

export function isFreeTitle(item: CatalogueTitle) {
  // Editorial rule: Watch for Free is intentionally limited to these two titles.
  return item.slug === "relationship-goals" || item.slug === "granted";
}

export function isFreeEpisode(episode: Episode | undefined) {
  return Boolean(episode?.vimeoVideoId && episode.locked !== true);
}

export function freeContentId(item: CatalogueTitle) {
  // Never infer public access from episode metadata alone. Only the two
  // editorially approved Watch for Free titles may return a public watch ID.
  if (!isFreeTitle(item)) return null;
  if (item.type === "movie") return item.slug;
  const index = item.episodes?.findIndex((episode) => Boolean(episode?.vimeoVideoId)) ?? -1;
  if (index < 0) return null;
  return item.episodes?.[index]?.legacyKey ?? `${item.slug}-${index + 1}`;
}

const CATALOGUE_CACHE_KEY = "avant_catalogue_cache_v2";
const CATALOGUE_CACHE_MAX_AGE = 1000 * 60 * 60;

function readCatalogueCache() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CATALOGUE_CACHE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { savedAt?: number; payload?: unknown };
    if (!saved.savedAt || Date.now() - saved.savedAt > CATALOGUE_CACHE_MAX_AGE) {
      localStorage.removeItem(CATALOGUE_CACHE_KEY);
      return null;
    }
    return { items: mergePublicCatalogue(saved.payload), savedAt: saved.savedAt };
  } catch { return null; }
}

export function useCatalogue() {
  const cached = typeof window !== "undefined" ? readCatalogueCache() : null;
  // Paint bundled catalogue immediately. Live data refreshes it in the background.
  const initialItems = cached?.items?.length ? cached.items : catalogue;
  const [items, setItems] = useState<CatalogueTitle[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [usingFallback, setUsingFallback] = useState(!cached?.items?.length);
  const [offline, setOffline] = useState(false);
  useEffect(() => { setOffline(!navigator.onLine); }, []);

  useEffect(() => {
    let active = true;
    const refresh = () => {
      if (!navigator.onLine) { setOffline(true); return; }
      setOffline(false);
      publicCatalogue()
        .then((payload) => {
          if (!active) return;
          setItems(mergePublicCatalogue(payload));
          setUsingFallback(false);
          try { localStorage.setItem(CATALOGUE_CACHE_KEY, JSON.stringify({ savedAt: Date.now(), payload })); } catch {}
        })
        .catch(() => { if (active) { setUsingFallback(true); setItems((current) => current.length ? current : catalogue); } });
    };
    refresh();
    window.addEventListener("online", refresh);
    const onOffline = () => setOffline(true);
    window.addEventListener("offline", onOffline);
    return () => { active = false; window.removeEventListener("online", refresh); window.removeEventListener("offline", onOffline); };
  }, []);

  return { items, loading, usingFallback, offline };
}