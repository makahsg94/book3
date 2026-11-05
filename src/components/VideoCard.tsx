import { useState } from 'react'
import type { VideoRef } from '../types'
import { asset } from '../lib/assets'
import { IconPlay, IconVideo } from './Icons'

const kindLabel: Record<VideoRef['kind'], string> = {
  streetint: 'BBC Street Interviews',
  vlogs: 'Vlog',
  programmes: 'BBC Programme',
}

const kindGradient: Record<VideoRef['kind'], string> = {
  streetint: 'from-brand-700 via-brand-600 to-brand-500',
  vlogs: 'from-accent-800 via-accent-600 to-accent-500',
  programmes: 'from-warm-900 via-warm-700 to-warm-600',
}

export function VideoCard({
  video,
  unitNumber,
  compact = false,
}: {
  video: VideoRef
  unitNumber: number
  compact?: boolean
}) {
  const [started, setStarted] = useState(false)
  const [failed, setFailed] = useState(false)
  const src = asset(video.file)

  return (
    <article className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
      {started ? (
        <div className="aspect-video bg-black">
          {failed ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-white/80">
              <IconVideo size={28} />
              <p className="text-sm">This video could not be loaded.</p>
              <a className="text-xs underline" href={src} target="_blank" rel="noreferrer">
                Open the file directly
              </a>
            </div>
          ) : (
            <video
              src={src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
              className="h-full w-full"
            />
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className={`group relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br ${kindGradient[video.kind]} text-white`}
          aria-label={`Play video: ${video.title}`}
        >
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_70%,white_0,transparent_30%)]" />
          <div className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] backdrop-blur">
            {kindLabel[video.kind]}
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-black/20 px-2 py-1 text-[10px] font-semibold backdrop-blur">
            Unit {unitNumber}
          </div>
          <div className="relative flex flex-col items-center gap-3 px-6">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur transition group-hover:scale-110 group-hover:bg-white/30">
              <IconPlay size={24} />
            </span>
            <span className="text-center text-sm font-semibold leading-snug">{video.title}</span>
          </div>
        </button>
      )}
      {!compact && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--ink)]">{video.title}</p>
            <p className="text-xs text-[var(--ink-faint)]">{kindLabel[video.kind]} · Unit {unitNumber}</p>
          </div>
          <span className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
            {started ? 'Video' : 'Click to play'}
          </span>
        </div>
      )}
    </article>
  )
}

export function VideoList({
  videos,
  unitNumber,
}: {
  videos: VideoRef[]
  unitNumber: number
}) {
  if (!videos.length) return null
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {videos.map((video) => (
        <VideoCard key={video.file} video={video} unitNumber={unitNumber} />
      ))}
    </div>
  )
}
