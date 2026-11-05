import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BOOK, units } from '../content/book'
import { vocabGroups } from '../content/vocabulary'
import { useProgress } from '../lib/progress'
import SearchBox from './SearchBox'
import AnimatedBar from './AnimatedBar'
import {
  IconBook,
  IconClose,
  IconHome,
  IconImage,
  IconLayers,
  IconList,
  IconSearch,
  IconTarget,
  IconVideo,
} from './Icons'

const mainLinks = [
  { to: '/', label: 'Home', icon: IconHome },
  { to: '/book', label: 'Full contents', icon: IconList },
  { to: '/review', label: 'Review & practice', icon: IconTarget },
  { to: '/media', label: 'Audio & video', icon: IconVideo },
]

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { completedCount } = useProgress()

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(88vw,380px)] flex-col border-r border-[var(--line)] bg-[var(--bg)] shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Book contents"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">
              <IconBook size={19} />
            </span>
            <span>
              <span className="block font-display text-lg leading-none text-[var(--ink)]">Speakout</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                B1+ · {BOOK.edition}
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)]"
            aria-label="Close contents"
          >
            <IconClose size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <div className="mb-4 px-1">
            <SearchBox onNavigate={onClose} />
          </div>

          <nav className="space-y-0.5" aria-label="Main">
            {mainLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]'
                  }`
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 flex items-center justify-between px-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">Units</h2>
            <span className="text-[10px] text-[var(--ink-faint)]">{completedCount}/40 done</span>
          </div>
          <div className="mt-1.5 space-y-1">
            {units.map((unit) => (
              <details key={unit.id} className="group rounded-lg">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface)] [&::-webkit-details-marker]:hidden">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand-100 text-[10px] font-bold text-brand-800 group-open:bg-brand-600 group-open:text-white dark:bg-brand-950 dark:text-brand-300">
                    {unit.number}
                  </span>
                  <span className="flex-1 truncate">{unit.title}</span>
                  <span className="text-[10px] text-[var(--ink-faint)]">{unit.lessons.length}</span>
                </summary>
                <div className="ml-3.5 border-l border-[var(--line)] pl-2 pt-0.5 pb-1">
                  <Link
                    to={`/unit/${unit.number}`}
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-950/50"
                  >
                    <IconLayers size={13} />
                    Unit overview
                  </Link>
                  {unit.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/unit/${unit.number}/lesson/${lesson.id}`}
                      onClick={onClose}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
                    >
                      <span className="w-6 shrink-0 font-bold text-brand-600 dark:text-brand-300">{lesson.code}</span>
                      <span className="truncate">{lesson.title}</span>
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-5 border-t border-[var(--line)] pt-4">
            <h2 className="px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">Reference</h2>
            <div className="mt-1.5 space-y-0.5">
              <Link
                to="/bank/grammar"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <IconTarget size={15} />
                Grammar Bank
              </Link>
              <Link
                to="/bank/vocabulary"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <IconBook size={15} />
                Vocabulary Bank
              </Link>
              <Link
                to="/scripts"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <IconSearch size={15} />
                Audio & video scripts
              </Link>
              <Link
                to="/media"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <IconImage size={15} />
                Media library
              </Link>
            </div>
          </div>

          <p className="mt-5 px-2 text-[10px] text-[var(--ink-faint)]">
            {vocabGroups.length} vocabulary groups · {units.length} units · 40 lessons
          </p>
        </div>

        <div className="border-t border-[var(--line)] px-4 py-3">
          <div className="mb-1.5 flex items-center justify-between text-[10px] text-[var(--ink-faint)]">
            <span>Your progress</span>
            <span>{Math.round((completedCount / 40) * 100)}%</span>
          </div>
          <AnimatedBar value={(completedCount / 40) * 100} label="Course progress" />
        </div>
      </aside>
    </>
  )
}
