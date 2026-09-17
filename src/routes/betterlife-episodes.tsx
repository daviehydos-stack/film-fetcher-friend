import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { YoutubeCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { betterLifeFree } from "@/lib/site-data";

export const Route = createFileRoute("/betterlife-episodes")({
  head: () => ({
    meta: [
      { title: "A Better Life — Free episodes 1 to 4 | Avant Cinema" },
      {
        name: "description",
        content:
          "Watch the first four episodes of A Better Life free — a governor's son, a girl from the slum, and the city between them.",
      },
      { property: "og:title", content: "A Better Life — Free episodes" },
      {
        property: "og:description",
        content: "Episodes 1 to 4 of A Better Life, free to stream.",
      },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BetterLifeEpisodes,
});

function BetterLifeEpisodes() {
  return (
    <PageShell
      eyebrow="Free to watch"
      title="A Better Life — Episodes 1 to 4"
      intro={
        <>
          <p>
            The first four episodes of season one are free. Meet the governor's
            son, the girl from the slum, and everyone caught in between.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/a-better-life"
              className="rounded-md bg-flame px-5 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
            >
              Continue the season
            </Link>
          </div>
        </>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {betterLifeFree.map((e) => (
            <YoutubeCard key={e.title} episode={e} />
          ))}
        </div>
      </section>
      <PricingSection
        title="Watch A Better Life"
        only={["Watch A Better Life", "Watch it all!"]}
      />
      <PaymentHelp />
    </PageShell>
  );
}
