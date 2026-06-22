import { useEffect, useMemo, useState } from 'react'
import ServiceCard from '../components/ServiceCard'
// import ExampleDrawer from '../components/ExampleDrawer'
import CTASection from '../components/CTASection'
import {
  ServiceSectionNavMobile,
  ServiceSectionNavSidebar,
  serviceSlug,
} from '../components/ServiceSectionNav'
import { smbServices, smbIndustries } from '../data/smbServices'

const SCROLL_OFFSET = 96

export default function SMB() {
  const navItems = useMemo(
    () =>
      smbServices.map((service) => ({
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
      <section className="hero-glow py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-text md:text-5xl">
            Practical technology help for small businesses.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            From process audits to hands-on AI training — built for businesses with 5–50
            employees in Mississippi, Alabama, and Louisiana.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-text/10 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-subtle">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {smbIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-text/15 bg-surface px-4 py-2 text-sm text-body"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
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
              {smbServices.map((service, i) => {
                const id = serviceSlug(service.name)

                return (
                  <div
                    key={service.name}
                    id={id}
                    className={`scroll-mt-24 ${i > 0 ? 'mt-10 pt-2' : ''}`}
                  >
                    <ServiceCard service={service} />
                    {/* See an example — re-enable before launch
                    {service.example && (
                      <ExampleDrawer
                        label={service.example.label}
                        content={service.example.content}
                      />
                    )}
                    */}
                  </div>
                )
              })}
            </div>
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
