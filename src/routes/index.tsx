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
  useEffect(() => {
    let cancelled = false;
    const load = () => publicCatalogue().then((value) => { if (!cancelled) setHome(value); }).catch(() => { if (!cancelled) setHome(null); });
    void load();
    return () => { cancelled = true; };
  }, []);
  useEffect(() => { const sync = () => setMyListIds(readMyList()); sync(); window.addEventListener("avant-my-list", sync); return () => window.removeEventListener("avant-my-list", sync); }, []);
  const dbTitles: CatalogueTitle[]=(home?.titles||[]).map((t:any)=>{const f=catalogue.find(x=>x.slug===t.slug||x.id===t.legacy_key);return{id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,year:t.year?String(t.year):f?.year,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||t.synopsis||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,featured:Boolean(t.featured),available:true,trailerEmbedUrl:t.trailer_youtube_id?`https://www.youtube-nocookie.com/embed/${t.trailer_youtube_id}?rel=0`:f?.trailerEmbedUrl,previewYoutubeId:t.trailer_youtube_id||f?.previewYoutubeId,previewStart:t.preview_start_seconds??f?.previewStart,previewDuration:t.preview_duration_seconds??f?.previewDuration,heroAutoplay:t.hero_autoplay!==false,episodes:t.content_type==='movie'&&(t.youtube_video_id||t.vimeo_video_id)?[{title:t.title,duration:'',youtubeId:t.youtube_video_id||undefined,vimeoVideoId:t.vimeo_video_id||undefined,locked:false,legacyKey:t.slug}]:f?.episodes};});const liveCatalogue=dbTitles.length?dbTitles:catalogue;const heroId=home?.featuredHero?.titleId;const featured=liveCatalogue.find((x:any)=>home?.titles?.find((t:any)=>t.id===heroId)?.slug===x.slug)||liveCatalogue.find(x=>x.featured)||liveCatalogue[0];const series=liveCatalogue.filter(x=>x.type==="series"),movies=liveCatalogue.filter(x=>x.type==="movie"),available=liveCatalogue.filter(x=>x.available);const adminRails=(home?.collections||[]).map((c:any)=>({name:c.name,items:(home?.collectionTitles||[]).filter((x:any)=>x.collection_id===c.id).sort((x:any,y:any)=>x.display_order-y.display_order).map((x:any)=>liveCatalogue.find(t=>home.titles?.find((dt:any)=>dt.id===x.title_id)?.slug===t.slug)).filter(Boolean)})).filter((x:any)=>x.items.length);
  const myList = useMemo(() => myListIds.map((id) => liveCatalogue.find((item) => item.id === id)).filter((item): item is CatalogueTitle => Boolean(item)), [myListIds, liveCatalogue]);
  const freeTitles=liveCatalogue.filter(item=>item.episodes?.some(ep=>(ep.youtubeId||ep.vimeoVideoId)&&ep.locked!==true)||(item.type==="movie"&&Boolean(item.youtubeVideoId||item.vimeoVideoId)));
  const withoutHero=(items:CatalogueTitle[])=>items.filter(item=>item.id!==featured?.id);
  const configuredAvailable=adminRails.flatMap((rail:any)=>rail.items).filter((item:CatalogueTitle,index:number,all:CatalogueTitle[])=>all.findIndex(other=>other.id===item.id)===index);
  const availableNow=withoutHero(configuredAvailable.length?configuredAvailable:available).slice(0,4);
  const moviePreview=withoutHero(movies).slice(0,4);
  const seriesPreview=withoutHero(series).slice(0,4);
  const freePreview=withoutHero(freeTitles).slice(0,4);

  return (
    <StreamingShell>
      <main id="main-content" className="overflow-hidden">
        <HomeHero item={featured} />

        <div className="relative z-20 pb-10 pt-3 sm:pt-5 lg:pt-6">
          <ContinueWatching />
          {availableNow.length>0?<ContentRail eyebrow="Curated on Avant" title="Available Now" description="Stories ready to watch, selected from the current Avant catalogue." items={availableNow}/>:null}
          {moviePreview.length>0?<ContentRail eyebrow="Feature films & shorts" title="Movies" description="Independent films with a distinct Kenyan point of view." items={moviePreview} href="/movies" linkLabel="All movies"/>:null}
          {seriesPreview.length>0?<ContentRail eyebrow="Stories in chapters" title="TV Shows" description="Series built around characters, choices and everyday life." items={seriesPreview} href="/tv-shows" linkLabel="All shows"/>:null}
          {freePreview.length>0?<ContentRail eyebrow="Open access" title="Watch for Free" description="Short films and selected episodes, available without purchase." items={freePreview} badgeLabel="Free to watch" href="/watch-free" linkLabel="Explore free"/>:null}
          {myList.length>0?<ContentRail title="My List" items={myList}/>:null}
        </div>
      </main>
    </StreamingShell>
  );
}
