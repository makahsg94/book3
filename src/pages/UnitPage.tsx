import { Link, useParams } from 'react-router-dom'
import { getUnit } from '../content/book'
import { useProgress } from '../lib/progress'
import PageViewer from '../components/PageViewer'
import PageText from '../components/PageText'
import LessonCard from '../components/LessonCard'
import { PageHeader } from '../components/PageHeader'
import AnimatedBar from '../components/AnimatedBar'
import { VideoList } from '../components/VideoCard'
import {
  IconArrowUpRight,
  IconCheck,
  IconEar,
  IconLayers,
  IconPlay,
  IconTarget,
  IconVideo,
} from '../components/Icons'

export default function UnitPage() {
  const { unitId = '' } = useParams()
  const unit = getUnit(unitId)
  const { isComplete } = useProgress()

  if (!unit) {
    return (
      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
        <h1 className="font-display text-2xl">Unit not found</h1>
        <Link to="/book" className="mt-3 inline-block text-sm font-semibold text-brand-600">
          Back to contents
        </Link>
      </div>
    )
  }

  const done = unit.lessons.filter((lesson) => isComplete(unit.number, lesson.id)).length
  const percent = Math.round((done / unit.lessons.length) * 100)
  const audioCount = unit.lessons.reduce((total, lesson) => total + lesson.audio.length, 0)
  const review = unit.lessons.find((lesson) => lesson.quiz)
  const first = unit.lessons[0]
  const printedPages = unit.pdfPages.map((page) => page + 1)
  const openerCount = first.pages[0] - unit.pages[0]

  return (
    <div>
      <PageHeader
        eyebrow={`Unit ${unit.number} · ${unit.phrase}`}
        title={
          <span>
            <span className="text-brand-600 dark:text-brand-300">Unit {unit.number}</span> · {unit.title}
          </span>
        }
        description={unit.intro}
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200">
            pp. {unit.pages[0]}–{unit.pages[1]}
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
            {unit.lessons.length} lessons
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
            <IconEar size={12} /> {audioCount} tracks
          </span>
          {unit.videos.length > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
              <IconVideo size={12} /> {unit.videos.length} videos
            </span>
          )}
        </div>
      </PageHeader>

      <section className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <PageViewer pages={[unit.overviewPdf]} printedPages={[unit.pages[0]]} title={`Unit ${unit.number} opener`} compact />
          <p className="mt-2 text-center text-[10px] text-[var(--ink-faint)]">
            Unit opener · printed page {unit.pages[0]}
          </p>
        </div>
        <div>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
              Lead-in question
            </p>
            <p className="mt-1.5 font-serif text-xl italic leading-snug text-[var(--ink)]">“{unit.question}”</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to={`/unit/${unit.number}/lesson/${first.id}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700"
              >
                <IconPlay size={13} />
                Start {first.code}
              </Link>
              <Link
                to="/media"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700"
              >
                <IconEar size={13} />
                Unit audio
              </Link>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-sm font-bold">
                <IconCheck size={16} className="text-brand-600" />
                Learning objectives
              </h2>
              <span className="text-[10px] font-semibold text-[var(--ink-faint)]">{done}/{unit.lessons.length} lessons</span>
            </div>
            <AnimatedBar value={percent} className="mt-2.5" label={`Unit ${unit.number} progress`} />
            <ul className="mt-3 space-y-2">
              {unit.objectives.map((objective, index) => (
                <li key={objective} className="flex gap-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-300">
                    {index + 1}
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex items-end justify-between gap-2">
          <div>
            <h2 className="flex items-center gap-2 text-base font-bold">
              <IconLayers size={18} className="text-brand-600" />
              Lessons in this unit
            </h2>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">Tap a lesson to read the pages, listen and practise.</p>
          </div>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {unit.lessons.map((lesson) => (
            <LessonCard key={lesson.id} unit={unit} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <IconLayers size={18} className="text-brand-600" />
            All pages in Unit {unit.number}
          </h2>
          <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
            The complete unit, including the {openerCount === 1 ? 'opener page' : `${openerCount} opener pages`} and every
            lesson page — pp. {unit.pages[0]}–{unit.pages[1]}.
          </p>
        </div>
        <PageViewer pages={unit.pdfPages} printedPages={printedPages} title={`Unit ${unit.number} — ${unit.title}`} />
        <PageText pages={unit.pdfPages} printedPages={printedPages} />
      </section>

      {unit.videos.length > 0 && (
        <section className="mt-8">
          <div className="mb-3">
            <h2 className="flex items-center gap-2 text-base font-bold">
              <IconVideo size={18} className="text-warm-600" />
              Watch
            </h2>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">The unit vlog and the BBC video for this unit.</p>
          </div>
          <VideoList videos={unit.videos} unitNumber={unit.number} />
        </section>
      )}

      {review?.quiz && (
        <section className="mt-8 overflow-hidden rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-[var(--surface)] p-5 dark:border-accent-900 dark:from-accent-950/40">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-600 text-white">
                <IconTarget size={19} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-[var(--ink)]">Ready to check your progress?</h2>
                <p className="mt-0.5 max-w-lg text-xs leading-relaxed text-[var(--ink-soft)]">
                  The Unit {unit.number} review has {review.quiz.questions.length} questions on the grammar and vocabulary from
                  this unit.
                </p>
              </div>
            </div>
            <Link
              to={`/unit/${unit.number}/lesson/${review.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-700"
            >
              Open review <IconArrowUpRight size={13} />
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
