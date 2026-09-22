import { Check, ChevronDown, Lock, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CatalogueTitle } from "@/lib/site-data";
import { freeContentId, isFreeTitle } from "@/lib/catalogue";
import { youtubeEmbedUrl } from "@/lib/video-embeds";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { customerToken } from "@/lib/google-auth";
import { useAvantAuth } from "@/lib/avant-auth";
import { TitlePreviewModal } from "./TitlePreviewModal";
import {
  accessForContent,
  cachedSubscriber,
  subscribeAccessChanged,
  type AccessState,
} from "@/lib/avant-backend";

export function TitleCard({
  item,
  layout = "rail",
  badgeLabel,
}: {
  item: CatalogueTitle;
  layout?: "rail" | "grid";
  badgeLabel?: string;
}) {
  const {user:authUser,remembered,signIn}=useAvantAuth();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const [saved, setSaved] = useState(() => readMyList().includes(item.id));
  const [muted, setMuted] = useState(false);
  const [accessState, setAccessState] = useState<AccessState>(() =>
    cachedSubscriber() ? "authorized" : "loading",
  );
  const [accessVersion, setAccessVersion] = useState(0);
  const [travelMode, setTravelMode] = useState(() => typeof window !== "undefined" ? localStorage.getItem("avant-travel-mode") === "true" : false);
  const cardRef = useRef<HTMLElement | null>(null);
  const detailsButtonRef = useRef<HTMLButtonElement | null>(null);
  const previewTimer = useRef<number | null>(null);
  const firstEpisode = item.episodes?.[0];
  const freeFullTitle = isFreeTitle(item);
  const playableContentId = freeContentId(item);
  const accessLabel =
    playableContentId || accessState === "authorized"
      ? "Watch now"
      : accessState === "loading"
        ? "Checking access…"
        : item.available
          ? "Access required"
          : "Coming soon";

  useEffect(() => {
    const sync = (e: any) => setTravelMode(e.detail.active);
    window.addEventListener("avant:travel-mode-changed" as any, sync);
    return () => window.removeEventListener("avant:travel-mode-changed" as any, sync);
  }, []);
  useEffect(() => subscribeAccessChanged(() => setAccessVersion((v) => v + 1)), []);
  useEffect(() => {
    let live = true;
    const key = firstEpisode?.legacyKey ?? (item.type === "movie" ? item.slug : `${item.slug}-1`);
    if (playableContentId) {
      setAccessState("authorized");
      return () => {
        live = false;
      };
    }
    setAccessState("loading");
    customerToken(false).then(async (token) => {
      if (!live) return;
      if (!token) {
        setAccessState("signed_out");
        return;
      }
      try {
        const a = await accessForContent(key);
        if (live) setAccessState(a.state);
      } catch {
        if (live) setAccessState("error");
      }
    });
    return () => {
      live = false;
    };
  }, [item.slug, firstEpisode?.legacyKey, playableContentId, accessVersion]);
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHoverCapable(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);
  useEffect(
    () => () => {
      if (previewTimer.current) window.clearTimeout(previewTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (!cardRef.current || !("IntersectionObserver" in window)) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setNearViewport(entry?.isIntersecting ?? false), {
      rootMargin: "240px",
    });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const beginPreview = () => {
    if (
      !nearViewport ||
      !hoverCapable ||
      travelMode ||
      !item.previewYoutubeId ||
      previewFailed ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    previewTimer.current = window.setTimeout(() => setPreviewing(true), 180);
  };
  const toggleSaved = async (event: React.MouseEvent) => {
    event.stopPropagation();
    const token = await customerToken(false);
    if (!token && !authUser) {
      try { await signIn(remembered?.email); } catch { return; }
    }
    setSaved(toggleMyList(item.id).includes(item.id));
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
      className={
        layout === "grid"
          ? "group relative z-0 w-full min-w-0 md:hover:z-30"
          : "group relative z-0 w-[82vw] max-w-[22rem] shrink-0 min-[420px]:w-[78vw] sm:w-[18rem] md:hover:z-30 lg:w-[21rem] lg:max-w-none"
      }
    >
      <div className="relative overflow-hidden rounded-lg border border-white/[.055] bg-surface shadow-[0_10px_28px_rgba(0,0,0,.22)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:origin-center md:group-hover:scale-[1.045] md:group-hover:border-white/[.12] md:group-hover:shadow-[0_24px_60px_rgba(0,0,0,.78)]">
        <button
          ref={detailsButtonRef}
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="relative block aspect-video w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <img
            src={item.artwork}
            alt={`${item.title} ${item.type === "movie" ? "movie" : "series"} artwork`}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
            className={`size-full object-cover transition duration-500 ${previewing && previewLoaded ? "opacity-0" : "opacity-100"}`}
          />
          {badgeLabel || item.featured || travelMode ? (
            <span className={`absolute left-2.5 top-2.5 rounded-sm px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary-foreground shadow-reel ${travelMode ? "bg-blue-600" : (item.featured ? "bg-amber-500" : "bg-primary")}`}>
              {(travelMode && "Data Saver") || (item.featured && "Featured") || badgeLabel}
            </span>
          ) : null}
          {previewing && item.previewYoutubeId ? (
            <iframe
              src={youtubeEmbedUrl(item.previewYoutubeId, {
                autoplay: true,
                muted,
                controls: false,
                start: 0,
                end: 60,
                loop: true,
              })}
              title={`${item.title} preview`}
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
              aria-hidden="true"
              loading="lazy"
              onLoad={(event) => {
                window.dispatchEvent(
                  new CustomEvent("avant:player-started", {
                    detail: { player: event.currentTarget },
                  }),
                );
                setPreviewLoaded(true);
              }}
              onError={() => {
                setPreviewFailed(true);
                setPreviewing(false);
                setPreviewLoaded(false);
              }}
              className={`pointer-events-none absolute inset-0 size-full border-0 transition-opacity duration-300 ${previewLoaded ? "opacity-100" : "opacity-0"}`}
            />
          ) : null}
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.18)_58%,rgba(0,0,0,.88)_100%)] opacity-90 md:opacity-0 md:group-hover:opacity-100" />
          <span className="absolute inset-x-0 bottom-0 p-3 text-white md:hidden">
            <span className="block text-sm font-bold leading-tight">{item.title}</span>
            <span className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-white/70">
              {playableContentId || accessState === "authorized" ? (
                <Play className="size-3 fill-current" />
              ) : (
                <Lock className="size-3" />
              )}
              {accessLabel}
            </span>
          </span>
        </button>
        <div className="hidden h-0 overflow-hidden bg-[#181818] opacity-0 transition-[height,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:block md:group-hover:h-[5.2rem] md:group-hover:opacity-100">
          <div className="flex items-center gap-2 px-3 pt-2">
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              aria-label={`Play ${item.title}`}
              className="grid size-9 place-items-center rounded-full bg-white text-black"
            >
              <Play className="size-4 fill-current" />
            </button>
            <button
              type="button"
              onClick={toggleSaved}
              aria-label={saved ? "Remove from My List" : "Add to My List"}
              className="grid size-9 place-items-center rounded-full border-2 border-white/45 text-white"
            >
              {saved ? <Check className="size-4" /> : <Plus className="size-4" />}
            </button>
            {item.previewYoutubeId ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMuted((v) => !v);
                }}
                aria-label={muted ? "Unmute preview" : "Mute preview"}
                className="grid size-9 place-items-center rounded-full border-2 border-white/45 text-white"
              >
                {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              aria-label={`More information about ${item.title}`}
              className="ml-auto grid size-9 place-items-center rounded-full border-2 border-white/45 text-white"
            >
              <ChevronDown className="size-5" />
            </button>
          </div>
          <div className="truncate px-3 pt-2 text-xs font-semibold text-white/75">
            {accessLabel}
            <span className="px-1.5 text-white/35">•</span>
            {item.type === "series" ? "Series" : "Movie"}
            {item.quality ? (
              <>
                <span className="px-1.5 text-white/35">•</span>
                {item.quality}
              </>
            ) : null}
          </div>
        </div>
      </div>
      {detailsOpen ? <TitlePreviewModal item={item} onClose={() => { setDetailsOpen(false); window.requestAnimationFrame(() => detailsButtonRef.current?.focus()); }} /> : null}
    </article>
  );
}
