import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LockedCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";

const POSTER =
  "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_980,h_531,enc_auto/file.jpeg";

export const Route = createFileRoute("/back-to-us")({
  head: () => ({
    meta: [
      { title: "Back to Us — A Kenyan romance | Avant Cinema" },
      {
        name: "description",
        content:
          "Back to Us, a Kenyan romance shot in Watamu. Stream the full film on Avant Cinema.",
      },
      { property: "og:title", content: "Back to Us | Avant Cinema" },
      {
        property: "og:description",
        content: "A Kenyan romance shot on the coast in Watamu.",
      },
      { property: "og:image", content: POSTER },
      { name: "twitter:image", content: POSTER },
      { property: "og:type", content: "video.movie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BackToUs,
});

function BackToUs() {
  return (
    <PageShell
      eyebrow="Feature film"
      title="Back to Us"
      hero={POSTER}
      intro={
        <p>
          Two people, one coast, and everything they never said. Shot in Watamu,
          Back to Us is a love story about the distance between who we were and
          who we became.
        </p>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="headline text-3xl text-foreground">Watch the film</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LockedCard
            episode={{ title: "Back to Us — Full film", duration: "01:32", locked: true, poster: POSTER }}
          />
        </div>
      </section>
      <PricingSection title="Get access" only={["Watch it all!"]} />
      <PaymentHelp />
    </PageShell>
  );
}
