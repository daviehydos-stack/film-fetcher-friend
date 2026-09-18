import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { TitleCard } from "@/components/streaming/TitleCard";
import { Input } from "@/components/ui/input";
import { catalogue } from "@/lib/site-data";

export const Route = createFileRoute("/search")({ component: SearchPage });
function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? catalogue.filter((item) => `${item.title} ${item.synopsis} ${item.genres.join(" ")}`.toLowerCase().includes(q)) : catalogue;
  }, [query]);
  return <StreamingShell><main className="mx-auto min-h-[75vh] max-w-[1500px] px-5 pb-20 pt-28 sm:px-10 lg:px-14">
    <p className="eyebrow">Find your next story</p><h1 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Search Avant</h1>
    <label className="relative mt-8 block max-w-2xl"><Search className="absolute left-4 top-3.5 size-5 text-muted-foreground"/><Input autoFocus value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Titles, genres, stories..." className="h-12 bg-surface pl-12 text-base"/></label>
    <p className="mt-5 text-sm text-muted-foreground">{query ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Browse all available titles"}</p>
    {results.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{results.map((item)=><TitleCard key={item.id} item={item}/>)}</div> : <div className="py-24"><h2 className="text-2xl font-bold">No stories found</h2><p className="mt-2 text-muted-foreground">Try a different title or genre.</p></div>}
  </main></StreamingShell>;
}
