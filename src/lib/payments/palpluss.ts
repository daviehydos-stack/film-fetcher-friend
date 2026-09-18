import type { AccessProduct, PaymentRecord } from '../access/types'
import type {
  CustomerIdentity,
  PaymentInitiation,
  PaymentProvider,
  PaymentVerification,
} from './provider'
import { normalizeKenyanMsisdn } from './mpesa'

const DEFAULT_BASE_URL = 'https://api.palpluss.com'

type PalplussConfig = {
  apiKey: string
  baseUrl?: string
}

type PalplussStkResponse = {
  status?: string
  reference?: string
  transactionId?: string
  transaction_id?: string
  message?: string
  [key: string]: unknown
}

/**
 * Server-only Palpluss adapter.
 * Never construct this provider in browser code and never expose the API key.
 */
export class PalplussPaymentProvider implements PaymentProvider {
  readonly id = 'palpluss'
  private readonly baseUrl: string

  constructor(private readonly config: PalplussConfig) {
    if (!config.apiKey) throw new Error('PALPLUSS_API_KEY is required')
    this.baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, '')
  }

  async createTransaction(input: {
    customer: CustomerIdentity
    product: AccessProduct
    payment: PaymentRecord
  }): Promise<PaymentInitiation> {
    if (!input.customer.mobile) throw new Error('A mobile number is required for M-PESA')

    const response = await this.request<PalplussStkResponse>('/v1/payments/stk', {
      method: 'POST',
      body: JSON.stringify({
        phone: normalizeKenyanMsisdn(input.customer.mobile),
        amount: input.product.priceMinor / 100,
        accountReference: input.payment.reference,
      }),
    })

    return {
      payment: input.payment,
      clientMessage: response.message ?? 'Check your phone and enter your M-PESA PIN.',
      checkoutToken: String(
        response.transactionId ?? response.transaction_id ?? response.reference ?? input.payment.reference,
      ),
    }
  }

  async verifyTransaction(payment: PaymentRecord): Promise<PaymentVerification> {
    // Keep this isolated because the exact Palpluss lookup endpoint/response must
    // match the account's current API documentation before production enablement.
    const response = await this.request<PalplussStkResponse>(
      `/v1/payments/${encodeURIComponent(payment.reference)}`,
      { method: 'GET' },
    )
    const status = String(response.status ?? '').toLowerCase()
    return {
      verified: ['success', 'successful', 'completed', 'paid'].includes(status),
      providerReference: String(
        response.transactionId ?? response.transaction_id ?? response.reference ?? '',
      ) || undefined,
      rawStatus: status,
    }
  }

  async verifyWebhook(input: { headers: Headers; rawBody: string }): Promise<boolean> {
    // Palpluss advertises signed webhook payloads. Signature header/algorithm must
    // be taken from the merchant docs before this adapter is enabled in production.
    const signature =
      input.headers.get('x-palpluss-signature') ??
      input.headers.get('x-webhook-signature')
    return Boolean(signature && input.rawBody)
  }

  async parseWebhook(input: { headers: Headers; rawBody: string }) {
    const payload = JSON.parse(input.rawBody) as Record<string, unknown>
    const reference = String(
      payload.accountReference ?? payload.reference ?? payload.account_reference ?? '',
    )
    if (!reference) throw new Error('Palpluss webhook is missing a payment reference')
    return {
      reference,
      providerReference:
        String(payload.transactionId ?? payload.transaction_id ?? payload.mpesaReceiptNumber ?? '') ||
        undefined,
      status: String(payload.status ?? ''),
    }
  }

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Basic ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...init.headers,
      },
    })
    const body = await response.text()
    if (!response.ok) throw new Error(`Palpluss request failed (${response.status}): ${body}`)
    return body ? (JSON.parse(body) as T) : ({} as T)
  }
}
