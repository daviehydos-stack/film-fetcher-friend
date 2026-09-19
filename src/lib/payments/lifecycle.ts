import type { AccessProduct, Entitlement, PaymentRecord } from '../access/types'
import type { PaymentProviderRegistry } from './provider'
import type { PaymentsAccessStore } from './server-contract'
export class PaymentLifecycleService {
  constructor(private readonly store: PaymentsAccessStore, private readonly providers: PaymentProviderRegistry) {}
  async createPayment(input: { productId: string; customer: { name?: string; email?: string; mobile?: string }; provider: string; method: PaymentRecord['method']; idempotencyKey: string }) {
    const product = await this.store.getActiveProduct(input.productId); if (!product) throw new Error('Product is unavailable')
    const customer = await this.store.getOrCreateCustomer(input.customer)
    const existing = await this.store.getPaymentByIdempotencyKey(input.idempotencyKey); if (existing) return { payment: existing }
    const payment = await this.store.createPendingPayment({ customerId: customer.id, product, provider: input.provider, method: input.method, idempotencyKey: input.idempotencyKey })
    return this.providers.get(input.provider).createTransaction({ customer, product, payment })
  }
  async verifyAndGrant(reference: string): Promise<{ payment: PaymentRecord; entitlement?: Entitlement }> {
    const payment = await this.store.getPaymentByReference(reference); if (!payment) throw new Error('Payment not found')
    if (payment.status === 'successful') { const product = await this.requireProduct(payment.productId); return { payment, entitlement: await this.store.createEntitlementOnce(payment, product) } }
    const verification = await this.providers.get(payment.provider).verifyTransaction(payment); if (!verification.verified) return { payment }
    const verifiedPayment = await this.store.markPaymentVerified({ paymentId: payment.id, providerReference: verification.providerReference ?? undefined })
    const product = await this.requireProduct(verifiedPayment.productId)
    return { payment: verifiedPayment, entitlement: await this.store.createEntitlementOnce(verifiedPayment, product) }
  }
  private async requireProduct(productId: string): Promise<AccessProduct> { const product = await this.store.getActiveProduct(productId); if (!product) throw new Error('Product is unavailable'); return product }
}
