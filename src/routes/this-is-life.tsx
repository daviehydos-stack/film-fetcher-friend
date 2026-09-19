import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LockedCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { thisIsLifePaid } from "@/lib/site-data";
import { publicPageLinks } from "@/lib/seo";

export const Route = createFileRoute("/this-is-life")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "This is Life — Kenyan series | Avant Cinema" },
      {
        name: "description",
        content:
          "Watch This is Life episodes 5 to 11 on Avant Cinema. Ksh 280 for the full season, three months access.",
      },
      { property: "og:title", content: "This is Life | Avant Cinema" },
      {
        property: "og:description",
        content: "Watch the full season of This is Life. Episodes 1 to 4 are free.",
      },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: publicPageLinks("/title/this-is-life"),
  }),
  component: ThisIsLife,
});

function ThisIsLife() {
  return (
    <PageShell
      eyebrow="Season one"
      title="This is Life — Episodes 5 to 11"
      hero="https://static.wixstatic.com/media/57086b_46bd84f76e9e40a0bfad5e2852bf6b09~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png"
      intro={
        <>
          <p>
            Grab your popcorn, this is going to be good. Episodes 1 to 4 are free
            to watch — the rest of the season is right here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/this-is-life-episodes"
              className="rounded-md bg-ink px-5 py-3 text-sm font-bold tracking-wide text-ink-foreground uppercase hover:bg-ink/90"
            >
              Watch episodes 1 to 4 for free
            </Link>
          </div>
        </>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="headline text-3xl text-foreground">The rest of the season</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {thisIsLifePaid.map((e) => (
            <LockedCard key={e.title} episode={e} />
          ))}
        </div>
      </section>
      <PricingSection
        title="Watch This is Life"
        only={["Watch This is Life", "Watch it all!"]}
      />
      <PaymentHelp />
    </PageShell>
  );
}
