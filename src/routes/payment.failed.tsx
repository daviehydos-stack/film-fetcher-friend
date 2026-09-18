import { createFileRoute, Link } from '@tanstack/react-router'
import { CircleX } from 'lucide-react'

export const Route = createFileRoute('/payment/failed')({ component: PaymentFailed })

function PaymentFailed() {
  return (
    <main className="min-h-screen bg-[#07090D] text-white grid place-items-center px-6">
      <section className="max-w-md text-center">
        <CircleX className="mx-auto size-9 text-white/70" aria-hidden />
        <h1 className="mt-5 text-2xl font-semibold">Payment not completed</h1>
        <p className="mt-3 text-sm leading-6 text-white/55">
          No access was activated. You can safely return to the title and try again.
        </p>
        <Link to="/" className="mt-7 inline-block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">
          Return to Avant
        </Link>
      </section>
    </main>
  )
}
