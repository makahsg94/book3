export default function AnimatedBar({
  value,
  className = '',
  label,
  tone = 'brand',
}: {
  value: number
  className?: string
  label?: string
  tone?: 'brand' | 'accent' | 'warm'
}) {
  const width = Math.max(0, Math.min(100, value))
  const tones = {
    brand: 'bg-brand-600 dark:bg-brand-400',
    accent: 'bg-accent-600 dark:bg-accent-400',
    warm: 'bg-warm-600 dark:bg-warm-500',
  }
  return (
    <div
      className={`h-2 overflow-hidden rounded-full bg-[var(--line)] ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(width)}
      aria-label={label}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-700 ease-out ${tones[tone]}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
