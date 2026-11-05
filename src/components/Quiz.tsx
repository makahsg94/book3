import { useMemo, useState } from 'react'
import type { QuizQuestion } from '../types'
import { recordQuiz } from '../lib/progress'
import { playSound } from '../lib/sounds'
import { burstConfetti } from '../lib/confetti'
import { IconCheck, IconCross, IconRotate, IconSpark, IconTarget } from './Icons'

export default function Quiz({
  id,
  title,
  questions,
  onPass,
}: {
  id: string
  title: string
  questions: QuizQuestion[]
  onPass?: () => void
}) {
  const [selected, setSelected] = useState<(number | null)[]>(() => questions.map(() => null))
  const [checked, setChecked] = useState(false)
  const [attempt, setAttempt] = useState(1)

  const score = useMemo(
    () => selected.reduce<number>((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0),
    [selected, questions],
  )
  const allAnswered = selected.every((answer) => answer !== null)
  const passed = score >= Math.ceil(questions.length * 0.6)

  function check() {
    if (!allAnswered) return
    setChecked(true)
    recordQuiz(id, score, questions.length)
    if (score === questions.length) {
      playSound('levelup')
      burstConfetti()
    } else if (passed) {
      playSound('correct')
    } else {
      playSound('wrong')
    }
    if (passed) onPass?.()
  }

  function retry() {
    setSelected(questions.map(() => null))
    setChecked(false)
    setAttempt((a) => a + 1)
    playSound('tap')
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-gradient-to-r from-brand-50 to-transparent px-4 py-3 dark:from-brand-950/40 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
            <IconTarget size={17} />
          </span>
          <div>
            <h3 className="text-sm font-bold text-[var(--ink)]">{title}</h3>
            <p className="text-[11px] text-[var(--ink-faint)]">
              {questions.length} questions · attempt {attempt}
            </p>
          </div>
        </div>
        {checked && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              passed ? 'bg-brand-600 text-white' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
            }`}
          >
            {score}/{questions.length} {score === questions.length ? '· perfect!' : passed ? '· passed' : '· try again'}
          </span>
        )}
      </div>

      <div className="divide-y divide-[var(--line)]">
        {questions.map((question, qIndex) => {
          const chosen = selected[qIndex]
          return (
            <fieldset key={question.question} className="px-4 py-4 sm:px-5">
              <legend className="mb-3 flex gap-2 text-sm font-semibold text-[var(--ink)]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--bg)] text-[10px] font-bold text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300">
                  {qIndex + 1}
                </span>
                {question.question}
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {question.options.map((option, oIndex) => {
                  const isChosen = chosen === oIndex
                  const isCorrect = checked && oIndex === question.answer
                  const isWrong = checked && isChosen && oIndex !== question.answer
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() => {
                        setSelected((current) => current.map((value, index) => (index === qIndex ? oIndex : value)))
                        playSound('tap')
                      }}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                        isCorrect
                          ? 'border-brand-500 bg-brand-50 text-brand-900 dark:bg-brand-950/50 dark:text-brand-200'
                          : isWrong
                            ? 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200'
                            : isChosen
                              ? 'border-accent-500 bg-accent-50 text-accent-900 dark:bg-accent-950/40 dark:text-accent-200'
                              : 'border-[var(--line)] bg-[var(--bg)]/40 text-[var(--ink-soft)] hover:border-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-950/20'
                      } ${checked ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span>{option}</span>
                      {isCorrect && <IconCheck size={15} className="shrink-0" />}
                      {isWrong && <IconCross size={15} className="shrink-0" />}
                    </button>
                  )
                })}
              </div>
              {checked && (
                <p
                  className={`mt-2.5 flex gap-2 rounded-lg px-3 py-2 text-xs leading-relaxed ${
                    chosen === question.answer
                      ? 'bg-brand-50 text-brand-800 dark:bg-brand-950/40 dark:text-brand-200'
                      : 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200'
                  }`}
                >
                  <IconSpark size={14} className="mt-0.5 shrink-0" />
                  <span>{question.explanation}</span>
                </p>
              )}
            </fieldset>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] px-4 py-3.5 sm:px-5">
        <p className="text-xs text-[var(--ink-faint)]">
          {checked ? (passed ? 'Well done — review marked as complete.' : 'Read the explanations, then try again.') : 'Choose one answer for each question.'}
        </p>
        {checked ? (
          <button
            type="button"
            onClick={retry}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-700"
          >
            <IconRotate size={14} />
            Try again
          </button>
        ) : (
          <button
            type="button"
            onClick={check}
            disabled={!allAnswered}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconCheck size={14} />
            Check answers
          </button>
        )}
      </div>
    </div>
  )
}
