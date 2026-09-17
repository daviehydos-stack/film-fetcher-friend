import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { YoutubeCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { thisIsLifeFree } from "@/lib/site-data";

export const Route = createFileRoute("/this-is-life-episodes")({
  head: () => ({
    meta: [
      { title: "This is Life — Free episodes 1 to 4 | Avant Cinema" },
      {
        name: "description",
        content:
          "Watch the first four episodes of the Kenyan series This is Life for free, then continue the season on Avant Cinema.",
      },
      { property: "og:title", content: "This is Life — Free episodes" },
      {
        property: "og:description",
        content: "Episodes 1 to 4 of This is Life, free to stream.",
      },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
