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
          <button className="rounded-full p-2 transition hover:bg-white/10" aria-label="Search"><Search className="size-5" /></button>
          <button className="rounded-full p-2 md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-white/10 bg-background px-5 py-4 md:hidden">{navLinks.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">{l.label}</Link>)}</nav>}
    </header>
  );
}
