export function youtubeEmbedUrl(
  id: string,
  options: { autoplay?: boolean; muted?: boolean; controls?: boolean; loop?: boolean; start?: number; jsApi?: boolean } = {},
) {
  const params = new URLSearchParams({
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
    controls: options.controls === false ? "0" : "1",
  });
  if (options.autoplay) params.set("autoplay", "1");
  if (options.start && options.start > 0) params.set("start", String(Math.floor(options.start)));
  if (options.jsApi) params.set("enablejsapi", "1");
  if (options.muted) params.set("mute", "1");
  if (options.loop) {
    params.set("loop", "1");
    params.set("playlist", id);
  }
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function heroTrailerUrl(embedUrl: string, muted: boolean) {
  try {
    const url = new URL(embedUrl);
    const youtube = url.hostname.includes("youtube");
    const vimeo = url.hostname.includes("vimeo");

    url.searchParams.set("autoplay", "1");
    if (youtube) {
      url.searchParams.set("mute", muted ? "1" : "0");
      url.searchParams.set("controls", "0");
      url.searchParams.set("playsinline", "1");
      url.searchParams.set("rel", "0");
    } else if (vimeo) {
      url.searchParams.set("muted", muted ? "1" : "0");
      url.searchParams.set("background", "1");
      url.searchParams.set("playsinline", "1");
    }
    return url.toString();
  } catch {
    return embedUrl;
  }
}
