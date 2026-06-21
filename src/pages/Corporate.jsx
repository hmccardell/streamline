import { useEffect, useMemo, useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import ExampleDrawer from '../components/ExampleDrawer'
import JourneyPath from '../components/JourneyPath'
import CTASection from '../components/CTASection'
import {
  ServiceSectionNavMobile,
  ServiceSectionNavSidebar,
  serviceSlug,
} from '../components/ServiceSectionNav'
import { corporateServices, corporateJourneySteps } from '../data/corporateServices'

const SCROLL_OFFSET = 96

export default function Corporate() {
  const navItems = useMemo(
    () =>
      corporateServices.map((service) => ({
        id: serviceSlug(service.name),
        name: service.name,
        step: service.step,
      })),
    [],
  )

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? '')

  useEffect(() => {
    function updateActiveSection() {
      let current = navItems[0]?.id ?? ''

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = item.id
        }
      }

      setActiveId(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [navItems])

  function scrollToSection(id) {
    const el = document.getElementById(id)
    if (!el) return

    setActiveId(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
        <div className="mx-auto max-w-6xl px-6">
          <ServiceSectionNavMobile
            items={navItems}
            activeId={activeId}
            onSelect={scrollToSection}
          />

          <div className="lg:flex lg:items-start lg:gap-12">
            <ServiceSectionNavSidebar
              items={navItems}
              activeId={activeId}
              onSelect={scrollToSection}
            />

            <div className="min-w-0 flex-1 lg:max-w-3xl">
              {corporateServices.map((service, i) => {
                const id = serviceSlug(service.name)

                return (
                  <div
                    key={service.name}
                    id={id}
                    className={`scroll-mt-24 ${i > 0 ? 'mt-10 pt-2' : ''}`}
                  >
                    <ServiceCard service={service} />
                    {service.example && (
                      <ExampleDrawer
                        label={service.example.label}
                        content={service.example.content}
                      />
                    )}
                  </div>
                )
              })}
            </div>
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
