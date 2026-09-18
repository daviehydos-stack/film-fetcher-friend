import { Link } from "@tanstack/react-router";
import { Info, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";

export function HomeHero({ item }: { item: CatalogueTitle }) {
  const [muted, setMuted] = useState(true);
  const [trailerReady, setTrailerReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setTrailerReady(true), 2200);
    return () => window.clearTimeout(timer);
  }, [item.id]);

  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-background sm:min-h-[84svh]">
      <img src={item.backdrop} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-center" />

      {item.trailerEmbedUrl && trailerReady ? (
        <iframe
          src={`${item.trailerEmbedUrl}${item.trailerEmbedUrl.includes("?") ? "&" : "?"}autoplay=1&muted=${muted ? 1 : 0}&background=1`}
          title={`${item.title} trailer`}
          allow="autoplay; fullscreen; picture-in-picture"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      ) : null}

      <div className="hero-shade absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      <div className="relative z-10 flex min-h-[78svh] max-w-[1600px] items-end px-5 pb-24 pt-32 sm:min-h-[84svh] sm:px-10 sm:pb-28 lg:px-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Avant Movies presents</p>
          <h1 className="mt-4 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">{item.title}</h1>
          <p className="mt-5 text-sm font-semibold text-white/80 sm:text-base">{item.type === "movie" ? "Film" : "Series"} · {item.genres.join(" · ")}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{item.shortDescription}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-white px-6 text-base font-bold text-black hover:bg-white/85"><Link to="/title/$slug" params={{ slug: item.slug }}><Play className="fill-current" />Play</Link></Button>
            <Button asChild size="lg" variant="secondary" className="h-12 bg-white/20 px-6 text-base font-bold text-white backdrop-blur-md hover:bg-white/30"><Link to="/title/$slug" params={{ slug: item.slug }}><Info />More Info</Link></Button>
          </div>
        </div>
      </div>

      {item.trailerEmbedUrl ? <button type="button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Turn hero sound on" : "Mute hero"} className="absolute bottom-24 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/60 bg-black/25 text-white backdrop-blur transition hover:bg-white/15 sm:right-10 lg:right-14">{muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
    </section>
  );
}
