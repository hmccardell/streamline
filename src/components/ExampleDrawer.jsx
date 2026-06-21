import { useState } from 'react'
import FormattedText from './FormattedText'

export default function ExampleDrawer({ label = 'See an example', content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="text-sm text-subtle transition-colors hover:text-body"
      >
        {label}
        <span className={`ml-1 inline-block transition-transform duration-300 ${open ? 'rotate-90' : ''}`} aria-hidden="true">→</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <FormattedText text={content} className="text-sm leading-relaxed text-body" wrapperClassName="pt-3" />
        </div>
      </div>
    </div>
  )
}
