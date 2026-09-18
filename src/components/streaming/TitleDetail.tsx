import { Link } from "@tanstack/react-router";
import { Check, Film, Lock, Play, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { readMyList, toggleMyList } from "@/lib/my-list";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { StreamingShell } from "./StreamingShell";

export function TitleDetail({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);
  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));
  return (
    <StreamingShell>
      <main>
        <section className="relative min-h-[72vh] overflow-hidden">
          <img src={item.backdrop} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 flex min-h-[72vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-32 sm:px-10 lg:px-14">
            <p className="eyebrow">Avant original · {item.type === "movie" ? "Feature film" : "TV series"}</p>
            <h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">{item.title}</h1>
            <p className="mt-4 text-sm font-semibold text-primary">{item.genres.join(" · ")} {item.episodes ? `· ${item.episodes.length} episodes` : ""}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 sm:text-lg">{item.synopsis}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {item.type === "series" && item.episodes?.[0]?.youtubeId ? <Button asChild size="lg"><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-1` }}><Play className="fill-current" />Watch now</Link></Button> : item.available ? <Button size="lg" disabled><Play />Watch</Button> : <Button size="lg" disabled><Lock />Get access</Button>}
              {item.trailerEmbedUrl ? <Button asChild size="lg" variant="outline"><a href={item.trailerEmbedUrl} target="_blank" rel="noreferrer"><Film />Trailer</a></Button> : null}
              <Button size="lg" variant="secondary" onClick={toggleSaved}>{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
            </div>
          </div>
        </section>
        {item.episodes ? <section className="mx-auto max-w-[1500px] px-5 py-14 sm:px-10 lg:px-14"><div className="flex items-end justify-between"><div><p className="eyebrow">Season 1</p><h2 className="mt-2 text-3xl font-bold">Episodes</h2></div><span className="text-sm text-muted-foreground">{item.episodes.length} episodes</span></div><div className="mt-7 divide-y divide-border">{item.episodes.map((episode, index) => { const free = Boolean(episode.youtubeId); return <article key={episode.title} className="grid gap-4 py-5 sm:grid-cols-[3rem_15rem_1fr_auto] sm:items-center"><span className="text-2xl font-light text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div className="relative aspect-video overflow-hidden rounded-md bg-surface"><img src={episode.poster ?? (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.artwork)} alt="" loading="lazy" className="size-full object-cover opacity-80" /></div><div><h3 className="font-bold">{episode.title.replace(/^.*?Episode \d+\s*[—-]?\s*/, "") || `Episode ${index + 1}`}</h3><p className="mt-1 text-sm text-muted-foreground">{free ? "Available to watch" : "Requires access"}</p></div>{free ? <Button asChild size="icon" aria-label={`Play episode ${index + 1}`}><Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index + 1}` }}><Play className="fill-current" /></Link></Button> : <Lock className="size-5 text-muted-foreground" />}</article>; })}</div></section> : null}
      </main>
    </StreamingShell>
  );
}