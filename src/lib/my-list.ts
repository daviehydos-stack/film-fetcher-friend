import { customerToken } from "./firebase-customer-auth";
import { getCloudMyList, setCloudMyList } from "./avant-backend";
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

export async function syncMyList(): Promise<string[]> { const local=readMyList(); const token=await customerToken(false); if(!token)return local; try{const cloud=(await getCloudMyList(token)).ids||[]; const merged=[...new Set([...cloud,...local])]; for(const id of local.filter(x=>!cloud.includes(x)))await setCloudMyList(token,id,true); localStorage.setItem(KEY,JSON.stringify(merged)); window.dispatchEvent(new Event("avant-my-list")); return merged}catch{return local} }

export function toggleMyList(id: string): string[] {
  if (typeof window === "undefined") return [];
  const current = readMyList();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("avant-my-list"));
  void customerToken(false).then(token=>token?setCloudMyList(token,id,next.includes(id)):null).catch(()=>{});
  return next;
}
