import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TrailerCard } from "@/components/site/VideoCard";
import { PricingSection, PaymentHelp } from "@/components/site/Pricing";
import { films, trailers, WHATSAPP_TEL } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avant Cinema — Kenyan films & series by Jennifer Gatero" },
      {
        name: "description",
        content:
          "Stream Back to Us, This is Life, A Better Life and Nairobby. Independent Kenyan storytelling from Avant Cinema. It's time to feel again.",
      },
      { property: "og:title", content: "Avant Cinema — It's time to feel again" },
      {
        property: "og:description",
        content:
          "Independent Kenyan films and series: Back to Us, This is Life, A Better Life, Nairobby.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_1470,h_797,enc_auto/file.jpeg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_1470,h_797,enc_auto/file.jpeg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <div className="panel overflow-hidden rounded-2xl">
            <img
              src="https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1313,h_739,q_90,enc_auto/file.jpeg"
              alt="Back to Us"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <p className="eyebrow">Avant Cinema</p>
          <h1 className="headline mt-4 text-5xl text-foreground sm:text-7xl">
            It&apos;s time to feel again
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground/85">
            In a world where much of today&apos;s content has become stripped of
            deeper meaning, we remain committed to staying true to who we are:
            authentic storytellers driven by purpose. We believe stories should
            do more than simply capture attention; they should resonate, inspire,
            entertain and leave a lasting impact. Through our work, we aspire to
            create meaningful content that brings joy, sparks connection, and
            adds a little more light to the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/watch-them-all"
              className="rounded-md bg-ink px-6 py-3 text-sm font-bold tracking-wide text-ink-foreground uppercase hover:bg-ink/90"
            >
              Watch them all
            </Link>
            <Link
              to="/this-is-life-episodes"
              className="rounded-md border-2 border-ink px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase hover:bg-ink hover:text-ink-foreground"
            >
              Watch 4 episodes free
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="eyebrow">All trailers</p>
        <h2 className="headline mt-2 text-4xl text-foreground sm:text-5xl">
          Watch the trailers
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {trailers.map((t) => (
            <TrailerCard key={t.title} {...t} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-foreground/85">
          Every time you buy our content, you are helping us produce more of it
          so thank you!
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="eyebrow">The films</p>
        <h2 className="headline mt-2 text-4xl text-foreground sm:text-5xl">
          Our stories
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((f) => (
            <Link
              key={f.slug}
              to={f.to}
              className="panel group overflow-hidden rounded-xl"
            >
              <img
                src={f.thumb}
                alt={f.title}
                loading="lazy"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="headline text-xl text-ink-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-foreground/70">{f.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="panel grid gap-8 rounded-2xl p-8 md:grid-cols-2 md:items-center">
          <img
            src="https://static.wixstatic.com/media/57086b_270c3d9debf04bc1952813bc7bdbd67f~mv2.png/v1/fill/w_545,h_513,al_c,q_85,enc_auto/file.png"
            alt="A Real Boy — novel by Jennifer Gatero"
            loading="lazy"
            className="w-full rounded-xl object-cover"
          />
          <div>
            <p className="eyebrow">The novel</p>
            <h2 className="headline mt-2 text-4xl text-ink-foreground">A Real Boy</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-foreground/80">
              Shiko is a lonely housewife living in a luxurious villa perched on
              the edge of the Rift Valley. Her husband Kimani, once the love of
              her life, has become a distant stranger, consumed by his career in
              tech. When he brings home Roma, a prototype humanoid AI, Shiko is
              repulsed, she has always been tech averse.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80">
              But as the days go by, something shifts. Roma listens. He notices.
              He cares. Slowly, impossibly, he begins to teach her more about
              connection, empathy, and what it means to be truly alive.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80">
              Set in a near-future Kenya where AI is advancing faster than
              humanity can keep up, A Real Boy is a haunting, tender, and
              provocative exploration of love, identity, and what it really means
              to be human.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_TEL}
                className="rounded-md bg-flame px-5 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
              >
                Order physical book on WhatsApp
              </a>
              <a
                href="https://www.amazon.com/REAL-BOY-Jennifer-Gatero/dp/9914351395"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-flame px-5 py-3 text-sm font-bold tracking-wide text-flame uppercase hover:bg-flame hover:text-flame-foreground"
              >
                Buy the book on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="panel grid gap-8 rounded-2xl p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Masterclass</p>
            <h2 className="headline mt-2 text-4xl text-ink-foreground">
              Write like a master
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-foreground/80">
              Master the art of storytelling with a full in-depth masterclass by
              Jennifer Gatero, a seasoned and award-winning writer recognized by
              The New York Times. Learn how to write compelling story arcs,
              create relatable characters and master twist endings. Whether you
              are just starting out or you&apos;re an already experienced writer,
              this masterclass is for you! Available now at a special
              limited-time price.
            </p>
            <Link
              to="/write-like-a-master"
              className="mt-6 inline-block rounded-md bg-flame px-6 py-3 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
            >
              Start the course
            </Link>
          </div>
          <div className="grid gap-3">
            {[
              "https://static.wixstatic.com/media/57086b_ab9eaa79b8204511a47b2a70c4fb4d1d~mv2.jpg/v1/fill/w_612,h_345,q_90,enc_auto/file.jpeg",
              "https://static.wixstatic.com/media/57086b_9115caa51ef2456ea26fc381f648cf51~mv2.jpg/v1/fill/w_612,h_345,q_90,enc_auto/file.jpeg",
              "https://static.wixstatic.com/media/57086b_1e3f196f6cbe4887911b98118c5cc009~mv2.jpg/v1/fill/w_612,h_345,q_90,enc_auto/file.jpeg",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt="Masterclass"
                loading="lazy"
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <PaymentHelp />
      <SiteFooter />
    </div>
  );
}
