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
      <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="headline mt-3 break-words text-[clamp(2.5rem,11vw,3.75rem)] leading-[.95] text-foreground">
          {title}
        </h1>
        {intro ? (
          <div className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/85">{intro}</div>
        ) : null}
        {hero ? (
          <div className="panel mt-7 overflow-hidden rounded-xl sm:mt-8 sm:rounded-2xl">
            <img
              src={hero}
              alt={`${title} featured artwork`}
              decoding="async"
              className="w-full object-cover"
            />
          </div>
        ) : null}
      </section>
      {children}
      <SiteFooter />
    </div>
  );
}
