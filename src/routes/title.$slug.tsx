import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle, type CatalogueTitle } from "@/lib/site-data";
import { resolveCatalogueKey } from "@/lib/avant-backend";
import { publicPageLinks, publicPageMeta, titleSchema } from "@/lib/seo";

export const Route = createFileRoute("/title/$slug")({
  loader: async ({ params }) => { const f=getTitle(params.slug);try{const l=await resolveCatalogueKey(params.slug);if(l?.title){const t=l.title,ss=l.seasons||[],eps=l.episodes||[];const item:any={...f,id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,year:t.year?String(t.year):f?.year,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||t.synopsis||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,featured:!!t.featured,available:true,heroAutoplay:t.hero_autoplay!==false,previewYoutubeId:t.trailer_youtube_id||f?.previewYoutubeId,trailerEmbedUrl:t.trailer_youtube_id?`https://www.youtube-nocookie.com/embed/${t.trailer_youtube_id}?rel=0`:f?.trailerEmbedUrl,previewStart:t.preview_start_seconds??f?.previewStart,previewDuration:t.preview_duration_seconds??f?.previewDuration,episodes:eps.length?eps.map((e:any)=>({title:e.title,season:ss.find((x:any)=>x.id===e.season_id)?.season_number||1,duration:e.duration_seconds?`${Math.floor(e.duration_seconds/60)}:${String(e.duration_seconds%60).padStart(2,"0")}`:"",youtubeId:e.youtube_video_id||undefined,poster:e.thumbnail_url||undefined,locked:e.access_required!==false,description:e.description,legacyKey:e.legacy_key,previewStart:e.preview_start_seconds,previewDuration:e.preview_duration_seconds})):f?.episodes,cast:t.cast_names||[],creators:t.creator_names||[],directors:t.director_names||[],maturityRating:t.maturity_rating,quality:t.quality_label||"HD",languages:t.languages||[]};return item as CatalogueTitle}}catch{}if(!f)throw notFound();return f;},
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const path = `/title/${loaderData.slug}`;
    const title = `${loaderData.title} — Avant Movies`;
    return {
      meta: publicPageMeta(path, title, loaderData.shortDescription, loaderData.backdrop, loaderData.type === "movie" ? "video.movie" : "video.tv_show"),
      links: publicPageLinks(path),
      scripts: [{ type: "application/ld+json", children: JSON.stringify(titleSchema(loaderData)) }],
    };
  },
  component: TitleRoute,
});

function TitleRoute() {
  return <TitleDetail item={Route.useLoaderData()} />;
}
