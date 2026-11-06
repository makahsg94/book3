import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { MiniPlayer } from './AudioPlayer'
import { BOOK } from '../content/book'
import { IconBook, IconTarget, IconVideo } from './Icons'

const SCROLL_PREFIX = 'speakout-b1plus.scroll:'

function scrollKey(pathname: string) {
  return `${SCROLL_PREFIX}${pathname}`
}

function readScroll(pathname: string) {
  try {
    const value = Number(sessionStorage.getItem(scrollKey(pathname)))
    return Number.isFinite(value) && value > 0 ? value : 0
  } catch {
    return 0
  }
}

function storeScroll(pathname: string, value: number) {
  try {
    sessionStorage.setItem(scrollKey(pathname), String(value))
  } catch {
    /* storage unavailable */
  }
}

/**
 * Keeps the reader's place. Tablet browsers often discard a background tab and
 * reload it when the reader comes back, which used to drop them at the top of
 * the lesson. Save the scroll offset per page (including when the tab becomes
 * hidden) and restore it after such a reload, while still starting at the top
 * when the reader deliberately opens a different page.
 */
function ScrollMemory() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  // Take over scroll restoration so the browser does not fight us on reload.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  // Remember where the reader stopped, per page, while they scroll. Writes are
  // throttled (but never rely on animation frames, which background tabs
  // throttle) so the exact offset is on disk before a tablet freezes the tab.
  useEffect(() => {
    let lastWrite = 0
    let timer = 0
    const save = () => {
      timer = 0
      lastWrite = performance.now()
      storeScroll(pathname, window.scrollY)
    }
    const onScroll = () => {
      const wait = 120 - (performance.now() - lastWrite)
      if (wait <= 0) save()
      else if (!timer) timer = window.setTimeout(save, wait)
    }
    const flush = () => {
      if (timer) {
        window.clearTimeout(timer)
        timer = 0
      }
      storeScroll(pathname, window.scrollY)
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      if (timer) window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [pathname])

  // Restore after a reload / tab restore, reset on real navigation.
  useEffect(() => {
    const saved = navigationType === 'POP' ? readScroll(pathname) : 0
    if (saved <= 0) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    let frame = 0
    let attempts = 0
    let cancelled = false
    const cancel = () => {
      cancelled = true
    }
    const restore = () => {
      if (cancelled) return
      window.scrollTo({ top: saved, behavior: 'instant' as ScrollBehavior })
      // Images and fonts can finish loading after mount and change the page
      // height, so keep correcting while the document is still settling.
      if (attempts < 30 && Math.abs(window.scrollY - saved) > 2) {
        attempts += 1
        frame = requestAnimationFrame(restore)
      }
    }

    restore()
    const timers = [window.setTimeout(restore, 200), window.setTimeout(restore, 700)]
    const onLoad = () => restore()
    window.addEventListener('load', onLoad, { once: true })
    // If the reader starts scrolling right away, stop pulling them back.
    window.addEventListener('wheel', cancel, { once: true, passive: true })
    window.addEventListener('touchstart', cancel, { once: true, passive: true })
    window.addEventListener('keydown', cancel, { once: true })

    return () => {
      cancelled = true
      if (frame) cancelAnimationFrame(frame)
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('load', onLoad)
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', cancel)
    }
  }, [pathname, navigationType])

  return null
}

function ScrollProgress() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setValue(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[35] h-0.5 bg-transparent" aria-hidden="true">
      <div className="h-full bg-brand-500 transition-[width] duration-150" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function Layout() {
  const [contentsOpen, setContentsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollMemory />
      <ScrollProgress />
      <Header onContents={() => setContentsOpen(true)} />
      <Sidebar open={contentsOpen} onClose={() => setContentsOpen(false)} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-28 pt-6 sm:px-6 sm:pt-8">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-[var(--line)] pb-24">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-8 sm:grid-cols-[1fr_auto] sm:px-6">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
                <IconBook size={16} />
              </span>
              <span className="font-display text-lg text-[var(--ink)]">Speakout {BOOK.level}</span>
            </Link>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-[var(--ink-faint)]">
              {BOOK.edition} {BOOK.subtitle}. All lesson pages, audio, video, grammar notes and vocabulary are taken from the
              B1+ Student’s Book. The page image is authoritative wherever a transcription is shown.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[var(--ink-soft)]" aria-label="Footer">
            <Link className="hover:text-brand-600" to="/book">
              Contents
            </Link>
            <Link className="inline-flex items-center gap-1 hover:text-brand-600" to="/bank/grammar">
              <IconTarget size={13} /> Grammar
            </Link>
            <Link className="inline-flex items-center gap-1 hover:text-brand-600" to="/bank/vocabulary">
              <IconBook size={13} /> Vocabulary
            </Link>
            <Link className="inline-flex items-center gap-1 hover:text-brand-600" to="/media">
              <IconVideo size={13} /> Media
            </Link>
          </nav>
        </div>
      </footer>

      <MiniPlayer />
    </div>
  )
}
