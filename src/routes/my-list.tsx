import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { TitleCard } from "@/components/streaming/TitleCard";
import { catalogue } from "@/lib/site-data";
import { readMyList } from "@/lib/my-list";
export const Route = createFileRoute("/my-list")({ component: MyListPage });
function MyListPage() {
 const [ids,setIds]=useState<string[]>([]);
 useEffect(()=>{const sync=()=>setIds(readMyList());sync();window.addEventListener("avant-my-list",sync);return()=>window.removeEventListener("avant-my-list",sync)},[]);
 const items=catalogue.filter(i=>ids.includes(i.id));
 return <StreamingShell><main className="mx-auto min-h-[75vh] max-w-[1500px] px-5 pb-20 pt-32 sm:px-10 lg:px-14"><p className="eyebrow">Your Avant</p><h1 className="mt-3 text-5xl font-black uppercase sm:text-6xl">My List</h1>{items.length?<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map(item=><TitleCard key={item.id} item={item}/>)}</div>:<div className="mt-12 rounded-xl border border-white/10 bg-white/[.03] px-6 py-16 text-center"><h2 className="text-xl font-bold">Nothing saved yet.</h2><p className="mx-auto mt-3 max-w-lg text-muted-foreground">Use the + button on any title to build your watchlist.</p></div>}</main></StreamingShell>;
}
