export default function FormattedText({ text, className = '', wrapperClassName = '' }) {
  if (!text) return null

  const paragraphs = text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  if (paragraphs.length === 1) {
    const combined = [wrapperClassName, className].filter(Boolean).join(' ')
    return <p className={combined || undefined}>{paragraphs[0]}</p>
  }

  return (
    <div className={[wrapperClassName, 'space-y-4'].filter(Boolean).join(' ')}>
      {paragraphs.map((para) => (
        <p key={para} className={className || undefined}>
          {para}
        </p>
      ))}
    </div>
  )
}
