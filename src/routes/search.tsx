import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useRef } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { DiscoveryGrid } from "@/components/streaming/DiscoveryGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCatalogue } from "@/lib/catalogue";

type SearchState = { q: string; type: "all" | "movie" | "series"; sort: "curated" | "az" };
export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchState => ({
    q: typeof search["q"] === "string" ? search["q"].slice(0, 120) : "",
    type: search["type"] === "movie" || search["type"] === "series" ? search["type"] : "all",
    sort: search["sort"] === "az" ? "az" : "curated",
  }),
  head: () => ({ meta: [{ title: "Search African Films & Series — Avant Movies" }, { name: "description", content: "Search the Avant Movies catalogue of Kenyan films, short films and series." }, { property: "og:title", content: "Search — Avant Movies" }, { property: "og:description", content: "Find films and series in the Avant Movies catalogue." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex, follow" }] }),
  component: SearchPage,
});
function SearchPage() {
  const { q, type, sort } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const { items, loading } = useCatalogue();
  const handleSearch = (newQ: string) => {
    if (newQ.length > 3 && newQ !== q) {
      setIsAiThinking(true);
      setTimeout(() => setIsAiThinking(false), 800);
    }
    setSearch({ q: newQ });
  };
  const setSearch = (patch: Partial<SearchState>) => void navigate({ search: (previous) => ({ ...previous, ...patch }), replace: true });
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const filtered = items.filter((item) => (type === "all" || item.type === type) && (!needle || [item.title, item.type, item.synopsis, item.shortDescription, ...(item.genres || []), ...(item.cast || []), ...(item.directors || []), ...(item.creators || []), ...(item.languages || [])].some((value) => value.toLowerCase().includes(needle))));
    return sort === "az" ? [...filtered].sort((a, b) => a.title.localeCompare(b.title)) : filtered;
  }, [items, q, sort, type]);
  const suggestions = useMemo(() => items.slice(0, 5), [items]);
  return <StreamingShell><main id="main-content" className="mx-auto min-h-[72vh] max-w-[1600px] px-5 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-36 lg:px-14"><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16"><div><p className="eyebrow">Find your next story</p><h1 className="mt-3 text-[clamp(3rem,10vw,7rem)] font-black leading-[.86]">Search</h1><div className="relative mt-7 max-w-3xl sm:mt-10"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><label htmlFor="catalogue-search" className="sr-only">Search movies, shows and genres</label><Input ref={inputRef} autoFocus id="catalogue-search" value={q} onChange={(event) => handleSearch(event.target.value)} placeholder="Title, genre, filmmaker…" inputMode="search" enterKeyHint="search" className="h-16 rounded-md border-border bg-surface pl-12 pr-12 text-lg shadow-reel" />{q ? <Button type="button" size="icon" variant="ghost" onClick={() => { setSearch({ q: "" }); inputRef.current?.focus(); }} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2"><X className="size-4" /></Button> : null}</div><div className="mt-4 flex gap-2 overflow-x-auto pb-1"><select aria-label="Filter by type" value={type} onChange={(event) => setSearch({ type: event.target.value as SearchState["type"] })} className="min-h-11 shrink-0 rounded-md border border-border bg-surface px-3 text-sm outline-none"><option value="all">All titles</option><option value="movie">Movies</option><option value="series">TV Shows</option></select><select aria-label="Sort results" value={sort} onChange={(event) => setSearch({ sort: event.target.value as SearchState["sort"] })} className="min-h-11 shrink-0 rounded-md border border-border bg-surface px-3 text-sm outline-none"><option value="curated">Curated order</option><option value="az">A–Z</option></select></div></div><aside className="hidden border-l border-border pl-7 lg:block"><p className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">Explore directly</p><div className="mt-4 space-y-1"><Link to="/movies" className="flex items-center justify-between py-2 text-sm font-semibold hover:text-primary">Movies<ArrowRight className="size-4" /></Link><Link to="/tv-shows" className="flex items-center justify-between py-2 text-sm font-semibold hover:text-primary">TV Shows<ArrowRight className="size-4" /></Link><Link to="/watch-free" className="flex items-center justify-between py-2 text-sm font-semibold hover:text-primary">Watch for Free<ArrowRight className="size-4" /></Link></div></aside></div><section className="mt-12 border-t border-border pt-7 sm:mt-16"><div className="mb-6 flex items-end justify-between gap-4"><div><h2 className="text-xl font-bold">{q ? `Results for “${q}”` : "Stories to begin with"}</h2><p className="mt-1 text-sm text-muted-foreground">{loading ? "Loading the Avant catalogue…" : `${results.length} ${results.length === 1 ? "title" : "titles"}`}</p></div></div>{loading ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{Array.from({ length: 5 }, (_, index) => <div key={index} className="aspect-video animate-pulse rounded-md bg-surface" />)}</div> : results.length ? <DiscoveryGrid items={q ? results : suggestions} /> : <div className="max-w-2xl border-y border-border py-12"><h2 className="text-2xl font-bold">We couldn’t find that story</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Check the spelling or try a broader title or genre. You can also return to the complete catalogue.</p><div className="mt-5 flex flex-wrap gap-2"><Button onClick={() => setSearch({ q: "", type: "all" })}>Clear search</Button><Button asChild variant="outline"><Link to="/movies">Browse movies</Link></Button></div></div>}</section></main></StreamingShell>;
}
