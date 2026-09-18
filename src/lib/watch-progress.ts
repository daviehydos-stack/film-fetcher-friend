export type WatchProgress = { contentId: string; seconds: number; duration?: number; updatedAt: number };
const KEY = "avant-watch-progress";

export function readProgress(): WatchProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function saveProgress(entry: WatchProgress) {
  if (typeof window === "undefined") return;
  const rest = readProgress().filter((item) => item.contentId !== entry.contentId);
  localStorage.setItem(KEY, JSON.stringify([entry, ...rest].slice(0, 30)));
  window.dispatchEvent(new Event("avant-progress"));
}

export function markStarted(contentId: string) {
  const existing = readProgress().find((item) => item.contentId === contentId);
  saveProgress({ contentId, seconds: existing?.seconds ?? 1, duration: existing?.duration, updatedAt: Date.now() });
}

export function getProgress(contentId: string) {
  return readProgress().find((item) => item.contentId === contentId);
}

export function formatWatchTime(seconds: number) {
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export function clearProgress(contentId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(readProgress().filter((item) => item.contentId !== contentId)));
  window.dispatchEvent(new Event("avant-progress"));
}
