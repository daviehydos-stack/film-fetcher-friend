import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ContentRail, RankedRail } from "@/components/streaming/ContentRail";
import { HomeHero } from "@/components/streaming/HomeHero";
import { ContinueWatching } from "@/components/streaming/ContinueWatching";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { catalogue, type CatalogueTitle } from "@/lib/site-data";
import { publicCatalogue } from "@/lib/avant-backend";
import { readMyList } from "@/lib/my-list";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: publicPageMeta("/", "Avant Movies — It's time to feel again", "Stream independent Kenyan films and series from Avant Movies. Discover Back to Us, Nairobby, A Better Life, This is Life and more.", "https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1920,h_1080,q_90,enc_auto/file.jpeg"),
    links: publicPageLinks("/"),
  }),
  component: Index,
});

function Index() {
  const [myListIds, setMyListIds] = useState<string[]>([]);
  const [home, setHome] = useState<any>(null);
  useEffect(() => { publicCatalogue().then(setHome).catch(()=>setHome(null)); }, []);
  useEffect(() => { const sync = () => setMyListIds(readMyList()); sync(); window.addEventListener("avant-my-list", sync); return () => window.removeEventListener("avant-my-list", sync); }, []);
  const dbTitles: CatalogueTitle[]=(home?.titles||[]).map((t:any)=>{const f=catalogue.find(x=>x.slug===t.slug||x.id===t.legacy_key);return{id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,year:t.year?String(t.year):f?.year,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||t.synopsis||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,featured:Boolean(t.featured),available:true,trailerEmbedUrl:t.trailer_youtube_id?`https://www.youtube-nocookie.com/embed/${t.trailer_youtube_id}?rel=0`:f?.trailerEmbedUrl,previewYoutubeId:t.trailer_youtube_id||f?.previewYoutubeId,previewStart:t.preview_start_seconds??f?.previewStart,previewDuration:t.preview_duration_seconds??f?.previewDuration,heroAutoplay:t.hero_autoplay!==false,episodes:f?.episodes};});const liveCatalogue=dbTitles.length?dbTitles:catalogue;const heroId=home?.featuredHero?.titleId;const featured=liveCatalogue.find((x:any)=>home?.titles?.find((t:any)=>t.id===heroId)?.slug===x.slug)||liveCatalogue.find(x=>x.featured)||liveCatalogue[0];const series=liveCatalogue.filter(x=>x.type==="series"),movies=liveCatalogue.filter(x=>x.type==="movie"),available=liveCatalogue.filter(x=>x.available),comingSoon=liveCatalogue.filter(x=>!x.available);const adminRails=(home?.collections||[]).map((c:any)=>({name:c.name,items:(home?.collectionTitles||[]).filter((x:any)=>x.collection_id===c.id).sort((x:any,y:any)=>x.display_order-y.display_order).map((x:any)=>liveCatalogue.find(t=>home.titles?.find((dt:any)=>dt.id===x.title_id)?.slug===t.slug)).filter(Boolean)})).filter((x:any)=>x.items.length);
  const myList = useMemo(() => myListIds.map((id) => liveCatalogue.find((item) => item.id === id)).filter((item): item is (typeof catalogue)[number] => Boolean(item)), [myListIds]);

  return (
    <StreamingShell>
      <main className="overflow-hidden">
        <HomeHero item={featured} />

        <div className="relative z-20 pb-12 pt-5 sm:pt-7 lg:pt-8">
          <ContinueWatching />
          {adminRails.length ? adminRails.map((rail:any,index:number)=>index===0?<RankedRail key={rail.name} title={rail.name} items={rail.items}/>:<ContentRail key={rail.name} title={rail.name} items={rail.items}/>) : <>{liveCatalogue.length>0?<RankedRail title="Top picks on Avant" items={liveCatalogue}/>:null}{available.length>0?<ContentRail title="Keep Watching" items={available}/>:null}{series.length>0?<ContentRail title="Series & Originals" items={series}/>:null}{movies.length>0?<ContentRail title="Films" items={movies}/>:null}{comingSoon.length>0?<ContentRail title="Coming Soon" items={comingSoon}/>:null}</>}
          {myList.length>0?<ContentRail title="My List" items={myList}/>:null}
        </div>

        <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 sm:px-10 lg:px-14">
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
