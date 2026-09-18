import { Link } from "@tanstack/react-router";
import { Info, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { heroTrailerUrl } from "@/lib/video-embeds";

export function HomeHero({ item }: { item: CatalogueTitle }) {
  const [muted, setMuted] = useState(true);
  const [trailerReady, setTrailerReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    const screen = window.matchMedia("(min-width: 768px)");
    const syncScreen = () => setLargeScreen(screen.matches);
    syncScreen();
    screen.addEventListener?.("change", syncScreen);

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    if (media.matches || !screen.matches) return () => screen.removeEventListener?.("change", syncScreen);
    const timer = window.setTimeout(() => setTrailerReady(true), 2200);
    return () => { window.clearTimeout(timer); screen.removeEventListener?.("change", syncScreen); };
  }, [item.id]);

  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-background sm:min-h-[84svh]">
      <img src={item.backdrop} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center" />

      {item.trailerEmbedUrl && trailerReady && !reducedMotion && largeScreen ? (
        <iframe
          src={heroTrailerUrl(item.trailerEmbedUrl, muted)}
          title={`${item.title} trailer`}
          allow="autoplay; fullscreen; picture-in-picture"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      ) : null}

      <div className="hero-shade absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      <div className="relative z-10 flex min-h-[72svh] max-w-[1600px] items-end px-5 pb-16 pt-28 sm:min-h-[84svh] sm:px-10 sm:pb-28 lg:px-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Avant Movies presents</p>
          <h1 className="mt-3 max-w-xl text-[clamp(2.75rem,13vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">{item.title}</h1>
          <p className="mt-5 text-sm font-semibold text-white/80 sm:text-base">{item.type === "movie" ? "Film" : "Series"} · {item.genres.join(" · ")}</p>
          <p className="mt-3 max-w-xl line-clamp-3 text-sm leading-6 text-white/85 sm:mt-4 sm:text-lg sm:leading-7">{item.shortDescription}</p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
            <Button asChild size="lg" className="h-11 w-full bg-white px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base text-black hover:bg-white/85"><Link to="/title/$slug" params={{ slug: item.slug }}><Play className="fill-current" />Play</Link></Button>
            <Button asChild size="lg" variant="secondary" className="h-11 w-full bg-white/20 px-4 text-sm font-bold sm:h-12 sm:w-auto sm:px-6 sm:text-base text-white backdrop-blur-md hover:bg-white/30"><Link to="/title/$slug" params={{ slug: item.slug }}><Info />More Info</Link></Button>
          </div>
        </div>
      </div>

      {item.trailerEmbedUrl && trailerReady && !reducedMotion && largeScreen ? <button type="button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Turn hero sound on" : "Mute hero"} className="absolute bottom-16 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur transition hover:bg-white/15 sm:right-10 lg:right-14">{muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
    </section>
  );
}
