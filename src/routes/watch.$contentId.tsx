import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { catalogue } from "@/lib/site-data";

export const Route = createFileRoute("/watch/$contentId")({
  head: () => ({ meta: [{ title: "Watch — Avant Movies" }] }),
  component: Watch,
});

function Watch() {
  const { contentId } = Route.useParams();
  const match = catalogue
    .flatMap((item) => (item.episodes ?? []).map((episode, index) => ({ item, episode, index })))
    .find(({ item, index }) => contentId === `${item.slug}-${index + 1}`);

  if (!match) {
    return <main className="grid min-h-screen place-items-center bg-black px-6 text-white"><div className="text-center"><h1 className="text-3xl font-bold">Content unavailable</h1><p className="mt-3 text-sm text-white/55">This title could not be found in the current Avant catalogue.</p><Link to="/" className="mt-6 inline-flex rounded border border-white/20 px-4 py-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Return home</Link></div></main>;
  }

  const { item, episode, index } = match;
  const playable = Boolean(episode.youtubeId);
  const total = item.episodes?.length ?? 0;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-5 sm:px-10 lg:px-14">
        <Link to="/title/$slug" params={{ slug: item.slug }} aria-label={`Back to ${item.title}`} className="rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><ArrowLeft /></Link>
        <div className="min-w-0"><p className="truncate text-sm font-bold">{item.title}</p><p className="text-xs text-white/50">Episode {index + 1} of {total}</p></div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        {playable ? (
          <div className="aspect-video overflow-hidden rounded-md bg-neutral-950 shadow-2xl">
            <iframe src={`https://www.youtube-nocookie.com/embed/${episode.youtubeId}?rel=0`} title={episode.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="size-full border-0" />
          </div>
        ) : (
          <div className="grid aspect-video min-h-[18rem] place-items-center rounded-md border border-white/10 bg-neutral-950 px-6">
            <div className="max-w-md text-center"><Lock className="mx-auto size-9 text-white/60" /><h1 className="mt-5 text-2xl font-bold">This episode requires access</h1><p className="mt-2 text-sm leading-6 text-white/55">Protected playback will become available here after the customer has a valid Avant entitlement.</p><p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/35">Secure access required</p></div>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-6 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Episode {index + 1}</p><h1 className="mt-2 text-xl font-bold sm:text-2xl">{episode.title}</h1><p className="mt-2 text-sm text-white/55">{episode.duration}</p></div>
          <nav className="flex gap-2" aria-label="Episode navigation">
            {index > 0 ? <Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index}` }} className="inline-flex items-center gap-2 rounded border border-white/15 px-4 py-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><ChevronLeft className="size-4" />Previous</Link> : null}
            {index < total - 1 ? <Link to="/watch/$contentId" params={{ contentId: `${item.slug}-${index + 2}` }} className="inline-flex items-center gap-2 rounded border border-white/15 px-4 py-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Next<ChevronRight className="size-4" /></Link> : null}
          </nav>
        </div>

        {total > 1 ? <div className="mt-7"><p className="text-sm font-bold">More episodes</p><div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto pb-3">{item.episodes?.map((candidate, candidateIndex) => <Link key={candidate.title} to="/watch/$contentId" params={{ contentId: `${item.slug}-${candidateIndex + 1}` }} aria-current={candidateIndex === index ? "page" : undefined} className={`w-40 shrink-0 rounded border p-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${candidateIndex === index ? "border-white/60 bg-white/10" : "border-white/10 hover:bg-white/5"}`}><div className="aspect-video overflow-hidden rounded bg-neutral-900"><img src={candidate.poster ?? (candidate.youtubeId ? `https://i.ytimg.com/vi/${candidate.youtubeId}/mqdefault.jpg` : item.artwork)} alt="" loading="lazy" className="size-full object-cover" /></div><p className="mt-2 truncate text-xs font-semibold">Episode {candidateIndex + 1}</p></Link>)}</div></div> : null}
      </section>
    </main>
  );
}
