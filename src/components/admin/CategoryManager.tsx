// @ts-nocheck -- legacy admin remains outside the customer-facing Phase 3 scope.
import { useMemo, useState } from "react";
import { adminContent } from "@/lib/avant-backend";

export const CATEGORY_LIST = [
  { id: "movie", label: "Movies", hint: "Standalone films that need payment." },
  { id: "series", label: "Series", hint: "Shows with seasons and episodes." },
  { id: "free", label: "Free to Watch", hint: "Anyone can watch these in full." },
  { id: "masterclass", label: "Writing Masterclass", hint: "Jennifer Gatero teaching content." },
];

export function categoryOfTitle(t: any) {
  if ((t?.genres || []).includes("Writing Masterclass")) return "masterclass";
  if (t?.access_required === false) return "free";
  return t?.content_type === "series" ? "series" : "movie";
}

function payloadFor(t: any, category: string) {
  const base = (t.genres || []).filter((g: any) => g !== "Writing Masterclass" && g !== "Free to Watch");
  const genres =
    category === "masterclass" ? [...base, "Writing Masterclass"] : category === "free" ? [...base, "Free to Watch"] : base;
  const contentType = category === "series" ? "series" : category === "movie" ? "movie" : t.content_type || "movie";
  return {
    operation: "upsert_title",
    id: t.id,
    title: t.title,
    slug: t.slug,
    contentType,
    synopsis: t.synopsis,
    shortDescription: t.short_description,
    year: t.year,
    genres,
    posterUrl: t.poster_url,
    backdropUrl: t.backdrop_url,
    trailerVimeoId: t.trailer_vimeo_id,
    vimeoVideoId: t.vimeo_video_id,
    videoSource: t.video_source || "none",
    maturityRating: t.maturity_rating,
    maturityReasons: t.maturity_reasons || [],
    qualityLabel: t.quality_label || "HD",
    languages: t.languages || [],
    castNames: t.cast_names || [],
    creatorNames: t.creator_names || [],
    directorNames: t.director_names || [],
    storyWorld: t.story_world || { gallery: [], characters: [], extras: [], behindTheScenes: [] },
    previewMode: t.preview_mode || "auto",
    previewStartSeconds: t.preview_start_seconds,
    previewDurationSeconds: t.preview_duration_seconds,
    introStartSeconds: t.intro_start_seconds,
    introEndSeconds: t.intro_end_seconds,
    recapStartSeconds: t.recap_start_seconds,
    recapEndSeconds: t.recap_end_seconds,
    creditsStartSeconds: t.credits_start_seconds,
    heroAutoplay: t.hero_autoplay !== false,
    featured: t.featured === true,
    accessRequired: category !== "free",
    scheduledPublishAt: t.scheduled_publish_at || null,
    seoTitle: t.seo_title || null,
    metaDescription: t.meta_description || null,
    status: t.status || "draft",
  };
}

export default function CategoryManager({ data, token, reload, onEdit }: any) {
  const titles = data?.titles || [];
  const [busy, setBusy] = useState("");
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");

  const grouped = useMemo(() => {
    const map: Record<string, any[]> = { movie: [], series: [], free: [], masterclass: [] };
    for (const t of titles) {
      if (search.trim() && !String(t.title || "").toLowerCase().includes(search.toLowerCase())) continue;
      map[categoryOfTitle(t)].push(t);
    }
    for (const key of Object.keys(map)) map[key].sort((a, b) => String(a.title || "").localeCompare(String(b.title || "")));
    return map;
  }, [titles, search]);

  async function move(t: any, category: string) {
    if (categoryOfTitle(t) === category) return;
    setBusy(t.id);
    setNote("");
    try {
      await adminContent(token, payloadFor(t, category));
      setNote(`${t.title} moved to ${CATEGORY_LIST.find((c) => c.id === category)?.label}`);
      await reload();
    } catch (e: any) {
      setNote(e?.message || "Could not move this title");
    } finally {
      setBusy("");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[.2em] text-white/40">Manage</p>
          <h2 className="mt-1 text-2xl font-semibold">Categories</h2>
          <p className="mt-1 text-sm text-white/45">
            Every title sits in exactly one category. Tap a category button on a title to move it.
          </p>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search titles…"
          className="min-h-10 rounded-lg border border-white/10 bg-black/40 px-3 text-sm outline-none"
        />
      </div>

      {note ? <p className="rounded-lg border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-white/70">{note}</p> : null}

      <div className="grid gap-5 lg:grid-cols-2">
        {CATEGORY_LIST.map((cat) => (
          <section key={cat.id} className="rounded-xl border border-white/10 bg-white/[.025] p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">{cat.label}</h3>
              <span className="text-xs text-white/40">{grouped[cat.id].length} title{grouped[cat.id].length === 1 ? "" : "s"}</span>
            </div>
            <p className="mt-1 text-xs text-white/40">{cat.hint}</p>
            <div className="mt-4 space-y-3">
              {grouped[cat.id].length === 0 ? (
                <p className="rounded-lg border border-dashed border-white/10 px-3 py-6 text-center text-xs text-white/35">
                  Nothing here yet
                </p>
              ) : null}
              {grouped[cat.id].map((t: any) => (
                <div key={t.id} className="rounded-lg border border-white/10 bg-black/30 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold">{t.title}</p>
                      <p className="text-xs text-white/40">
                        {t.content_type === "series" ? "Series" : "Movie"} · {t.status}
                      </p>
                    </div>
                    {onEdit ? (
                      <button onClick={() => onEdit(t)} className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold">
                        Edit
                      </button>
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {CATEGORY_LIST.map((target) => {
                      const active = target.id === cat.id;
                      return (
                        <button
                          key={target.id}
                          disabled={active || busy === t.id}
                          onClick={() => void move(t, target.id)}
                          className={`min-h-9 rounded-lg px-3 text-xs font-semibold transition ${
                            active ? "bg-white text-black" : "border border-white/15 text-white/70 hover:border-white/40 disabled:opacity-40"
                          }`}
                        >
                          {target.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
