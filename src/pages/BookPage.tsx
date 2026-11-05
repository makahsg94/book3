import { Link } from 'react-router-dom'
import { BOOK, units } from '../content/book'
import { grammarRefs } from '../content/grammar'
import { vocabGroups } from '../content/vocabulary'
import { useProgress } from '../lib/progress'
import { PageHeader, SectionTitle } from '../components/PageHeader'
import {
  IconBook,
  IconChevronRight,
  IconList,
  IconTarget,
  IconVideo,
} from '../components/Icons'

export default function BookPage() {
  const { isComplete, completedCount } = useProgress()

  return (
    <div>
      <PageHeader
        eyebrow="Speakout B1+ · Student's Book"
        title="Contents"
        description={`The complete book, ${BOOK.edition}. Printed page numbers are shown for every lesson; each lesson page opens the original book pages, audio and practice.`}
      >
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200">
            {units.length} units
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
            40 lessons
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]">
            {completedCount} complete
          </span>
        </div>
      </PageHeader>

      <div className="book-page overflow-hidden p-1 sm:p-2">
        <div className="rounded-[3px] border border-[var(--line)] bg-[var(--surface)]">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3 sm:px-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">Book map</p>
              <p className="text-xs text-[var(--ink-faint)]">Unit opener · lessons · review</p>
            </div>
            <span className="text-xs tabular-nums text-[var(--ink-faint)]">pp. 6–102</span>
          </div>

          <div className="divide-y divide-[var(--line)]">
            {units.map((unit) => (
              <section key={unit.id} className="px-3 py-4 sm:px-5 sm:py-5">
                <div className="flex items-start gap-3">
                  <Link
                    to={`/unit/${unit.number}`}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-xl text-white shadow-sm transition hover:-rotate-3 hover:bg-brand-700"
                    aria-label={`Open Unit ${unit.number}`}
                  >
                    {unit.number}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <Link to={`/unit/${unit.number}`} className="font-display text-xl text-[var(--ink)] hover:text-brand-700">
                        {unit.title}
                      </Link>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        Unit {unit.number} · p. {unit.pages[0]}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs italic text-[var(--ink-soft)]">“{unit.question}”</p>
                  </div>
                </div>

                <div className="mt-3 divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-[var(--bg)]/35">
                  {unit.lessons.map((lesson) => {
                    const done = isComplete(unit.number, lesson.id)
                    return (
                      <Link
                        key={lesson.id}
                        to={`/unit/${unit.number}/lesson/${lesson.id}`}
                        className="toc-row group px-3 py-2.5 transition hover:bg-brand-50/60 dark:hover:bg-brand-950/30"
                      >
                        <span className="w-12 shrink-0 text-[11px] font-black text-brand-600 dark:text-brand-300">
                          {lesson.code}
                        </span>
                        <span className="min-w-0 shrink-0">
                          <span className={`block text-xs font-semibold ${done ? 'text-brand-700 dark:text-brand-300' : 'text-[var(--ink)]'}`}>
                            {lesson.title}
                          </span>
                          <span className="hidden text-[10px] text-[var(--ink-faint)] sm:block">
                            {lesson.labels.grammar ?? lesson.labels.vocabulary ?? lesson.labels.skills}
                          </span>
                        </span>
                        <span className="toc-dots" />
                        {done && <span className="text-[10px] font-semibold text-brand-600">done</span>}
                        <span className="toc-page tabular-nums">{lesson.pages[0]}</span>
                        <IconChevronRight
                          size={13}
                          className="shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5 group-hover:text-brand-600"
                        />
                      </Link>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-8">
        <SectionTitle icon={<IconList size={18} />} title="Reference banks" hint="Extra pages at the back of the book." />
        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            to="/bank/grammar"
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-brand-300 hover:shadow-md"
          >
            <IconTarget size={19} className="text-brand-600" />
            <h3 className="mt-2 text-sm font-bold">Grammar Bank</h3>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">{grammarRefs.length} lessons · pp. 104–131</p>
          </Link>
          <Link
            to="/bank/vocabulary"
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-accent-300 hover:shadow-md"
          >
            <IconBook size={19} className="text-accent-600" />
            <h3 className="mt-2 text-sm font-bold">Vocabulary Bank</h3>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">{vocabGroups.length} groups · pp. 132–137</p>
          </Link>
          <Link
            to="/media"
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-warm-300 hover:shadow-md"
          >
            <IconVideo size={19} className="text-warm-600" />
            <h3 className="mt-2 text-sm font-bold">Audio & video</h3>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">81 tracks · 16 BBC videos</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
