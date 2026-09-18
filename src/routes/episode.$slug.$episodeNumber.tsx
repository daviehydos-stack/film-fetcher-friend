import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Lock, Play, Share2 } from "lucide-react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { getTitle } from "@/lib/site-data";
import { publicPageLinks, publicPageMeta, videoObjectSchema } from "@/lib/seo";

export const Route = createFileRoute("/episode/$slug/$episodeNumber")({
  loader: ({ params }) => {
    const item = getTitle(params.slug);
    const episodeNumber = Number(params.episodeNumber);
    const episode = item?.episodes?.[episodeNumber - 1];
    if (!item || !episode || !Number.isInteger(episodeNumber) || episodeNumber < 1) throw notFound();
    return { item, episode, episodeNumber };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { item, episode, episodeNumber } = loaderData;
    const path = `/episode/${item.slug}/${episodeNumber}`;
    const title = `${episode.title} — ${item.title} | Avant Movies`;
    const description = episode.description || `Watch ${episode.title} from ${item.title} on Avant Movies.`;
    const shareEpisode = async () => { const path=`/episode/${item.slug}/${episodeNumber}`;const url=new URL(path.replace(/^\\//,""),document.baseURI).href;try{if(navigator.share)await navigator.share({title:`${episode.title} — ${item.title}`,text:episode.description||`Watch ${episode.title} from ${item.title} on Avant Movies.`,url});else{await navigator.clipboard.writeText(url);window.alert("Episode link copied.");}}catch(error:any){if(error?.name!=="AbortError")window.alert("Unable to share this episode.");}};
  const image = episode.poster || (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.backdrop || item.artwork);
    return {
      meta: publicPageMeta(path, title, description, image, "video.episode"),
      links: publicPageLinks(path),
      scripts: episode.youtubeId ? [{ type: "application/ld+json", children: JSON.stringify(videoObjectSchema({ name: episode.title, description, youtubeId: episode.youtubeId, duration: episode.duration, pagePath: path, episodeNumber, seriesName: item.title })) }] : [],
    };
  },
  component: EpisodeSharePage,
});

function EpisodeSharePage() {
  const { item, episode, episodeNumber } = Route.useLoaderData();
  const image = episode.poster || (episode.youtubeId ? `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg` : item.backdrop || item.artwork);
  return <StreamingShell><main className="mx-auto min-h-[80vh] max-w-5xl px-5 pb-20 pt-28 sm:px-10">
    <Link to="/title/$slug" params={{ slug: item.slug }} className="text-sm text-white/55 hover:text-white">← {item.title}</Link>
    <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-surface">
      <div className="aspect-video bg-black"><img src={image} alt={`${episode.title} thumbnail`} fetchPriority="high" decoding="async" className="size-full object-cover"/></div>
      <div className="p-5 sm:p-8"><p className="eyebrow">{item.title} · Episode {episodeNumber}</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">{episode.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">{episode.description || `Watch this episode of ${item.title} on Avant Movies.`}</p>
      <div className="mt-6 flex flex-wrap gap-3">{episode.youtubeId ? <Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${episodeNumber}` }} className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 font-bold text-black"><Play className="size-4 fill-current"/>Watch episode</Link> : <Link to="/title/$slug" params={{ slug: item.slug }} className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 font-bold text-black"><Lock className="size-4"/>View access</Link>}<button type="button" onClick={()=>void shareEpisode()} className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 font-bold text-white hover:bg-white/10"><Share2 className="size-4"/>Share</button></div></div>
    </section>
  </main></StreamingShell>;
}
