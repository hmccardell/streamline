function NavButton({ item, activeId, onSelect, compact = false }) {
  const isActive = activeId === item.id

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-current={isActive ? 'true' : undefined}
      className={
        compact
          ? `shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? 'border-amber bg-amber/10 text-navy'
                : 'border-navy/15 bg-white text-navy/60 hover:border-amber/30 hover:text-navy'
            }`
          : `block w-full rounded-md border-l-2 py-2 pl-3 pr-2 text-left text-sm leading-snug transition-colors ${
              isActive
                ? 'border-amber bg-amber/5 font-medium text-navy'
                : 'border-transparent text-navy/60 hover:border-amber/30 hover:text-navy'
            }`
      }
    >
      {!compact && (
        <span className="mr-1.5 font-semibold text-amber">{item.step}.</span>
      )}
      {item.name}
    </button>
  )
}

export function ServiceSectionNavMobile({ items, activeId, onSelect }) {
  return (
    <div className="sticky top-16 z-40 -mx-6 mb-8 border-b border-navy/10 bg-cream px-6 py-3 lg:hidden">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/50">
        Jump to
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {items.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            activeId={activeId}
            onSelect={onSelect}
            compact
          />
        ))}
      </div>
    </div>
  )
}

export function ServiceSectionNavSidebar({ items, activeId, onSelect }) {
  return (
    <nav
      aria-label="Services"
      className="sticky top-24 hidden w-52 shrink-0 self-start lg:block"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy/50">
        Services
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <NavButton item={item} activeId={activeId} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function serviceSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
