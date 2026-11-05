const base = import.meta.env.BASE_URL

/** Resolve a file in /public so the site also works from a sub-folder. */
export function asset(path: string) {
  const clean = path.replace(/^\/+/, '')
  return `${base}${clean}`
}

export function pageImage(pdfPage: number) {
  return asset(`book/p${String(pdfPage).padStart(3, '0')}.jpg`)
}
