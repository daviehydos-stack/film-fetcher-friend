import { createFileRoute, Link } from "@tanstack/react-router";
import { BookmarkPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { TitleCard } from "@/components/streaming/TitleCard";
import { catalogue } from "@/lib/site-data";
import { readMyList } from "@/lib/my-list";

export const Route = createFileRoute("/my-list")({
  head: () => ({
    meta: [
      { title: "My List — Avant Movies" },
      { name: "description", content: "Your saved Avant Movies films and series." },
    ],
  }),
  component: MyList,
});

function MyList() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setIds(readMyList());
    sync();
    window.addEventListener("avant-my-list", sync);
    return () => window.removeEventListener("avant-my-list", sync);
  }, []);

  const items = catalogue.filter((item) => ids.includes(item.id));

  return (
    <StreamingShell>
      <main className="mx-auto min-h-[70vh] max-w-[1500px] px-5 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-14">
        <p className="eyebrow">Your collection</p>
        <h1 className="mt-3 text-4xl font-black leading-none sm:text-6xl">My List</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Keep the Avant stories you want to come back to in one place.
        </p>

        {items.length ? (
          <>
            <p className="mt-8 text-sm text-muted-foreground">{items.length} {items.length === 1 ? "saved title" : "saved titles"}</p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => <TitleCard key={item.id} item={item} layout="grid" />)}
            </div>
          </>
        ) : (
          <div className="mt-8 max-w-xl rounded-xl border border-white/10 bg-surface/80 p-6 sm:mt-10 sm:p-8">
            <BookmarkPlus className="size-8 text-white/70" />
            <h2 className="mt-5 text-xl font-bold">Your list is empty</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Add a film or series using My List and it will appear here. For now, saved titles stay on this device until customer accounts are connected.
            </p>
            <Link to="/" className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 text-sm font-bold text-black transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Browse Avant
            </Link>
          </div>
        )}
      </main>
    </StreamingShell>
  );
}
