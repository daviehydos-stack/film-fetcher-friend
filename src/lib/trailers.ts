/**
 * Dedicated trailers are media attached to their parent title, never catalogue products.
 *
 * A record is treated as a trailer when:
 *  - it is explicitly tagged with the "Trailer" genre (Admin > Content > category "Trailer / Preview"), or
 *  - its title/slug ends with "Trailer" AND a parent title with the same name exists
 *    (e.g. "A Better Life Trailer" -> "A Better Life", "Nairobby Trailer" -> "Nairobby").
 * The trailer's Vimeo video becomes the parent's preview. Nothing is deleted; the record stays in Admin.
 */
type Loose = { title?: unknown; slug?: unknown; genres?: unknown };

const norm = (value: unknown) => String(value ?? "").toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
const hasTrailerWord = (value: unknown) => /(^| )trailers?$/.test(norm(value));
const nameKey = (value: unknown) => norm(value).replace(/ ?\btrailers?$/, "").replace(/^(a|an|the) /, "").trim();

export const TRAILER_GENRE = "Trailer";

export function isExplicitTrailer(t: Loose) {
  return Array.isArray(t.genres) && t.genres.some((g) => /^trailers?$/i.test(String(g).trim()));
}

/** True when the record looks like a trailer by name (whether or not a parent exists). */
export function looksLikeTrailer(t: Loose) {
  return isExplicitTrailer(t) || hasTrailerWord(t.title) || hasTrailerWord(t.slug);
}

const cache = new WeakMap<object, unknown>();

/** Hides trailer records from the public catalogue and attaches their video to the parent title as its preview. */
export function normalizePublicCatalogue<T>(payload: T): T {
  const source = payload as unknown as { titles?: unknown };
  if (!payload || typeof payload !== "object" || !Array.isArray(source.titles)) return payload;
  const hit = cache.get(payload as object);
  if (hit) return hit as T;

  const titles = source.titles as Record<string, unknown>[];
  const parents = new Map<string, Record<string, unknown>>();
  for (const t of titles) {
    if (looksLikeTrailer(t)) continue;
    const key = nameKey(t["title"] || t["slug"]);
    if (key && !parents.has(key)) parents.set(key, t);
  }
  const hidden = new Set<Record<string, unknown>>();
  const attach = new Map<Record<string, unknown>, string>();
  for (const t of titles) {
    if (!looksLikeTrailer(t)) continue;
    const parent = parents.get(nameKey(t["title"] || t["slug"]));
    if (!isExplicitTrailer(t) && !parent) continue; // name alone is not enough without a parent
    hidden.add(t);
    const vid = String(t["vimeo_video_id"] || t["trailer_vimeo_id"] || "").trim();
    if (parent && vid && !attach.has(parent)) attach.set(parent, vid);
  }
  if (!hidden.size) {
    cache.set(payload as object, payload);
    return payload;
  }
  const hasOwnTrailer = (t: Record<string, unknown>) =>
    Boolean(t["trailer_vimeo_id"] || t["trailer_vimeo_video_id"] || t["preview_vimeo_video_id"] || t["previewVimeoVideoId"]);
  const next = {
    ...(payload as object),
    titles: titles
      .filter((t) => !hidden.has(t))
      .map((t) => {
        const vid = attach.get(t);
        return vid && !hasOwnTrailer(t) ? { ...t, preview_vimeo_video_id: vid } : t;
      }),
  } as T;
  cache.set(payload as object, next);
  return next;
}
