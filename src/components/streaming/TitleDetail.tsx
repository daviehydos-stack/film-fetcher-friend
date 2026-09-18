import { Link } from "@tanstack/react-router";
import { Check, Lock, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { Button } from "@/components/ui/button";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { heroTrailerUrl } from "@/lib/video-embeds";
import { ContentRail } from "./ContentRail";
import { StreamingShell } from "./StreamingShell";

export function TitleDetail({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [heroPreview, setHeroPreview] = useState(false);
  const [heroPreviewLoaded, setHeroPreviewLoaded] = useState(false);
  const [heroMuted, setHeroMuted] = useState(true);
  const seasons = item.episodes ? [...new Set(item.episodes.map((episode) => episode.season ?? 1))].sort((a, b) => a - b) : [];
  const [season, setSeason] = useState(seasons[0] ?? 1);
  const seasonEpisodes = item.episodes?.map((episode, absoluteIndex) => ({ episode, absoluteIndex })).filter(({ episode }) => (episode.season ?? 1) === season) ?? [];
  useEffect(() => { setSaved(readMyList().includes(item.id)); setSeason(seasons[0] ?? 1); }, [item.id]);
  useEffect(() => {
    setHeroPreview(false);
    setHeroPreviewLoaded(false);
    if (!item.trailerEmbedUrl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setHeroPreview(true), 900);
    return () => window.clearTimeout(timer);
  }, [item.id, item.trailerEmbedUrl]);
  useEffect(() => { if (!trailerOpen) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setTrailerOpen(false); }; window.addEventListener("keydown", close); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", close); document.body.style.overflow = previous; }; }, [trailerOpen]);
  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));
  const related = catalogue.filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.includes(genre))).slice(0, 6);
  return (
    <StreamingShell>
      <main>
        <section className="relative min-h-[72svh] overflow-hidden bg-background sm:min-h-[72vh]">
          <img src={item.backdrop} alt="" fetchPriority="high" className={`absolute inset-0 size-full object-cover object-[62%_center] transition-opacity duration-700 sm:object-center ${heroPreview && heroPreviewLoaded ? "opacity-0" : "opacity-100"}`} />
          {item.trailerEmbedUrl && heroPreview ? <iframe src={heroTrailerUrl(item.trailerEmbedUrl, heroMuted)} title={`${item.title} background trailer`} allow="autoplay; fullscreen; picture-in-picture" tabIndex={-1} aria-hidden="true" onLoad={() => setHeroPreviewLoaded(true)} className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${heroPreviewLoaded ? "opacity-100" : "opacity-0"}`} /> : null}
          <div className="hero-shade absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/25" />
          <div className="relative z-10 flex min-h-[72svh] max-w-3xl flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[72vh] sm:px-10 sm:pb-16 lg:px-14">
            <p className="eyebrow">Avant original · {item.type === "movie" ? "Feature film" : "TV series"}</p>
            <h1 className="mt-3 text-[clamp(2.6rem,12vw,4.5rem)] font-black uppercase leading-[0.92] sm:mt-4 sm:text-7xl">{item.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold"><span className="text-primary">Avant Original</span><span className="text-white/45">•</span><span>{item.genres.join(" · ")}</span>{item.episodes ? <><span className="text-white/45">•</span><span>{seasons.length > 1 ? `${seasons.length} seasons` : "Season 1"} · {item.episodes.length} episodes</span></> : null}</div>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 sm:text-lg">{item.synopsis}</p><p className="mt-3 max-w-xl text-xs leading-5 text-white/55 sm:text-sm">Independent Kenyan storytelling · Stream inside Avant Movies.</p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              {item.type === "series" && item.episodes?.[0]?.youtubeId ? <Button asChild size="lg"><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-1` }}><Play className="fill-current" />Watch now</Link></Button> : <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-black/30 px-4 text-sm font-semibold text-white/75 backdrop-blur-sm"><Lock className="size-4" />{item.available ? "Streaming access required" : "Coming to Avant"}</span>}
              {item.trailerEmbedUrl ? <Button type="button" size="lg" variant="outline" onClick={() => setTrailerOpen(true)}><Play />Trailer</Button> : null}
              <Button size="lg" variant="secondary" className="col-span-2 sm:col-auto" onClick={toggleSaved}>{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
            </div>
          </div>
          {item.trailerEmbedUrl && heroPreview && heroPreviewLoaded ? <button type="button" onClick={() => setHeroMuted((value) => !value)} aria-label={heroMuted ? "Turn preview sound on" : "Mute preview"} className="absolute bottom-8 right-5 z-20 hidden size-11 place-items-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur transition hover:bg-white/15 sm:grid sm:right-10 lg:right-14">{heroMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
        </section>
        {item.trailerEmbedUrl && trailerOpen ? <div role="dialog" aria-modal="true" aria-label={`${item.title} trailer`} className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-0 backdrop-blur-md sm:bg-black/90 sm:p-8" onClick={() => setTrailerOpen(false)}><div className="w-full max-w-6xl px-3 sm:px-0" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><p className="eyebrow">Now playing</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">{item.title} — Trailer</h2></div><button type="button" onClick={() => setTrailerOpen(false)} aria-label="Close trailer" className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl text-white hover:bg-white/10">×</button></div><div className="aspect-video overflow-hidden bg-black shadow-reel sm:rounded-lg"><iframe src={heroTrailerUrl(item.trailerEmbedUrl, false)} title={`${item.title} trailer`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="size-full border-0" /></div></div></div> : null}
        {item.episodes ? <section className="mx-auto max-w-[1500px] px-5 py-14 sm:px-10 lg:px-14"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Episodes</p><h2 className="mt-2 text-3xl font-bold">Watch {item.title}</h2></div><div className="flex items-center gap-3"><label htmlFor={`season-${item.id}`} className="sr-only">Choose season</label><select id={`season-${item.id}`} value={season} onChange={(event) => setSeason(Number(event.target.value))} className="min-h-11 rounded-md border border-white/15 bg-surface px-4 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-primary">{seasons.map((value) => <option key={value} value={value}>Season {value}</option>)}</select><span className="text-sm text-muted-foreground">{seasonEpisodes.length} episodes</span></div></div><div className="mt-7 divide-y divide-border">{seasonEpisodes.map(({ episode, absoluteIndex }, seasonIndex) => { const free = Boolean(episode.youtubeId); return <article key={`${episode.title}-${absoluteIndex}`} className="grid grid-cols-[2rem_minmax(0,1fr)_auto] gap-3 py-5 sm:grid-cols-[3rem_15rem_1fr_auto] sm:items-center sm:gap-4"><span className="text-2xl font-light text-muted-foreground">{String(seasonIndex + 1).padStart(2, "0")}</span><div className="relative col-span-2 col-start-2 aspect-video overflow-hidden rounded-md bg-surface sm:col-auto"><img src={episode.poster ?? (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.artwork)} alt="" loading="lazy" className="size-full object-cover opacity-80" /></div><div className="col-span-2 col-start-2 min-w-0 sm:col-auto"><h3 className="font-bold">{episode.title.replace(/^.*?Episode \d+\s*[—-]?\s*/, "") || `Episode ${seasonIndex + 1}`}</h3><p className="mt-1 text-sm text-muted-foreground">{free ? "Available to watch" : "Requires access"} · {episode.duration}</p></div>{free ? <Button asChild size="icon" aria-label={`Play episode ${seasonIndex + 1}`}><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${absoluteIndex + 1}` }}><Play className="fill-current" /></Link></Button> : <div className="flex items-center gap-2"><Lock className="size-5 text-muted-foreground" /><Button asChild size="sm" variant="outline"><Link to="/checkout/$productId" params={{ productId: `${item.slug}-${absoluteIndex + 1}` }}>Get Access</Link></Button></div>}</article>; })}</div></section> : null}
        {related.length ? <section className="pb-10"><ContentRail title="More Like This" items={related} /></section> : null}
      </main>
    </StreamingShell>
  );
}