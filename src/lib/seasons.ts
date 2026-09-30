import type { CatalogueTitle } from "./site-data";

/**
 * A series with several seasons is sold and browsed per season.
 * Example: "A Better Life" (2 seasons) is listed as
 *   "A Better Life — Season 1" (episodes 1–13)  and  "A Better Life — Season 2" (episodes 14–26).
 * Each card carries ONLY its own season's episodes, so nothing is mixed or duplicated.
 * Single-season series, movies and masterclasses are returned unchanged.
 */
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
      out.push({
        ...item,
        id: `${item.id}::s${season}`,
        title: `${item.title} — Season ${season}`,
        episodes: episodes.filter((e) => (e.season ?? 1) === season),
      });
    }
  }
  return out;
}
