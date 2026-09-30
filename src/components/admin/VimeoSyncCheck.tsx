import { useState } from "react";
import { adminVimeoVideos } from "@/lib/avant-backend";

/**
 * "Vimeo ↔ Website" check. Compares the connected Vimeo library with every video the website uses,
 * so new uploads, missing/broken videos and mis-mapped episodes are caught (today and for future uploads).
 * Read-only: it never changes Vimeo or the catalogue.
 */
const EP_NUMBER = /(?:episode|\bep\.?|lesson)\s*(\d+)/i;
const STOP = new Set(["the", "a", "an", "of", "to", "and", "how", "writing", "masterclass", "jennifer", "gatero", "gateros", "lesson", "episode", "ep", "season", "ssn", "part", "film", "movie", "by", "is", "life", "better"]);
const tokens = (value: string) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" ").filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w));

type Used = { id: string; label: string; kind: "movie" | "trailer" | "episode"; siteTitle: string };

export default function VimeoSyncCheck({ token, titles, seasons, episodes, onOpenLibrary }: { token: string; titles: any[]; seasons: any[]; episodes: any[]; onOpenLibrary: () => void }) {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);
  const [open, setOpen] = useState(false);

  async function run() {
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const library: any[] = [];
      for (let page = 1; page <= 12; page++) {
        setProgress(`Reading Vimeo library… ${library.length} videos`);
        const r = await adminVimeoVideos(token, "", page);
        library.push(...(r.videos || []));
        if (!r.paging?.next) break;
      }
      const used: Used[] = [];
      for (const t of titles) {
        if (t.vimeo_video_id) used.push({ id: String(t.vimeo_video_id), label: t.title, kind: /trailer/i.test(`${t.title} ${t.slug}`) ? "trailer" : "movie", siteTitle: t.title });
        if (t.trailer_vimeo_id) used.push({ id: String(t.trailer_vimeo_id), label: `${t.title} (trailer)`, kind: "trailer", siteTitle: `${t.title} trailer` });
      }
      for (const e of episodes) {
        if (!e.vimeo_video_id) continue;
        const season = seasons.find((s: any) => s.id === e.season_id);
        const series = titles.find((t: any) => t.id === season?.series_id);
        used.push({ id: String(e.vimeo_video_id), label: `${series?.title || "Series"} · S${season?.season_number ?? "?"} ${e.title || "episode"}`, kind: "episode", siteTitle: String(e.title || "") });
      }
      const byId = new Map(library.map((v) => [String(v.id), v]));
      const usedIds = new Set(used.map((u) => u.id));
      const notOnSite = library.filter((v) => !usedIds.has(String(v.id)));
      const missing = used.filter((u) => !byId.has(u.id));
      const broken = used.filter((u) => {
        const v = byId.get(u.id);
        return v && (v.playable === false || (v.status && v.status !== "available"));
      });
      const mismatched = used
        .filter((u) => u.kind === "episode" && byId.has(u.id))
        .map((u) => ({ u, v: byId.get(u.id) }))
        .filter(({ u, v }) => {
          const a = u.siteTitle.match(EP_NUMBER)?.[1];
          const b = String(v.name || "").match(EP_NUMBER)?.[1];
          if (a && b) return a !== b;
          const ta = tokens(u.siteTitle), tb = tokens(v.name);
          return ta.length > 0 && tb.length > 0 && !ta.some((w) => tb.includes(w));
        });
      setResult({ total: library.length, used: usedIds.size, notOnSite, missing, broken, mismatched, at: new Date().toLocaleTimeString() });
    } catch (e: any) {
      setError(e?.message || "Could not read the Vimeo library. Retry.");
    } finally {
      setBusy(false);
      setProgress("");
    }
  }

  const issues = result ? result.notOnSite.length + result.missing.length + result.broken.length + result.mismatched.length : 0;
  return (
    <section className="rounded-xl border border-white/10 bg-white/[.025] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-orange-300">Vimeo ↔ Website</p>
          <h3 className="mt-1 text-lg font-semibold">Are all Vimeo videos on the site, and correct?</h3>
          <p className="mt-1 text-xs text-white/45">Compares your Vimeo library with every video the website uses. Run it after uploading new videos. Tip: name each Vimeo video like “A Better Life Episode 15” so it can be matched to its episode automatically.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" disabled={busy} onClick={() => { setOpen(true); void run(); }} className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-black disabled:opacity-50">{busy ? "Checking…" : result ? "Check again" : "Check Vimeo vs website"}</button>
          {result ? <button type="button" onClick={() => setOpen((x) => !x)} className="rounded-lg border border-white/10 px-3 py-2 text-sm">{open ? "Hide" : "Show"}</button> : null}
        </div>
      </div>
      {busy && progress ? <p className="mt-3 text-sm text-white/50">{progress}</p> : null}
      {error ? (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-400/20 bg-red-400/5 p-3 text-sm text-red-200">
          <span>{error}</span>
          <button type="button" onClick={() => void run()} className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-black">Retry</button>
        </div>
      ) : null}
      {result && open ? (
        <div className="mt-4 space-y-4 text-sm">
          <div className={`rounded-lg border p-3 ${issues ? "border-amber-300/25 bg-amber-300/[.05] text-amber-100" : "border-emerald-300/25 bg-emerald-300/[.05] text-emerald-100"}`}>
            <b>{issues ? `${issues} item${issues === 1 ? "" : "s"} need a look` : "Everything matches ✓"}</b>
            <span className="ml-2 text-xs text-white/50">{result.total} videos in Vimeo · {result.used} used on the website · checked {result.at}</span>
          </div>
          {result.notOnSite.length ? (
            <div>
              <p className="font-semibold">New on Vimeo, not on the website ({result.notOnSite.length})</p>
              <ul className="mt-2 space-y-1">{result.notOnSite.map((v: any) => <li key={v.id} className="flex items-center gap-3 rounded-lg bg-black/20 p-2">{v.thumbnail ? <img src={v.thumbnail} alt="" referrerPolicy="no-referrer" className="h-10 w-16 rounded object-cover" /> : null}<span className="min-w-0 flex-1 truncate">{v.name || "Untitled"}</span><span className="text-xs text-white/35">Vimeo {v.id}</span></li>)}</ul>
              <button type="button" onClick={onOpenLibrary} className="mt-2 rounded-lg bg-orange-400 px-3 py-2 text-xs font-bold text-black">Open Vimeo Library to add them</button>
            </div>
          ) : null}
          {result.missing.length ? <div><p className="font-semibold text-red-200">On the website but not found in Vimeo ({result.missing.length})</p><ul className="mt-2 space-y-1">{result.missing.map((u: Used, i: number) => <li key={i} className="rounded-lg bg-black/20 p-2">{u.label} <span className="text-xs text-white/35">Vimeo {u.id}</span></li>)}</ul></div> : null}
          {result.broken.length ? <div><p className="font-semibold text-red-200">Video exists but cannot play ({result.broken.length})</p><ul className="mt-2 space-y-1">{result.broken.map((u: Used, i: number) => <li key={i} className="rounded-lg bg-black/20 p-2">{u.label} <span className="text-xs text-white/35">Vimeo {u.id} — re-upload or fix in Vimeo</span></li>)}</ul></div> : null}
          {result.mismatched.length ? <div><p className="font-semibold text-amber-200">Episode title and video name differ — please confirm ({result.mismatched.length})</p><ul className="mt-2 space-y-1">{result.mismatched.map(({ u, v }: any, i: number) => <li key={i} className="rounded-lg bg-black/20 p-2"><span className="text-white/80">{u.label}</span><span className="block text-xs text-white/45">Website title “{u.siteTitle}” plays Vimeo video “{v.name}”</span></li>)}</ul></div> : null}
        </div>
      ) : null}
    </section>
  );
}
