import type { AccessProduct, PaymentRecord } from '../access/types'

export interface CustomerIdentity {
  id: string
  name?: string
  email?: string
  mobile?: string
}

export interface PaymentInitiation {
  payment: PaymentRecord
  redirectUrl?: string
  checkoutToken?: string
  clientMessage?: string
}

export interface PaymentVerification {
  verified: boolean
  providerReference?: string
  rawStatus?: string
}

export interface PaymentProvider {
  readonly id: string
  createTransaction(input: {
    customer: CustomerIdentity
    product: AccessProduct
    payment: PaymentRecord
  }): Promise<PaymentInitiation>
  verifyTransaction(payment: PaymentRecord): Promise<PaymentVerification>
  verifyWebhook(input: { headers: Headers; rawBody: string }): Promise<boolean>
  parseWebhook(input: { headers: Headers; rawBody: string }): Promise<{
    reference: string
    providerReference?: string
    status: string
  }>
}

/**
 * Provider registry deliberately keeps checkout independent of M-PESA/card vendors.
 * Concrete adapters belong server-side and must read credentials from environment only.
 */
export class PaymentProviderRegistry {
  private providers = new Map<string, PaymentProvider>()

  register(provider: PaymentProvider) {
    this.providers.set(provider.id, provider)
  }

  get(id: string) {
    const provider = this.providers.get(id)
    if (!provider) throw new Error(`Payment provider "${id}" is not configured`)
    return provider
  }
}
