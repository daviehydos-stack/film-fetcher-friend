import { useState } from "react";
import { Play, Lock } from "lucide-react";
import type { Episode } from "@/lib/site-data";

export function YoutubeCard({ episode }: { episode: Episode }) {
  const [playing, setPlaying] = useState(false);
  const poster =
    episode.poster ??
    `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="panel overflow-hidden rounded-xl">
      <div className="relative aspect-video w-full bg-black">
        {playing && episode.youtubeId ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Play ${episode.title}`}
          >
            <img
              src={poster}
              alt={episode.title}
              loading="lazy"
              className="size-full object-cover opacity-90 transition group-hover:opacity-100"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-flame text-flame-foreground shadow-glow transition group-hover:scale-110">
                <Play className="size-7 translate-x-0.5 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-semibold text-ink-foreground">{episode.title}</p>
        <span className="shrink-0 text-xs text-muted-foreground">{episode.duration}</span>
      </div>
    </div>
  );
}

export function LockedCard({
  episode,
  onUnlock,
}: {
  episode: Episode;
  onUnlock?: () => void;
}) {
  return (
    <div className="panel overflow-hidden rounded-xl">
      <div className="relative aspect-video w-full bg-black">
        {episode.poster ? (
          <img
            src={episode.poster}
            alt={episode.title}
            loading="lazy"
            className="size-full object-cover opacity-45"
          />
        ) : (
          <div className="size-full bg-gradient-to-br from-ink to-flame/25" />
        )}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-14 place-items-center rounded-full border border-flame/70 bg-black/60 text-flame">
            <Lock className="size-6" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-semibold text-ink-foreground">{episode.title}</p>
        <span className="shrink-0 text-xs text-muted-foreground">{episode.duration}</span>
      </div>
      {onUnlock ? (
        <button
          type="button"
          onClick={onUnlock}
          className="w-full bg-flame py-2 text-sm font-bold tracking-wide text-flame-foreground uppercase hover:brightness-110"
        >
          Unlock
        </button>
      ) : null}
    </div>
  );
}

export function TrailerCard({
  title,
  poster,
  duration,
  href,
}: {
  title: string;
  poster: string;
  duration: string;
  href: string;
}) {
  return (
    <a href={href} className="panel group block overflow-hidden rounded-xl">
      <div className="relative aspect-video w-full bg-black">
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className="size-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid size-16 place-items-center rounded-full bg-flame/90 text-flame-foreground shadow-glow transition group-hover:scale-110">
            <Play className="size-7 translate-x-0.5 fill-current" />
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-semibold text-ink-foreground">{title}</p>
        <span className="shrink-0 text-xs text-muted-foreground">{duration}</span>
      </div>
    </a>
  );
}
