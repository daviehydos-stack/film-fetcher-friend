import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { films } from "@/lib/site-data";

const POSTER =
  "https://static.wixstatic.com/media/57086b_fffe32756fcb4e498533ef18d9c34727~mv2.jpg/v1/fill/w_588,h_488,al_c,q_85,enc_auto/file.jpeg";

export const Route = createFileRoute("/watch-them-all")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Watch Them All — Every film, one price | Avant Cinema" },
      {
        name: "description",
        content:
          "Ksh 890 gets you Back to Us, This is Life, A Better Life and Nairobby for six months on Avant Cinema.",
      },
      { property: "og:title", content: "Watch Them All | Avant Cinema" },
      {
        property: "og:description",
        content: "Every Avant film, one price, six months of access.",
      },
      { property: "og:image", content: POSTER },
      { name: "twitter:image", content: POSTER },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WatchThemAll,
});

function WatchThemAll() {
  return (
    <PageShell
      eyebrow="Best value"
      title="Watch Them All"
      hero={POSTER}
      intro={
        <p>
          Ready to binge? One payment of Ksh 890 opens Back to Us, This is Life,
          A Better Life and Nairobby for six full months.
        </p>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="headline text-3xl text-foreground">What's included</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {films
            .filter((f) => f.slug !== "watch-them-all")
            .map((f) => (
              <Link
                key={f.slug}
                to={f.to}
                className="panel group block overflow-hidden rounded-xl"
              >
                <img
                  src={f.thumb}
                  alt={f.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="headline text-xl text-ink-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-foreground/70">{f.tagline}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <PricingSection title="Choose your plan" />
      <PaymentHelp />
    </PageShell>
  );
}
