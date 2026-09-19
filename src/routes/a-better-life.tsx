import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LockedCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { betterLifePaid } from "@/lib/site-data";
import { publicPageLinks } from "@/lib/seo";

export const Route = createFileRoute("/a-better-life")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "A Better Life — Season one | Avant Cinema" },
      {
        name: "description",
        content:
          "Watch A Better Life episodes 5 to 13 on Avant Cinema. Ksh 350 for the season, three months access.",
      },
      { property: "og:title", content: "A Better Life | Avant Cinema" },
      {
        property: "og:description",
        content:
          "A governor's son, a girl from the slum. Watch the full first season.",
      },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: publicPageLinks("/title/a-better-life"),
  }),
  component: ABetterLife,
});

function ABetterLife() {
  return (
    <PageShell
      eyebrow="Season one"
      title="A Better Life — Episodes 5 to 13"
      hero="https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png"
      intro={
        <>
          <p>
            A governor's son. A girl from the slum. A city that never lets anyone
            forget where they come from. Episodes 1 to 4 are free — the rest of
            season one is here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/betterlife-episodes"
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
          {betterLifePaid.map((e) => (
            <LockedCard key={e.title} episode={e} />
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
