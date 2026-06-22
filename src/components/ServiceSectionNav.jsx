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
                ? 'border-accent bg-accent/10 text-text'
                : 'border-text/10 bg-surface text-subtle hover:border-accent/30 hover:text-text'
            }`
          : `flex w-full items-start gap-1.5 rounded-md border-l-2 py-2 pl-3 pr-2 text-left text-sm leading-snug transition-colors ${
              isActive
                ? 'border-accent bg-accent/5 font-medium text-text'
                : 'border-transparent text-subtle hover:border-accent/30 hover:text-text'
            }`
      }
    >
      {!compact && <span className="shrink-0 font-semibold text-accent">{item.step}.</span>}
      {!compact ? <span className="min-w-0">{item.name}</span> : item.name}
    </button>
  )
}

export function ServiceSectionNavMobile({ items, activeId, onSelect }) {
  return (
    <div className="sticky top-16 z-40 -mx-6 mb-8 border-b border-text/8 bg-bg px-6 py-3 lg:hidden">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-subtle">Jump to</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {items.map((item) => (
          <NavButton key={item.id} item={item} activeId={activeId} onSelect={onSelect} compact />
        ))}
      </div>
    </div>
  )
}

export function ServiceSectionNavSidebar({ items, activeId, onSelect }) {
  return (
    <nav aria-label="Services" className="sticky top-24 hidden w-52 shrink-0 self-start lg:block">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-subtle">Services</p>
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
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
