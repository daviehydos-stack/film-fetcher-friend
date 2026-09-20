import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle, type CatalogueTitle } from "@/lib/site-data";
import { resolveCatalogueKey } from "@/lib/avant-backend";
import { publicPageLinks, publicPageMeta, titleSchema } from "@/lib/seo";
import { restoreRememberedScroll } from "@/lib/navigation-memory";
import { useEffect } from "react";
import { mapResolvedEpisodes } from "@/lib/episodes";

export const Route = createFileRoute("/title/$slug")({
  loader: async ({ params }) => { const f=getTitle(params.slug);try{const l=await resolveCatalogueKey(params.slug);if(l?.title){const t=l.title,ss=l.seasons||[],eps=l.episodes||[];const item:any={...f,id:t.legacy_key||t.slug,slug:t.slug,title:t.title,type:t.content_type,year:t.year?String(t.year):f?.year,genres:t.genres||f?.genres||[],synopsis:t.synopsis||f?.synopsis||"",shortDescription:t.short_description||f?.shortDescription||t.synopsis||"",artwork:t.poster_url||f?.artwork||"",backdrop:t.backdrop_url||f?.backdrop||t.poster_url||"",legacyPath:f?.legacyPath||"/"+t.slug,featured:!!t.featured,available:true,accessRequired:typeof t.access_required==="boolean"?t.access_required:true,heroAutoplay:t.hero_autoplay!==false,previewYoutubeId:t.trailer_youtube_id||f?.previewYoutubeId,trailerEmbedUrl:t.trailer_youtube_id?`https://www.youtube-nocookie.com/embed/${t.trailer_youtube_id}?rel=0`:f?.trailerEmbedUrl,previewStart:t.preview_start_seconds??f?.previewStart,previewDuration:t.preview_duration_seconds??f?.previewDuration,youtubeVideoId:t.youtube_video_id||f?.youtubeVideoId,vimeoVideoId:t.vimeo_video_id||f?.vimeoVideoId,episodes:eps.length?mapResolvedEpisodes(eps,ss):f?.episodes,cast:t.cast_names||f?.cast||[],creators:t.creator_names||f?.creators||[],directors:t.director_names||f?.directors||[],maturityRating:t.maturity_rating||f?.maturityRating,maturityReasons:t.maturity_reasons||f?.maturityReasons||[],quality:t.quality_label||f?.quality||"HD",languages:t.languages||f?.languages||[],seoTitle:t.seo_title||undefined,metaDescription:t.meta_description||undefined};return item as CatalogueTitle}}catch{}if(!f)throw notFound();return f;},
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const path = `/title/${loaderData.slug}`;
    const title = (loaderData as any).seoTitle || `${loaderData.title} | Kenyan ${loaderData.type === "movie" ? "Film" : "Series"} | Avant Movies`;
    const fallbackDescription = `Watch ${loaderData.title} on Avant Movies, an independent Kenyan ${loaderData.type === "movie" ? "film" : "series"}${loaderData.genres?.length ? ` in ${loaderData.genres.slice(0, 2).join(" and ")}` : ""}.`;
    const rawDescription = (loaderData as any).metaDescription || loaderData.shortDescription || loaderData.synopsis || fallbackDescription;
    const description = rawDescription.length >= 70 ? rawDescription.slice(0, 160) : `${rawDescription.replace(/[. ]+$/, "")}. ${fallbackDescription}`.slice(0, 160);
    return {
      meta: publicPageMeta(path, title, description, loaderData.backdrop, loaderData.type === "movie" ? "video.movie" : "video.tv_show"),
      links: publicPageLinks(path),
      scripts: [{ type: "application/ld+json", children: JSON.stringify(titleSchema(loaderData)) }],
    };
  },
  component: TitleRoute,
});

function TitleRoute() {
  const item=Route.useLoaderData();
  useEffect(()=>()=>{restoreRememberedScroll()},[]);
  return <TitleDetail item={item} />;
}
