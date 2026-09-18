import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { catalogue, type ContentType } from "@/lib/site-data";
import { StreamingShell } from "./StreamingShell";
import { TitleCard } from "./TitleCard";

export function CataloguePage({ type, title, intro }: { type: ContentType; title: string; intro: string }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const pool = useMemo(() => catalogue.filter((item) => item.type === type), [type]);
  const genres = ["All", ...new Set(pool.flatMap((item) => item.genres))];
  const visible = useMemo(() => pool.filter((item) => (genre === "All" || item.genres.includes(genre)) && `${item.title} ${item.synopsis} ${item.genres.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [genre, pool, query]);
  return (
    <StreamingShell>
      <main className="mx-auto min-h-[75vh] max-w-[1500px] px-5 pb-20 pt-28 sm:px-10 lg:px-14">
        <p className="eyebrow">Avant collection</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>
        <div className="mt-10 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1" role="group" aria-label={`Filter ${title} by genre`}>{genres.map((item) => <Button key={item} size="sm" variant={genre === item ? "default" : "secondary"} onClick={() => setGenre(item)}>{item}</Button>)}</div>
          <label className="relative block w-full sm:w-72"><span className="sr-only">Search {title}</span><Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles" className="h-10 bg-surface pl-9" /></label>
        </div>
        {visible.length ? <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visible.map((item) => <TitleCard key={item.id} item={item} layout="grid" />)}</div> : <div className="py-24 text-center"><h2 className="text-2xl font-bold">No stories found</h2><p className="mt-2 text-muted-foreground">Try another title or genre.</p></div>}
      </main>
    </StreamingShell>
  );
}