import { useLocation } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

type TransitionPhase = "idle" | "entering" | "navigating" | "revealing" | "complete";
const ENTER_MS = 300;
const REVEAL_MS = 360;
const SAFETY_MS = 2200;

function stopPlayback() {
  window.dispatchEvent(new CustomEvent("avant:transition-start"));
  document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((media) => {
    try { media.pause(); } catch { /* detached media */ }
  });
  document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
    try {
      frame.contentWindow?.postMessage({ method: "pause" }, "*");
      frame.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), "*");
    } catch { /* cross-origin player; unmount is final fallback */ }
  });
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
  const [mode, setMode] = useState<"standard" | "play">("standard");
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
    setTransitionPhase("complete");
    timers.current.push(window.setTimeout(() => setTransitionPhase("idle"), 40));
  }, [clearTimers, setTransitionPhase]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

      event.preventDefault();
      event.stopPropagation();
      pendingAnchor.current = element;
      const nextUrl = new URL(element.href, window.location.href);
      const isPlay = /\\/watch\\//.test(nextUrl.pathname);
      setMode(isPlay ? "play" : "standard");
      stopPlayback();

      if (reducedMotion.current) {
        element.dataset.avantTransitionBypass = "true";
        element.click();
        return;
      }

      setTransitionPhase("entering");
      const enterDelay = /\\/watch\\//.test(new URL(element.href, window.location.href).pathname) ? 520 : ENTER_MS;
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
    <div className={"avant-transition-engine avant-transition-" + phase + (mode === "play" ? " avant-transition-play" : "")} aria-hidden="true">
      <div className="avant-transition-vignette" />
      <div className="avant-transition-mark">
        <span className="avant-transition-letter">A</span>
        <span className="avant-transition-light" />
      </div>
    </div>
  );
}
