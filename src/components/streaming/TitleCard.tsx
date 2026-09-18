import { Link } from "@tanstack/react-router";
import { Check, Info, Plus, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { isInMyList, toggleMyList } from "@/lib/my-list";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";

export function TitleCard({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(isInMyList(item.id)), [item.id]);
  return (
    <article className="group relative w-[78vw] shrink-0 overflow-hidden rounded-md bg-card shadow-reel transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary sm:w-[19rem] lg:w-[22rem]">
      <Link to="/title/$slug" params={{ slug: item.slug }} className="block aspect-video overflow-hidden focus:outline-none">
        <img src={item.artwork} alt={item.title} loading="lazy" decoding="async" className="size-full object-cover transition duration-500 motion-safe:group-hover:scale-105" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
        <span className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </Link>
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-md:hidden">
        <div className="flex gap-2">
          <Button asChild size="icon" aria-label={`Play ${item.title}`}><Link to="/title/$slug" params={{ slug: item.slug }}><Play className="fill-current" /></Link></Button>
          <Button size="icon" variant="secondary" aria-label={saved ? "Remove from My List" : "Add to My List"} onClick={() => setSaved(toggleMyList(item.id))}>{saved ? <Check /> : <Plus />}</Button>
          <Button asChild size="icon" variant="secondary" aria-label={`More information about ${item.title}`}><Link to="/title/$slug" params={{ slug: item.slug }}><Info /></Link></Button>
        </div>
        <h3 className="mt-3 text-base font-bold">{item.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{item.type === "movie" ? "Movie" : "TV Series"} · {item.genres.join(" · ")}</p>
      </div>
      <Link to="/title/$slug" params={{ slug: item.slug }} className="block p-3 md:hidden">
        <h3 className="text-sm font-bold">{item.title}</h3><p className="mt-1 text-xs text-muted-foreground">{item.type === "movie" ? "Movie" : "TV Series"}</p>
      </Link>
    </article>
  );
}