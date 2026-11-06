import { Link } from 'react-router-dom'
import { BOOK, units, flattenLessons } from '../content/book'
import { vocabGroups } from '../content/vocabulary'
import { grammarRefs } from '../content/grammar'
import { useProgress } from '../lib/progress'
import { pageImage } from '../lib/assets'
import Reveal from '../components/Reveal'
import AnimatedBar from '../components/AnimatedBar'
import LineMap from '../components/LineMap'
import {
  IconArrowUpRight,
  IconBook,
  IconCheck,
  IconChevronRight,
  IconEar,
  IconLayers,
  IconPlay,
  IconSpark,
  IconTarget,
  IconVideo,
} from '../components/Icons'

export default function HomePage() {
  const { progress, isComplete, completedCount } = useProgress()
  const flat = flattenLessons()
  const percent = Math.round((completedCount / flat.length) * 100)
  const last = progress.last
  const lastLesson = last ? flat.find((x) => String(x.unit.number) === last.unit && x.lesson.id === last.lesson) : undefined
  const continueTo = lastLesson ? `/unit/${lastLesson.unit.number}/lesson/${lastLesson.lesson.id}` : '/unit/1/lesson/1a'
  const continueLabel = lastLesson ? `Continue ${lastLesson.lesson.code}` : 'Start with 1A'

  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="relative grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.17em] text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
            <IconSpark size={13} />
            {BOOK.edition} · English course
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl">
            Speakout
            <span className="ml-2 inline-block rounded-2xl bg-accent-600 px-3 py-1 align-middle text-2xl font-sans font-black tracking-tight text-white shadow-lg shadow-accent-600/25 sm:text-3xl">
              B1+
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-soft)]">
            The complete {BOOK.subtitle}, page by page. Every lesson, audio track and BBC video from the book, with the full
            Grammar and Vocabulary Banks in one calm place to study.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to={continueTo}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <IconPlay size={16} />
              {continueLabel}
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-brand-400 hover:text-brand-700"
            >
              Browse contents
              <IconChevronRight size={15} />
            </Link>
          </div>

          <dl className="mt-7 grid max-w-lg grid-cols-4 gap-2 border-t border-[var(--line)] pt-4">
            {[
              ['8', 'units'],
              ['40', 'lessons'],
              ['81', 'audio'],
              ['16', 'videos'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-brand-700 dark:text-brand-300">{value}</dt>
                <dd className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-faint)]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-brand-200/60 via-accent-100/50 to-warm-100/60 blur-3xl dark:from-brand-800/30 dark:via-accent-900/20 dark:to-warm-900/20" />
          <Link
            to="/book"
            className="book-cover book-cover-sheen block rotate-2 overflow-hidden rounded-lg border border-[var(--line)] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.55)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
            aria-label="Open the book contents"
          >
            <img
              src={pageImage(1)}
              alt="Speakout B1+ Student's Book cover"
              className="aspect-[1/1.414] w-full object-cover"
            />
          </Link>
          <div className="absolute -left-5 bottom-16 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2 shadow-xl backdrop-blur sm:block">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
              <IconEar size={12} /> Listen & watch
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[var(--ink)]">All book media included</p>
          </div>
          <div className="absolute -right-4 top-10 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2 shadow-xl backdrop-blur sm:block">
            <p className="text-[10px] font-bold uppercase tracking-wide text-warm-600">Your progress</p>
            <div className="mt-1 flex items-center gap-2">
              <AnimatedBar value={percent} className="w-16" tone="warm" />
              <span className="text-xs font-bold tabular-nums text-[var(--ink)]">{percent}%</span>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-sm sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              <IconTarget size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--ink)]">
                {completedCount === 0 ? 'Your course starts here' : `${completedCount} of ${flat.length} lessons complete`}
              </p>
              <p className="text-xs text-[var(--ink-faint)]">
                {completedCount === 0
                  ? 'Mark a lesson complete at the bottom of its page.'
                  : percent === 100
                    ? 'You have completed the whole book. Excellent work!'
                    : 'Keep going — every lesson builds on the last.'}
              </p>
            </div>
          </div>
          <Link
            to={continueTo}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-[var(--line)] transition hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-950/40"
          >
            {continueLabel} <IconArrowUpRight size={13} />
          </Link>
        </div>
        <AnimatedBar value={percent} className="mt-4 h-2.5" label="Course progress" />
      </Reveal>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">The course</p>
            <h2 className="mt-1 font-display text-2xl text-[var(--ink)] sm:text-3xl">Eight units, one journey</h2>
          </div>
          <Link to="/book" className="text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300">
            See full contents →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {units.map((unit, index) => {
            const done = unit.lessons.filter((lesson) => isComplete(unit.number, lesson.id)).length
            const unitPercent = Math.round((done / unit.lessons.length) * 100)
            return (
              <Reveal key={unit.id} delay={index * 35}>
                <Link
                  to={`/unit/${unit.number}`}
                  className="group flex h-full gap-3.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg dark:hover:border-brand-800"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-xl text-white shadow-sm transition-transform group-hover:-rotate-3">
                    {unit.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg leading-tight text-[var(--ink)]">{unit.title}</h3>
                      <IconChevronRight
                        size={16}
                        className="mt-1 shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5 group-hover:text-brand-600"
                      />
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-[11px] italic text-[var(--ink-faint)]">“{unit.question}”</p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <AnimatedBar value={unitPercent} className="h-1.5" />
                      <span className="shrink-0 text-[10px] tabular-nums text-[var(--ink-faint)]">
                        {done}/{unit.lessons.length}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <LineMap />

      <section className="grid gap-3 sm:grid-cols-3">
        {[
          {
            to: '/bank/grammar',
            icon: <IconTarget size={19} />,
            title: 'Grammar Bank',
            text: `${grammarRefs.length} reference lessons with examples and page images.`,
            tone: 'bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300',
          },
          {
            to: '/bank/vocabulary',
            icon: <IconBook size={19} />,
            title: 'Vocabulary Bank',
            text: `${vocabGroups.length} word groups — materials, films, money, idioms and more.`,
            tone: 'bg-accent-100 text-accent-700 dark:bg-accent-950 dark:text-accent-300',
          },
          {
            to: '/media',
            icon: <IconVideo size={19} />,
            title: 'Audio & video',
            text: '81 tracks and 16 BBC videos, organised by unit and lesson.',
            tone: 'bg-warm-100 text-warm-700 dark:bg-warm-950/60 dark:text-warm-300',
          },
        ].map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:hover:border-brand-800"
          >
            <span className={`grid h-9 w-9 place-items-center rounded-lg ${card.tone}`}>{card.icon}</span>
            <h3 className="mt-2.5 flex items-center gap-1 text-sm font-bold text-[var(--ink)]">
              {card.title}
              <IconArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" />
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--ink-faint)]">{card.text}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-[var(--line)] bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-lg sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-lg">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-200">
              <IconCheck size={13} /> Everything in one place
            </p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl">Read the page. Play the audio. Do the practice.</h2>
            <p className="mt-1.5 text-sm text-brand-100/90">
              Every lesson follows the same rhythm so you always know what to do next.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/review"
              className="rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-800 transition hover:bg-brand-50"
            >
              Review & practice
            </Link>
            <Link
              to="/scripts"
              className="rounded-full border border-white/40 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
            >
              Audio scripts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
