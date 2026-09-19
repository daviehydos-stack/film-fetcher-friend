import { Check, Info, Play, Plus, Volume2, VolumeX, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { freeContentId, isFreeTitle } from "@/lib/catalogue";
import { heroTrailerUrl, pauseEmbeddedPlayer, playEmbeddedPlayer } from "@/lib/video-embeds";
import { readMyList, toggleMyList } from "@/lib/my-list";
import {
  accountAccess,
  cachedSubscriber,
  subscribeAccessChanged,
  type AccessState,
} from "@/lib/avant-backend";
import { customerToken, requireCustomerToken } from "@/lib/google-auth";
import { TitlePreviewModal } from "./TitlePreviewModal";

export function HomeHero({ item }: { item: CatalogueTitle }) {
  const [muted, setMuted] = useState(true);
  const [trailerReady, setTrailerReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const [trailerLoaded, setTrailerLoaded] = useState(false);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [trailerFailed, setTrailerFailed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [accessState, setAccessState] = useState<AccessState>(() =>
    cachedSubscriber() ? "authorized" : "loading",
  );
  const [accessVersion, setAccessVersion] = useState(0);
  const [heroInView, setHeroInView] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const trailerFrameRef = useRef<HTMLIFrameElement | null>(null);
  const firstEpisode = item.episodes?.[0];
  const freeFullTitle = isFreeTitle(item);
  const playableContentId = freeContentId(item);
  const watchContentId = playableContentId ?? firstEpisode?.legacyKey ?? (item.type === "movie" ? item.slug : `${item.slug}-1`);
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
        const a = await accountAccess(token);
        if (live) setAccessState(a.subscriber ? "authorized" : "locked");
      } catch {
        if (live) setAccessState("error");
      }
    });
    return () => {
      live = false;
    };
  }, [item.slug, firstEpisode?.legacyKey, playableContentId, accessVersion]);

  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.22;
        setHeroInView(visible);
        if (!visible) pauseEmbeddedPlayer(trailerFrameRef.current);
        else if (trailerVisible) playEmbeddedPlayer(trailerFrameRef.current);
      },
      { threshold: [0, 0.22, 0.5] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [item.id]);

  async function toggleSaved() {
    const token = await customerToken(false);
    if (!token) {
      try {
        await requireCustomerToken();
      } catch {
        return;
      }
    }
    setSaved(toggleMyList(item.id).includes(item.id));
  }

  useEffect(() => {
    setTrailerReady(false);
    setTrailerLoaded(false);
    setTrailerVisible(false);
    setTrailerFailed(false);
    const screen = window.matchMedia("(min-width: 640px)");
    const syncScreen = () => setLargeScreen(screen.matches);
    syncScreen();
    screen.addEventListener?.("change", syncScreen);

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    if (media.matches || !screen.matches || !item.trailerEmbedUrl || item.heroAutoplay === false)
      return () => screen.removeEventListener?.("change", syncScreen);
    // Keep the artwork visible for two seconds, then begin the cinematic autoplay preview.
    const timer = window.setTimeout(() => setTrailerReady(true), 2000);
    return () => {
      window.clearTimeout(timer);
      screen.removeEventListener?.("change", syncScreen);
    };
  }, [item.id, item.trailerEmbedUrl, item.heroAutoplay]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70svh] overflow-hidden bg-background sm:min-h-[78svh] lg:mx-0 lg:mt-0 lg:min-h-[84vh] lg:rounded-none"
    >
      <img
        src={item.backdrop}
        alt={`${item.title} featured artwork`}
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 size-full object-cover object-[62%_center] sm:object-center transition-opacity duration-500 ${trailerVisible ? "opacity-0" : "opacity-100"}`}
      />

      {item.heroAutoplay !== false &&
      item.trailerEmbedUrl &&
      trailerReady &&
      !trailerFailed &&
      !reducedMotion &&
      largeScreen &&
      heroInView ? (
        <iframe
          ref={trailerFrameRef}
          src={heroTrailerUrl(item.trailerEmbedUrl, muted, false)}
          title={`${item.title} trailer`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          onLoad={(event) => {
            window.dispatchEvent(
              new CustomEvent("avant:player-started", { detail: { player: event.currentTarget } }),
            );
            setTrailerLoaded(true);
            window.setTimeout(() => setTrailerVisible(true), 120);
          }}
          onError={() => setTrailerFailed(true)}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${trailerVisible ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      <div className="absolute inset-0 hero-shade" />

      <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1800px] items-end px-5 pb-[max(3rem,env(safe-area-inset-bottom))] pt-[max(7rem,env(safe-area-inset-top))] sm:min-h-[78svh] sm:px-10 sm:pb-20 lg:min-h-[84vh] lg:px-14 lg:pb-20 xl:px-20">
        <div className="max-w-[42rem]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.18em] text-primary backdrop-blur">
            <Sparkles className="size-3" />
            Featured on Avant
          </div>
          <h1 className="max-w-xl text-[clamp(2.65rem,11vw,4.8rem)] font-black uppercase leading-[.9] text-foreground sm:text-7xl lg:text-[5rem]">
            {item.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold text-foreground/85 sm:mt-5 sm:text-sm">
            <span>{item.type === "movie" ? "Film" : "Series"}</span>
            <span className="text-foreground/30">•</span>
            <span>{item.genres.join(" · ")}</span>
            <span className="rounded border border-foreground/25 px-1.5 py-0.5 text-[10px] text-foreground/70">
              HD
            </span>
          </div>
          <p className="mt-3 max-w-xl line-clamp-2 text-sm leading-6 text-foreground/80 sm:mt-4 sm:line-clamp-3 sm:text-lg sm:leading-7">
            {item.shortDescription}
          </p>
          <div className="mt-5 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_2.75rem] gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
            {playableContentId || accessState === "authorized" ? (
              <Button asChild size="lg" className="h-11 w-full px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base">
                 <Link to="/watch/$contentId" params={{ contentId: watchContentId }}><Play className="fill-current" />{freeFullTitle ? "Watch Free" : "Watch"}</Link>
              </Button>
            ) : item.trailerEmbedUrl ? (
              <Button type="button" size="lg" onClick={() => { if (largeScreen && !reducedMotion) { setMuted(false); setTrailerReady(true); } else { setDetailsOpen(true); } }} className="h-11 w-full px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base">
                <Play className="fill-current" />Trailer
              </Button>
            ) : (
              <Button type="button" size="lg" onClick={() => setDetailsOpen(true)} className="h-11 w-full px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base">
                <Play className="fill-current" />Explore
              </Button>
            )}
            <Button
              type="button"
              size="lg"
              variant="secondary"
              onClick={() => setDetailsOpen(true)}
              className="h-11 w-full bg-secondary/85 px-3 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base backdrop-blur-md hover:bg-secondary"
            >
              <Info />
              More Info
            </Button>
            <Button
              type="button"
              size="lg"
              variant="secondary"
              onClick={() => void toggleSaved()}
              aria-label={saved ? "Remove from My List" : "Add to My List"}
              title={saved ? "Remove from My List" : "Add to My List"}
              className="h-11 w-11 bg-secondary/65 p-0 text-sm font-bold backdrop-blur-md hover:bg-secondary sm:h-12 sm:w-auto sm:px-5 sm:text-base"
            >
              {saved ? <Check /> : <Plus />}
              <span className="hidden sm:inline">{saved ? "In My List" : "My List"}</span>
            </Button>
          </div>
        </div>
      </div>

      {item.heroAutoplay !== false &&
      item.trailerEmbedUrl &&
      trailerReady &&
      trailerLoaded &&
      trailerVisible &&
      !trailerFailed &&
      !reducedMotion &&
      largeScreen &&
      heroInView ? (
        <button
          type="button"
          onClick={() => setMuted((value) => !value)}
          aria-label={muted ? "Turn hero sound on" : "Mute hero"}
          className="absolute bottom-8 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur transition hover:bg-white/15 sm:right-10 lg:right-14"
        >
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
      ) : null}
      {detailsOpen ? <TitlePreviewModal item={item} onClose={() => setDetailsOpen(false)} /> : null}
    </section>
  );
}
