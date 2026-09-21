import type { CatalogueTitle } from "./site-data";
const genresOf=(item:Partial<CatalogueTitle>|null|undefined)=>Array.isArray(item?.genres)?item!.genres.filter((g):g is string=>typeof g==="string"&&g.length>0):[];
const norm=(values?:string[])=>new Set((values||[]).map(v=>v.trim().toLowerCase()).filter(Boolean));
const overlap=(a?:string[],b?:string[])=>{const aa=norm(a),bb=norm(b);return [...aa].filter(v=>bb.has(v))};
export type RelatedTitle={title:CatalogueTitle;score:number;reason:string};
export function rankedRelatedTitles(current:Partial<CatalogueTitle>|null|undefined,items:CatalogueTitle[],limit=8):RelatedTitle[]{
 const currentGenres=genresOf(current);
 return items.filter(x=>x.id!==current?.id&&x.slug!==current?.slug&&x.available!==false).map(title=>{
  const sharedGenres=overlap(currentGenres,title.genres);
  const sharedDirectors=overlap(current?.directors,title.directors);
  const sharedCreators=overlap(current?.creators,title.creators);
  const sharedCast=overlap(current?.cast,title.cast);
  const sameType=Boolean(current?.type&&title.type===current.type);
  let score=sharedGenres.length*6+sharedDirectors.length*8+sharedCreators.length*8+Math.min(sharedCast.length,2)*3+(sameType?2:0);
  let reason="";
  if(sharedDirectors.length)reason=`Another Avant title directed by ${sharedDirectors[0]}`;
  else if(sharedCreators.length)reason=`Another Avant title from ${sharedCreators[0]}`;
  else if(sharedGenres.length)reason=`More ${sharedGenres.slice(0,2).join(" · ")} from Avant`;
  else if(sameType)reason=`Another ${title.type==="movie"?"film":"series"} from the Avant catalogue`;
  else reason="More from the Avant catalogue";
  return {title,score,reason};
 }).filter(v=>v.score>0).sort((a,b)=>b.score-a.score||a.title.title.localeCompare(b.title.title)).slice(0,limit);
}
export function relatedTitles(current:Partial<CatalogueTitle>|null|undefined,items:CatalogueTitle[],limit=8){return rankedRelatedTitles(current,items,limit).map(v=>v.title)}
export function genreCollections(items:CatalogueTitle[],limit=6){const counts=new Map<string,number>();items.forEach(x=>genresOf(x).forEach(g=>counts.set(g,(counts.get(g)||0)+1)));return [...counts.entries()].filter(([,n])=>n>=2).sort((a,b)=>b[1]-a[1]).slice(0,limit).map(([genre])=>({genre,items:items.filter(x=>genresOf(x).includes(genre))}))}
export function recentFallback(items:CatalogueTitle[],limit=10){return [...items].reverse().slice(0,limit)}
export function catalogueGenres(items: CatalogueTitle[]) {return [...new Set(items.flatMap((item) => genresOf(item)))].sort((a, b) => a.localeCompare(b));}
