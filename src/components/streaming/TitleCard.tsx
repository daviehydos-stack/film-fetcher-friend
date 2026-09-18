import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, Lock, Play, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { readMyList, toggleMyList } from "@/lib/my-list";
import type { CatalogueTitle } from "@/lib/site-data";
import { youtubeEmbedUrl } from "@/lib/video-embeds";

export function TitleCard({ item, layout = "rail" }: { item: CatalogueTitle; layout?: "rail" | "grid" }) {
  const [saved, setSaved] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);
  const previewTimer = useRef<number | null>(null);
  const playableContentId = item.episodes?.[0]?.youtubeId ? `${item.slug}-1` : null;
  const accessLabel = playableContentId ? "Watch now" : item.available ? "Access required" : "Coming soon";

  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHoverCapable(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);
  useEffect(() => () => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current);
  }, []);

  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));
  const beginPreview = () => {
    if (!hoverCapable || !item.previewYoutubeId || previewFailed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    previewTimer.current = window.setTimeout(() => setPreviewing(true), 350);
  };
  const endPreview = () => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current);
    previewTimer.current = null;
    setPreviewing(false);
    setPreviewLoaded(false);
  };

  return (
    <article
      onMouseEnter={beginPreview}
      onMouseLeave={endPreview}
      className={layout === "grid" ? "group relative w-full min-w-0" : "group relative w-[72vw] max-w-[18rem] shrink-0 min-[420px]:w-[64vw] sm:w-[18rem] lg:w-[21rem] lg:max-w-none"}
    >
      <div className="relative overflow-hidden rounded-md bg-card shadow-reel transition duration-300 md:group-hover:z-30 md:group-hover:-translate-y-3 md:group-hover:scale-[1.08]">
        <Link to="/title/$slug" params={{ slug: item.slug }} className="relative block aspect-video overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
          <img src={item.artwork} alt={`${item.title} ${item.type === "movie" ? "movie" : "series"} artwork`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} className={`size-full object-cover transition duration-500 ${previewing && previewLoaded ? "opacity-0" : "opacity-100 group-hover:scale-105"}`} />
          {previewing && item.previewYoutubeId ? (
            <iframe
              src={youtubeEmbedUrl(item.previewYoutubeId, { autoplay: true, muted: true, controls: false, start: item.previewStart, end: item.previewDuration ? (item.previewStart ?? 0) + item.previewDuration : undefined, loop: true })}
              title={`${item.title} preview`}
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
              aria-hidden="true"
              onLoad={() => setPreviewLoaded(true)}
              onError={() => { setPreviewFailed(true); setPreviewing(false); setPreviewLoaded(false); }}
              className={`pointer-events-none absolute inset-0 size-full border-0 transition-opacity duration-300 ${previewLoaded ? "opacity-100" : "opacity-0"}`}
            />
          ) : null}
          <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100" />
          <span className="absolute inset-x-0 bottom-0 p-3 text-white md:hidden"><span className="block text-sm font-bold leading-tight">{item.title}</span><span className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-white/70">{playableContentId ? <Play className="size-3 fill-current" /> : <Lock className="size-3" />}{accessLabel}</span></span>
        </Link>

        <div className="hidden border-t border-white/5 bg-surface-raised p-4 md:block md:max-h-0 md:overflow-hidden md:p-0 md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:p-4 md:group-hover:opacity-100">
          <div className="flex items-center gap-2">
            {playableContentId ? <Link to="/watch/$contentId" params={{ contentId: playableContentId }} aria-label={`Play ${item.title}`} className="grid size-10 place-items-center rounded-full bg-white text-black transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Play className="size-4 fill-current" /></Link> : <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`Open ${item.title}`} className="grid size-10 place-items-center rounded-full bg-white text-black transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Play className="size-4 fill-current" /></Link>}
            <button type="button" aria-label={saved ? "Remove from My List" : "Add to My List"} onClick={toggleSaved} className="grid size-10 place-items-center rounded-full border border-white/40 text-white transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {saved ? <Check className="size-4" /> : <Plus className="size-4" />}
            </button>
            <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`More information about ${item.title}`} className="ml-auto grid size-10 place-items-center rounded-full border border-white/40 text-white transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><ChevronDown className="size-4" /></Link>
          </div>
          <h3 className="mt-3 text-sm font-bold text-white">{item.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold"><span className={playableContentId ? "text-emerald-400" : "text-white/55"}>{accessLabel}</span><span className="text-white/25">•</span><span className="text-white/65">{item.type === "movie" ? "Movie" : "Series"}</span>{item.episodes ? <><span className="text-white/25">•</span><span className="text-white/65">{item.episodes.length} eps</span></> : null}</div><p className="mt-2 line-clamp-1 text-xs text-muted-foreground">{item.genres.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}
