import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { TitleCard } from "./TitleCard";
import { TitlePreviewModal } from "./TitlePreviewModal";

export function ContentRail({
  title,
  items,
  eyebrow,
  description,
  href,
  linkLabel = "View all",
  badgeLabel,
}: {
  title: string;
  items: CatalogueTitle[];
  eyebrow?: string;
  description?: string;
  href?: "/movies" | "/tv-shows";
  linkLabel?: string;
  badgeLabel?: string;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    const viewport = rail.current?.clientWidth ?? 680;
    const card = rail.current?.querySelector<HTMLElement>("[data-title-card]")?.offsetWidth ?? 288;
    rail.current?.scrollBy({
      left: direction * Math.max(card + 16, viewport * 0.78),
      behavior: "smooth",
    });
  };
  return (
    <section className="avant-home-section min-w-0 overflow-hidden py-6 sm:py-8" aria-label={title} role="region">
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 px-5 sm:px-10 lg:px-14">
        <div className="min-w-0">
          {eyebrow ? <p className="eyebrow mb-1.5">{eyebrow}</p> : null}
          <h2 className="truncate text-xl font-bold sm:text-2xl">{title}</h2>
          {description ? <p className="mt-1.5 hidden max-w-xl text-sm text-muted-foreground sm:block">{description}</p> : null}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {href ? (
            <Link to={href} className="mr-1 inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-bold text-foreground/75 transition hover:text-primary sm:text-sm">
              {linkLabel}<ArrowRight className="size-4" />
            </Link>
          ) : null}
          <div className="hidden gap-1 sm:flex">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => move(-1)}
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => move(1)}
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight />
          </Button>
          </div>
        </div>
      </div>
      <div
        ref={rail}
        className="hide-scrollbar avant-horizontal-rail avant-rail-fade flex snap-x snap-mandatory items-start gap-3 overflow-x-auto overflow-y-hidden scroll-smooth scroll-px-5 overscroll-x-contain px-5 pb-5 touch-pan-x sm:gap-4 sm:scroll-px-10 sm:px-10 lg:scroll-px-14 lg:px-14"
      >
        {items.map((item) => (
          <div key={item.id} data-title-card className="shrink-0 snap-start">
            {badgeLabel ? <TitleCard item={item} badgeLabel={badgeLabel} /> : <TitleCard item={item} />}
          </div>
        ))}
      </div>
    </section>
  );
}

export function RankedRail({ title, items }: { title: string; items: CatalogueTitle[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<CatalogueTitle | null>(null);
  const move = (d: number) =>
    rail.current?.scrollBy({
      left: d * (rail.current?.clientWidth ?? 760) * 0.8,
      behavior: "smooth",
    });
  return (
    <section className="min-w-0 overflow-hidden py-6 sm:py-8" aria-label={title}>
      <div className="mb-5 flex items-center justify-between px-5 sm:px-10 lg:px-14">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.22em] text-orange-400">
            Trending on Avant
          </p>
          <h2 className="mt-1 text-xl font-black sm:text-3xl">{title}</h2>
        </div>
        <div className="hidden gap-1 sm:flex">
          <Button size="icon" variant="ghost" onClick={() => move(-1)} aria-label="Previous">
            <ChevronLeft />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => move(1)} aria-label="Next">
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div
        ref={rail}
        className="hide-scrollbar avant-horizontal-rail avant-rail-fade flex h-[17.25rem] snap-x items-end gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 pb-2 touch-pan-x [scrollbar-width:none] sm:h-[21rem] sm:gap-5 sm:px-10 lg:px-14"
      >
        {items.slice(0, 10).map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative flex h-full w-[13.5rem] shrink-0 snap-start items-end border-0 bg-transparent p-0 text-left outline-none sm:w-[17rem]"
          >
            <span
              aria-hidden
              className="relative z-0 -mr-5 select-none text-[10rem] font-black leading-[.78] tracking-[-.09em] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,.32)] transition group-hover:[-webkit-text-stroke-color:rgba(249,115,22,.9)] sm:text-[13rem]"
            >
              {index + 1}
            </span>
            <span className="relative z-10 mb-1 block aspect-[2/3] w-[7.6rem] overflow-hidden rounded-md bg-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-[filter] duration-200 group-hover:brightness-110 sm:w-[9.2rem]">
              <img
                src={item.artwork}
                alt={`${item.title} artwork`}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-8">
                <span className="block truncate text-xs font-bold">{item.title}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      {selected ? <TitlePreviewModal item={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
