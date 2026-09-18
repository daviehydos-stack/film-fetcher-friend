import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PaymentHelp } from "@/components/site/Pricing";
import { socials } from "@/lib/site-data";

const POSTER =
  "https://static.wixstatic.com/media/57086b_3c2c8674850045c78312f3397ae32e13~mv2.jpg/v1/fill/w_588,h_416,al_c,q_85,enc_auto/file.jpeg";

export const Route = createFileRoute("/better-days")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Better Days — Where it all started | Avant Cinema" },
      {
        name: "description",
        content:
          "Better Days, the series that started it all on KTN. The story behind Avant Cinema.",
      },
      { property: "og:title", content: "Better Days | Avant Cinema" },
      {
        property: "og:description",
        content: "The series that started it all, on KTN.",
      },
      { property: "og:image", content: POSTER },
      { name: "twitter:image", content: POSTER },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  links: [{ rel: "canonical", href: `/title/better-days` }],
  component: BetterDays,
});

function BetterDays() {
  return (
    <PageShell
      eyebrow="Where it all started"
      title="Better Days"
      hero={POSTER}
      intro={
        <p>
          Better Days aired on KTN and set everything that followed in motion. It
          is the show that taught us how to tell Kenyan stories honestly — the
          small rooms, the big feelings, the days that get better slowly.
        </p>
      }
    >
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="panel rounded-2xl p-8">
          <h2 className="headline text-3xl text-ink-foreground">
            Catch the episodes
          </h2>
          <p className="mt-3 text-sm text-ink-foreground/80">
            Episodes of Better Days live on our YouTube channel alongside
            trailers, behind the scenes and new releases.
          </p>
          <a
            href={socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-md bg-flame px-5 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
          >
            Watch on YouTube
          </a>
        </div>
      </section>
      <PaymentHelp />
    </PageShell>
  );
}
