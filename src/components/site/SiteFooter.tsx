import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { navLinks, socials, WHATSAPP, WHATSAPP_TEL } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="headline text-3xl text-flame">Avant Cinema</p>
          <p className="mt-1 text-sm tracking-[0.18em] text-ink-foreground/70 uppercase">
            It&apos;s time to feel again
          </p>
          <p className="mt-5 max-w-sm text-sm text-ink-foreground/75">
            Authentic storytellers driven by purpose. Every purchase moves us
            closer to a fully independent Kenyan channel.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-foreground/80 hover:text-flame">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Need help?</p>
          <a
            href={WHATSAPP_TEL}
            className="mt-4 inline-block text-lg font-semibold text-flame hover:underline"
          >
            WhatsApp {WHATSAPP}
          </a>
          <p className="mt-2 text-sm text-ink-foreground/70">
            Issues with payment? Talk to us directly.
          </p>
          <div className="mt-6 flex gap-4">
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-flame">
              <Facebook className="size-5" />
            </a>
            <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-flame">
              <Youtube className="size-5" />
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-flame">
              <Instagram className="size-5" />
            </a>
            <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-flame">
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-ink-foreground/55">
        © {new Date().getFullYear()} Avant Cinema. All rights reserved.
      </div>
    </footer>
  );
}
