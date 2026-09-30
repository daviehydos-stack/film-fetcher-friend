import type { CatalogueTitle } from "./site-data";

/**
 * A series with several seasons is sold and browsed per season.
 * Example: "A Better Life" (2 seasons) is listed as
 *   "A Better Life — Season 1" (episodes 1–13)  and  "A Better Life — Season 2" (episodes 14–26).
 * Each card carries ONLY its own season's episodes, so nothing is mixed or duplicated.
 * Single-season series, movies and masterclasses are returned unchanged.
 */
/** Dedicated artwork per season product (season number -> image in /public). Seasons without an entry keep the series artwork. */
const SEASON_ARTWORK: Record<string, Record<number, string>> = {
  "a-better-life": { 2: "/a-better-life-season-2.jpg" },
};

/** Dedicated trailer per season (Vimeo id). Seasons without one use their own first episode as the preview, so seasons never share a trailer. */
const SEASON_TRAILER: Record<string, Record<number, string>> = {};

export function expandSeasonProducts(items: CatalogueTitle[]): CatalogueTitle[] {
  const out: CatalogueTitle[] = [];
  for (const item of items) {
    const isMasterclass = item.slug.includes("masterclass") || item.genres.some((g) => /masterclass/i.test(g));
    const episodes = item.episodes ?? [];
    const seasons = [...new Set(episodes.map((e) => e.season ?? 1))].sort((a, b) => a - b);
    if (item.type !== "series" || isMasterclass || seasons.length < 2) {
      out.push(item);
      continue;
    }
    for (const season of seasons) {
      const art = SEASON_ARTWORK[item.slug]?.[season];
      const seasonEpisodes = episodes.filter((e) => (e.season ?? 1) === season);
      const { trailerEmbedUrl: _sharedTrailer, previewVimeoId: _sharedPreview, ...base } = item;
      const ownPreview = season === seasons[0] ? undefined : SEASON_TRAILER[item.slug]?.[season] ?? seasonEpisodes.find((e) => e.vimeoVideoId)?.vimeoVideoId;
      out.push({
        ...(season === seasons[0] ? item : base),
        ...(ownPreview ? { previewVimeoId: ownPreview, trailerEmbedUrl: "https://player.vimeo.com/video/" + ownPreview } : {}),
        ...(art ? { artwork: art, backdrop: art } : {}),
        id: `${item.id}::s${season}`,
        title: `${item.title} — Season ${season}`,
        episodes: episodes.filter((e) => (e.season ?? 1) === season),
      });
    }
  }
  return out;
}
