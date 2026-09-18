import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { TitleCard } from "@/components/streaming/TitleCard";
import { Input } from "@/components/ui/input";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { publicCatalogue } from "@/lib/avant-backend";
export const Route = createFileRoute("/search")({ head: () => ({ meta: [{ title: "Search — Avant Movies" }, { name: "robots", content: "noindex, follow" }] }), component: SearchPage });
function SearchPage() {
  const [query, setQuery] = useState("");
  const [live,setLive]=useState<CatalogueTitle[]>(catalogue);
  useEffect(()=>{let cancelled=false;publicCatalogue().then((h:any)=>{if(cancelled)return;const mapped=(h?.titles||[]).map((t:any)=>{const f=catalogue.find(x=>x.slug===t.slug||x.id===t.legacy_key);return {...f,id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||t.synopsis||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,available:true} as CatalogueTitle});if(mapped.length)setLive(mapped)}).catch(()=>{});return()=>{cancelled=true}},[]);
  const [type, setType] = useState<"all" | "movie" | "series">("all");
  const [sort, setSort] = useState<"featured" | "az">("featured");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = live.filter((item) => (type === "all" || item.type === type) && (!q || [item.title, item.type, ...item.genres].some((value) => value.toLowerCase().includes(q))));
    return sort === "az" ? [...filtered].sort((a, b) => a.title.localeCompare(b.title)) : filtered;
  }, [live, query, sort, type]);
  return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-[1500px] px-5 pb-16 pt-24 sm:pb-20 sm:pt-28 sm:px-10 lg:px-14"><p className="eyebrow">Find your next story</p><h1 className="mt-3 text-4xl font-black leading-none sm:text-6xl">Search</h1><div className="relative mt-6 max-w-2xl sm:mt-8"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><label htmlFor="catalogue-search" className="sr-only">Search movies, shows and genres</label><Input id="catalogue-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Titles, genres..." inputMode="search" enterKeyHint="search" className="h-14 bg-surface pl-12 pr-12 text-base" />{query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-md text-muted-foreground transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><X className="size-4" /></button> : null}</div><div className="mt-4 flex flex-wrap gap-2"><select aria-label="Filter by type" value={type} onChange={(e) => setType(e.target.value as "all" | "movie" | "series")} className="min-h-11 rounded-md border border-white/10 bg-surface px-3 text-sm text-white outline-none"><option value="all">All titles</option><option value="movie">Movies</option><option value="series">TV Shows</option></select><select aria-label="Sort results" value={sort} onChange={(e) => setSort(e.target.value as "featured" | "az")} className="min-h-11 rounded-md border border-white/10 bg-surface px-3 text-sm text-white outline-none"><option value="featured">Featured order</option><option value="az">A–Z</option></select></div><p className="mt-8 text-sm text-muted-foreground">{results.length} {results.length === 1 ? "title" : "titles"}</p>{results.length ? <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">{results.map((item) => <TitleCard key={item.id} item={item} layout="grid" />)}</div> : <div className="mt-8 rounded-lg border border-white/10 bg-surface p-8"><h2 className="text-xl font-bold">No titles found</h2><p className="mt-2 text-sm text-muted-foreground">Try another title or genre.</p></div>}</main></StreamingShell>;
}
