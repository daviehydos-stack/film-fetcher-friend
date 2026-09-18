import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { YoutubeCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { thisIsLifeFree } from "@/lib/site-data";
import { episodeCollectionSchema, publicPageLinks, publicPageMeta } from "@/lib/seo";

export const Route = createFileRoute("/this-is-life-episodes")({
  head: () => ({
    meta: publicPageMeta("/this-is-life-episodes", "This is Life — Free Episodes | Avant Cinema", "Watch free episodes of the Kenyan series This is Life from Avant Cinema.", thisIsLifeFree.find((episode) => episode.youtubeId)?.youtubeId ? `https://i.ytimg.com/vi/${thisIsLifeFree.find((episode) => episode.youtubeId)!.youtubeId}/maxresdefault.jpg` : undefined, "video.tv_show"),
    links: publicPageLinks("/this-is-life-episodes"),
    scripts: episodeCollectionSchema("This is Life", "Watch free episodes of the Kenyan series This is Life from Avant Cinema.", "/this-is-life-episodes", thisIsLifeFree).map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
  }),
  component: ThisIsLifeEpisodes,
});

function ThisIsLifeEpisodes() {
  return (
    <PageShell
      eyebrow="Free to watch"
      title="This is Life — Episodes 1 to 4"
      intro={
        <>
          <p>
            Start the season on us. Four full episodes, no payment needed. When
            you are hooked, the rest of the season is one click away.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/this-is-life"
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
          {thisIsLifeFree.map((e) => (
            <YoutubeCard key={e.title} episode={e} />
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
