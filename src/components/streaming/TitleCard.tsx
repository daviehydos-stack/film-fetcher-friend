import { Lock, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CatalogueTitle } from "@/lib/site-data";
import { youtubeEmbedUrl } from "@/lib/video-embeds";
import { TitlePreviewModal } from "./TitlePreviewModal";

export function TitleCard({ item, layout = "rail" }: { item: CatalogueTitle; layout?: "rail" | "grid" }) {
  const [detailsOpen,setDetailsOpen]=useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const previewTimer = useRef<number | null>(null);
  const firstEpisode=item.episodes?.[0];
  const playableContentId = firstEpisode?.youtubeId && firstEpisode.locked===false ? (firstEpisode.legacyKey??`${item.slug}-1`) : null;
  const accessLabel = playableContentId ? "Watch now" : item.available ? "Access required" : "Coming soon";

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
  useEffect(() => {
    if (!cardRef.current || !("IntersectionObserver" in window)) { setNearViewport(true); return; }
    const observer = new IntersectionObserver(([entry]) => setNearViewport(entry.isIntersecting), { rootMargin: "240px" });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const beginPreview = () => {
    if (!nearViewport || !hoverCapable || !item.previewYoutubeId || previewFailed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
      ref={cardRef}
      onMouseEnter={beginPreview}
      onMouseLeave={endPreview}
      className={layout === "grid" ? "group relative w-full min-w-0" : "group relative w-[72vw] max-w-[18rem] shrink-0 min-[420px]:w-[64vw] sm:w-[18rem] lg:w-[21rem] lg:max-w-none"}
    >
      <div className="relative overflow-hidden rounded-md bg-surface shadow-none transition-[filter] duration-200 md:group-hover:brightness-110">
        <button type="button" onClick={()=>setDetailsOpen(true)} className="relative block aspect-video w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
          <img src={item.artwork} alt={`${item.title} ${item.type === "movie" ? "movie" : "series"} artwork`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} className={`size-full object-cover transition duration-500 ${previewing && previewLoaded ? "opacity-0" : "opacity-100"}`} />
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
        </button>

      </div>
      {detailsOpen?<TitlePreviewModal item={item} onClose={()=>setDetailsOpen(false)}/>:null}
    </article>
  );
}
