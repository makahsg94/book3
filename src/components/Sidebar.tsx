import { useMatch, NavLink } from 'react-router-dom'
import { BOOK, units } from '../content/book'
import { useProgress } from '../lib/progress'
import SearchBox from './SearchBox'
import AnimatedBar from './AnimatedBar'
import { IconBook, IconCheck, IconLayers, IconTarget, IconSearch, IconImage } from './Icons'

type Status = 'done' | 'started' | 'todo'

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const progress = useProgress()
  const reviewActive = useMatch('/review') !== null

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
          <NavLink to="/" onClick={onClose} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">
              <IconBook size={19} />
            </span>
            <span>
              <span className="block font-display text-lg leading-none text-[var(--ink)]">Speakout</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                B1+ · {BOOK.edition}
              </span>
            </span>
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)]"
            aria-label="Close contents"
          >
            <IconSearch size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <div className="mb-4 px-1">
            <SearchBox onNavigate={onClose} />
          </div>

          <nav className="px-2">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Contents of the book
            </p>

            <div className="mb-5">
              <NavLink
                to="/review"
                onClick={onClose}
                className={`tactile flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors ${
                  reviewActive
                    ? 'border-brand-500 bg-brand-600 text-white'
                    : 'border-warm-200 bg-gradient-to-r from-warm-50 to-brand-50 text-brand-800 hover:shadow-sm dark:border-warm-900 dark:from-warm-950/50 dark:to-brand-950/50 dark:text-brand-200'
                }`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
                  <IconTarget size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold leading-tight">Comprehensive review</span>
                  <span className="block text-[11px] leading-tight text-[var(--ink-faint)]" dir="rtl" lang="ar">
                    المراجعة الشاملة
                  </span>
                </span>
              </NavLink>
            </div>

            <div className="space-y-5">
              {units.map((unit) => (
                <div key={unit.id}>
                  <NavLink
                    to={`/unit/${unit.number}`}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-2 transition-colors ${
                        isActive ? 'text-brand-700 dark:text-brand-300' : 'hover:text-brand-700 dark:hover:text-brand-300'
                      }`
                    }
                  >
                    <span className="font-display text-lg font-bold leading-none tracking-tight">
                      {unit.number}
                    </span>
                    <span className="min-w-0 truncate text-[13px] font-semibold">
                      {unit.title}
                    </span>
                    <span className="toc-dots" aria-hidden />
                    <span className="toc-page">{unit.lessons[0]?.pages?.[0] ?? ''}</span>
                  </NavLink>

                  <div className="mt-1.5 space-y-0.5 border-l border-[var(--line)] pl-3">
                    {unit.lessons.map((lesson) => {
                      const status: Status = progress.isComplete(unit.number, lesson.id)
                        ? 'done'
                        : progress.progress.visits[`${unit.number}/${lesson.id}`]
                          ? 'started'
                          : 'todo'
                      return (
                        <NavLink
                          key={lesson.id}
                          to={`/unit/${unit.number}/lesson/${lesson.id}`}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors ${
                              isActive
                                ? 'bg-[var(--line)] text-[var(--ink)]'
                                : status === 'todo'
                                  ? 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                                  : 'text-[var(--ink)]'
                            }`
                          }
                        >
                          <span className="w-3 shrink-0 text-center text-[10px] leading-none">
                            {status === 'done' ? (
                              <IconCheck size={10} className="text-brand-600" />
                            ) : status === 'started' ? (
                              <span className="text-accent-600">●</span>
                            ) : (
                              <span className="text-[var(--ink-faint)]">○</span>
                            )}
                          </span>
                          <span className="min-w-0 truncate">
                            {lesson.code !== 'Review' ? `${lesson.code} ` : ''}
                            {lesson.title}
                          </span>
                          <span className="toc-dots" aria-hidden />
                          <span className="toc-page shrink-0">{lesson.pages[0]}</span>
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <NavLink
                to="/book"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-baseline gap-2 transition-colors ${
                    isActive ? 'text-brand-700 dark:text-brand-300' : 'hover:text-brand-700 dark:hover:text-brand-300'
                  }`
                }
              >
                <span className="font-display text-lg font-bold leading-none tracking-tight">A</span>
                <span className="truncate text-[13px] font-semibold">Reference banks</span>
                <span className="toc-dots" aria-hidden />
                <span className="toc-page">back</span>
              </NavLink>
              <div className="mt-1.5 space-y-0.5 border-l border-[var(--line)] pl-3">
                <NavLink
                  to="/bank/grammar"
                  onClick={onClose}
                  className="toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors text-[var(--ink-soft)] hover:text-[var(--ink)]"
                >
                  <span className="w-3 shrink-0 text-[10px] leading-none text-[var(--ink-faint)]">▲</span>
                  <span className="min-w-0 truncate">Grammar Bank</span>
                  <span className="toc-dots" aria-hidden />
                  <span className="toc-page shrink-0">28</span>
                </NavLink>
                <NavLink
                  to="/bank/vocabulary"
                  onClick={onClose}
                  className="toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors text-[var(--ink-soft)] hover:text-[var(--ink)]"
                >
                  <span className="w-3 shrink-0 text-[10px] leading-none text-[var(--ink-faint)]">▲</span>
                  <span className="min-w-0 truncate">Vocabulary Bank</span>
                  <span className="toc-dots" aria-hidden />
                  <span className="toc-page shrink-0">132</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-t border-[var(--line)] px-4 py-3">
          <div className="mb-1.5 flex items-center justify-between text-[10px] text-[var(--ink-faint)]">
            <span>Your progress</span>
            <span>{Math.round((progress.completedCount / 40) * 100)}%</span>
          </div>
          <AnimatedBar value={(progress.completedCount / 40) * 100} label="Course progress" />
        </div>
      </aside>
    </>
  )
}
