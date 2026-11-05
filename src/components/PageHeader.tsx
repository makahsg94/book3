import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IconChevronLeft } from './Icons'

export function PageHeader({
  eyebrow,
  title,
  description,
  backTo,
  backLabel = 'Back',
  children,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  backTo?: string
  backLabel?: string
  children?: ReactNode
}) {
  return (
    <header className="mb-6 sm:mb-8">
      {backTo && (
        <Link
          to={backTo}
          className="mb-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink-soft)] transition hover:text-brand-600"
        >
          <IconChevronLeft size={14} />
          {backLabel}
        </Link>
      )}
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
      )}
      <h1 className="font-display text-3xl leading-[1.1] text-[var(--ink)] sm:text-4xl">{title}</h1>
      {description && <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </header>
  )
}

export function SectionTitle({
  icon,
  title,
  hint,
  action,
}: {
  icon?: ReactNode
  title: string
  hint?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 className="flex items-center gap-2 text-base font-bold text-[var(--ink)]">
          {icon}
          {title}
        </h2>
        {hint && <p className="mt-0.5 text-xs text-[var(--ink-faint)]">{hint}</p>}
      </div>
      {action}
    </div>
  )
}

export function Pill({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'brand' | 'accent' | 'warm'
}) {
  const tones = {
    neutral: 'bg-[var(--bg)] text-[var(--ink-soft)] ring-[var(--line)]',
    brand: 'bg-brand-100 text-brand-800 ring-brand-200 dark:bg-brand-950 dark:text-brand-200 dark:ring-brand-800',
    accent: 'bg-accent-100 text-accent-800 ring-accent-200 dark:bg-accent-950 dark:text-accent-200 dark:ring-accent-800',
    warm: 'bg-warm-100 text-warm-900 ring-warm-200 dark:bg-warm-950/60 dark:text-warm-200 dark:ring-warm-800',
  } as const
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  )
}
