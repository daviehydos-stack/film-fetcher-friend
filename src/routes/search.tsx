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
    if (!q) return catalogue;
    return catalogue.filter((item) => [item.title, item.type, ...item.genres].some((value) => value.toLowerCase().includes(q)));
  }, [query]);
  return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-[1500px] px-5 pb-20 pt-28 sm:px-10 lg:px-14"><p className="eyebrow">Find your next story</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">Search</h1><div className="relative mt-8 max-w-2xl"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Titles, genres..." autoFocus className="h-14 bg-surface pl-12 text-base" /></div><p className="mt-8 text-sm text-muted-foreground">{results.length} {results.length === 1 ? "title" : "titles"}</p><div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{results.map((item) => <TitleCard key={item.id} item={item} />)}</div></main></StreamingShell>;
}
