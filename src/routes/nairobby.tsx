import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LockedCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";

const POSTER =
  "https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg";

export const Route = createFileRoute("/nairobby")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Nairobby — A Nairobi crime story | Avant Cinema" },
      {
        name: "description",
        content:
          "Nairobby: the city that takes, and the ones who take back. Stream the film on Avant Cinema.",
      },
      { property: "og:title", content: "Nairobby | Avant Cinema" },
      {
        property: "og:description",
        content: "The city that takes, and the ones who take back.",
      },
      { property: "og:image", content: POSTER },
      { name: "twitter:image", content: POSTER },
      { property: "og:type", content: "video.movie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  links: [{ rel: "canonical", href: `/title/nairobby` }],
  component: Nairobby,
});

function Nairobby() {
  return (
    <PageShell
      eyebrow="Feature film"
      title="Nairobby"
      hero={POSTER}
      intro={
        <p>
          Nairobi gives, and Nairobi takes. Nairobby follows the people who have
          decided to take something back — and the night it all goes wrong. Watch
          the trailer on the home page, then unlock the full film below.
        </p>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="headline text-3xl text-foreground">Watch the film</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LockedCard
            episode={{ title: "Nairobby — Full film", duration: "01:54", locked: true, poster: POSTER }}
          />
        </div>
      </section>
      <PricingSection title="Get access" only={["Watch it all!"]} />
      <PaymentHelp />
    </PageShell>
  );
}
