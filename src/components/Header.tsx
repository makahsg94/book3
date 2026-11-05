import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../lib/theme'
import { playSound, setSoundEnabled, soundEnabled } from '../lib/sounds'
import SearchBox from './SearchBox'
import {
  IconBook,
  IconMenu,
  IconMoon,
  IconSearch,
  IconSun,
  IconVolume,
  IconVolumeOff,
} from './Icons'

const nav = [
  { to: '/book', label: 'Book' },
  { to: '/bank/grammar', label: 'Grammar' },
  { to: '/bank/vocabulary', label: 'Vocabulary' },
  { to: '/media', label: 'Media' },
]

export default function Header({ onContents }: { onContents: () => void }) {
  const { theme, cycleTheme } = useTheme()
  const [soundOn, setSoundOn] = useState(() => soundEnabled())
  const location = useLocation()
  const navigate = useNavigate()
  const showSearchRow = !location.pathname.startsWith('/search')

  const themeLabel = theme === 'dark' ? 'Dark' : theme === 'reading' ? 'Reading' : 'Light'
  const ThemeIcon = theme === 'dark' ? IconMoon : theme === 'reading' ? IconBook : IconSun

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6">
        <button
          type="button"
          onClick={onContents}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
          aria-label="Open book contents"
        >
          <IconMenu size={20} />
        </button>

        <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label="Speakout B1+ home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-sm transition-transform group-hover:-rotate-3">
            <IconBook size={19} />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-[20px] tracking-tight text-[var(--ink)] sm:text-[22px]">
              Speakout
            </span>
            <span className="mt-0.5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
              B1+ <span className="h-0.5 w-0.5 rounded-full bg-current" /> 3rd edition
            </span>
          </span>
        </Link>

        <nav className="ml-3 hidden items-center gap-0.5 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-semibold transition ${
                  isActive ||
                  (item.to === '/bank/grammar' && location.pathname.startsWith('/bank/grammar')) ||
                  (item.to === '/bank/vocabulary' && location.pathname.startsWith('/bank/vocabulary'))
                    ? 'bg-brand-600 text-white'
                    : 'text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onClick={() => navigate('/search')}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)] md:hidden"
            aria-label="Search"
          >
            <IconSearch size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              playSound('tap')
              cycleTheme()
            }}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
            aria-label={`Theme: ${themeLabel}. Change theme`}
            title={`Theme: ${themeLabel}`}
          >
            <ThemeIcon size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              const next = !soundOn
              setSoundEnabled(next)
              setSoundOn(next)
              if (next) playSound('tap')
            }}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
            aria-label={soundOn ? 'Turn interface sounds off' : 'Turn interface sounds on'}
            title={soundOn ? 'Sounds on' : 'Sounds off'}
          >
            {soundOn ? <IconVolume size={18} /> : <IconVolumeOff size={18} />}
          </button>
        </div>
      </div>

      {showSearchRow && (
        <div className="mx-auto hidden max-w-4xl px-6 pb-2.5 sm:block">
          <SearchBox compact placeholder="Search the B1+ book — lesson, grammar point, word…" />
        </div>
      )}
    </header>
  )
}
