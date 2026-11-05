import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, getUnit, nextLesson, previousLesson } from '../content/book'
import { useProgress } from '../lib/progress'
import { playSound } from '../lib/sounds'
import { burstConfetti } from '../lib/confetti'
import PageViewer from '../components/PageViewer'
import { AudioList } from '../components/AudioPlayer'
import { VideoList } from '../components/VideoCard'
import Quiz from '../components/Quiz'
import { PageHeader, Pill, SectionTitle } from '../components/PageHeader'
import {
  IconArrowUpRight,
  IconBook,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconEar,
  IconHome,
  IconPen,
  IconSpark,
  IconTarget,
  IconVideo,
} from '../components/Icons'

function GrammarParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-book max-w-none text-sm leading-relaxed text-[var(--ink-soft)]">
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h3 key={index} className="mb-1.5 mt-4 flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300">
              <span className="h-3 w-0.5 rounded-full bg-brand-500" />
              {paragraph.slice(3)}
            </h3>
          )
        }
        if (paragraph.startsWith('• ')) {
          return (
            <p key={index} className="my-1 flex gap-2 pl-1">
              <span className="text-brand-500">•</span>
              <span>{paragraph.slice(2)}</span>
            </p>
          )
        }
        return (
          <p key={index} className="my-2">
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default function LessonPage() {
  const { unitId = '', lessonId = '' } = useParams()
  const unit = getUnit(unitId)
  const lesson = getLesson(unitId, lessonId)
  const { isComplete, toggle, visit, completedCount } = useProgress()

  useEffect(() => {
    if (unit && lesson) {
      visit(unit.number, lesson.id)
      document.title = `${lesson.code} ${lesson.title} · Speakout B1+`
    }
    return () => {
      document.title = 'Speakout B1+ · The Book'
    }
  }, [unit, lesson, visit])

  if (!unit || !lesson) {
    return (
      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
        <h1 className="font-display text-2xl">Lesson not found</h1>
        <Link to="/book" className="mt-3 inline-block text-sm font-semibold text-brand-600">
          Back to contents
        </Link>
      </div>
    )
  }

  const done = isComplete(unit.number, lesson.id)
  const prev = previousLesson(String(unit.number), lesson.id)
  const next = nextLesson(String(unit.number), lesson.id)
  const labels = [
    lesson.labels.skills && { label: lesson.labels.skills, tone: 'warm' as const },
    lesson.labels.grammar && { label: lesson.labels.grammar, tone: 'brand' as const },
    lesson.labels.vocabulary && { label: lesson.labels.vocabulary, tone: 'accent' as const },
    lesson.labels.pronunciation && { label: lesson.labels.pronunciation, tone: 'neutral' as const },
  ].filter(Boolean) as { label: string; tone: 'brand' | 'accent' | 'warm' | 'neutral' }[]

  return (
    <div>
      <PageHeader
        eyebrow={
          <span className="flex items-center gap-2">
            <Link to={`/unit/${unit.number}`} className="hover:underline">
              Unit {unit.number} · {unit.title}
            </Link>
            <span className="text-[var(--ink-faint)]">/</span>
            <span>{lesson.code}</span>
          </span>
        }
        title={lesson.title}
        description={`Student’s Book pages ${lesson.pages[0]}${lesson.pages[1] !== lesson.pages[0] ? `–${lesson.pages[1]}` : ''} · ${lesson.code}`}
        backTo={`/unit/${unit.number}`}
        backLabel={`Unit ${unit.number}`}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {labels.map((label) => (
            <Pill key={label.label} tone={label.tone}>
              {label.label}
            </Pill>
          ))}
        </div>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0 space-y-7">
          <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <SectionTitle icon={<IconTarget size={17} className="text-brand-600" />} title="In this lesson" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {lesson.objectives.map((objective) => (
                <li key={objective} className="flex gap-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    <IconCheck size={10} />
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle
              icon={<IconBook size={17} className="text-brand-600" />}
              title="The book pages"
              hint="Click any page to open the full-size image."
              action={<span className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--ink-faint)]">pp. {lesson.pages[0]}–{lesson.pages[1]}</span>}
            />
            <PageViewer pages={lesson.pdfPages} title={`${lesson.code} ${lesson.title}`} />
          </section>

          <section>
            <SectionTitle icon={<IconEar size={17} className="text-accent-600" />} title="Listen" hint={`${lesson.audio.length} audio track${lesson.audio.length === 1 ? '' : 's'} for ${lesson.code}.`} />
            <AudioList tracks={lesson.audio} />
          </section>

          {lesson.videos.length > 0 && (
            <section>
              <SectionTitle icon={<IconVideo size={17} className="text-warm-600" />} title="Watch" hint="The BBC video for this lesson." />
              <VideoList videos={lesson.videos} unitNumber={unit.number} />
            </section>
          )}

          {lesson.grammar && (
            <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
              <SectionTitle
                icon={<IconTarget size={17} className="text-brand-600" />}
                title="Grammar reference"
                hint={`${lesson.labels.grammar} · Grammar Bank page ${lesson.grammar.refPage}`}
                action={
                  <Link
                    to={`/bank/grammar/${lesson.code}`}
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700"
                  >
                    Open bank <IconArrowUpRight size={11} />
                  </Link>
                }
              />
              <GrammarParagraphs paragraphs={lesson.grammar.paragraphs} />
              <p className="mt-4 rounded-lg bg-[var(--bg)] px-3 py-2 text-[10px] leading-relaxed text-[var(--ink-faint)]">
                Transcribed from the Grammar Bank. The original page image is authoritative — open the bank to see the
                reference and practice together.
              </p>
            </section>
          )}

          {lesson.vocab && (
            <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
              <SectionTitle
                icon={<IconBook size={17} className="text-accent-600" />}
                title="Vocabulary"
                hint={`${lesson.vocab.title} · Vocabulary Bank page ${lesson.vocab.page}`}
                action={
                  <Link
                    to="/bank/vocabulary"
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-accent-400 hover:text-accent-700"
                  >
                    Full bank <IconArrowUpRight size={11} />
                  </Link>
                }
              />
              {lesson.vocab.intro && <p className="mb-2 text-xs italic text-[var(--ink-faint)]">{lesson.vocab.intro}</p>}
              <div className="grid gap-2 sm:grid-cols-2">
                {lesson.vocab.items.slice(0, 6).map((item) => (
                  <div key={item.word} className="rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 px-3 py-2">
                    <p className="text-xs font-bold text-[var(--ink)]">{item.word}</p>
                    {item.meaning && <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]">{item.meaning}</p>}
                  </div>
                ))}
              </div>
              {lesson.vocab.items.length > 6 && (
                <p className="mt-2 text-[10px] text-[var(--ink-faint)]">+ {lesson.vocab.items.length - 6} more in the Vocabulary Bank</p>
              )}
            </section>
          )}

          {lesson.quiz && (
            <section>
              <SectionTitle icon={<IconTarget size={17} className="text-accent-600" />} title="Practice" hint="Check your grammar and vocabulary from this unit." />
              <Quiz
                id={lesson.quiz.id}
                title={lesson.quiz.title}
                questions={lesson.quiz.questions}
                onPass={() => {
                  if (!done) {
                    toggle(unit.number, lesson.id)
                    playSound('correct')
                  }
                }}
              />
            </section>
          )}

          {!lesson.quiz && (
            <section className="rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--bg)]/35 p-4 text-center">
              <p className="text-sm font-semibold text-[var(--ink)]">Finished this lesson?</p>
              <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
                Mark it complete, then try the Unit {unit.number} review when you are ready.
              </p>
              <Link
                to={`/unit/${unit.number}/lesson/${unit.lessons[unit.lessons.length - 1].id}`}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300"
              >
                Go to Unit {unit.number} review <IconArrowUpRight size={12} />
              </Link>
            </section>
          )}
        </div>

        <aside className="space-y-3 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">Your progress</p>
              <span className="text-[10px] font-semibold text-brand-600 dark:text-brand-300">{completedCount}/40</span>
            </div>
            <p className="mt-1.5 text-sm font-bold text-[var(--ink)]">{done ? 'Lesson complete' : 'Not marked yet'}</p>
            <button
              type="button"
              onClick={() => {
                toggle(unit.number, lesson.id)
                playSound(done ? 'tap' : 'correct')
                if (!done) burstConfetti()
              }}
              className={`mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
                done
                  ? 'border border-brand-300 bg-brand-50 text-brand-800 hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-950/40 dark:text-brand-200'
                  : 'bg-brand-600 text-white hover:bg-brand-700'
              }`}
            >
              <IconCheck size={14} />
              {done ? 'Completed — undo' : 'Mark as complete'}
            </button>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">Lesson facts</p>
            <dl className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between gap-2">
                <dt className="text-[var(--ink-faint)]">Code</dt>
                <dd className="font-semibold text-[var(--ink)]">{lesson.code}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[var(--ink-faint)]">Book pages</dt>
                <dd className="font-semibold text-[var(--ink)]">
                  {lesson.pages[0]}
                  {lesson.pages[1] !== lesson.pages[0] ? `–${lesson.pages[1]}` : ''}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[var(--ink-faint)]">Audio</dt>
                <dd className="font-semibold text-[var(--ink)]">{lesson.audio.length}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[var(--ink-faint)]">Videos</dt>
                <dd className="font-semibold text-[var(--ink)]">{lesson.videos.length}</dd>
              </div>
            </dl>
          </div>

          {(prev || next) && (
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                <IconHome size={11} /> Move on
              </p>
              <div className="space-y-1">
                {prev && (
                  <Link
                    to={`/unit/${prev.unit.number}/lesson/${prev.lesson.id}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--ink-soft)] transition hover:bg-[var(--bg)] hover:text-brand-700"
                  >
                    <IconChevronLeft size={13} />
                    <span className="font-bold text-brand-600">{prev.lesson.code}</span>
                    <span className="truncate">{prev.lesson.title}</span>
                  </Link>
                )}
                {next && (
                  <Link
                    to={`/unit/${next.unit.number}/lesson/${next.lesson.id}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--ink-soft)] transition hover:bg-[var(--bg)] hover:text-brand-700"
                  >
                    <span className="ml-auto truncate">{next.lesson.title}</span>
                    <span className="font-bold text-brand-600">{next.lesson.code}</span>
                    <IconChevronRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-accent-200 bg-accent-50/60 p-4 dark:border-accent-900 dark:bg-accent-950/30">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:text-accent-300">
              <IconSpark size={12} /> Study tip
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-soft)]">
              Open the page image in full screen, then play the audio. Follow the exercise numbers in the book as you listen.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
        <div className="flex gap-2">
          {prev && (
            <Link
              to={`/unit/${prev.unit.number}/lesson/${prev.lesson.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-2 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700"
            >
              <IconChevronLeft size={14} /> {prev.lesson.code}
            </Link>
          )}
          {next && (
            <Link
              to={`/unit/${next.unit.number}/lesson/${next.lesson.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-brand-700"
            >
              {next.lesson.code} <IconChevronRight size={14} />
            </Link>
          )}
        </div>
        <Link to={`/unit/${unit.number}`} className="text-xs font-semibold text-[var(--ink-faint)] hover:text-brand-600">
          All Unit {unit.number} lessons
        </Link>
      </div>
    </div>
  )
}
