export type EmbedOptions = { autoplay?: boolean; muted?: boolean; controls?: boolean; loop?: boolean; start?: number; end?: number; jsApi?: boolean };

export function youtubeEmbedUrl(id:string,options:EmbedOptions={}){
 const params=new URLSearchParams({rel:"0",playsinline:"1",modestbranding:"1",controls:options.controls===false?"0":"1"});
 if(options.autoplay)params.set("autoplay","1"); if(options.start&&options.start>0)params.set("start",String(Math.floor(options.start))); if(options.end&&options.end>0)params.set("end",String(Math.floor(options.end))); if(options.jsApi)params.set("enablejsapi","1"); if(options.muted)params.set("mute","1"); if(options.loop){params.set("loop","1");params.set("playlist",id)}
 return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function heroTrailerUrl(embedUrl:string,muted=true,controls=false){
 try{const url=new URL(embedUrl);const youtube=url.hostname.includes("youtube");const vimeo=url.hostname.includes("vimeo");url.searchParams.set("autoplay","1");
 if(youtube){url.searchParams.set("mute",muted?"1":"0");url.searchParams.set("controls",controls?"1":"0");url.searchParams.set("playsinline","1");url.searchParams.set("rel","0");url.searchParams.set("enablejsapi","1");url.searchParams.set("loop","1");const id=url.pathname.split("/").filter(Boolean).pop();if(id)url.searchParams.set("playlist",id)}
 else if(vimeo){url.searchParams.set("muted",muted?"1":"0");url.searchParams.set("background",controls?"0":"1");url.searchParams.set("autopause","1");url.searchParams.set("playsinline","1")}
 return url.toString()}catch{return embedUrl}
}

export function pauseEmbeddedPlayer(frame:HTMLIFrameElement|null){if(!frame)return;frame.contentWindow?.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:[]}),"*");frame.contentWindow?.postMessage({method:"pause"},"*")}
export function playEmbeddedPlayer(frame:HTMLIFrameElement|null){if(!frame)return;frame.contentWindow?.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*");frame.contentWindow?.postMessage({method:"play"},"*")}


export function vimeoEmbedUrl(id:string,options:EmbedOptions={}){const p=new URLSearchParams({playsinline:"1",autoplay:options.autoplay?"1":"0",muted:options.muted?"1":"0",controls:options.controls===false?"0":"1",autopause:"1"});if(options.loop)p.set("loop","1");if(options.start&&options.start>0)p.set("#t",String(Math.floor(options.start))+"s");return `https://player.vimeo.com/video/${encodeURIComponent(id)}?${p.toString()}`}
export function youtubePosterUrl(id:string,quality:"maxres"|"hq"="maxres"){return `https://i.ytimg.com/vi/${id}/${quality==="maxres"?"maxresdefault":"hqdefault"}.jpg`}
export function isYoutubeOrigin(origin:string){return origin.includes("youtube.com")||origin.includes("youtube-nocookie.com")}
