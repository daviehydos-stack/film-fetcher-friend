import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ContentRail } from "@/components/streaming/ContentRail";
import { HomeHero } from "@/components/streaming/HomeHero";
import { ContinueWatching } from "@/components/streaming/ContinueWatching";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { catalogue } from "@/lib/site-data";
import { readMyList } from "@/lib/my-list";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avant Movies — It's time to feel again" },
      {
        name: "description",
        content:
          "Stream independent Kenyan films and series from Avant Movies. Discover Back to Us, Nairobby, A Better Life, This is Life and more.",
      },
      { property: "og:title", content: "Avant Movies — It's time to feel again" },
      {
        property: "og:description",
        content: "Independent Kenyan stories, made to be felt.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1920,h_1080,q_90,enc_auto/file.jpeg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [myListIds, setMyListIds] = useState<string[]>([]);
  useEffect(() => { const sync = () => setMyListIds(readMyList()); sync(); window.addEventListener("avant-my-list", sync); return () => window.removeEventListener("avant-my-list", sync); }, []);
  const featured = catalogue.find((item) => item.featured) ?? catalogue[0];
  const series = catalogue.filter((item) => item.type === "series");
  const movies = catalogue.filter((item) => item.type === "movie");
  const available = catalogue.filter((item) => item.available);
  const myList = useMemo(() => myListIds.map((id) => catalogue.find((item) => item.id === id)).filter((item): item is (typeof catalogue)[number] => Boolean(item)), [myListIds]);

  return (
    <StreamingShell>
      <main className="overflow-hidden">
        <HomeHero item={featured} />

        <div className="relative z-20 -mt-16 pb-12 sm:-mt-20">
          <ContinueWatching />
          {myList.length > 0 ? <ContentRail title="My List" items={myList} /> : null}
          <ContentRail title="Featured on Avant" items={catalogue} />
          {available.length > 0 ? (
            <ContentRail title="Watch Now" items={available} />
          ) : null}
          {series.length > 0 ? <ContentRail title="TV Shows" items={series} /> : null}
          {movies.length > 0 ? <ContentRail title="Movies" items={movies} /> : null}
        </div>

        <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-6 sm:px-10 lg:px-14">
          <div className="border-t border-white/10 pt-14">
            <p className="eyebrow">Avant Movies</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">
              Stories made to stay with you.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Independent Kenyan storytelling driven by culture, purpose and the
              human experience. It&apos;s time to feel again.
            </p>
          </div>
        </section>
      </main>
    </StreamingShell>
  );
}
