import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="hero-glow py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-text md:text-5xl">What&apos;s slowing you down?</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            No pressure, no jargon. Just a straightforward conversation about what we can assist with.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-xl px-6">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
