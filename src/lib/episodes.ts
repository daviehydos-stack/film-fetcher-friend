import type { CatalogueTitle, Episode } from "./site-data";

type RawRecord = Record<string, unknown>;

const stringValue = (value: unknown) => typeof value === "string" && value.trim() ? value : undefined;
const numberValue = (value: unknown) => typeof value === "number" && Number.isFinite(value) ? value : undefined;

export function episodeContentId(item: Pick<CatalogueTitle, "slug">, episode: Episode, absoluteIndex: number) {
  return episode.legacyKey || episode.id || `${item.slug}-${absoluteIndex + 1}`;
}

export function orderedEpisodes(item: Pick<CatalogueTitle, "slug" | "episodes">) {
  return (item.episodes ?? [])
    .map((episode, sourceIndex) => ({ episode, sourceIndex }))
    .sort((a, b) =>
      (a.episode.season ?? 1) - (b.episode.season ?? 1) ||
      (a.episode.episodeNumber ?? a.sourceIndex + 1) - (b.episode.episodeNumber ?? b.sourceIndex + 1) ||
      a.sourceIndex - b.sourceIndex,
    )
    .map(({ episode }, absoluteIndex) => ({
      episode,
      absoluteIndex,
      season: episode.season ?? 1,
      episodeNumber: episode.episodeNumber ?? absoluteIndex + 1,
      contentId: episodeContentId(item, episode, absoluteIndex),
    }));
}

export function mapResolvedEpisodes(rawEpisodes: unknown[], rawSeasons: unknown[] = []): Episode[] {
  const seasons = rawSeasons.filter((value): value is RawRecord => Boolean(value && typeof value === "object"));
  const seasonNumber = (seasonId: unknown) =>
    numberValue(seasons.find((season) => season["id"] === seasonId)?.["season_number"]) ?? 1;

  return rawEpisodes
    .filter((value): value is RawRecord => Boolean(value && typeof value === "object"))
    .map((raw, sourceIndex) => {
      const seconds = numberValue(raw["duration_seconds"]);
      const id = stringValue(raw["id"]);
      const youtubeId = stringValue(raw["youtube_video_id"]);
      const vimeoVideoId = stringValue(raw["vimeo_video_id"]);
      const poster = stringValue(raw["thumbnail_url"]);
      const description = stringValue(raw["description"]);
      const legacyKey = stringValue(raw["legacy_key"]);
      const previewYoutubeId = stringValue(raw["preview_youtube_id"]);
      const previewVimeoVideoId = stringValue(raw["preview_vimeo_video_id"]);
      const previewEmbedUrl = stringValue(raw["preview_embed_url"]) || stringValue(raw["trailer_embed_url"]);
      const previewStart = numberValue(raw["preview_start_seconds"]);
      const previewDuration = numberValue(raw["preview_duration_seconds"]);
      return {
        ...(id ? { id } : {}),
        title: stringValue(raw["title"]) || `Episode ${sourceIndex + 1}`,
        season: numberValue(raw["season_number"]) ?? seasonNumber(raw["season_id"]),
        episodeNumber: numberValue(raw["episode_number"]) ?? sourceIndex + 1,
        duration: stringValue(raw["duration"]) || (seconds ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}` : ""),
        ...(youtubeId ? { youtubeId } : {}),
        ...(vimeoVideoId ? { vimeoVideoId } : {}),
        ...(poster ? { poster } : {}),
        ...(typeof raw["access_required"] === "boolean" ? { locked: raw["access_required"] } : {}),
        ...(description ? { description } : {}),
        ...(legacyKey ? { legacyKey } : {}),
        ...(previewStart !== undefined ? { previewStart } : {}),
        ...(previewDuration !== undefined ? { previewDuration } : {}),
        ...(previewYoutubeId ? { previewYoutubeId } : {}),
        ...(previewVimeoVideoId ? { previewVimeoVideoId } : {}),
        ...(previewEmbedUrl ? { previewEmbedUrl } : {}),
      } satisfies Episode;
    })
    .sort((a, b) => (a.season ?? 1) - (b.season ?? 1) || (a.episodeNumber ?? 0) - (b.episodeNumber ?? 0));
}

export function episodeLabel(episode: Episode, fallbackNumber: number) {
  return `S${episode.season ?? 1} E${episode.episodeNumber ?? fallbackNumber}`;
}