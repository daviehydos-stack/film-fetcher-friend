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

  const resume = Math.max(0, Math.floor(playback.resumeAtSeconds ?? 0))
  const fragment = resume > 0 ? `#t=${resume}s` : ''
  return `https://player.vimeo.com/video/${id}?${params.toString()}${fragment}`
}
