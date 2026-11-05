import { Link, useSearchParams } from 'react-router-dom'
import { units } from '../content/book'
import { AudioList } from '../components/AudioPlayer'
import { VideoCard } from '../components/VideoCard'
import { PageHeader, Pill } from '../components/PageHeader'
import { IconEar, IconSearch, IconVideo } from '../components/Icons'

export default function MediaPage() {
  const [params, setParams] = useSearchParams()
  const tab = params.get('tab') === 'video' ? 'video' : 'audio'
  const selectedUnit = Number(params.get('unit') ?? '1')
  const unit = units.find((u) => u.number === selectedUnit) ?? units[0]
  const audioCount = units.reduce((total, u) => total + u.lessons.reduce((sum, lesson) => sum + lesson.audio.length, 0), 0)
  const videoCount = units.reduce((total, u) => total + u.videos.length, 0)

  function setTab(next: 'audio' | 'video') {
    const nextParams = new URLSearchParams(params)
    nextParams.set('tab', next)
    if (next === 'audio') nextParams.set('unit', String(unit.number))
    setParams(nextParams)
  }

  function setUnit(number: number) {
    const nextParams = new URLSearchParams(params)
    nextParams.set('tab', 'audio')
    nextParams.set('unit', String(number))
    setParams(nextParams)
  }

  return (
    <div>
      <PageHeader
        eyebrow="Library · Media"
        title="Audio & video"
        description="Every recording that comes with the B1+ Student’s Book: lesson audio, Vocabulary Bank and Mini Bank tracks, review audio, unit vlogs and BBC videos."
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap gap-2">
          <Pill tone="brand">
            <IconEar size={11} /> {audioCount} audio tracks
          </Pill>
          <Pill tone="warm">
            <IconVideo size={11} /> {videoCount} videos
          </Pill>
          <Link to="/scripts" className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700">
            Open scripts
          </Link>
        </div>
      </PageHeader>

      <div className="mb-5 flex gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
        <button
          type="button"
          onClick={() => setTab('audio')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
            tab === 'audio' ? 'bg-brand-600 text-white shadow-sm' : 'text-[var(--ink-soft)] hover:text-brand-700'
          }`}
        >
          <IconEar size={15} /> Audio library
        </button>
        <button
          type="button"
          onClick={() => setTab('video')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
            tab === 'video' ? 'bg-warm-600 text-white shadow-sm' : 'text-[var(--ink-soft)] hover:text-warm-700'
          }`}
        >
          <IconVideo size={15} /> Video library
        </button>
      </div>

      {tab === 'audio' ? (
        <>
          <div className="mb-4 flex gap-1.5 overflow-x-auto pb-1">
            {units.map((u) => {
              const count = u.lessons.reduce((total, lesson) => total + lesson.audio.length, 0)
              return (
                <button
                  key={u.number}
                  type="button"
                  onClick={() => setUnit(u.number)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                    selectedUnit === u.number
                      ? 'bg-brand-600 text-white'
                      : 'bg-[var(--surface)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700'
                  }`}
                >
                  Unit {u.number} · {count}
                </button>
              )
            })}
          </div>

          <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-[var(--line)] pb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
                  Unit {unit.number} · {unit.title}
                </p>
                <h2 className="mt-0.5 font-display text-xl text-[var(--ink)]">Listen to this unit</h2>
              </div>
              <Link to={`/unit/${unit.number}`} className="text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300">
                Open unit →
              </Link>
            </div>

            <div className="space-y-5">
              {unit.lessons.map((lesson) => (
                <div key={lesson.id}>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <Link to={`/unit/${unit.number}/lesson/${lesson.id}`} className="text-xs font-bold text-[var(--ink)] hover:text-brand-700">
                      <span className="mr-1.5 text-brand-600">{lesson.code}</span>
                      {lesson.title}
                    </Link>
                    <span className="text-[10px] text-[var(--ink-faint)]">{lesson.audio.length} track{lesson.audio.length === 1 ? '' : 's'}</span>
                  </div>
                  <AudioList tracks={lesson.audio} />
                </div>
              ))}
            </div>
          </section>

          <p className="mt-4 text-center text-[10px] text-[var(--ink-faint)]">
            Audio tracks are the book’s MP3 files. Use the player’s speed control for slower listening.
          </p>
        </>
      ) : (
        <section>
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-xs text-[var(--ink-faint)]">Click a video card to load and play it.</p>
            <Link to="/scripts" className="inline-flex items-center gap-1 text-xs font-semibold text-warm-700 hover:underline dark:text-warm-300">
              <IconSearch size={12} /> Video scripts
            </Link>
          </div>
          <div className="space-y-6">
            {units.map((u) => (
              <div key={u.number}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-warm-100 text-[10px] font-bold text-warm-800 dark:bg-warm-950/60 dark:text-warm-200">
                    {u.number}
                  </span>
                  <h2 className="text-sm font-bold text-[var(--ink)]">
                    Unit {u.number} · {u.title}
                  </h2>
                  <Link to={`/unit/${u.number}`} className="ml-auto text-[10px] font-semibold text-[var(--ink-faint)] hover:text-brand-600">
                    Unit page →
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {u.videos.map((video) => (
                    <VideoCard key={video.file} video={video} unitNumber={u.number} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
