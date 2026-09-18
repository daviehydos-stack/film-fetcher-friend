import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { verifyPayment } from '../lib/backend.functions'

export const Route = createFileRoute('/payment/success')({
  validateSearch: (search: Record<string, unknown>) => ({
    reference: typeof search.reference === 'string' ? search.reference : '',
  }),
  component: PaymentSuccess,
})

function PaymentSuccess() {
  const { reference } = Route.useSearch()
  const [status, setStatus] = useState<'checking' | 'success' | 'failed'>('checking')
  const [message, setMessage] = useState('Verifying with the payment backend…')

  useEffect(() => {
    if (!reference) {
      setStatus('failed')
      setMessage('Missing payment reference.')
      return
    }

    verifyPayment({ data: { reference } })
      .then((result) => {
        const ok = result.payment.status === 'successful' || Boolean(result.entitlement)
        setStatus(ok ? 'success' : 'failed')
        setMessage(ok ? 'Payment verified. Your access has been activated.' : 'Payment is not confirmed yet.')
      })
      .catch((cause) => {
        setStatus('failed')
        setMessage(cause instanceof Error ? cause.message : 'Payment verification failed')
      })
  }, [reference])

  return (
    <main className="grid min-h-[100svh] place-items-center bg-[#07090D] px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] text-white">
      <section className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold">
          {status === 'checking' ? 'Confirming your payment' : status === 'success' ? 'Payment confirmed' : 'Payment not confirmed'}
        </h1>
        <p className="mt-3 text-sm leading-6 text-white/55">{message}</p>
        <Link to="/" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm text-white/75 hover:bg-white/10 hover:text-white">Return to Avant</Link>
      </section>
    </main>
  )
}
