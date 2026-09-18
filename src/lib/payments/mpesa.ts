import type { PaymentProvider } from './provider'
export type MpesaProvider = PaymentProvider
export function normalizeKenyanMsisdn(value: string) {
  const digits = value.replace(/\D/g, '')
  if (digits.startsWith('254') && digits.length === 12) return digits
  if (digits.startsWith('0') && digits.length === 10) return `254${digits.slice(1)}`
  if (digits.length === 9) return `254${digits}`
  throw new Error('Enter a valid Kenyan mobile number')
}
