import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PaymentHelp } from "@/components/site/Pricing";
import { WHATSAPP, WHATSAPP_TEL } from "@/lib/site-data";

export const Route = createFileRoute("/write-like-a-master")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Write Like a Master — Screenwriting masterclass | Avant Cinema" },
      {
        name: "description",
        content:
          "A practical screenwriting masterclass from the team behind Better Days, This is Life and A Better Life.",
      },
      { property: "og:title", content: "Write Like a Master | Avant Cinema" },
      {
        property: "og:description",
        content: "Learn to write stories that make people feel again.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Masterclass,
});

const modules = [
  {
    title: "Story first",
    body: "Find the idea worth months of your life, and test it before you write a page.",
  },
  {
    title: "Characters who breathe",
    body: "Want, need, contradiction. Build people an actor can't wait to play.",
  },
  {
    title: "Scenes that move",
    body: "Enter late, leave early, and let every scene turn on something.",
  },
  {
    title: "Dialogue with a pulse",
    body: "Write Kenyan voices that sound like people, not like scripts.",
  },
  {
    title: "Structure without formula",
    body: "Shape a season, an episode and a feature — and know the difference.",
  },
  {
    title: "From page to production",
    body: "Format, pitch, budget reality, and getting the thing actually shot.",
  },
];

function Masterclass() {
  return (
    <PageShell
      eyebrow="Masterclass"
      title="Write Like a Master"
      intro={
        <>
          <p>
            A practical screenwriting course from the team behind Better Days,
            This is Life, A Better Life and Nairobby. No theory for the sake of
            theory — just what actually gets a script made.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_TEL}
              className="rounded-md bg-flame px-5 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
            >
              Enroll via WhatsApp {WHATSAPP}
            </a>
          </div>
        </>
      }
    >
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="headline text-3xl text-foreground">What you'll learn</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <div key={m.title} className="panel rounded-xl p-6">
              <span className="text-4xl font-bold text-flame">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="headline mt-3 text-xl text-ink-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-ink-foreground/75">{m.body}</p>
            </div>
          ))}
        </div>
      </section>
      <PaymentHelp />
    </PageShell>
  );
}
