export type TrailerClip={start:number;end:number;duration:number;zone:number};
export type AutoTrailerPlan={sourceDuration:number;targetDuration:number;clips:TrailerClip[]};

/**
 * Builds a deterministic multi-cut preview plan without exposing the ending.
 * The client may use this only for already-public sources. Protected sources
 * must be rendered to a separate preview asset server-side.
 */
export function buildAutoTrailerPlan(sourceDuration:number):AutoTrailerPlan{
 const d=Math.max(0,Math.floor(sourceDuration));
 if(d<=0)return{sourceDuration:0,targetDuration:0,clips:[]};
 // A missing trailer must feel like the beginning of the story, never a random montage.
 // Use one continuous opening preview so dialogue/action is not interrupted by jumps.
 const target=d>=60?60:Math.max(15,Math.floor(d*.75));
 const end=Math.min(d,target);
 return{sourceDuration:d,targetDuration:end,clips:[{start:0,end,duration:end,zone:1}]};
}
export function durationToSeconds(raw?:string){if(!raw)return 0;const p=raw.split(":").map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:Number(raw)||0;}
