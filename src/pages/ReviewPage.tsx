import { useState } from 'react'
import { Link } from 'react-router-dom'
import { units, flattenLessons } from '../content/book'
import { useProgress } from '../lib/progress'
import { playSound } from '../lib/sounds'
import Quiz from '../components/Quiz'
import AnimatedBar from '../components/AnimatedBar'
import { PageHeader, Pill, SectionTitle } from '../components/PageHeader'
import {
  IconAward,
  IconCheck,
  IconChevronRight,
  IconTarget,
} from '../components/Icons'

export default function ReviewPage() {
  const [selected, setSelected] = useState(1)
  const { progress, isComplete, toggle, completedCount } = useProgress()
  const flat = flattenLessons()
  const percent = Math.round((completedCount / flat.length) * 100)
  const unit = units.find((u) => u.number === selected)!
  const review = unit.lessons.find((lesson) => lesson.quiz)
  const reviewDone = isComplete(unit.number, review?.id ?? '')
  const best = review?.quiz ? progress.quizzes[review.quiz.id] : undefined

  return (
    <div>
      <PageHeader
        eyebrow="Practice · Review"
        title="Review & practice"
        description="One short progress check for each unit, drawn from the grammar and vocabulary in that unit. Take a quiz after the review lesson, or come back any time to check what has stuck."
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="brand">{completedCount}/{flat.length} lessons complete</Pill>
          <Pill tone="accent">8 unit quizzes</Pill>
          <Pill>{flat.length ? percent : 0}% of the course</Pill>
        </div>
      </PageHeader>

      <section className="mb-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
            <IconAward size={21} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-sm font-bold">Course progress</p>
              <p className="text-xs tabular-nums text-[var(--ink-faint)]">{completedCount} / {flat.length}</p>
            </div>
            <AnimatedBar value={percent} className="mt-2" label="Course progress" />
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[210px_1fr]">
        <aside>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">Choose a unit</p>
          <div className="grid grid-cols-4 gap-1.5 lg:grid-cols-2">
            {units.map((u) => {
              const done = u.lessons.filter((lesson) => isComplete(u.number, lesson.id)).length
              return (
                <button
                  key={u.number}
                  type="button"
                  onClick={() => {
                    setSelected(u.number)
                    playSound('tap')
                  }}
                  className={`rounded-lg border px-2 py-2 text-left transition ${
                    selected === u.number
                      ? 'border-brand-500 bg-brand-600 text-white shadow-sm'
                      : 'border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] hover:border-brand-300'
                  }`}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wide ${selected === u.number ? 'text-white/70' : 'text-[var(--ink-faint)]'}`}>
                    Unit {u.number}
                  </span>
                  <span className="mt-0.5 block truncate text-xs font-bold">{u.title}</span>
                  <span className={`mt-0.5 block text-[9px] ${selected === u.number ? 'text-white/80' : 'text-[var(--ink-faint)]'}`}>
                    {done}/{u.lessons.length} done
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-4 rounded-xl border border-[var(--line)] bg-[var(--bg)]/40 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--ink-faint)]">Review lessons</p>
            <div className="mt-1.5 space-y-0.5">
              {unit.lessons
                .filter((lesson) => lesson.quiz)
                .map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/unit/${unit.number}/lesson/${lesson.id}`}
                    className="flex items-center gap-2 rounded-md px-1.5 py-1 text-xs text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-brand-700"
                  >
                    <IconCheck size={12} />
                    {lesson.code} · {lesson.title}
                  </Link>
                ))}
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
                Unit {unit.number} · {unit.title}
              </p>
              <h2 className="mt-0.5 font-display text-2xl text-[var(--ink)]">Progress check</h2>
            </div>
            <div className="flex items-center gap-2">
              {reviewDone && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                  <IconCheck size={11} /> Review complete
                </span>
              )}
              {best && (
                <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
                  Best: {best.correct}/{best.total}
                </span>
              )}
            </div>
          </div>

          {review?.quiz ? (
            <Quiz
              key={review.quiz.id}
              id={review.quiz.id}
              title={review.quiz.title}
              questions={review.quiz.questions}
              onPass={() => {
                if (!reviewDone) {
                  toggle(unit.number, review.id)
                  playSound('correct')
                }
              }}
            />
          ) : (
            <p className="rounded-xl border border-dashed border-[var(--line-strong)] p-6 text-sm text-[var(--ink-faint)]">
              This unit has no quiz yet.
            </p>
          )}

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {unit.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/unit/${unit.number}/lesson/${lesson.id}`}
                className="group flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs transition hover:border-brand-300"
              >
                <span className="w-7 font-bold text-brand-600">{lesson.code}</span>
                <span className="min-w-0 flex-1 truncate text-[var(--ink-soft)]">{lesson.title}</span>
                {isComplete(unit.number, lesson.id) ? (
                  <IconCheck size={13} className="text-brand-600" />
                ) : (
                  <IconChevronRight size={13} className="text-[var(--ink-faint)] transition group-hover:translate-x-0.5" />
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8">
        <SectionTitle icon={<IconTarget size={18} className="text-brand-600" />} title="How the review works" />
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            ['1', 'Take the quiz', 'Five questions on the unit’s grammar and vocabulary.'],
            ['2', 'Read the feedback', 'Every answer has a short explanation linked to the lesson.'],
            ['3', 'Mark it complete', 'Passing the quiz completes the unit review lesson.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-300">
                {number}
              </span>
              <p className="mt-1.5 text-xs font-bold">{title}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
