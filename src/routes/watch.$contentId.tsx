import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { useEffect, useState } from 'react'
import { authorizeContent } from '../lib/backend.functions'

export const Route = createFileRoute('/watch/$contentId')({
  component: WatchRoute,
})

function WatchRoute() {
  const { contentId } = Route.useParams()
  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const customerId = window.localStorage.getItem('film_customer_id')
    if (!customerId) {
      setAuthorized(false)
      return
    }

    authorizeContent({ data: { customerId, contentId } })
      .then((result) => setAuthorized(Boolean(result.authorized)))
      .catch((cause) => {
        setAuthorized(false)
        setError(cause instanceof Error ? cause.message : 'Unable to validate access')
      })
  }, [contentId])

  if (authorized !== true) {
    return (
      <main className="grid min-h-screen place-items-center bg-black px-6 text-white">
        <section className="max-w-md space-y-5 text-center">
          <LockKeyhole className="mx-auto size-10 text-white/70" aria-hidden />
          <h1 className="text-2xl font-semibold">Access required</h1>
          <p className="text-white/60">
            This title is protected. Complete checkout or sign in with the customer identity that owns access.
          </p>
          {error && <p className="text-sm text-red-300">{error}</p>}
          <div className="flex justify-center gap-3">
            <Link to="/" className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">Browse Avant</Link>
            <Link to="/checkout/$productId" params={{ productId: contentId }} className="rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium">Get Access</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="absolute left-4 top-4 z-20">
        <button type="button" onClick={() => history.back()} aria-label="Go back">
          <ArrowLeft className="size-7" />
        </button>
      </header>
      <section className="grid min-h-screen place-items-center">
        <p className="text-white/50">Protected Vimeo player for {contentId}</p>
      </section>
    </main>
  )
}
