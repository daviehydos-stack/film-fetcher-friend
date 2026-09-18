export type TrailerClip={start:number;end:number;duration:number;zone:number};
export type AutoTrailerPlan={sourceDuration:number;targetDuration:number;clips:TrailerClip[]};

/**
 * Builds a deterministic multi-cut preview plan without exposing the ending.
 * The client may use this only for already-public sources. Protected sources
 * must be rendered to a separate preview asset server-side.
 */
export function buildAutoTrailerPlan(sourceDuration:number):AutoTrailerPlan{
 const d=Math.max(0,Math.floor(sourceDuration));
 if(d<=60)return{sourceDuration:d,targetDuration:d,clips:[{start:0,end:d,duration:d,zone:0}]};
 const target=d>=1500?50:d>=900?45:d>=480?36:Math.min(28,Math.floor(d*.22));
 const count=d>=900?5:d>=480?4:3;
 const opening=Math.max(12,Math.floor(d*.08));
 const ending=Math.min(d-4,Math.floor(d*.84));
 const usable=Math.max(1,ending-opening);
 const each=Math.max(6,Math.floor(target/count));
 const clips:Array<TrailerClip>=[];
 for(let i=0;i<count;i++){
   const zoneStart=opening+(usable/count)*i;
   const zoneEnd=opening+(usable/count)*(i+1);
   const center=zoneStart+(zoneEnd-zoneStart)*(.42+(i%2)*.12);
   const start=Math.max(opening,Math.floor(center-each/2));
   const end=Math.min(ending,start+each);
   clips.push({start,end,duration:end-start,zone:i+1});
 }
 return{sourceDuration:d,targetDuration:clips.reduce((n,c)=>n+c.duration,0),clips};
}
export function durationToSeconds(raw?:string){if(!raw)return 0;const p=raw.split(":").map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:Number(raw)||0;}
