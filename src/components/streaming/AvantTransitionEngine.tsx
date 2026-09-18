import { useLocation } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

type TransitionPhase = "idle" | "entering" | "navigating" | "revealing";
type TransitionMode = "quick" | "detail" | "checkout" | "back" | "play";
const REVEAL_MS = 260;
const SAFETY_MS = 1600;

function pauseAllPlayers(except?: HTMLIFrameElement | HTMLMediaElement | null) {
  document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((media) => {
    if (media === except) return;
    try { media.pause(); } catch { /* detached media */ }
  });
  document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
    if (frame === except) return;
    try {
      frame.contentWindow?.postMessage({ method: "pause" }, "*");
      frame.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), "*");
    } catch { /* cross-origin player */ }
  });
}

function stopPlayback() {
  window.dispatchEvent(new CustomEvent("avant:transition-start"));
  pauseAllPlayers();
}

function shouldTransition(event: MouseEvent, anchor: HTMLAnchorElement) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || anchor.target === "_blank" ||
      anchor.hasAttribute("download") || anchor.dataset.avantTransition === "off") return false;
  const next = new URL(anchor.href, window.location.href);
  const current = new URL(window.location.href);
  return next.origin === current.origin &&
    (next.pathname !== current.pathname || next.search !== current.search);
}

export function AvantTransitionEngine() {
  const location = useLocation();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [mode, setMode] = useState<TransitionMode>("quick");
  const phaseRef = useRef<TransitionPhase>("idle");
  const pendingAnchor = useRef<HTMLAnchorElement | null>(null);
  const timers = useRef<number[]>([]);
  const reducedMotion = useRef(false);

  const setTransitionPhase = useCallback((next: TransitionPhase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    clearTimers();
    pendingAnchor.current = null;
    setTransitionPhase("idle");
  }, [clearTimers, setTransitionPhase]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    [`${import.meta.env.BASE_URL}avant-transition-a.webp`, `${import.meta.env.BASE_URL}avant-transition-a-mobile.webp`]
      .forEach((src) => { const image = new Image(); image.src = src; });

    const onPlayerStarted = (event: Event) => {
      const detail = (event as CustomEvent<{ player?: HTMLIFrameElement | HTMLMediaElement | null }>).detail;
      pauseAllPlayers(detail?.player ?? null);
    };
    const onMediaPlay = (event: Event) => {
      const media = event.target instanceof HTMLMediaElement ? event.target : null;
      if (media) pauseAllPlayers(media);
    };
    window.addEventListener("avant:player-started", onPlayerStarted);
    document.addEventListener("play", onMediaPlay, true);

    const onClick = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(element instanceof HTMLAnchorElement) || !shouldTransition(event, element)) return;
      if (element.dataset.avantTransitionBypass === "true") {
        delete element.dataset.avantTransitionBypass;
        return;
      }
      if (phaseRef.current !== "idle") {
        event.preventDefault();
        return;
      }

      const nextUrl = new URL(element.href, window.location.href);
      const isPlay = nextUrl.pathname.includes("/watch/");
      const isDetail = nextUrl.pathname.includes("/title/");
      const isCheckout = nextUrl.pathname.includes("/checkout/");
      const isBack = element.dataset.avantTransition === "back";
      const nextMode: TransitionMode = isPlay ? "play" : isCheckout ? "checkout" : isBack ? "back" : isDetail ? "detail" : "quick";

      /* Ordinary navigation should stay native-fast. Only cinematic destinations
         need an interception overlay. This removes the black flash between tabs/pages. */
      if (nextMode === "quick") return;

      event.preventDefault();
      event.stopPropagation();
      pendingAnchor.current = element;
      setMode(nextMode);
      stopPlayback();

      if (reducedMotion.current) {
        element.dataset.avantTransitionBypass = "true";
        element.click();
        return;
      }

      setTransitionPhase("entering");
      const compact = window.matchMedia("(max-width: 639px)").matches;
      const enterDelay = isPlay ? (compact ? 390 : 430) : isCheckout ? 150 : isBack ? 120 : 160;
      timers.current.push(window.setTimeout(() => {
        setTransitionPhase("navigating");
        const anchor = pendingAnchor.current;
        if (anchor) {
          anchor.dataset.avantTransitionBypass = "true";
          anchor.click();
        }
      }, enterDelay));
      timers.current.push(window.setTimeout(finish, SAFETY_MS));
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("avant:player-started", onPlayerStarted);
      document.removeEventListener("play", onMediaPlay, true);
      clearTimers();
    };
  }, [clearTimers, finish, setTransitionPhase]);

  useEffect(() => {
    if (phaseRef.current !== "navigating" && phaseRef.current !== "entering") return;
    setTransitionPhase("revealing");
    timers.current.push(window.setTimeout(finish, REVEAL_MS));
  }, [location.pathname, location.searchStr, finish, setTransitionPhase]);

  if (phase === "idle") return null;

  return (
    <div className={"avant-transition-engine avant-transition-" + phase + " avant-transition-mode-" + mode} aria-hidden="true" role="presentation">
      <div className="avant-transition-vignette" />
      <div className="avant-transition-horizon" />
      <div className="avant-transition-mark">
        <picture className="avant-transition-picture">
          <source media="(max-width: 639px)" srcSet={`${import.meta.env.BASE_URL}avant-transition-a-mobile.webp`} />
          <img className="avant-transition-image" src={`${import.meta.env.BASE_URL}avant-transition-a.webp`} alt="" decoding="async" draggable={false} />
        </picture>
        <span className="avant-transition-light" />
        <span className="avant-transition-flare" />
      </div>
    </div>
  );
}
