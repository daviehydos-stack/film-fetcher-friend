import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, Lock, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { Button } from "@/components/ui/button";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { heroTrailerUrl, youtubeEmbedUrl } from "@/lib/video-embeds";
import { BACKEND_PRODUCT_IDS } from "@/lib/backend-catalogue-map";
import { buildAutoTrailerPlan, durationToSeconds } from "@/lib/auto-trailer";
import { ContentRail } from "./ContentRail";
import { StreamingShell } from "./StreamingShell";

export function TitleDetail({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [heroPreview, setHeroPreview] = useState(false);
  const [heroPreviewLoaded, setHeroPreviewLoaded] = useState(false);
  const [heroMuted, setHeroMuted] = useState(false);
  const previewId = item.previewYoutubeId;
  const fullSeconds = durationToSeconds(item.episodes?.[0]?.duration);
  const autoPlan = buildAutoTrailerPlan(fullSeconds);
  const generatedClip = autoPlan.clips[0] ?? { start: 0, end: 35, duration: 35, zone: 0 };
  const previewStart = item.previewStart ?? generatedClip.start;
  const previewEnd = previewStart + (item.previewDuration ?? generatedClip.duration);
  const previewUrl = item.trailerEmbedUrl ? heroTrailerUrl(item.trailerEmbedUrl, heroMuted) : previewId ? youtubeEmbedUrl(previewId, { autoplay: true, muted: heroMuted, controls: false, start: previewStart, end: previewEnd, loop: true }) : null;
  const seasons = item.episodes ? [...new Set(item.episodes.map((episode) => episode.season ?? 1))].sort((a, b) => a - b) : [];
  const [season, setSeason] = useState(seasons[0] ?? 1);
  const seasonEpisodes = item.episodes?.map((episode, absoluteIndex) => ({ episode, absoluteIndex })).filter(({ episode }) => (episode.season ?? 1) === season) ?? [];
  useEffect(() => { setSaved(readMyList().includes(item.id)); setSeason(seasons[0] ?? 1); }, [item.id]);
  useEffect(() => {
    setHeroPreview(false);
    setHeroPreviewLoaded(false);
    if (!previewUrl || item.heroAutoplay === false || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setHeroPreview(true), 900);
    return () => window.clearTimeout(timer);
  }, [item.id, previewUrl, item.heroAutoplay]);
  useEffect(() => { if (!trailerOpen) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setTrailerOpen(false); }; window.addEventListener("keydown", close); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", close); document.body.style.overflow = previous; }; }, [trailerOpen]);
  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));
  const related = catalogue.filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.includes(genre))).slice(0, 6);
  return (
    <StreamingShell>
      <main>
        <section className="relative min-h-[68svh] overflow-hidden bg-background sm:min-h-[76vh] lg:mx-auto lg:mt-6 lg:max-w-[1180px] lg:rounded-t-2xl">
          <img src={item.backdrop} alt="" fetchPriority="high" className={`absolute inset-0 size-full object-cover object-[62%_center] transition-opacity duration-700 sm:object-center ${heroPreview && heroPreviewLoaded ? "opacity-0" : "opacity-100"}`} />
          {previewUrl && heroPreview ? <iframe src={previewUrl} title={`${item.title} background trailer`} allow="autoplay; fullscreen; picture-in-picture" tabIndex={-1} aria-hidden="true" onLoad={() => setHeroPreviewLoaded(true)} className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ${heroPreviewLoaded ? "opacity-100" : "opacity-0"}`} /> : null}
          <div className="hero-shade absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/25" />
          <div className="relative z-10 flex min-h-[72svh] max-w-3xl flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[72vh] sm:px-10 sm:pb-16 lg:px-14">
            <p className="eyebrow">Avant original · {item.type === "movie" ? "Feature film" : "TV series"}</p>
            <h1 className="mt-3 text-[clamp(2.6rem,12vw,4.5rem)] font-black uppercase leading-[0.92] sm:mt-4 sm:text-7xl">{item.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold"><span className="text-primary">Avant Original</span><span className="text-white/45">•</span><span>{item.genres.join(" · ")}</span>{item.episodes ? <><span className="text-white/45">•</span><span>{seasons.length > 1 ? `${seasons.length} seasons` : "Season 1"} · {item.episodes.length} episodes</span></> : null}</div>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 sm:text-lg">{item.synopsis}</p><p className="mt-3 max-w-xl text-xs leading-5 text-white/55 sm:text-sm">Independent Kenyan storytelling · Stream inside Avant Movies.</p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              {item.episodes?.[0]?.youtubeId ? <Button asChild size="lg"><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-1` }}><Play className="fill-current" />Watch now</Link></Button> : item.available ? <Button asChild size="lg"><Link to="/checkout/$productId" params={{ productId: BACKEND_PRODUCT_IDS.allAccess }}><Lock className="size-4" />Get Access</Link></Button> : <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-black/30 px-4 text-sm font-semibold text-white/75 backdrop-blur-sm"><Lock className="size-4" />Coming to Avant</span>}
              {item.trailerEmbedUrl ? <Button type="button" size="lg" variant="outline" onClick={() => setTrailerOpen(true)}><Play />Trailer</Button> : previewId ? <Button type="button" size="lg" variant="outline" onClick={() => setTrailerOpen(true)}><Play />Preview</Button> : null}
              <Button size="lg" variant="secondary" className="col-span-2 sm:col-auto" onClick={toggleSaved}>{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
            </div>
          </div>
          {previewUrl && heroPreview && heroPreviewLoaded ? <button type="button" onClick={() => setHeroMuted((value) => !value)} aria-label={heroMuted ? "Turn preview sound on" : "Mute preview"} className="absolute bottom-8 right-5 z-20 grid size-11 place-items-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur transition hover:bg-white/15 sm:grid sm:right-10 lg:right-14">{heroMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}</button> : null}
        </section>
        {(item.trailerEmbedUrl || previewId) && trailerOpen ? <div role="dialog" aria-modal="true" aria-label={`${item.title} trailer`} className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-0 backdrop-blur-md sm:bg-black/90 sm:p-8" onClick={() => setTrailerOpen(false)}><div className="w-full max-w-6xl px-3 pt-16 sm:px-0 sm:pt-20" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-3"><div><p className="eyebrow">{item.trailerEmbedUrl ? "Trailer" : "Avant preview"}</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">{item.title}</h2></div><button type="button" onClick={() => setTrailerOpen(false)} aria-label="Close trailer" className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl text-white hover:bg-white/10">×</button></div><div className="aspect-video overflow-hidden bg-black shadow-reel sm:rounded-lg"><iframe src={item.trailerEmbedUrl ? heroTrailerUrl(item.trailerEmbedUrl, false) : youtubeEmbedUrl(previewId!, { autoplay: true, muted: false, controls: true, start: previewStart, end: previewEnd })} title={`${item.title} preview`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="size-full border-0" /></div></div></div> : null}
        {item.episodes ? <section className="mx-auto max-w-[1180px] bg-[#181818] px-4 py-9 sm:px-8 lg:px-16 lg:py-12"><div className="flex items-end justify-between gap-4"><div><h2 className="text-2xl font-black sm:text-3xl">Episodes</h2><p className="mt-2 text-sm text-white/55">Season {season} · {seasonEpisodes.length} episodes</p></div><div className="relative"><select value={season} onChange={e=>setSeason(Number(e.target.value))} className="appearance-none rounded-md border border-white/35 bg-[#242424] py-2.5 pl-4 pr-10 text-sm font-bold text-white outline-none">{seasons.map(v=><option key={v} value={v}>Season {v}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"/></div></div><div className="mt-5 divide-y divide-white/10">{seasonEpisodes.map(({episode,absoluteIndex},i)=><article key={absoluteIndex} className="group grid grid-cols-[2rem_7.5rem_1fr] items-center gap-3 py-4 sm:grid-cols-[3rem_11rem_1fr_auto] sm:gap-5 sm:py-5"><span className="text-center text-xl font-light text-white/60 sm:text-2xl">{i+1}</span><Link to="/watch/$contentId" params={{contentId:`${item.slug}-${absoluteIndex+1}`}} className="relative aspect-video overflow-hidden rounded bg-black"><img src={episode.poster??(episode.youtubeId?`https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`:item.artwork)} alt="" className="size-full object-cover"/><span className="absolute inset-0 grid place-items-center transition group-hover:bg-black/25"><span className="grid size-10 scale-90 place-items-center rounded-full border border-white/70 bg-black/40 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"><Play className="size-5 fill-white"/></span></span></Link><div className="min-w-0"><div className="flex items-start justify-between gap-3"><h3 className="line-clamp-1 font-bold">{episode.title.replace(/^.*?Episode \d+\s*[—-]?\s*/, "")||`Episode ${i+1}`}</h3><span className="shrink-0 text-sm text-white/70 sm:hidden">{episode.duration}</span></div><p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55 sm:text-sm">{episode.youtubeId?"Preview available · Full episode requires valid access.":"Protected Avant episode · Access required."}</p></div><span className="hidden text-sm font-medium text-white/75 sm:block">{episode.duration}</span></article>)}</div></section> : null}
        {related.length ? <section className="mx-auto max-w-[1180px] bg-[#181818] pb-10"><ContentRail title="More Like This" items={related} /></section> : null}<section className="mx-auto max-w-[1180px] bg-[#181818] px-5 pb-14 sm:px-10 lg:px-16"><h2 className="text-2xl font-bold">About {item.title}</h2><div className="mt-5 space-y-2 text-sm leading-6 text-white/70"><p><span className="text-white/40">Genres:</span> {item.genres.join(", ")}</p><p><span className="text-white/40">Format:</span> {item.type==="movie"?"Feature film":"Series"} · HD</p><p><span className="text-white/40">Availability:</span> {item.available?"Available on Avant Movies":"Coming to Avant Movies"}</p></div></section>
      </main>
    </StreamingShell>
  );
}