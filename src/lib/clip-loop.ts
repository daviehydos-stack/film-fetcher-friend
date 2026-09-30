import { useEffect, type RefObject } from "react";

/**
 * Keeps a muted Vimeo preview inside its first `limitSeconds` and restarts it, like a streaming-service hero.
 * Uses the Vimeo player postMessage API (iframe URL needs api=1). A wall-clock timer is the fallback in case
 * the player (e.g. background mode) does not report timeupdate events.
 */
export function useClipLoop(frameRef: RefObject<HTMLIFrameElement | null>, active: boolean, limitSeconds = 60, key: string = "") {
  useEffect(() => {
    const frame = frameRef.current;
    if (!active || !frame) return;
    let lastRestart = 0;
    let wall: number | undefined;
    const post = (method: string, value?: unknown) => {
      frame.contentWindow?.postMessage(JSON.stringify(value === undefined ? { method } : { method, value }), "*");
    };
    const schedule = () => {
      window.clearTimeout(wall);
      wall = window.setTimeout(restart, (limitSeconds + 2) * 1000);
    };
    function restart() {
      const now = Date.now();
      if (now - lastRestart < 1500) return;
      lastRestart = now;
      post("setCurrentTime", 0);
      window.setTimeout(() => post("play"), 60);
      schedule();
    }
    const subscribe = () => {
      post("addEventListener", "timeupdate");
      post("addEventListener", "ended");
    };
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow) return;
      let message: any = event.data;
      try {
        if (typeof message === "string") message = JSON.parse(message);
      } catch {
        return;
      }
      if (message?.event === "ready") subscribe();
      else if (message?.event === "timeupdate") {
        if (Number(message?.data?.seconds ?? 0) >= limitSeconds) restart();
      } else if (message?.event === "ended") restart();
    };
    window.addEventListener("message", onMessage);
    frame.addEventListener("load", subscribe);
    const t1 = window.setTimeout(subscribe, 300);
    const t2 = window.setTimeout(subscribe, 1500);
    schedule();
    return () => {
      window.removeEventListener("message", onMessage);
      frame.removeEventListener("load", subscribe);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(wall);
    };
  }, [frameRef, active, limitSeconds, key]);
}
