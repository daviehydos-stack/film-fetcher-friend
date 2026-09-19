import { createFileRoute, Link } from "@tanstack/react-router";
import { BookmarkPlus, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { TitleCard } from "@/components/streaming/TitleCard";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { readMyList, syncMyList } from "@/lib/my-list";
import { customerSession, rememberedCustomer, signInCustomer, watchCustomerSession } from "@/lib/google-auth";
import { publicCatalogue } from "@/lib/avant-backend";

export const Route = createFileRoute("/my-list")({
  head: () => ({
    meta: [
      { title: "My List — Avant Movies" },
      { name: "description", content: "Your saved Avant Movies films and series." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MyList,
});

function MyList() {
  const [ids, setIds] = useState<string[]>([]);
  const [live, setLive] = useState<CatalogueTitle[]>(catalogue);
  const [customer,setCustomer]=useState<any>(()=>{if(typeof window==="undefined")return undefined;try{const t=localStorage.getItem("avant_google_id_token");if(!t)return null;const p=JSON.parse(atob(t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));return ((p as any)?.exp||0)*1000>Date.now()?{email:(p as any).email,name:(p as any).name,photoURL:(p as any).picture}:null}catch{return null}});
  const [authBusy,setAuthBusy]=useState(false);

  useEffect(() => {
    void customerSession().then(setCustomer);
    return watchCustomerSession(() => void customerSession().then(setCustomer));
  }, []);

  useEffect(() => {
    if (!customer) { setIds([]); return; }
    const sync = () => setIds(readMyList());
    sync(); void syncMyList().then(setIds);
    const cached=typeof window!=="undefined"?sessionStorage.getItem("avant_public_catalogue"):null;if(cached){try{const h=JSON.parse(cached);const m=(h?.titles||[]).map((t:any)=>{const f=catalogue.find(x=>x.slug===t.slug||x.id===t.legacy_key);return {...f,id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,available:true,} as CatalogueTitle});if(m.length)setLive(m)}catch{}}
    void publicCatalogue().then((h:any)=>{const m=(h?.titles||[]).map((t:any)=>{const f=catalogue.find(x=>x.slug===t.slug||x.id===t.legacy_key);return {...f,id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,available:true,} as CatalogueTitle});if(m.length)setLive(m);try{sessionStorage.setItem("avant_public_catalogue",JSON.stringify(h))}catch{}}).catch(()=>{});
    window.addEventListener("avant-my-list", sync);
    return () => window.removeEventListener("avant-my-list", sync);
  }, [customer]);

  const items = live.filter((item) => ids.includes(item.id));

  return (
    <StreamingShell>
      <main className="mx-auto min-h-[70vh] max-w-[1500px] px-5 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-14">
        <p className="eyebrow">Your collection</p>
        <h1 className="mt-3 text-4xl font-black leading-none sm:text-6xl">My List</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Keep the Avant stories you want to come back to in one place.
        </p>

        {customer === undefined ? <div className="mt-10 text-sm text-muted-foreground">Checking your account…</div> : !customer ? <div className="mt-8 max-w-xl rounded-2xl border border-white/[.07] bg-white/[.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,.25)] backdrop-blur sm:mt-10 sm:p-8"><BookmarkPlus className="size-8 text-white/70"/><h2 className="mt-5 text-xl font-bold">Sign in to use My List</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">My List belongs to your Avant account so your saved films and series stay with you across supported devices.</p><button type="button" disabled={authBusy} onClick={async()=>{setAuthBusy(true);try{setCustomer(await signInCustomer(rememberedCustomer()?.email))}finally{setAuthBusy(false)}}} className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 text-sm font-bold text-black transition hover:bg-white/85">{authBusy?"Signing in…":rememberedCustomer()?`Continue as ${rememberedCustomer()?.name||rememberedCustomer()?.email}`:"Sign in with Google"}</button></div> : items.length ? (
          <>
            <div className="mt-8 flex flex-wrap items-center gap-3"><p className="text-sm text-muted-foreground">{items.length} {items.length === 1 ? "saved title" : "saved titles"}</p><Link to="/" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/10"><Play className="size-4 fill-current" />Browse more</Link></div>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => <TitleCard key={item.id} item={item} layout="grid" />)}
            </div>
          </>
        ) : (
          <div className="mt-8 max-w-xl rounded-2xl border border-white/[.07] bg-white/[.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,.25)] backdrop-blur sm:mt-10 sm:p-8">
            <BookmarkPlus className="size-8 text-white/70" />
            <h2 className="mt-5 text-xl font-bold">Your list is empty</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Add a film or series using My List and it will appear here. Sign in with Google and your saved titles will follow your Avant account across supported devices.
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
