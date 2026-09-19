import type { Entitlement } from './types'
import { entitlementGrantsContent } from './entitlements'
import type { PaymentsAccessStore } from '../payments/server-contract'

export interface AccessDecision {
  authorized: boolean
  reason: 'granted' | 'no_customer' | 'no_entitlement'
  entitlement?: Entitlement
}

export async function authorizeContent(
  store: PaymentsAccessStore,
  input: { customerId?: string | null; contentId: string; seasonId?: string | undefined },
): Promise<AccessDecision> {
  if (!input.customerId) return { authorized: false, reason: 'no_customer' }
  const entitlements = await store.findValidEntitlements(input.customerId, input.contentId, input.seasonId)
  const entitlement = entitlements.find((item) => entitlementGrantsContent(item, { contentId: input.contentId, seasonId: input.seasonId }))
  return entitlement ? { authorized: true, reason: 'granted', entitlement } : { authorized: false, reason: 'no_entitlement' }
}
