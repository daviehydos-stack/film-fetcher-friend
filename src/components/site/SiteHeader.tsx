import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/streaming/BrandMark";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 text-foreground transition-all duration-500", scrolled || open ? "bg-background/95 shadow-lg backdrop-blur-xl" : "bg-gradient-to-b from-black/80 to-transparent")}>
      <div className="flex h-16 items-center gap-8 px-5 sm:px-10 lg:px-14">
        <Link to="/" aria-label="Avant Movies home"><BrandMark /></Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 transition hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }} activeOptions={{ exact: l.to === "/" }}>{l.label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link to="/search" className="grid size-11 place-items-center rounded-full transition hover:bg-white/10" aria-label="Search"><Search className="size-5" /></Link>
          <button className="grid size-11 place-items-center rounded-full md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-background px-5 py-4 shadow-2xl md:hidden">{navLinks.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-md px-2 text-base font-medium transition hover:bg-white/5">{l.label}</Link>)}<Link to="/search" onClick={() => setOpen(false)} className="mt-2 flex items-center gap-3 border-t border-white/10 py-4 text-base font-medium"><Search className="size-5" />Search</Link></nav>}
    </header>
  );
}
