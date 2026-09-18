const KEY = "avant-my-list";
export function readMyList(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(window.localStorage.getItem(KEY) ?? "[]"); } catch { return []; }
}
export function isInMyList(id: string) { return readMyList().includes(id); }
export function toggleMyList(id: string) {
  const current = readMyList();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("avant-my-list"));
  return next.includes(id);
}
