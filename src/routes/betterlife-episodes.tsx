import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { YoutubeCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { betterLifeFree } from "@/lib/site-data";
import { episodeCollectionSchema, publicPageLinks, publicPageMeta } from "@/lib/seo";

export const Route = createFileRoute("/betterlife-episodes")({
  head: () => ({
    meta: publicPageMeta("/betterlife-episodes", "A Better Life — Free Episodes | Avant Cinema", "Watch free episodes of the Kenyan series A Better Life from Avant Cinema.", betterLifeFree.find((episode) => episode.youtubeId)?.youtubeId ? `https://i.ytimg.com/vi/${betterLifeFree.find((episode) => episode.youtubeId)!.youtubeId}/maxresdefault.jpg` : undefined, "video.tv_show"),
    links: publicPageLinks("/betterlife-episodes"),
    scripts: episodeCollectionSchema("A Better Life", "Watch free episodes of the Kenyan series A Better Life from Avant Cinema.", "/betterlife-episodes", betterLifeFree).map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
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
