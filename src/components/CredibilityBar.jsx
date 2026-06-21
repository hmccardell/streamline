export default function CredibilityBar() {
  return (
    <section className="border-y border-text/8 bg-surface-alt py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Founder experience at</p>
            <p className="mt-2 font-serif text-lg text-text">Nike</p>
            <p className="mt-2 font-serif text-lg text-text">Inovalon, a major medical data analytics firm</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Program graduates at</p>
            <p className="mt-2 font-serif text-lg text-text">
              Bloomberg, Koch Industries, United Airlines, DRW, Nike, Snap-On, Maryland Department of Health, and many more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
