import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark' | 'reading'

const KEY = 'speakout-b1plus.theme'
const listeners = new Set<() => void>()

function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(KEY)
  if (saved === 'dark' || saved === 'reading' || saved === 'light') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

let theme: Theme = readTheme()

function apply(next: Theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', next === 'dark')
  root.classList.toggle('reading', next === 'reading')
  root.style.colorScheme = next === 'dark' ? 'dark' : 'light'
}

apply(theme)

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === KEY && (event.newValue === 'light' || event.newValue === 'dark' || event.newValue === 'reading')) {
      theme = event.newValue
      apply(theme)
      listeners.forEach((l) => l())
    }
  })
}

export function setTheme(next: Theme) {
  theme = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* ignore unavailable storage */
  }
  apply(next)
  listeners.forEach((l) => l())
}

export function cycleTheme() {
  const order: Theme[] = ['light', 'dark', 'reading']
  setTheme(order[(order.indexOf(theme) + 1) % order.length])
}

export function useTheme() {
  const value = useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => theme,
    () => 'light' as Theme,
  )
  return {
    theme: value,
    setTheme,
    cycleTheme,
    toggleDark: () => setTheme(value === 'dark' ? 'light' : 'dark'),
  }
}
