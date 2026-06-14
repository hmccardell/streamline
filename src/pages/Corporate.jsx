import ServiceCard from '../components/ServiceCard'
import ExampleDrawer from '../components/ExampleDrawer'
import JourneyPath from '../components/JourneyPath'
import CTASection from '../components/CTASection'
import { corporateServices, corporateJourneySteps } from '../data/corporateServices'

export default function Corporate() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-cream md:text-5xl">
            Technical training built for your team, your tools, and your goals.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75">
            Not off-the-shelf curriculum. Every engagement is designed around your
            environment and your people.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div>
            {corporateServices.map((service, i) => (
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

      {/* Corporate Client Journey */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl text-navy md:text-4xl">Corporate Client Journey</h2>
          <div className="mt-12">
            <JourneyPath steps={corporateJourneySteps} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's scope your engagement."
        buttonText="Get in touch"
        buttonTo="/contact"
        dark
      />
    </>
  )
}
