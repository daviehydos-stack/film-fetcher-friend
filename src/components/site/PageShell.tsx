import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function PageShell({
  eyebrow,
  title,
  intro,
  hero,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  hero?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="headline mt-3 text-5xl text-foreground sm:text-6xl">
          {title}
        </h1>
        {intro ? (
          <div className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/85">
            {intro}
          </div>
        ) : null}
        {hero ? (
          <div className="panel mt-8 overflow-hidden rounded-2xl">
            <img src={hero} alt={`${title} featured artwork`} decoding="async" className="w-full object-cover" />
          </div>
        ) : null}
      </section>
      {children}
      <SiteFooter />
    </div>
  );
}
