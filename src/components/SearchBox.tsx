import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSearch } from './Icons'

export default function SearchBox({
  initial = '',
  autoFocus = false,
  compact = false,
  placeholder = 'Search lessons, grammar, vocabulary…',
  onNavigate,
}: {
  initial?: string
  autoFocus?: boolean
  compact?: boolean
  placeholder?: string
  onNavigate?: () => void
}) {
  const [value, setValue] = useState(initial)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setValue(initial)
  }, [initial])

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault()
        const query = value.trim()
        navigate(query ? `/search?q=${encodeURIComponent(query)}` : '/search')
        onNavigate?.()
      }}
      className={`relative flex items-center ${compact ? '' : 'w-full'}`}
    >
      <IconSearch
        size={compact ? 16 : 18}
        className="pointer-events-none absolute left-3 text-[var(--ink-faint)]"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label="Search the book"
        className={`w-full rounded-full border border-[var(--line)] bg-[var(--surface)] pl-9 pr-16 text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
          compact ? 'h-9 text-xs' : 'h-12 text-sm'
        }`}
      />
      <button
        type="submit"
        className={`absolute right-1.5 rounded-full bg-brand-600 font-semibold text-white transition hover:bg-brand-700 ${
          compact ? 'px-2.5 py-1 text-[10px]' : 'px-3.5 py-1.5 text-xs'
        }`}
      >
        Search
      </button>
    </form>
  )
}
