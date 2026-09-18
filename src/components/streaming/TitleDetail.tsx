import { Link } from "@tanstack/react-router";
import { Check, Lock, Play, Plus } from "lucide-react";
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
  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);
  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));
  const related = catalogue.filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.includes(genre))).slice(0, 6);
  return (
    <StreamingShell>
      <main>
        <section className="relative min-h-[68svh] overflow-hidden bg-background sm:min-h-[72vh]">
          <img src={item.backdrop} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center" />
          <div className="hero-shade absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/25" />
          <div className="relative z-10 flex min-h-[68svh] max-w-3xl flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[72vh] sm:px-10 sm:pb-16 lg:px-14">
            <p className="eyebrow">Avant original · {item.type === "movie" ? "Feature film" : "TV series"}</p>
            <h1 className="mt-3 text-[clamp(2.6rem,12vw,4.5rem)] font-black uppercase leading-[0.92] sm:mt-4 sm:text-7xl">{item.title}</h1>
            <p className="mt-4 text-sm font-semibold text-primary">{item.genres.join(" · ")} {item.episodes ? `· ${item.episodes.length} episodes` : ""}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 sm:text-lg">{item.synopsis}</p>
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
              {item.type === "series" && item.episodes?.[0]?.youtubeId ? <Button asChild size="lg"><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-1` }}><Play className="fill-current" />Watch now</Link></Button> : <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-black/30 px-4 text-sm font-semibold text-white/75 backdrop-blur-sm"><Lock className="size-4" />{item.available ? "Streaming access required" : "Coming to Avant"}</span>}
              {item.trailerEmbedUrl ? <Button type="button" size="lg" variant="outline" onClick={() => setTrailerOpen(true)}><Play />Trailer</Button> : null}
              <Button size="lg" variant="secondary" className="" onClick={toggleSaved}>{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
            </div>
          </div>
        </section>
        {item.trailerEmbedUrl && trailerOpen ? <div role="dialog" aria-modal="true" aria-label={`${item.title} trailer`} className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-3 backdrop-blur-md sm:p-8" onClick={() => setTrailerOpen(false)}><div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between"><div><p className="eyebrow">Now playing</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">{item.title} — Trailer</h2></div><button type="button" onClick={() => setTrailerOpen(false)} aria-label="Close trailer" className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl text-white hover:bg-white/10">×</button></div><div className="aspect-video overflow-hidden rounded-lg bg-black shadow-reel"><iframe src={heroTrailerUrl(item.trailerEmbedUrl, false)} title={`${item.title} trailer`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="size-full border-0" /></div></div></div> : null}
        {item.episodes ? <section className="mx-auto max-w-[1500px] px-5 py-14 sm:px-10 lg:px-14"><div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Season 1</p><h2 className="mt-2 text-3xl font-bold">Episodes</h2></div><span className="text-sm text-muted-foreground">{item.episodes.length} episodes</span></div><div className="mt-7 divide-y divide-border">{item.episodes.map((episode, index) => { const free = Boolean(episode.youtubeId); return <article key={episode.title} className="grid grid-cols-[2.25rem_1fr_auto] gap-3 py-5 sm:grid-cols-[3rem_15rem_1fr_auto] sm:items-center sm:gap-4"><span className="text-2xl font-light text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div className="relative col-span-2 col-start-2 aspect-video overflow-hidden rounded-md bg-surface sm:col-auto"><img src={episode.poster ?? (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.artwork)} alt="" loading="lazy" className="size-full object-cover opacity-80" /></div><div className="col-span-2 col-start-2 min-w-0 sm:col-auto"><h3 className="font-bold">{episode.title.replace(/^.*?Episode \d+\s*[—-]?\s*/, "") || `Episode ${index + 1}`}</h3><p className="mt-1 text-sm text-muted-foreground">{free ? "Available to watch" : "Requires access"}</p></div>{free ? <Button asChild size="icon" aria-label={`Play episode ${index + 1}`}><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index + 1}` }}><Play className="fill-current" /></Link></Button> : <div className="flex items-center gap-2"><Lock className="size-5 text-muted-foreground" /><Button asChild size="sm" variant="outline"><Link to="/checkout/$productId" params={{ productId: `${item.slug}-${index + 1}` }}>Get Access</Link></Button></div>}</article>; })}</div></section> : null}
        {related.length ? <section className="pb-10"><ContentRail title="More Like This" items={related} /></section> : null}
      </main>
    </StreamingShell>
  );
}