export interface VimeoPlayback {
  videoId: string
  title?: string
  posterUrl?: string
  resumeAtSeconds?: number
}

export function vimeoEmbedUrl(playback: VimeoPlayback) {
  const id = playback.videoId.trim()
  if (!/^\d+$/.test(id)) throw new Error('Invalid Vimeo video id')

  const params = new URLSearchParams({
    autoplay: '1',
    title: '0',
    byline: '0',
    portrait: '0',
    dnt: '1',
  })
  if ((playback.resumeAtSeconds ?? 0) > 0) {
    params.set('#t', String(Math.floor(playback.resumeAtSeconds!)))
  }
  return `https://player.vimeo.com/video/${id}?${params.toString()}`
}
