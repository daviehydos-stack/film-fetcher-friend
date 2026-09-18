import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { publicPage } from "@/lib/avant-backend";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
export const Route=createFileRoute("/$")({
 loader:async({params})=>{const slug=String((params as any)._splat||"").replace(/^\/+|\/+$/g,"");const x=await publicPage(slug).catch(()=>null);if(!x?.page)throw notFound();return x.page;},
 head:({loaderData})=>{if(!loaderData)return{};const p:any=loaderData,path="/"+p.slug,title=p.seo_title||p.title+" — Avant Movies",description=p.meta_description||"";return{meta:publicPageMeta(path,title,description,p.og_image_url).map((m:any)=>m.name==="robots"?{...m,content:p.indexable===false?"noindex, follow":m.content}:m),links:p.canonical_url?[{rel:"canonical",href:p.canonical_url}]:publicPageLinks(path)}},
 component:CmsPage
});
function CmsPage(){const page:any=Route.useLoaderData();const body=String(page?.content?.body??page?.content?.text??"");return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-5xl px-5 pb-24 pt-32 sm:px-10"><p className="eyebrow">Avant Movies</p><h1 className="mt-4 text-4xl font-black sm:text-6xl">{page.title}</h1>{page.og_image_url?<img src={page.og_image_url} alt="" className="mt-8 max-h-[520px] w-full rounded-2xl object-cover"/>:null}<article className="mt-8 whitespace-pre-wrap text-base leading-8 text-muted-foreground">{body}</article><Link to="/" className="mt-10 inline-flex text-sm text-white/55 hover:text-white">← Back home</Link></main></StreamingShell>}
