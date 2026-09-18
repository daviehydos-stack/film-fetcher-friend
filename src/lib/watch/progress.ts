import type { WatchProgress } from '../access/types'
export const WATCH_COMPLETE_RATIO = 0.92
export function buildProgress(input: Omit<WatchProgress,'completed'|'lastWatchedAt'>): WatchProgress { const duration=Math.max(0,input.durationSeconds); const progress=Math.max(0,Math.min(input.progressSeconds,duration||input.progressSeconds)); return {...input,progressSeconds:progress,durationSeconds:duration,lastWatchedAt:new Date().toISOString(),completed:duration>0&&progress/duration>=WATCH_COMPLETE_RATIO} }
export function shouldPersistProgress(previousSeconds:number,currentSeconds:number){return currentSeconds===0||Math.abs(currentSeconds-previousSeconds)>=10}
