import { useEffect, useState } from 'react'

/**
 * Wraps a thumbnail in a click target that opens an enlarged version in a
 * lightweight overlay. Closes on backdrop click, the close button, or Escape.
 */
export default function ImageZoom({ children, zoomContent, label = 'Enlarge image', className = '' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className={`block cursor-zoom-in transition-opacity hover:opacity-90 ${className}`.trim()}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-text/20 text-text transition-colors hover:border-highlight hover:text-highlight"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex max-h-full max-w-full items-center justify-center">
            {zoomContent ?? children}
          </div>
        </div>
      )}
    </>
  )
}
