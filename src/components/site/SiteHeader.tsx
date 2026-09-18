import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/streaming/BrandMark";

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
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300",
      scrolled || open ? "bg-background/95 shadow-lg backdrop-blur-xl" : "bg-gradient-to-b from-black/80 to-transparent",
    )}>
      <div className="mx-auto flex max-w-[1600px] items-center gap-7 px-5 py-4 sm:px-10 lg:px-14">
        <Link to="/" aria-label="Avant Movies home"><BrandMark /></Link>

        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/75 transition hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <Link to="/search" aria-label="Search" className="text-white/80 transition hover:text-white"><Search className="size-5" /></Link>
        </div>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="ml-auto rounded p-2 lg:hidden">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div id="mobile-navigation" className={cn("overflow-hidden border-t border-white/10 transition-[max-height] duration-300 lg:hidden", open ? "max-h-96" : "max-h-0")}>
        <nav className="flex flex-col px-5 py-4 sm:px-10">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 text-base font-medium text-white/85">
              {link.label}
            </Link>
          ))}
          <Link to="/search" onClick={() => setOpen(false)} className="flex items-center gap-2 py-3 text-base font-medium text-white/85"><Search className="size-4" />Search</Link>
        </nav>
      </div>
    </header>
  );
}
