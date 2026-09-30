import { Component, useMemo, useState, type ReactNode } from "react";
import { Check, Link2, Mail, MessageCircle, MessageSquare, Send, Share2 } from "lucide-react";
import { optimizedImage } from "@/lib/catalogue";
import type { CatalogueTitle } from "@/lib/site-data";

type Mode = "title" | "season" | "episode";

const SITE = "Avant Cinema";

function fullUrl(path: string) {
  if (typeof document === "undefined") return path;
  try { return new URL(path.replace(/^\//, ""), document.baseURI).href; } catch { return path; }
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

function Tile({ label, className, children, href, onClick }: { label: string; className: string; children: React.ReactNode; href?: string; onClick?: () => void }) {
  const body = (
    <>
      <span className={`grid size-12 place-items-center rounded-full text-white shadow-lg ring-1 ring-white/10 transition duration-200 group-hover:-translate-y-0.5 group-hover:scale-105 group-active:scale-95 sm:size-14 ${className}`}>{children}</span>
      <span className="mt-2 text-[11px] font-semibold text-white/65 transition group-hover:text-white sm:text-xs">{label}</span>
    </>
  );
  const base = "group flex w-[72px] shrink-0 flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-xl sm:w-20";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base} aria-label={`Share on ${label}`}>{body}</a>
  ) : (
    <button type="button" onClick={onClick} className={base} aria-label={label}>{body}</button>
  );
}

/** A share widget problem must never take the title page down with it. */
class ShareBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  override render() { return this.state.failed ? null : this.props.children; }
}

export function ShareSection({ item }: { item: CatalogueTitle }) {
  return <ShareBoundary><ShareSectionInner item={item} /></ShareBoundary>;
}

function ShareSectionInner({ item }: { item: CatalogueTitle }) {
  const episodes = useMemo(
    () => [...(item.episodes ?? [])].sort((a, b) => (a.season ?? 1) - (b.season ?? 1) || (a.episodeNumber ?? 0) - (b.episodeNumber ?? 0)),
    [item.episodes],
  );
  const seasons = useMemo(() => [...new Set(episodes.map((e) => e.season ?? 1))], [episodes]);
  const isSeries = item.type === "series" && episodes.length > 0;
  const [mode, setMode] = useState<Mode>("title");
  const [season, setSeason] = useState<number>(seasons[0] ?? 1);
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const target = useMemo(() => {
    const base = `/title/${item.slug}`;
    const blurb = item.shortDescription || item.synopsis || "";
    if (isSeries && mode === "episode" && episodes[episodeIndex]) {
      const ep = episodes[episodeIndex]!;
      const label = seasons.length > 1 ? `Season ${ep.season ?? 1} · ${ep.title}` : ep.title;
      return {
        path: `/episode/${item.slug}/${episodeIndex + 1}`,
        heading: `${ep.title} — ${item.title}`,
        sub: label,
        image: ep.poster || item.backdrop || item.artwork,
        message: `Watch ${ep.title} of ${item.title} on ${SITE}`,
      };
    }
    if (isSeries && mode === "season" && seasons.length > 1) {
      return {
        path: `${base}?season=${season}`,
        heading: `${item.title} — Season ${season}`,
        sub: `Season ${season} · ${episodes.filter((e) => (e.season ?? 1) === season).length} episodes`,
        image: item.backdrop || item.artwork,
        message: `Watch ${item.title} — Season ${season} on ${SITE}`,
      };
    }
    return {
      path: base,
      heading: item.title,
      sub: [item.type === "movie" ? "Movie" : "Series", ...(item.genres ?? []).slice(0, 2)].join(" · "),
      image: item.backdrop || item.artwork,
      message: `Watch ${item.title} on ${SITE}${blurb ? ` — ${blurb.length > 110 ? blurb.slice(0, 107).replace(/\s+\S*$/, "") + "…" : blurb}` : ""}`,
    };
  }, [episodeIndex, episodes, isSeries, item, mode, season, seasons]);

  const url = fullUrl(target.path);
  const text = target.message;
  const enc = encodeURIComponent;
  const canNativeShare = typeof navigator !== "undefined" && typeof (navigator as any).share === "function";

  const copy = async () => {
    if (await copyText(url)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };
  const nativeShare = async () => {
    try {
      await (navigator as any).share({ title: target.heading, text, url });
    } catch (error: any) {
      if (error?.name !== "AbortError") void copy();
    }
  };

  const modes: Array<{ id: Mode; label: string }> = [{ id: "title", label: item.type === "movie" ? "Movie" : "Whole series" }];
  if (isSeries && seasons.length > 1) modes.push({ id: "season", label: "A season" });
  if (isSeries) modes.push({ id: "episode", label: "An episode" });

  return (
    <section aria-labelledby="share-heading" className="mx-auto max-w-[1180px] bg-[#181818] px-4 pb-10 pt-8 sm:px-8 lg:px-16">
      <div className="mb-5">
        <p className="eyebrow text-primary">Spread the word</p>
        <h2 id="share-heading" className="mt-2 text-2xl font-black sm:text-3xl">Share {isSeries ? "this story" : item.title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/45">Send it to friends and family. They will see the artwork, the title and a link straight to it.</p>
      </div>

      <div className="grid gap-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.02] p-4 sm:p-5 lg:grid-cols-[minmax(0,340px)_1fr]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-video bg-[#0b0b0d]">
            {target.image ? <img src={optimizedImage(target.image, 720)} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" /> : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-white/80 backdrop-blur">{SITE}</span>
          </div>
          <div className="space-y-1 p-3.5">
            <p className="line-clamp-2 text-sm font-extrabold leading-snug text-white">{target.heading}</p>
            <p className="line-clamp-1 text-xs text-white/50">{target.sub}</p>
            <p className="pt-1 text-[11px] font-medium tracking-wide text-white/35">{url.replace(/^https?:\/\//, "").split("/")[0]}</p>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          {modes.length > 1 ? (
            <div className="space-y-3">
              <div role="tablist" aria-label="What to share" className="inline-flex rounded-full border border-white/10 bg-black/30 p-1">
                {modes.map((m) => (
                  <button key={m.id} type="button" role="tab" aria-selected={mode === m.id} onClick={() => setMode(m.id)} className={`rounded-full px-4 py-1.5 text-xs font-bold transition sm:text-sm ${mode === m.id ? "bg-white text-black shadow" : "text-white/60 hover:text-white"}`}>{m.label}</button>
                ))}
              </div>
              {mode === "season" ? (
                <div className="flex flex-wrap gap-2">
                  {seasons.map((s) => (
                    <button key={s} type="button" onClick={() => setSeason(s)} className={`rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition ${season === s ? "border-primary bg-primary/15 text-white" : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"}`}>Season {s}</button>
                  ))}
                </div>
              ) : null}
              {mode === "episode" ? (
                <label className="block max-w-md">
                  <span className="sr-only">Choose an episode</span>
                  <select value={episodeIndex} onChange={(e) => setEpisodeIndex(Number(e.target.value))} className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2.5 text-sm text-white outline-none focus:border-white/40">
                    {episodes.map((ep, index) => (
                      <option key={`${ep.season ?? 1}-${ep.episodeNumber ?? index}-${index}`} value={index}>{seasons.length > 1 ? `Season ${ep.season ?? 1} · ` : ""}{ep.title}</option>
                    ))}
                  </select>
                </label>
              ) : null}
            </div>
          ) : null}

          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:gap-x-4 sm:gap-y-4 sm:overflow-visible">
            <Tile label="WhatsApp" className="bg-[#25D366]" href={`https://wa.me/?text=${enc(`${text}\n${url}`)}`}><MessageCircle className="size-6 sm:size-7" /></Tile>
            <Tile label="Telegram" className="bg-[#229ED9]" href={`https://t.me/share/url?url=${enc(url)}&text=${enc(text)}`}><Send className="size-5 sm:size-6" /></Tile>
            <Tile label="Facebook" className="bg-[#1877F2]" href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}&quote=${enc(text)}`}><span className="text-2xl font-black leading-none sm:text-3xl" aria-hidden="true">f</span></Tile>
            <Tile label="X" className="bg-black" href={`https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`}><span className="text-lg font-black leading-none sm:text-xl" aria-hidden="true">𝕏</span></Tile>
            <Tile label="Email" className="bg-[#EA4335]" href={`mailto:?subject=${enc(`${target.heading} on ${SITE}`)}&body=${enc(`${text}\n\n${url}`)}`}><Mail className="size-5 sm:size-6" /></Tile>
            <Tile label="Message" className="bg-[#34C759]" href={`sms:?&body=${enc(`${text} ${url}`)}`}><MessageSquare className="size-5 sm:size-6" /></Tile>
            <Tile label={copied ? "Copied!" : "Copy link"} className={copied ? "bg-emerald-500" : "bg-white/15"} onClick={() => void copy()}>{copied ? <Check className="size-5 sm:size-6" /> : <Link2 className="size-5 sm:size-6" />}</Tile>
            {canNativeShare ? <Tile label="More" className="bg-white/15" onClick={() => void nativeShare()}><Share2 className="size-5 sm:size-6" /></Tile> : null}
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-1.5 pl-3.5">
            <Link2 className="size-4 shrink-0 text-white/35" aria-hidden="true" />
            <input readOnly value={url} onFocus={(e) => e.currentTarget.select()} aria-label="Share link" className="min-w-0 flex-1 bg-transparent text-xs text-white/70 outline-none sm:text-sm" />
            <button type="button" onClick={() => void copy()} className="shrink-0 rounded-lg bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/90 active:scale-95">{copied ? "Copied" : "Copy"}</button>
          </div>
          <p role="status" aria-live="polite" className="sr-only">{copied ? "Link copied to clipboard" : ""}</p>
        </div>
      </div>
    </section>
  );
}
