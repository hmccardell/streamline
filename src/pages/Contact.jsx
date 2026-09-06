import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="hero-glow pt-10 pb-6 md:pt-14 md:pb-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-text md:text-5xl">What&apos;s slowing you down?</h1>
          <div className="brand-divider-fade mx-auto mt-8 max-w-xl" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            Bring us your pain points. We'll guide you to a solution.
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t pt-8 pb-12 md:pt-12 md:pb-16"
        style={{ borderColor: 'var(--rule-automation-cyan)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/automation-cyan2.png)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-xl px-6">
          <div className="surface-card rounded-lg bg-black/85 p-6 backdrop-blur-lg md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
