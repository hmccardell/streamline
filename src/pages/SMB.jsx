import ServiceCard from '../components/ServiceCard'
import ExampleDrawer from '../components/ExampleDrawer'
import CTASection from '../components/CTASection'
import { smbServices, smbIndustries } from '../data/smbServices'

export default function SMB() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-cream md:text-5xl">
            Practical technology help for small businesses.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75">
            From process audits to hands-on AI training — built for businesses with 5–50
            employees in Mississippi, Alabama, and Louisiana.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-navy/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-navy/50">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {smbIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy/80"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div>
            {smbServices.map((service, i) => (
              <div
                key={service.name}
                className={i > 0 ? 'mt-10 pt-2' : ''}
              >
                <ServiceCard service={service} />
                {service.example && (
                  <ExampleDrawer
                    label={service.example.label}
                    content={service.example.content}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not sure where to start? Start with the Audit."
        body="The Process Audit is a fixed-fee, no-commitment engagement. You'll get a written report of your automation opportunities and projected time savings — whether you work with us further or not."
        buttonText="Get in touch"
        buttonTo="/contact"
        dark
      />
    </>
  )
}
