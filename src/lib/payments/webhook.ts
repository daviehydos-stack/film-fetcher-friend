import type { Entitlement, PaymentRecord } from '../access/types'
import type { PaymentProviderRegistry } from './provider'
import type { PaymentsAccessStore } from './server-contract'
export type WebhookResult = { accepted: false; reason: 'invalid_signature' } | { accepted: true; duplicate: boolean; payment?: PaymentRecord | undefined; entitlement?: Entitlement | undefined }
export async function processPaymentWebhook(input: { providerId: string; headers: Headers; rawBody: string; providers: PaymentProviderRegistry; store: PaymentsAccessStore }): Promise<WebhookResult> {
  const provider = input.providers.get(input.providerId); if (!(await provider.verifyWebhook({ headers: input.headers, rawBody: input.rawBody }))) return { accepted: false, reason: 'invalid_signature' }
  const event = await provider.parseWebhook({ headers: input.headers, rawBody: input.rawBody }); const payment = await input.store.getPaymentByReference(event.reference); if (!payment) return { accepted: true, duplicate: false }
  if (payment.status === 'successful') { const product = await input.store.getActiveProduct(payment.productId); const entitlement = product ? await input.store.createEntitlementOnce(payment, product) : undefined; return { accepted: true, duplicate: true, payment, entitlement } }
  if (!['success','successful','completed','paid'].includes(event.status.toLowerCase())) return { accepted: true, duplicate: false, payment }
  const verification = await provider.verifyTransaction(payment); if (!verification.verified) return { accepted: true, duplicate: false, payment }
  const verifiedPayment = await input.store.markPaymentVerified({ paymentId: payment.id, providerReference: verification.providerReference ?? event.providerReference })
  const product = await input.store.getActiveProduct(verifiedPayment.productId); if (!product) return { accepted: true, duplicate: false, payment: verifiedPayment }
  return { accepted: true, duplicate: false, payment: verifiedPayment, entitlement: await input.store.createEntitlementOnce(verifiedPayment, product) }
}
