export type WatchProgress={contentId:string;seconds:number;duration?:number;updatedAt:number};
const KEY="avant-watch-progress";
export function readProgress():WatchProgress[]{if(typeof window==="undefined")return[];try{return JSON.parse(localStorage.getItem(KEY)??"[]")}catch{return[]}}
export function saveProgress(entry:WatchProgress){const rest=readProgress().filter(x=>x.contentId!==entry.contentId);localStorage.setItem(KEY,JSON.stringify([entry,...rest].slice(0,30)));window.dispatchEvent(new Event("avant-progress"))}
