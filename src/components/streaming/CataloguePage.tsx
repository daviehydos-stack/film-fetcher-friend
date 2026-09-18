import { ChevronDown, Play, Search, Volume2, VolumeX, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { catalogue, type ContentType } from "@/lib/site-data";
import { heroTrailerUrl } from "@/lib/video-embeds";
import { StreamingShell } from "./StreamingShell";
import { ContentRail, RankedRail } from "./ContentRail";

export function CataloguePage({type,title,intro}:{type:ContentType;title:string;intro:string}){
 const[query,setQuery]=useState(""),[genre,setGenre]=useState("All"),[muted,setMuted]=useState(false);
 const pool=useMemo(()=>catalogue.filter(i=>i.type===type),[type]); const genres=useMemo(()=>["All",...new Set(pool.flatMap(i=>i.genres))],[pool]);
 const visible=useMemo(()=>pool.filter(i=>(genre==="All"||i.genres.includes(genre))&&`${i.title} ${i.synopsis} ${i.genres.join(" ")}`.toLowerCase().includes(query.toLowerCase())),[genre,pool,query]);
 const hero=visible.find(i=>i.trailerEmbedUrl)||visible[0]||pool[0]; const trailer=hero?.trailerEmbedUrl?heroTrailerUrl(hero.trailerEmbedUrl,muted):null;
 return <StreamingShell><main className="min-h-[80vh] pb-20 pt-20">
  <div className="px-5 pt-6 sm:px-10 lg:px-14"><div className="flex flex-wrap items-center gap-3"><h1 className="mr-1 text-3xl font-black sm:text-4xl">{title}</h1><div className="relative"><select value={genre} onChange={e=>setGenre(e.target.value)} className="min-h-11 appearance-none rounded-full border border-white/20 bg-black/40 py-2 pl-4 pr-10 text-sm font-bold text-white outline-none backdrop-blur"><option value="All">Genres</option>{genres.filter(g=>g!=="All").map(g=><option key={g}>{g}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"/></div><label className="relative ml-auto hidden w-64 md:block"><Search className="absolute left-3 top-3 size-4 text-white/40"/><Input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search" className="h-10 rounded-full bg-white/5 pl-9"/>{query&&<button onClick={()=>setQuery("")} className="absolute right-2 top-2 grid size-6 place-items-center"><X className="size-3"/></button>}</label></div></div>
  {hero?<section className="relative mx-5 mt-7 aspect-[16/7] min-h-[25rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-2xl sm:mx-10 lg:mx-14">
   <img src={hero.backdrop} alt="" className="absolute inset-0 size-full object-cover"/>
   {trailer?<iframe src={trailer} title={`${hero.title} preview`} allow="autoplay; encrypted-media; picture-in-picture" className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"/>:null}
   <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"/>
   <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-6 sm:p-10"><div className="max-w-xl"><h2 className="text-4xl font-black tracking-[-.04em] sm:text-6xl">{hero.title}</h2><p className="mt-3 text-sm font-semibold text-white/80">{hero.genres.join(" · ")}{hero.year?` · ${hero.year}`:""}</p><p className="mt-3 hidden max-w-lg text-sm leading-6 text-white/70 sm:line-clamp-2">{hero.shortDescription}</p><div className="mt-5 flex gap-3"><Button asChild size="lg" className="bg-white font-bold text-black hover:bg-white/85"><Link to="/title/$slug" params={{slug:hero.slug}}><Play className="fill-current"/>View title</Link></Button><Button asChild size="lg" variant="secondary" className="bg-white/20 font-bold text-white backdrop-blur hover:bg-white/30"><Link to="/title/$slug" params={{slug:hero.slug}}>More info</Link></Button></div></div>{trailer?<button onClick={()=>setMuted(v=>!v)} className="mb-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/40 bg-black/35 backdrop-blur" aria-label={muted?"Sound on":"Mute"}>{muted?<VolumeX/>:<Volume2/>}</button>:null}</div>
  </section>:null}
  {visible.length?<div className="mt-8"><RankedRail title={`Popular ${title.toLowerCase()} on Avant`} items={visible}/><ContentRail title={type==="movie"?"Essential Kenyan cinema":"Series worth staying for"} items={visible}/><ContentRail title="More stories for you" items={[...visible].reverse()}/></div>:<div className="py-24 text-center"><h2 className="text-2xl font-bold">No stories found</h2><p className="mt-2 text-white/50">Try another genre or title.</p></div>}
 </main></StreamingShell>
}
