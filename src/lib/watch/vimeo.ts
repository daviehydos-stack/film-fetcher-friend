export interface VimeoPlayback { videoId:string; title?:string; posterUrl?:string; resumeAtSeconds?:number }

/** Native Vimeo embed. Keep player behaviour owned by Vimeo; only autoplay and resume are requested. */
export function vimeoEmbedUrl(playback: VimeoPlayback) {
  const id=playback.videoId.trim();
  if(!/^\d+$/.test(id)) throw new Error("Invalid Vimeo video id");
  const params=new URLSearchParams({autoplay:"1"});
  const resume=Math.max(0,Math.floor(playback.resumeAtSeconds??0));
  return `https://player.vimeo.com/video/${id}?${params.toString()}${resume>0?`#t=${resume}s`:""}`;
}
