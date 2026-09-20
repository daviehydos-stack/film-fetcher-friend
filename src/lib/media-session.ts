type ActiveMedia = HTMLIFrameElement | HTMLMediaElement | null;

let activeMedia: ActiveMedia = null;

function pauseMedia(media: HTMLIFrameElement | HTMLMediaElement) {
  if (media instanceof HTMLMediaElement) {
    try { media.pause(); } catch { /* It may already be detached. */ }
    return;
  }
  try {
    media.contentWindow?.postMessage({ method: "pause" }, "*");
    media.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
      "*",
    );
  } catch { /* Cross-origin players can disappear during navigation. */ }
}

export function claimMedia(next: ActiveMedia) {
  document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((media) => {
    if (media !== next) pauseMedia(media);
  });
  document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
    if (frame !== next) pauseMedia(frame);
  });
  activeMedia = next;
}

export function releaseMedia(media: ActiveMedia) {
  if (media) pauseMedia(media);
  if (activeMedia === media) activeMedia = null;
}

export function stopAllMedia() {
  claimMedia(null);
  activeMedia = null;
}