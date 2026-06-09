export default function CredibilityBar() {
  return (
    <section className="border-y border-navy/10 bg-cream-dark py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
              Founder experience at
            </p>
            <p className="mt-2 font-serif text-lg text-navy">
              Nike, major medical data analytics firm
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
              Program graduates at
            </p>
            <p className="mt-2 font-serif text-lg text-navy">
              Bloomberg, Koch Industries, United Airlines, DRW, Nike, Snap-On
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
