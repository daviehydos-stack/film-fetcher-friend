import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Smartphone, CreditCard } from 'lucide-react'
import { useState } from 'react'
import { createPayment } from '../lib/backend.functions'

export const Route = createFileRoute('/checkout/$productId')({
  component: CheckoutRoute,
})

function CheckoutRoute() {
  const { productId } = Route.useParams()
  const router = useRouter()
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState<'mpesa' | 'card' | null>(null)
  const [error, setError] = useState('')

  async function start(provider: 'mpesa' | 'card') {
    setBusy(provider)
    setError('')
    try {
      const result = await createPayment({
        data: {
          productId,
          customer: { mobile: mobile || undefined, email: email || undefined },
          provider,
        },
      })
      if (result.redirectUrl) {
        window.location.assign(result.redirectUrl)
        return
      }
      if (result.clientMessage) {
        setError(result.clientMessage)
      } else {
        await router.navigate({ to: '/payment/success', search: { reference: result.payment.reference } })
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Unable to start payment')
    } finally {
      setBusy(null)
    }
  }

  return (
    <main className="min-h-screen bg-[#07090D] px-5 py-12 text-white">
      <section className="mx-auto max-w-lg">
        <Link to="/" className="text-sm text-white/60 hover:text-white">← Back to Avant</Link>
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Secure access</p>
          <h1 className="mt-2 text-3xl font-semibold">Get access</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            The server resolves the product, amount, currency and access duration. Nothing from the browser is trusted for pricing.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <input
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            placeholder="M-PESA mobile number"
            inputMode="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email (optional)"
            type="email"
            autoComplete="email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35"
          />

          <button
            className="flex w-full items-center gap-4 rounded-lg bg-white px-5 py-4 text-left text-black disabled:opacity-50"
            type="button"
            disabled={busy !== null}
            onClick={() => void start('mpesa')}
          >
            <Smartphone className="size-5" />
            <span>
              <strong className="block">{busy === 'mpesa' ? 'Starting…' : 'M-PESA'}</strong>
              <span className="text-sm opacity-65">Pay with your mobile number</span>
            </span>
          </button>

          <button
            className="flex w-full items-center gap-4 rounded-lg bg-white/8 px-5 py-4 text-left disabled:opacity-50"
            type="button"
            disabled={busy !== null}
            onClick={() => void start('card')}
          >
            <CreditCard className="size-5" />
            <span>
              <strong className="block">{busy === 'card' ? 'Starting…' : 'Card'}</strong>
              <span className="text-sm text-white/55">Secure provider-hosted checkout</span>
            </span>
          </button>
        </div>

        {error && (
          <p role="alert" className="mt-5 rounded-lg border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
            {error}
          </p>
        )}

        <p className="mt-8 text-xs text-white/35">Product reference: {productId}</p>
      </section>
    </main>
  )
}
