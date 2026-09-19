import type { Entitlement } from './types'

export function entitlementIsActive(entitlement: Entitlement, now = new Date()) {
  if (entitlement.status !== 'active') return false
  if (new Date(entitlement.startsAt) > now) return false
  if (entitlement.expiresAt && new Date(entitlement.expiresAt) <= now) return false
  return true
}

export function entitlementGrantsContent(entitlement: Entitlement, target: { contentId: string; seasonId?: string | undefined }, now = new Date()) {
  if (!entitlementIsActive(entitlement, now)) return false
  if (entitlement.contentId === target.contentId) return true
  if (target.seasonId && entitlement.seasonId === target.seasonId) return true
  return false
}
