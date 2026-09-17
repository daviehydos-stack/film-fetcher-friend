import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { navLinks, socials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground shadow-reel">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="headline text-2xl text-flame sm:text-3xl">
            Avant Cinema
          </span>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-ink-foreground/80 uppercase">
            It&apos;s time to feel again
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-ink-foreground/85 transition-colors hover:text-flame"
              activeProps={{ className: "text-flame" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialRow />
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-base font-medium text-ink-foreground/90 hover:bg-flame/15 hover:text-flame"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-4 px-2">
            <SocialRow />
          </div>
        </nav>
      </div>
    </header>
  );
}

function SocialRow() {
  const cls =
    "text-ink-foreground/70 transition-colors hover:text-flame";
  return (
    <>
      <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={cls}>
        <Facebook className="size-5" />
      </a>
      <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className={cls}>
        <Youtube className="size-5" />
      </a>
      <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={cls}>
        <Instagram className="size-5" />
      </a>
      <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className={cls}>
        <Twitter className="size-5" />
      </a>
    </>
  );
}
