import { Link } from "@tanstack/react-router";
import { Check, Info, Play, Plus, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { heroTrailerUrl } from "@/lib/video-embeds";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { BACKEND_PRODUCT_IDS } from "@/lib/backend-catalogue-map";

export function HomeHero({ item }: { item: CatalogueTitle }) {
  const [muted, setMuted] = useState(false);
  const [trailerReady, setTrailerReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const [trailerLoaded, setTrailerLoaded] = useState(false);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [trailerFailed, setTrailerFailed] = useState(false);
  const [saved, setSaved] = useState(false);
  const playableContentId = item.type === "series" && item.episodes?.[0]?.youtubeId ? `${item.slug}-1` : null;

  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);

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
    if (media.matches || !screen.matches || !item.trailerEmbedUrl || item.heroAutoplay === false) return () => screen.removeEventListener?.("change", syncScreen);
    const timer = window.setTimeout(() => setTrailerReady(true), 1200);
    return () => { window.clearTimeout(timer); screen.removeEventListener?.("change", syncScreen); };
  }, [item.id, item.trailerEmbedUrl, item.heroAutoplay]);

  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-background sm:min-h-[82svh] lg:mx-14 lg:mt-20 lg:min-h-0 lg:aspect-[16/7] lg:rounded-[1.75rem] lg:border lg:border-white/10 lg:shadow-[0_30px_90px_rgba(0,0,0,.55)]">
      <img src={item.backdrop} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center" />

      {item.heroAutoplay !== false && item.trailerEmbedUrl && trailerReady && !trailerFailed && !reducedMotion && largeScreen ? (
        <iframe
          src={heroTrailerUrl(item.trailerEmbedUrl, muted)}
          title={`${item.title} trailer`}
          allow="autoplay; fullscreen; picture-in-picture"
          onLoad={() => { setTrailerLoaded(true); window.setTimeout(() => setTrailerVisible(true), 900); }}
          onError={() => setTrailerFailed(true)}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${trailerVisible ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      <div className="hero-shade absolute inset-0" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,transparent_0%,rgba(0,0,0,.05)_35%,rgba(0,0,0,.72)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      <div className="relative z-10 flex min-h-[76svh] max-w-[1600px] items-end px-5 pb-[max(3.5rem,env(safe-area-inset-bottom))] pt-[max(7rem,env(safe-area-inset-top))] sm:min-h-[82svh] sm:px-10 sm:pb-24 lg:min-h-0 lg:h-full lg:px-12 lg:pb-12">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.18em] text-orange-300 backdrop-blur"><Sparkles className="size-3"/>Avant featured</div>
          <h1 className="max-w-xl text-[clamp(2.8rem,11vw,4.8rem)] font-black uppercase leading-[.86] tracking-[-.055em] text-white sm:text-7xl lg:text-[5.5rem]">{item.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold sm:text-sm"><span className="text-emerald-400">98% Match</span><span className="text-white/30">•</span><span>{item.type === "movie" ? "Film" : "Series"}</span><span className="text-white/30">•</span><span>{item.genres.join(" · ")}</span><span className="rounded border border-white/25 px-1.5 py-0.5 text-[10px] text-white/70">HD</span></div>
          <p className="mt-3 max-w-xl line-clamp-3 text-sm leading-6 text-white/85 sm:mt-4 sm:text-lg sm:leading-7">{item.shortDescription}</p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
            <Button asChild size="lg" className="h-11 w-full bg-white px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base text-black hover:bg-white/85">{playableContentId ? <Link to="/watch/$contentId" params={{ contentId: playableContentId }}><Play className="fill-current" />Play</Link> : item.available ? <Link to="/checkout/$productId" params={{ productId: BACKEND_PRODUCT_IDS.allAccess }}><Play className="fill-current" />Get Access</Link> : <Link to="/title/$slug" params={{ slug: item.slug }}><Play className="fill-current" />More Info</Link>}</Button>
            <Button asChild size="lg" variant="secondary" className="h-11 w-full bg-white/20 px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base text-white backdrop-blur-md hover:bg-white/30"><Link to="/title/$slug" params={{ slug: item.slug }}><Info />More Info</Link></Button>
          <Button type="button" size="lg" variant="secondary" onClick={() => setSaved(toggleMyList(item.id).includes(item.id))} className="col-span-2 h-11 w-full bg-black/35 px-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white/15 sm:col-auto sm:h-12 sm:w-auto sm:px-5 sm:text-base">{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
          </div>
        </div>
      </div>

      {item.heroAutoplay !== false && item.trailerEmbedUrl && trailerReady && trailerLoaded && trailerVisible && !trailerFailed && !reducedMotion && largeScreen ? <button type="button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Turn hero sound on" : "Mute hero"} className="absolute bottom-8 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur transition hover:bg-white/15 sm:right-10 lg:right-14">{muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
    </section>
  );
}
