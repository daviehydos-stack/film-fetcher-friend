import { createFileRoute, Link } from "@tanstack/react-router";
import { Info, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContentRail } from "@/components/streaming/ContentRail";
import { catalogue } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Avant Movies — It's time to feel again" },
    { name: "description", content: "Discover Kenyan films and series from Avant Movies. Authentic stories, culture and independent cinema." },
  ]}),
  component: Index,
});

function Index() {
  const featured = catalogue.find((item) => item.featured) ?? catalogue[0];
  const [muted, setMuted] = useState(true);
  const [previewing, setPreviewing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!featured.heroPreviewUrl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setPreviewing(true), 1800);
    return () => window.clearTimeout(timer);
  }, [featured.heroPreviewUrl]);
  const movies = catalogue.filter((item) => item.type === "movie");
  const shows = catalogue.filter((item) => item.type === "series");
  return <div className="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <main>
      <section className="relative min-h-[78svh] overflow-hidden sm:min-h-[86svh]">
        <img src={featured.backdrop} alt="" className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-1000 ${previewing && featured.heroPreviewUrl ? "opacity-0" : "opacity-100"}`} fetchPriority="high" />
        {featured.heroPreviewUrl && previewing ? <video ref={videoRef} src={featured.heroPreviewUrl} poster={featured.backdrop} autoPlay muted={muted} playsInline onEnded={() => setPreviewing(false)} onError={() => setPreviewing(false)} preload="metadata" className="absolute inset-0 size-full object-cover" /> : null}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        <div className="relative z-10 flex min-h-[78svh] max-w-3xl flex-col justify-end px-5 pb-24 pt-28 sm:min-h-[86svh] sm:px-10 sm:pb-28 lg:px-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.24em] text-primary">Avant Original</p>
          <h1 className="text-5xl font-black uppercase leading-[.88] tracking-tight sm:text-7xl lg:text-8xl">{featured.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{featured.shortDescription}</p>
          <p className="mt-3 text-sm font-medium text-white/65">{featured.type === "movie" ? "Movie" : "TV Series"} · {featured.genres.join(" · ")}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/title/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-black transition hover:bg-white/80"><Play className="size-5 fill-current" /> Watch</Link>
            <Link to="/title/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-2 rounded-md bg-white/20 px-6 py-3 font-bold text-white backdrop-blur-md transition hover:bg-white/30"><Info className="size-5" /> More Info</Link>
          </div>
        </div>
        {featured.heroPreviewUrl ? <button onClick={() => setMuted((value) => { const next = !value; if (videoRef.current) videoRef.current.muted = next; return next; })} className="absolute bottom-24 right-5 z-20 rounded-full border border-white/40 bg-black/30 p-3 backdrop-blur transition hover:bg-black/60 sm:right-10" aria-label={muted ? "Unmute trailer" : "Mute trailer"}>{muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
      </section>
      <div className="relative z-20 -mt-12 pb-8">
        <ContentRail title="Featured on Avant" items={catalogue} />
        {shows.length > 0 && <ContentRail title="TV Shows" items={shows} />}
        {movies.length > 0 && <ContentRail title="Movies" items={movies} />}
        <ContentRail title="Stories Worth Feeling" items={[...catalogue].reverse()} />
      </div>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-10 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">It's time to feel again</p>
        <h2 className="mt-4 text-4xl font-black uppercase sm:text-6xl">Stories with something to say.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">Avant Movies is home to independent Kenyan storytelling — films and series made to entertain, connect and leave something behind after the credits roll.</p>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
