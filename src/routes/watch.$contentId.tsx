import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ChevronLeft, ChevronRight, LockKeyhole } from 'lucide-react'
import { useEffect, useState } from 'react'
import { authorizeContent } from '../lib/backend.functions'
import { catalogue } from '../lib/site-data'
import { markStarted } from '../lib/watch-progress'
import { youtubeEmbedUrl } from '../lib/video-embeds'

export const Route = createFileRoute('/watch/$contentId')({
  component: WatchRoute,
})

function WatchRoute() {
  const { contentId } = Route.useParams()
  const match = catalogue
    .flatMap((item) => (item.episodes ?? []).map((episode, index) => ({ item, episode, index })))
    .find(({ item, index }) => contentId === `${item.slug}-${index + 1}`)

  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const [error, setError] = useState('')

  const playableForFree = Boolean(match?.episode.youtubeId)

  useEffect(() => {
    if (!match) return

    if (playableForFree) {
      markStarted(contentId)
      setAuthorized(true)
      return
    }

    const customerId = window.localStorage.getItem('film_customer_id')
    if (!customerId) {
      setAuthorized(false)
      return
    }

    setAuthorized(null)
    authorizeContent({ data: { customerId, contentId } })
      .then((result) => setAuthorized(Boolean(result.authorized)))
      .catch((cause) => {
        setAuthorized(false)
        setError(cause instanceof Error ? cause.message : 'Unable to validate access')
      })
  }, [contentId, playableForFree, match])

  if (!match) {
    return (
      <main className="grid min-h-screen place-items-center bg-black px-6 text-white">
        <section className="max-w-md text-center">
          <h1 className="text-3xl font-bold">Content unavailable</h1>
          <p className="mt-3 text-sm text-white/55">This title could not be found in the current Avant catalogue.</p>
          <Link to="/" className="mt-6 inline-flex rounded border border-white/20 px-4 py-2 text-sm hover:bg-white/10">Return home</Link>
        </section>
      </main>
    )
  }

  const { item, episode, index } = match
  const total = item.episodes?.length ?? 0
  const playable = Boolean(episode.youtubeId)
  const protectedAuthorized = !playable && authorized === true
  const showAccessRequired = !playable && authorized !== true

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex min-h-16 max-w-[1600px] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-10 lg:px-14">
        <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`Back to ${item.title}`} className="grid size-11 shrink-0 place-items-center rounded-md transition hover:bg-white/10">
          <ArrowLeft />
        </Link>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{item.title}</p>
          <p className="text-xs text-white/50">Episode {index + 1} of {total}</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-0 pb-10 sm:px-6 sm:pb-12">
        {playable ? (
          <div className="aspect-video w-full overflow-hidden bg-neutral-950 shadow-2xl sm:rounded-md">
            <iframe
              src={youtubeEmbedUrl(episode.youtubeId!)}
              title={episode.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
        ) : showAccessRequired ? (
          <div className="grid aspect-video min-h-[18rem] place-items-center rounded-md border border-white/10 bg-neutral-950 px-6">
            <div className="max-w-md text-center">
              <LockKeyhole className="mx-auto size-9 text-white/60" />
              <h1 className="mt-5 text-2xl font-bold">{authorized === null ? 'Checking access…' : 'This episode requires access'}</h1>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {error || 'Complete checkout with the customer identity that owns access to unlock protected playback.'}
              </p>
              <Link to="/checkout/$productId" params={{ productId: contentId }} className="mt-6 inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">
                Get Access
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid aspect-video min-h-[18rem] place-items-center rounded-md border border-white/10 bg-neutral-950 px-6">
            <div className="max-w-md text-center">
              <p className="text-sm text-white/60">Protected playback authorization succeeded.</p>
              <p className="mt-2 text-xs text-white/35">The secure Vimeo playback URL still needs to be supplied by the backend for this episode.</p>
            </div>
          </div>
        )}

        <div className="mx-4 mt-6 flex flex-col gap-5 border-b border-white/10 pb-6 sm:mx-0 sm:mt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Episode {index + 1}</p>
            <h1 className="mt-2 text-xl font-bold sm:text-2xl">{episode.title}</h1>
            <p className="mt-2 text-sm text-white/55">{episode.duration}</p>
          </div>
          <nav className="flex gap-2" aria-label="Episode navigation">
            {index > 0 ? <Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index}` }} className="inline-flex items-center gap-2 rounded border border-white/15 px-4 py-2 text-sm hover:bg-white/10"><ChevronLeft className="size-4" />Previous</Link> : null}
            {index < total - 1 ? <Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index + 2}` }} className="inline-flex items-center gap-2 rounded border border-white/15 px-4 py-2 text-sm hover:bg-white/10">Next<ChevronRight className="size-4" /></Link> : null}
          </nav>
        </div>
      </section>
    </main>
  )
}
