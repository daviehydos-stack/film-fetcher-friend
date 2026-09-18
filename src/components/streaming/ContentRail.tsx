import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { CatalogueTitle } from "@/lib/site-data";
import { TitleCard } from "./TitleCard";

export function ContentRail({ title, items }: { title: string; items: CatalogueTitle[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    const viewport = rail.current?.clientWidth ?? 680;
    const card = rail.current?.querySelector<HTMLElement>("[data-title-card]")?.offsetWidth ?? 288;
    rail.current?.scrollBy({ left: direction * Math.max(card + 16, viewport * 0.78), behavior: "smooth" });
  };
  return (
    <section className="py-5 sm:py-7" aria-label={title} role="region">
      <div className="mb-4 flex items-center justify-between px-5 sm:px-10 lg:px-14">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <div className="hidden gap-2 sm:flex">
          <Button size="icon" variant="ghost" onClick={() => move(-1)} aria-label={`Scroll ${title} left`}><ChevronLeft /></Button>
          <Button size="icon" variant="ghost" onClick={() => move(1)} aria-label={`Scroll ${title} right`}><ChevronRight /></Button>
        </div>
      </div>
      <div ref={rail} className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth scroll-px-5 overscroll-x-contain px-5 pb-5 touch-pan-x sm:gap-4 sm:scroll-px-10 sm:px-10 lg:scroll-px-14 lg:px-14">
        {items.map((item) => <div key={item.id} data-title-card className="snap-start"><TitleCard item={item} /></div>)}
      </div>
    </section>
  );
}