import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, Play, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { readMyList, toggleMyList } from "@/lib/my-list";
import type { CatalogueTitle } from "@/lib/site-data";

export function TitleCard({ item }: { item: CatalogueTitle }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(readMyList().includes(item.id)), [item.id]);
  const toggleSaved = () => setSaved(toggleMyList(item.id).includes(item.id));

  return (
    <article className="group relative w-[72vw] shrink-0 sm:w-[18rem] lg:w-[21rem]">
      <div className="relative overflow-hidden rounded-md bg-card shadow-reel transition duration-300 md:group-hover:z-30 md:group-hover:-translate-y-2 md:group-hover:scale-[1.06]">
        <Link to="/title/$slug" params={{ slug: item.slug }} className="relative block aspect-video overflow-hidden">
          <img src={item.artwork} alt={item.title} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100" />
          <span className="absolute bottom-3 left-3 text-sm font-bold text-white md:hidden">{item.title}</span>
        </Link>

        <div className="hidden border-t border-white/5 bg-surface-raised p-4 md:block md:max-h-0 md:overflow-hidden md:p-0 md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:p-4 md:group-hover:opacity-100">
          <div className="flex items-center gap-2">
            <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`Play ${item.title}`} className="grid size-9 place-items-center rounded-full bg-white text-black transition hover:bg-white/80"><Play className="size-4 fill-current" /></Link>
            <button type="button" aria-label={saved ? "Remove from My List" : "Add to My List"} onClick={toggleSaved} className="grid size-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-white">
              {saved ? <Check className="size-4" /> : <Plus className="size-4" />}
            </button>
            <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`More information about ${item.title}`} className="ml-auto grid size-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-white"><ChevronDown className="size-4" /></Link>
          </div>
          <h3 className="mt-3 text-sm font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{item.type === "movie" ? "Movie" : "TV Series"} · {item.genres.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}
