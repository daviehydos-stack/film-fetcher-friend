import { Link } from "@tanstack/react-router";
import { Check, Lock, Play, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { isInMyList, toggleMyList } from "@/lib/my-list";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { StreamingShell } from "./StreamingShell";

export function TitleDetail({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(isInMyList(item.id)), [item.id]);
  return (
    <StreamingShell>
      <main>
        <section className="relative min-h-[72vh] overflow-hidden">
          <img src={item.backdrop} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 flex min-h-[72vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-32 sm:px-10 lg:px-14">
            <p className="eyebrow">Avant original · {item.type === "movie" ? "Feature film" : "TV series"}</p>
            <h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">{item.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold"><span className="text-emerald-400">{item.available ? "Available" : "Coming / access required"}</span><span className="text-foreground/40">•</span><span className="text-primary">{item.genres.join(" · ")} {item.episodes ? `· ${item.episodes.length} episodes` : ""}</span></div>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 sm:text-lg">{item.synopsis}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {item.type === "series" && item.episodes?.[0]?.youtubeId ? <Button asChild size="lg"><a href={`https://www.youtube.com/watch?v=${item.episodes[0].youtubeId}`} target="_blank" rel="noreferrer"><Play className="fill-current" />Watch free episode</a></Button> : <Button size="lg" disabled><Lock />Get access</Button>}
              <Button size="lg" variant="secondary" onClick={() => setSaved(toggleMyList(item.id))}>{saved ? <Check /> : <Plus />}{saved ? "In My List" : "My List"}</Button>
            </div>
          </div>
        </section>
        {item.episodes ? <section className="mx-auto max-w-[1500px] px-5 py-14 sm:px-10 lg:px-14"><div className="flex items-end justify-between"><div><p className="eyebrow">Season 1</p><h2 className="mt-2 text-3xl font-bold">Episodes</h2></div><span className="text-sm text-muted-foreground">{item.episodes.length} episodes</span></div><div className="mt-7 divide-y divide-border" role="list">{item.episodes.map((episode, index) => { const free = Boolean(episode.youtubeId); return <article key={episode.title} role="listitem" className="grid gap-4 py-5 sm:grid-cols-[3rem_15rem_1fr_auto] sm:items-center"><span className="text-2xl font-light text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div className="relative aspect-video overflow-hidden rounded-md bg-surface"><img src={episode.poster ?? (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.artwork)} alt="" loading="lazy" className="size-full object-cover opacity-80" /></div><div><h3 className="font-bold">{episode.title.replace(/^.*?Episode \d+\s*[—-]?\s*/, "") || `Episode ${index + 1}`}</h3><p className="mt-1 text-sm text-muted-foreground">{free ? "Available to watch" : "Requires access"}</p></div>{free ? <Button asChild size="icon" aria-label={`Play episode ${index + 1}`}><a href={`https://www.youtube.com/watch?v=${episode.youtubeId}`} target="_blank" rel="noreferrer"><Play className="fill-current" /></a></Button> : <Lock className="size-5 text-muted-foreground" />}</article>; })}</div></section> : null}
      </main>
    </StreamingShell>
  );
}