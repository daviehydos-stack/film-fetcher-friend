const KEY = "avant-my-list";
export function readMyList(): string[] { if (typeof window === "undefined") return []; try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); } catch { return []; } }
export function toggleMyList(id: string): string[] { const current=readMyList(); const next=current.includes(id)?current.filter(x=>x!==id):[...current,id]; localStorage.setItem(KEY,JSON.stringify(next)); window.dispatchEvent(new Event("avant-my-list")); return next; }
