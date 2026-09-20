import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { claimMedia, stopAllMedia } from "@/lib/media-session";

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
      claimMedia(detail?.player ?? null);
    };
    const onMediaPlay = (event: Event) => {
      const media = event.target instanceof HTMLMediaElement ? event.target : null;
      if (media) claimMedia(media);
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
    stopAllMedia();
  }, [location.pathname]);

  return null;
}