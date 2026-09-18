import type { AccessProduct, Entitlement, PaymentRecord } from '../access/types'
import type { CustomerIdentity, PaymentInitiation } from './provider'

/**
 * Persistence-neutral contract for privileged payment/access operations.
 * Implement this with Supabase server/Edge Functions once the shared schema lands.
 */
export interface PaymentsAccessStore {
  getActiveProduct(productId: string): Promise<AccessProduct | null>
  getOrCreateCustomer(identity: Omit<CustomerIdentity, 'id'>): Promise<CustomerIdentity>
  createPendingPayment(input: {
    customerId: string
    product: AccessProduct
    provider: string
    method: PaymentRecord['method']
  }): Promise<PaymentRecord>
  getPaymentByReference(reference: string): Promise<PaymentRecord | null>
  markPaymentVerified(input: {
    paymentId: string
    providerReference?: string
  }): Promise<PaymentRecord>
  createEntitlementOnce(payment: PaymentRecord, product: AccessProduct): Promise<Entitlement>
  findValidEntitlements(customerId: string, contentId: string, seasonId?: string): Promise<Entitlement[]>
}

export interface PaymentService {
  createPayment(input: {
    productId: string
    customer: Omit<CustomerIdentity, 'id'>
    provider: string
    method: PaymentRecord['method']
  }): Promise<PaymentInitiation>
  verifyAndGrant(reference: string): Promise<{ payment: PaymentRecord; entitlement?: Entitlement }>
}
