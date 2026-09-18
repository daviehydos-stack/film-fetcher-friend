import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, Play, Plus } from "lucide-react";
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
      className={layout === "grid" ? "group relative w-full min-w-0" : "group relative w-[78vw] max-w-[19rem] shrink-0 min-[480px]:w-[72vw] sm:w-[18rem] lg:w-[21rem] lg:max-w-none"}
    >
      <div className="relative overflow-hidden rounded-md bg-card shadow-reel transition duration-300 md:group-hover:z-30 md:group-hover:-translate-y-3 md:group-hover:scale-[1.08]">
        <Link to="/title/$slug" params={{ slug: item.slug }} className="relative block aspect-video overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
          <img src={item.artwork} alt={item.title} loading="lazy" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} className={`size-full object-cover transition duration-500 ${previewing && previewLoaded ? "opacity-0" : "opacity-100 group-hover:scale-105"}`} />
          {previewing && item.previewYoutubeId ? (
            <iframe
              src={youtubeEmbedUrl(item.previewYoutubeId, { autoplay: true, muted: true, controls: false })}
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
          <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-bold leading-tight text-white md:hidden">{item.title}</span>
        </Link>

        <div className="hidden border-t border-white/5 bg-surface-raised p-4 md:block md:max-h-0 md:overflow-hidden md:p-0 md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:p-4 md:group-hover:opacity-100">
          <div className="flex items-center gap-2">
            <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`Play ${item.title}`} className="grid size-9 place-items-center rounded-full bg-white text-black transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Play className="size-4 fill-current" /></Link>
            <button type="button" aria-label={saved ? "Remove from My List" : "Add to My List"} onClick={toggleSaved} className="grid size-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {saved ? <Check className="size-4" /> : <Plus className="size-4" />}
            </button>
            <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`More information about ${item.title}`} className="ml-auto grid size-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><ChevronDown className="size-4" /></Link>
          </div>
          <h3 className="mt-3 text-sm font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{item.type === "movie" ? "Movie" : "TV Series"} · {item.genres.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}
