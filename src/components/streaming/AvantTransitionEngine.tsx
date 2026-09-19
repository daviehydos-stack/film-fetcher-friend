import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

function pauseAllPlayers(except?: HTMLIFrameElement | HTMLMediaElement | null) {
  document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((media) => {
    if (media === except) return;
    try {
      media.pause();
    } catch {
      /* The player may already have been removed. */
    }
  });

  document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
    if (frame === except) return;
    try {
      frame.contentWindow?.postMessage({ method: "pause" }, "*");
      frame.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*",
      );
    } catch {
      /* Cross-origin players may reject commands while unloading. */
    }
  });
}

/**
 * Keeps only cross-player coordination. Navigation itself remains native to
 * TanStack Router so clicks, browser history, and preloaded pages are instant.
 */
export function AvantTransitionEngine() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const onPlayerStarted = (event: Event) => {
      const detail = (
        event as CustomEvent<{ player?: HTMLIFrameElement | HTMLMediaElement | null }>
      ).detail;
      pauseAllPlayers(detail?.player ?? null);
    };
    const onMediaPlay = (event: Event) => {
      const media = event.target instanceof HTMLMediaElement ? event.target : null;
      if (media) pauseAllPlayers(media);
    };

    window.addEventListener("avant:player-started", onPlayerStarted);
    document.addEventListener("play", onMediaPlay, true);
    return () => {
      window.removeEventListener("avant:player-started", onPlayerStarted);
      document.removeEventListener("play", onMediaPlay, true);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    window.dispatchEvent(new CustomEvent("avant:transition-start"));
    pauseAllPlayers();
  }, [location.pathname]);

  return null;
}