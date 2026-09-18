import type { WatchProgress } from '../access/types'

export function isContinueWatchingItem(progress: WatchProgress) {
  return !progress.completed && progress.progressSeconds > 0 && progress.durationSeconds > 0
}

export function sortContinueWatching(items: WatchProgress[]) {
  return items
    .filter(isContinueWatchingItem)
    .sort((a, b) => Date.parse(b.lastWatchedAt) - Date.parse(a.lastWatchedAt))
}

export function progressPercent(progress: WatchProgress) {
  if (progress.durationSeconds <= 0) return 0
  return Math.min(100, Math.max(0, Math.round((progress.progressSeconds / progress.durationSeconds) * 100)))
}
