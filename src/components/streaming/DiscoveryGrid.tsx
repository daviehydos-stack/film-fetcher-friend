import type { CatalogueTitle } from "@/lib/site-data";
import { TitleCard } from "./TitleCard";

export function DiscoveryGrid({ items, badgeLabel }: { items: CatalogueTitle[]; badgeLabel?: string }) {
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-7 min-[520px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <div key={item.id} className="min-w-0">
          <TitleCard item={item} layout="grid" {...(badgeLabel ? { badgeLabel } : {})} />
          <div className="mt-3 min-w-0 px-0.5">
            <h3 className="truncate text-sm font-bold sm:text-base">{item.title}</h3>
            <p className="mt-1 flex flex-wrap gap-x-2 text-xs text-muted-foreground">
              <span>{item.type === "series" ? `${item.episodes?.length || 1} episode${item.episodes?.length === 1 ? "" : "s"}` : "Film"}</span>
              {item.year ? <span>{item.year}</span> : null}
              {item.genres[0] ? <span>{item.genres[0]}</span> : null}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}