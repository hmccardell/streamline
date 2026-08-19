export default function CredibilityBar() {
  return (
    <section className="border-y border-text/8 bg-surface-alt py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">Founder experience at</p>
            <p className="mt-2 leading-relaxed text-body">Nike</p>
            <p className="mt-2 leading-relaxed text-body">Inovalon, a major medical data analytics firm</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">Training Program graduates at</p>
            <p className="mt-2 leading-relaxed text-body">
              Bloomberg, DRW, Koch Industries, Kroger, Nationwide Insurance, Nike, Snap-on, United Airlines, and many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
