import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Mail, MessageCircle } from "lucide-react";
import { navLinks, socials, WHATSAPP, WHATSAPP_TEL } from "@/lib/site-data";
import { publicCatalogue, publicPages } from "@/lib/avant-backend";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [cmsNav, setCmsNav] = useState<any[]>([]),
    [appearance, setAppearance] = useState<any>({});
  useEffect(() => {
    void publicPages()
      .then((x) => setCmsNav(x?.pages || []))
      .catch(() => {});
    void publicCatalogue()
      .then((x) => setAppearance(x?.appearance || {}))
      .catch(() => {});
  }, []);
  const links = [
    ...navLinks,
    ...cmsNav
      .filter((p: any) => !navLinks.some((n) => n.to === "/" + p.slug))
      .map((p: any) => ({ to: "/" + p.slug, label: p.navigation_label || p.title })),
  ];
  return (
    <footer className="border-t border-border/40 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 sm:px-10 sm:py-16 md:grid-cols-[1.35fr_1fr_1fr] lg:px-14">
        <div className="max-w-md">
          <p className="headline text-3xl text-flame">{appearance.siteName || "Avant Movies"}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-foreground/75">
            It&apos;s time to feel again
          </p>
          <p className="mt-5 text-sm leading-6 text-ink-foreground/70">
            Independent Kenyan storytelling shaped by culture, purpose and the human experience.
          </p>
          <Link to="/about" className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-flame hover:underline">Our Story</Link>
        </div>

        <div>
          <p className="eyebrow">Discover</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {links.slice(0, 8).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex min-h-11 items-center text-ink-foreground/80 hover:text-flame"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={socials.youtube} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm text-ink-foreground/75 hover:text-flame">Behind the Scenes</a>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <a href="mailto:business@avantcinema.com" className="mt-4 flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-foreground/85 hover:text-flame"><Mail className="size-4"/>business@avantcinema.com</a>
          <a href={WHATSAPP_TEL} className="flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-foreground/85 hover:text-flame"><MessageCircle className="size-4"/>WhatsApp {WHATSAPP}</a>
          <p className="mt-2 text-sm text-ink-foreground/70">
            Issues with payment? Talk to us directly.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
                className="grid size-11 place-items-center rounded-full hover:bg-ink-foreground/5 hover:text-flame"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
                className="grid size-11 place-items-center rounded-full hover:bg-ink-foreground/5 hover:text-flame"
            >
              <Youtube className="size-5" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full hover:bg-ink-foreground/5 hover:text-flame"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 px-5 py-5 text-xs text-ink-foreground/55 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4"><span>{appearance?.footer?.copyright || `© ${new Date().getFullYear()} Avant Movies. All rights reserved.`}</span><span className="flex gap-4"><Link to="/privacy" className="hover:text-flame">Privacy</Link><Link to="/terms" className="hover:text-flame">Terms</Link><Link to="/contact" className="hover:text-flame">Contact</Link></span></div>
      </div>
    </footer>
  );
}
