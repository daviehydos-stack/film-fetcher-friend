import { Check, ChevronDown, Lock, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CatalogueTitle } from "@/lib/site-data";
import { youtubeEmbedUrl } from "@/lib/video-embeds";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { customerToken, requireCustomerToken } from "@/lib/google-auth";
import { TitlePreviewModal } from "./TitlePreviewModal";
import { accountAccess, cachedSubscriber, subscribeAccessChanged, type AccessState } from "@/lib/avant-backend";

export function TitleCard({ item, layout = "rail" }: { item: CatalogueTitle; layout?: "rail" | "grid" }) {
  const [detailsOpen,setDetailsOpen]=useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const [saved,setSaved]=useState(()=>readMyList().includes(item.id));
  const [muted,setMuted]=useState(true);
  const [accessState,setAccessState]=useState<AccessState>(()=>cachedSubscriber()?"authorized":"loading"); const [accessVersion,setAccessVersion]=useState(0);
  const cardRef = useRef<HTMLElement | null>(null);
  const previewTimer = useRef<number | null>(null);
  const firstEpisode=item.episodes?.[0];
  const playableContentId = firstEpisode?.youtubeId && firstEpisode.locked===false ? (firstEpisode.legacyKey??`${item.slug}-1`) : null;
  const accessLabel = playableContentId||accessState==="authorized" ? "Watch now" : accessState==="loading" ? "Checking access…" : item.available ? "Access required" : "Coming soon";

  useEffect(()=>subscribeAccessChanged(()=>setAccessVersion(v=>v+1)),[]);
  useEffect(()=>{let live=true;const key=firstEpisode?.legacyKey??(item.type==="movie"?item.slug:`${item.slug}-1`);if(playableContentId){setAccessState("authorized");return()=>{live=false}}setAccessState("loading");customerToken(false).then(async token=>{if(!live)return;if(!token){setAccessState("signed_out");return}try{const a=await accountAccess(token);if(live)setAccessState(a.subscriber?"authorized":"locked")}catch{if(live)setAccessState("error")}});return()=>{live=false}},[item.slug,firstEpisode?.legacyKey,playableContentId,accessVersion]);
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
  const toggleSaved = async (event: React.MouseEvent) => { event.stopPropagation(); const token=await customerToken(false); if(!token){try{await requireCustomerToken()}catch{return}} setSaved(toggleMyList(item.id).includes(item.id)); };
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
      className={layout === "grid" ? "group relative z-0 w-full min-w-0 md:hover:z-30" : "group relative z-0 w-[72vw] max-w-[18rem] shrink-0 min-[420px]:w-[64vw] sm:w-[18rem] md:hover:z-30 lg:w-[21rem] lg:max-w-none"}
    >
      <div className="relative overflow-hidden rounded-lg border border-white/[.055] bg-surface shadow-[0_10px_28px_rgba(0,0,0,.22)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:origin-center md:group-hover:scale-[1.045] md:group-hover:border-white/[.12] md:group-hover:shadow-[0_24px_60px_rgba(0,0,0,.78)]">
        <button type="button" onClick={()=>setDetailsOpen(true)} className="relative block aspect-video w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
          <img src={item.artwork} alt={`${item.title} ${item.type === "movie" ? "movie" : "series"} artwork`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} className={`size-full object-cover transition duration-500 ${previewing && previewLoaded ? "opacity-0" : "opacity-100"}`} />
          {previewing && item.previewYoutubeId ? (
            <iframe
              src={youtubeEmbedUrl(item.previewYoutubeId, { autoplay: true, muted, controls: false, start: 0, end: 60, loop: true })}
              title={`${item.title} preview`}
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
              aria-hidden="true"
              onLoad={(event) => { window.dispatchEvent(new CustomEvent("avant:player-started", { detail: { player: event.currentTarget } })); setPreviewLoaded(true); }}
              onError={() => { setPreviewFailed(true); setPreviewing(false); setPreviewLoaded(false); }}
              className={`pointer-events-none absolute inset-0 size-full border-0 transition-opacity duration-300 ${previewLoaded ? "opacity-100" : "opacity-0"}`}
            />
          ) : null}
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.18)_58%,rgba(0,0,0,.88)_100%)] opacity-90 md:opacity-0 md:group-hover:opacity-100" />
          <span className="absolute inset-x-0 bottom-0 p-3 text-white md:hidden"><span className="block text-sm font-bold leading-tight">{item.title}</span><span className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-white/70">{playableContentId||accessState==="authorized" ? <Play className="size-3 fill-current" /> : <Lock className="size-3" />}{accessLabel}</span></span>
        </button>
        <div className="hidden h-0 overflow-hidden bg-[#181818] opacity-0 transition-[height,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:block md:group-hover:h-[5.2rem] md:group-hover:opacity-100">
          <div className="flex items-center gap-2 px-3 pt-2">
            <button type="button" onClick={()=>setDetailsOpen(true)} aria-label={`Play ${item.title}`} className="grid size-9 place-items-center rounded-full bg-white text-black"><Play className="size-4 fill-current"/></button>
            <button type="button" onClick={toggleSaved} aria-label={saved?"Remove from My List":"Add to My List"} className="grid size-9 place-items-center rounded-full border-2 border-white/45 text-white">{saved?<Check className="size-4"/>:<Plus className="size-4"/>}</button>
            {item.previewYoutubeId?<button type="button" onClick={(e)=>{e.stopPropagation();setMuted(v=>!v)}} aria-label={muted?"Unmute preview":"Mute preview"} className="grid size-9 place-items-center rounded-full border-2 border-white/45 text-white">{muted?<VolumeX className="size-4"/>:<Volume2 className="size-4"/>}</button>:null}
            <button type="button" onClick={()=>setDetailsOpen(true)} aria-label={`More information about ${item.title}`} className="ml-auto grid size-9 place-items-center rounded-full border-2 border-white/45 text-white"><ChevronDown className="size-5"/></button>
          </div>
          <div className="truncate px-3 pt-2 text-xs font-semibold text-white/75">{accessLabel}<span className="px-1.5 text-white/35">•</span>{item.type==="series"?"Series":"Movie"}{item.quality?<><span className="px-1.5 text-white/35">•</span>{item.quality}</>:null}</div>
        </div>
      </div>
      {detailsOpen?<TitlePreviewModal item={item} onClose={()=>setDetailsOpen(false)}/>:null}
    </article>
  );
}
