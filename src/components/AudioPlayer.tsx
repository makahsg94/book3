import { useEffect, useReducer, useRef, useState } from 'react'
import type { AudioTrack } from '../types'
import { asset } from '../lib/assets'
import {
  PLAYBACK_SPEEDS,
  formatTime,
  getPlaybackRate,
  getPlayhead,
  nextInstance,
  seekAudio,
  setPlaybackRate,
  stepAudio,
  stopAudio,
  subscribePlayhead,
  toggleTrack,
} from '../lib/audio'
import { IconClose, IconForward, IconPause, IconPlay, IconRewind, IconVolume } from './Icons'

function useAudioTick() {
  const [, tick] = useReducer((n: number) => n + 1, 0)
  useEffect(() => subscribePlayhead(() => tick()), [])
  return tick
}

export function SpeedControl({ compact = false }: { compact?: boolean }) {
  const rate = getPlaybackRate()
  return (
    <button
      type="button"
      onClick={() => {
        const index = PLAYBACK_SPEEDS.indexOf(rate)
        setPlaybackRate(PLAYBACK_SPEEDS[(index + 1) % PLAYBACK_SPEEDS.length])
      }}
      className={`rounded-full border border-[var(--line)] font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300 ${
        compact ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
      aria-label={`Playback speed ${rate}x`}
      title="Change playback speed"
    >
      {Number.isInteger(rate) ? rate : rate.toFixed(2).replace(/0+$/, '')}×
    </button>
  )
}

export function AudioPlayer({ track }: { track: AudioTrack }) {
  useAudioTick()
  const instance = useRef(nextInstance())
  const [showScript, setShowScript] = useState(false)
  const src = asset(track.file)
  const playhead = getPlayhead()
  const active = playhead?.file === src
  const playing = Boolean(active && playhead?.playing)
  const position = active ? playhead?.position ?? 0 : 0
  const duration = active ? playhead?.duration ?? 0 : 0
  const progress = duration ? (position / duration) * 100 : 0

  return (
    <div
      className={`group rounded-xl border p-3 transition-colors ${
        active
          ? 'border-brand-300 bg-brand-50/70 dark:border-brand-700 dark:bg-brand-950/40'
          : 'border-[var(--line)] bg-[var(--surface)] hover:border-brand-200 dark:hover:border-brand-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => toggleTrack(src, track.label, instance.current)}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-sm transition-transform active:scale-95 ${
            playing ? 'bg-accent-600 hover:bg-accent-700' : 'bg-brand-600 hover:bg-brand-700'
          }`}
          aria-label={playing ? `Pause track ${track.label}` : `Play track ${track.label}`}
        >
          {playing ? <IconPause size={19} /> : <IconPlay size={19} />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300">
              <IconVolume size={12} />
              {track.label}
            </span>
            {track.note && (
              <span className="hidden text-[11px] text-[var(--ink-faint)] sm:inline">
                Audio {track.note.replaceAll('_', '.')}
              </span>
            )}
            {playing && (
              <span className="ml-auto flex h-3 items-end gap-0.5" aria-hidden="true">
                <i className="eq-bar h-2 w-0.5 animate-pulse rounded-full bg-brand-600" />
                <i className="eq-bar h-3 w-0.5 animate-pulse rounded-full bg-brand-600 [animation-delay:120ms]" />
                <i className="eq-bar h-1.5 w-0.5 animate-pulse rounded-full bg-brand-600 [animation-delay:240ms]" />
              </span>
            )}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="w-9 text-right text-[10px] tabular-nums text-[var(--ink-faint)]">{formatTime(position)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(position, duration || 0)}
              onChange={(event) => seekAudio(Number(event.target.value))}
              className="h-1.5 min-w-0 flex-1 cursor-pointer accent-brand-600"
              aria-label={`Seek track ${track.label}`}
              disabled={!active}
              style={{ backgroundSize: `${progress}% 100%` }}
            />
            <span className="w-9 text-[10px] tabular-nums text-[var(--ink-faint)]">
              {active ? formatTime(duration) : '--:--'}
            </span>
          </div>
        </div>

        <div className="hidden shrink-0 flex-col items-end gap-1.5 sm:flex">
          <SpeedControl compact />
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => stepAudio(-10)}
              className="grid h-7 w-7 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600"
              aria-label="Rewind 10 seconds"
            >
              <IconRewind size={15} />
            </button>
            <button
              type="button"
              onClick={() => stepAudio(10)}
              className="grid h-7 w-7 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600"
              aria-label="Forward 10 seconds"
            >
              <IconForward size={15} />
            </button>
          </div>
        </div>
      </div>

      {track.transcript && (
        <div className="mt-2 border-t border-[var(--line)] pt-2">
          <button
            type="button"
            onClick={() => setShowScript((value) => !value)}
            className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300"
            aria-expanded={showScript}
          >
            {showScript ? 'Hide script' : 'Show script'}
          </button>
          {showScript && (
            <div className="mt-2 max-h-72 overflow-auto whitespace-pre-line rounded-lg bg-[var(--bg)] p-3 text-[13px] leading-relaxed text-[var(--ink-soft)]">
              {track.transcript}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function AudioList({ tracks, emptyLabel = 'No audio for this lesson.' }: { tracks: AudioTrack[]; emptyLabel?: string }) {
  if (!tracks.length) {
    return (
      <p className="rounded-xl border border-dashed border-[var(--line-strong)] px-4 py-5 text-sm text-[var(--ink-faint)]">
        {emptyLabel}
      </p>
    )
  }
  return (
    <div className="space-y-2.5">
      {tracks.map((track) => (
        <AudioPlayer key={`${track.file}-${track.label}`} track={track} />
      ))}
    </div>
  )
}

export function MiniPlayer() {
  useAudioTick()
  const playhead = getPlayhead()
  if (!playhead) return null

  const progress = playhead.duration ? (playhead.position / playhead.duration) * 100 : 0

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--surface)]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgb(0_0_0/0.08)] backdrop-blur">
      <div className="mx-auto max-w-4xl px-3 py-2.5 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => toggleTrack(playhead.file, playhead.label, playhead.instance)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-sm transition hover:bg-brand-700 active:scale-95"
            aria-label={playhead.playing ? 'Pause audio' : 'Play audio'}
          >
            {playhead.playing ? <IconPause size={17} /> : <IconPlay size={17} />}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <p className="truncate text-xs font-semibold text-[var(--ink)]">Audio {playhead.label}</p>
              <span className="ml-auto text-[10px] tabular-nums text-[var(--ink-faint)]">
                {formatTime(playhead.position)} / {formatTime(playhead.duration)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={playhead.duration || 0}
              step={0.1}
              value={Math.min(playhead.position, playhead.duration || 0)}
              onChange={(event) => seekAudio(Number(event.target.value))}
              className="mt-1 h-1.5 w-full cursor-pointer accent-brand-600"
              aria-label="Seek audio"
              style={{ backgroundSize: `${progress}% 100%` }}
            />
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            <button
              type="button"
              onClick={() => stepAudio(-10)}
              className="grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600"
              aria-label="Rewind 10 seconds"
            >
              <IconRewind size={16} />
            </button>
            <button
              type="button"
              onClick={() => stepAudio(10)}
              className="grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600"
              aria-label="Forward 10 seconds"
            >
              <IconForward size={16} />
            </button>
            <SpeedControl compact />
          </div>

          <button
            type="button"
            onClick={stopAudio}
            className="grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/30"
            aria-label="Close audio player"
          >
            <IconClose size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
