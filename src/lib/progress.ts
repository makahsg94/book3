import { useSyncExternalStore } from 'react'

export interface QuizResult {
  correct: number
  total: number
  at: number
}

export interface ProgressState {
  completed: Record<string, number>
  quizzes: Record<string, QuizResult>
  visits: Record<string, number>
  last?: { unit: string; lesson: string }
  startedAt: number
}

const KEY = 'speakout-b1plus.progress.v1'
const listeners = new Set<() => void>()

function emptyState(): ProgressState {
  return { completed: {}, quizzes: {}, visits: {}, startedAt: Date.now() }
}

function read(): ProgressState {
  if (typeof window === 'undefined') return emptyState()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyState()
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      completed: parsed.completed ?? {},
      quizzes: parsed.quizzes ?? {},
      visits: parsed.visits ?? {},
      last: parsed.last,
      startedAt: parsed.startedAt ?? Date.now(),
    }
  } catch {
    return emptyState()
  }
}

let state: ProgressState = read()

function commit(next: ProgressState) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* ignore unavailable storage */
  }
  listeners.forEach((l) => l())
}

export function lessonKey(unit: string | number, lesson: string) {
  return `${unit}/${lesson}`
}

export function isLessonComplete(unit: string | number, lesson: string) {
  return Boolean(state.completed[lessonKey(unit, lesson)])
}

export function visitLesson(unit: string | number, lesson: string) {
  const key = lessonKey(unit, lesson)
  commit({
    ...state,
    visits: { ...state.visits, [key]: (state.visits[key] ?? 0) + 1 },
    last: { unit: String(unit), lesson },
  })
}

export function completeLesson(unit: string | number, lesson: string) {
  const key = lessonKey(unit, lesson)
  if (state.completed[key]) return
  commit({
    ...state,
    completed: { ...state.completed, [key]: Date.now() },
    last: { unit: String(unit), lesson },
  })
}

export function uncompleteLesson(unit: string | number, lesson: string) {
  const key = lessonKey(unit, lesson)
  const completed = { ...state.completed }
  delete completed[key]
  commit({ ...state, completed })
}

export function toggleLesson(unit: string | number, lesson: string) {
  if (isLessonComplete(unit, lesson)) uncompleteLesson(unit, lesson)
  else completeLesson(unit, lesson)
}

export function recordQuiz(id: string, correct: number, total: number) {
  const previous = state.quizzes[id]
  if (previous && previous.correct >= correct) {
    commit({ ...state, quizzes: { ...state.quizzes, [id]: { ...previous, total } } })
    return
  }
  commit({ ...state, quizzes: { ...state.quizzes, [id]: { correct, total, at: Date.now() } } })
}

export function resetProgress() {
  commit(emptyState())
}

export function getProgress() {
  return state
}

export function useProgress() {
  const progress = useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
    () => state,
  )

  return {
    progress,
    get isComplete() {
      return (unit: string | number, lesson: string) => Boolean(progress.completed[lessonKey(unit, lesson)])
    },
    toggle: toggleLesson,
    complete: completeLesson,
    visit: visitLesson,
    recordQuiz,
    reset: resetProgress,
    completedCount: Object.keys(progress.completed).length,
  }
}
