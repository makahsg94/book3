import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { MiniPlayer } from './AudioPlayer'
import { BOOK } from '../content/book'
import { IconBook, IconTarget, IconVideo } from './Icons'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
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
      <ScrollToTop />
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
