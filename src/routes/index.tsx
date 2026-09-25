import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ContentRail } from "@/components/streaming/ContentRail";
import { HomeHero } from "@/components/streaming/HomeHero";
import { ContinueWatching } from "@/components/streaming/ContinueWatching";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { publicCatalogue } from "@/lib/avant-backend";
import { readMyList } from "@/lib/my-list";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
import { isFreeTitle, mapPublicTitle } from "@/lib/catalogue";
import { readProgress } from "@/lib/watch-progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: publicPageMeta("/", "Avant Cinema | Watch Kenyan Movies & Series Online", "Stream Kenyan movies, independent films and original series online on Avant Cinema. Watch Back to Us, Nairobby, A Better Life, This Is Life and more Kenyan stories.", "https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1920,h_1080,q_90,enc_auto/file.jpeg"),
    links: publicPageLinks("/"),
  }),
  component: Index,
});

function Index() {
  const [myListIds, setMyListIds] = useState<string[]>([]);
  const [watchedIds, setWatchedIds] = useState<string[]>([]);
  const [home, setHome] = useState<any>(null);
  useEffect(() => {
    let cancelled = false;
    const load = () => publicCatalogue().then((value) => { if (!cancelled) setHome(value); }).catch(() => {});
    const idle = (window as any).requestIdleCallback ? (window as any).requestIdleCallback(load, { timeout: 500 }) : window.setTimeout(load, 80);
    return () => { cancelled = true; if ((window as any).cancelIdleCallback && typeof idle === "number") (window as any).cancelIdleCallback(idle); else window.clearTimeout(idle as number); };
  }, []);
  useEffect(() => { const sync = () => setMyListIds(readMyList()); sync(); window.addEventListener("avant-my-list", sync); return () => window.removeEventListener("avant-my-list", sync); }, []);
  useEffect(() => { const sync = () => setWatchedIds(readProgress().map((entry) => entry.contentId)); sync(); window.addEventListener("avant-progress", sync); return () => window.removeEventListener("avant-progress", sync); }, []);
  const dbTitles: CatalogueTitle[]=(home?.titles||[]).map((t:any)=>mapPublicTitle(t)).filter((item:any):item is CatalogueTitle=>Boolean(item));const liveCatalogue=dbTitles.length?dbTitles:catalogue;const heroId=home?.featuredHero?.titleId;const featured=liveCatalogue.find((x:any)=>home?.titles?.find((t:any)=>t.id===heroId)?.slug===x.slug)||liveCatalogue.find(x=>x.featured)||liveCatalogue[0];const masterclasses=liveCatalogue.filter(x=>x.slug.includes("masterclass")||x.genres.some(g=>/masterclass|education/i.test(g))),series=liveCatalogue.filter(x=>x.type==="series"&&!masterclasses.some(m=>m.id===x.id)),movies=liveCatalogue.filter(x=>x.type==="movie"),available=liveCatalogue.filter(x=>x.available);const adminRails=(home?.collections||[]).map((c:any)=>({name:c.name,items:(home?.collectionTitles||[]).filter((x:any)=>x.collection_id===c.id).sort((x:any,y:any)=>x.display_order-y.display_order).map((x:any)=>liveCatalogue.find(t=>home.titles?.find((dt:any)=>dt.id===x.title_id)?.slug===t.slug)).filter(Boolean)})).filter((x:any)=>x.items.length);
  const myList = useMemo(() => myListIds.map((id) => liveCatalogue.find((item) => item.id === id)).filter((item): item is CatalogueTitle => Boolean(item)), [myListIds, liveCatalogue]);
  const freeTitles=liveCatalogue.filter(isFreeTitle);
  const withoutHero=(items:CatalogueTitle[])=>items.filter(item=>item.id!==featured?.id);
  const configuredAvailable=adminRails.flatMap((rail:any)=>rail.items).filter((item:CatalogueTitle,index:number,all:CatalogueTitle[])=>all.findIndex(other=>other.id===item.id)===index);
  const availableNow=withoutHero(configuredAvailable.length?configuredAvailable:available).slice(0,4);
  const moviePreview=withoutHero(movies).slice(0,4);
  const seriesPreview=series.slice(0,4);
  const masterclassPreview=masterclasses.slice(0,4);
  const freePreview=withoutHero(freeTitles).slice(0,4);
  const lastWatched = liveCatalogue.find((title) => watchedIds.some((id) => id === title.slug || id.startsWith(`${title.slug}-`)));
  const moreForYou = lastWatched
    ? withoutHero(liveCatalogue).filter((title) => title.id !== lastWatched.id && title.genres.some((genre) => lastWatched.genres.includes(genre))).slice(0,4)
    : [];

  return (
    <StreamingShell>
      <main id="main-content" className="overflow-hidden">
        {featured ? <HomeHero item={featured} /> : <div className="min-h-[70svh] bg-[#090a0c]" aria-hidden="true" />}

        <div className="relative z-20 pb-10 pt-3 sm:pt-5 lg:pt-6">
          <ContinueWatching />
          {moviePreview.length>0?<ContentRail eyebrow="Avant Cinema" title="Movies" description="Feature films available on Avant Cinema." items={moviePreview} href="/movies" linkLabel="All movies"/>:null}
          {seriesPreview.length>0?<ContentRail eyebrow="Watch by season" title="Series" description="Open a series, choose a season, then select an episode." items={seriesPreview} href="/tv-shows" linkLabel="All series"/>:null}
          {masterclassPreview.length>0?<ContentRail eyebrow="Learn with Avant" title="Masterclass" description="Premium classes available separately from movies and series." items={masterclassPreview} linkLabel="View masterclass"/>:null}
          {moreForYou.length>0?<ContentRail eyebrow="Because you watched" title={`More ${lastWatched?.genres[0] ?? "stories"}`} description="Selected from what you have watched on Avant." items={moreForYou} href={lastWatched?.type === "series" ? "/tv-shows" : "/movies"} linkLabel="View more"/>:null}
          {freePreview.length>0?<ContentRail eyebrow="Open access" title="Watch for Free" description="Short films and selected episodes available without purchase." items={freePreview} badgeLabel="Free to watch" href="/watch-free" linkLabel="Explore free"/>:null}
          {myList.length>0?<ContentRail title="My List" items={myList}/>:null}
        </div>
      </main>
    </StreamingShell>
  );
}
