const KEY = "avant-my-list";

export function readMyList(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function toggleMyList(id: string): string[] {
  if (typeof window === "undefined") return [];
  const current = readMyList();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("avant-my-list"));
  return next;
}
