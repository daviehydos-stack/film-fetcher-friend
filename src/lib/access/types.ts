export type ProductType = 'movie_access' | 'season_access' | 'bundle' | 'subscription'
export type BillingType = 'one_time' | 'recurring'
export type PaymentStatus = 'pending' | 'processing' | 'successful' | 'failed' | 'refunded'
export type EntitlementStatus = 'pending' | 'active' | 'expired' | 'revoked'

export interface AccessProduct {
  id: string
  name: string
  description?: string
  type: ProductType
  billingType: BillingType
  priceMinor: number
  currency: string
  durationDays?: number | null
  active: boolean
  contentIds?: string[]
  seasonIds?: string[]
}

export interface PaymentRecord {
  id: string
  reference: string
  customerId: string
  productId: string
  provider: string
  method: 'mpesa' | 'card' | 'other'
  amountMinor: number
  currency: string
  status: PaymentStatus
  providerReference?: string
  idempotencyKey?: string
  verifiedAt?: string
  failureReason?: string
  createdAt: string
  updatedAt?: string
}

export interface Entitlement {
  id: string
  customerId: string
  productId: string
  paymentId?: string
  contentId?: string
  seasonId?: string
  accessType: ProductType
  startsAt: string
  expiresAt?: string | null
  status: EntitlementStatus
}

export interface WatchProgress {
  customerId: string
  contentId: string
  episodeId?: string
  progressSeconds: number
  durationSeconds: number
  lastWatchedAt: string
  completed: boolean
}
