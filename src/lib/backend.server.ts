import { createServerOnlyFn } from '@tanstack/react-start'

type BackendError = { error: string; code?: string }

export type BackendPaymentResponse = {
  payment: { reference: string }
  customerId?: string
  redirectUrl?: string
  checkoutToken?: string
  clientMessage?: string
}

export type BackendVerifyResponse = {
  payment: { reference: string; status: string }
  entitlement?: { id: string }
}

export type BackendAccessResponse = {
  authorized: boolean
  reason: 'granted' | 'no_customer' | 'no_entitlement'
}

function backendBaseUrl() {
  const value = process.env['FILM_BACKEND_URL']?.trim()
  if (!value) throw new Error('FILM_BACKEND_URL is not configured')
  return value.replace(/\/$/, '')
}

async function callBackend<T>(path: string, init: RequestInit): Promise<T> {
  const secret = process.env['FILM_BACKEND_SECRET']?.trim()
  if (!secret) throw new Error('FILM_BACKEND_SECRET is not configured')

  const response = await fetch(`${backendBaseUrl()}${path}`, {
    ...init,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${secret}`,
      ...init.headers,
    },
  })

  const body = (await response.json().catch(() => null)) as T | BackendError | null
  if (!response.ok) {
    const message =
      body && typeof body === 'object' && 'error' in body
        ? String(body.error)
        : `Backend request failed with HTTP ${response.status}`
    throw new Error(message)
  }
  return body as T
}

export const backendCreatePayment = createServerOnlyFn(
  async (input: {
    productId: string
    customer: { name?: string; email?: string; mobile?: string }
    provider: 'mpesa' | 'card'
  }) =>
    callBackend<BackendPaymentResponse>('/api/payments/create', {
      method: 'POST',
      body: JSON.stringify({
        product_id: input.productId,
        customer: input.customer,
        provider: input.provider,
      }),
    }),
)

export const backendVerifyPayment = createServerOnlyFn(async (reference: string) =>
  callBackend<BackendVerifyResponse>('/api/payments/verify', {
    method: 'POST',
    body: JSON.stringify({ reference }),
  }),
)

export const backendAuthorizeContent = createServerOnlyFn(
  async (input: { customerId: string; contentId: string; seasonId?: string | undefined }) =>
    callBackend<BackendAccessResponse>('/api/access/authorize', {
      method: 'POST',
      body: JSON.stringify({
        customer_id: input.customerId,
        content_id: input.contentId,
        season_id: input.seasonId,
      }),
    }),
)
