import { Link } from 'react-router-dom'
import { IconBook, IconHome } from '../components/Icons'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="font-display text-6xl text-brand-600 dark:text-brand-300">404</p>
      <h1 className="mt-2 font-display text-2xl text-[var(--ink)]">This page is not in the book</h1>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
        The link may be old, or the lesson may have a different code. Use the contents to find your place.
      </p>
      <div className="mt-5 flex justify-center gap-2">
        <Link to="/" className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700">
          <IconHome size={14} /> Home
        </Link>
        <Link to="/book" className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs font-semibold text-[var(--ink-soft)] hover:border-brand-400 hover:text-brand-700">
          <IconBook size={14} /> Contents
        </Link>
      </div>
    </div>
  )
}
