import { Link } from 'react-router-dom'
import type { Lesson, Unit } from '../types'
import { useProgress } from '../lib/progress'
import { IconCheck, IconEar, IconVideo } from './Icons'

export default function LessonCard({ unit, lesson }: { unit: Unit; lesson: Lesson }) {
  const { isComplete } = useProgress()
  const done = isComplete(unit.number, lesson.id)

  return (
    <Link
      to={`/unit/${unit.number}/lesson/${lesson.id}`}
      className={`group flex gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        done
          ? 'border-brand-300 bg-brand-50/60 dark:border-brand-800 dark:bg-brand-950/30'
          : 'border-[var(--line)] bg-[var(--surface)] hover:border-brand-300 dark:hover:border-brand-800'
      }`}
    >
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-sm font-black tracking-tight ${
          done
            ? 'bg-brand-600 text-white'
            : 'bg-[var(--bg)] text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300'
        }`}
      >
        {done ? <IconCheck size={19} /> : lesson.code}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300">
            {lesson.title}
          </h3>
          <span className="shrink-0 text-[10px] text-[var(--ink-faint)]">p. {lesson.pages[0]}</span>
        </div>
        <p className="mt-1 line-clamp-1 text-[11px] text-[var(--ink-faint)]">
          {lesson.labels.grammar ?? lesson.labels.vocabulary ?? lesson.labels.skills}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-[var(--ink-faint)]">
          {lesson.audio.length > 0 && (
            <span className="inline-flex items-center gap-1">
              <IconEar size={12} /> {lesson.audio.length} audio
            </span>
          )}
          {lesson.videos.length > 0 && (
            <span className="inline-flex items-center gap-1">
              <IconVideo size={12} /> video
            </span>
          )}
          {lesson.grammar && <span className="rounded-full bg-[var(--bg)] px-1.5 py-0.5 ring-1 ring-[var(--line)]">Grammar</span>}
          {lesson.quiz && <span className="rounded-full bg-accent-100 px-1.5 py-0.5 text-accent-800 dark:bg-accent-950 dark:text-accent-200">Quiz</span>}
        </div>
      </div>
    </Link>
  )
}
