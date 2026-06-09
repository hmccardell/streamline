import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-cream md:text-5xl">
            Let&apos;s talk about what&apos;s slowing you down.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75">
            No pressure, no jargon. Just a straightforward conversation about whether we&apos;re a fit.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-xl px-6">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
