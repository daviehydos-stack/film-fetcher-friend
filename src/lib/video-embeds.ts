export type EmbedOptions = { autoplay?: boolean; muted?: boolean; controls?: boolean; loop?: boolean; start?: number; end?: number; jsApi?: boolean };
import { claimMedia, releaseMedia } from "./media-session";

export function heroTrailerUrl(embedUrl:string,muted=true,controls=false){
 try{const url=new URL(embedUrl);const youtube=url.hostname.includes("youtube");const vimeo=url.hostname.includes("vimeo");url.searchParams.set("autoplay","1");
 if(youtube){url.hostname="www.youtube.com";url.searchParams.set("mute",muted?"1":"0");url.searchParams.set("controls","0");url.searchParams.set("playsinline","1");url.searchParams.set("rel","0");url.searchParams.set("disablekb","1");url.searchParams.set("fs","0");url.searchParams.set("iv_load_policy","3");url.searchParams.set("enablejsapi","1");if(typeof window!=="undefined")url.searchParams.set("origin",window.location.origin);url.searchParams.set("loop","1");const id=url.pathname.split("/").filter(Boolean).pop();if(id)url.searchParams.set("playlist",id)}
 else if(vimeo){url.searchParams.set("muted",muted?"1":"0");url.searchParams.set("background",controls?"0":"1");url.searchParams.set("autopause","1");url.searchParams.set("playsinline","1")}
 return url.toString()}catch{return embedUrl}
}

export function pauseEmbeddedPlayer(frame:HTMLIFrameElement|null){releaseMedia(frame)}
export function playEmbeddedPlayer(frame:HTMLIFrameElement|null){if(!frame)return;claimMedia(frame);frame.contentWindow?.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*");frame.contentWindow?.postMessage({method:"play"},"*")}


export function vimeoEmbedUrl(id:string,options:EmbedOptions={}){const p=new URLSearchParams({playsinline:"1",autoplay:options.autoplay?"1":"0",muted:options.muted?"1":"0",controls:options.controls===false?"0":"1",autopause:"1",dnt:"1"});if(options.loop)p.set("loop","1");if(options.start&&options.start>0)p.set("#t",String(Math.floor(options.start))+"s");return `https://player.vimeo.com/video/${encodeURIComponent(id)}?${p.toString()}`}
