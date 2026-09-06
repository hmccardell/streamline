export const corporateServices = [
  {
    step: 1,
    name: 'Custom Technical Workshop',
    tagline: 'Enterprise-grade training, built for your team.',
    description:
      'Multi-day, fully customized training programs built around your specific business challenges, tools, and team skill level. Not off-the-shelf curriculum, everything is designed for your environment, your people, and your goals.',
    whoItsFor:
      'Mid-to-large organizations with internal learning & development needs on various technical topics.',
    whatsIncluded:
      'Fully customized curriculum and instructor-led training sessions with hands-on exercises and reference materials your team can keep.',
    whatItsNot:
      'This is not off-the-shelf training with your logo on the slides. Every program is designed from scratch for your team and your goals.',
    specialties: 'AI integration and enablement, Python, JavaScript, Java, software development fundamentals, automated testing, Agile/Scrum adoption and coaching, business analysis, requirements engineering, and more.',
    duration: '1–3 days on-site or remote.',
    investment: 'Priced based on duration and customization: get in touch',
    investmentLink: true,
    priceRange: 'By quote',
  },
  {
    step: 2,
    name: 'Curriculum Design',
    tagline: 'We build it. You deliver it.',
    description:
      'For organizations with internal training capability that need expert instructional design. We develop the curriculum, materials, and assessments and your team delivers the sessions.',
    whoItsFor:
      'Mid-to-large organizations with internal learning & development needs around Python, JavaScript, Java, software development, automated testing, or AI integration.',
    whatsIncluded:
      'Curriculum design, training materials, exercises, and assessments, ready for your internal team to deliver the sessions.',
    whatItsNot:
      'This is not workshop delivery by us. We build the curriculum; your team runs the sessions.',
    duration: 'Scope-dependent, typically 2–4 weeks.',
    investment: '$3,000 – $8,000 depending on scope.',
    priceRange: '$3,000–$8,000',
  },
]

// Anonymized client story shown under the services on /corporate. Ties directly
// to the Custom Technical Workshop above.
export const workshopCaseStudy = {
  eyebrow: 'Recent engagement · Custom Technical Workshop',
  title: 'Practical Python for an enterprise IT organization',
  body: [
    'A major cloud storage company set out to help its IT organization solve more problems directly with code and AI. The goal was not to turn support engineers into software developers. It was to give people enough Python, and enough judgment about AI-assisted tools, to build their own fixes for the work in front of them.',
    'We designed the curriculum from scratch and delivered the full program: three six-hour days, instructor-led, with group assignments and working sessions where attendees mapped what they were learning onto real problems their teams faced. We ran it three times, on-site in two states and remotely, for about 50 people across support engineering, scrum, platform and infrastructure, security, and business analysis, along with their directors and managers.',
    "By the end of day three, people who had never written code were using Python to pull data from internal APIs and process it. Follow-up sessions covered version control with Git, querying Jira from Python, and working effectively in Cursor's AI-assisted editor.",
  ],
  stats: [
    { value: '~50', label: 'people trained' },
    { value: '3 days', label: 'six-hour sessions' },
    { value: 'Two states + remote', label: 'delivery' },
    { value: '4.8 / 5', label: 'participant rating' },
  ],
  highlight: {
    label: 'What an attendee left with',
    content:
      "One attendee brought a recurring headache: when someone leaves the company, their assigned Jira tickets get orphaned. In the workshop we helped them shape the idea into a concrete workflow: query Jira for tickets still assigned to departed employees, match each person against an internal management list, reassign to that person's manager, and schedule it to run on its own. The Jira and Git add-on sessions gave them reference code to start from and a way to share the finished script with their team.",
  },
  footnote:
    "Delivered summer 2026. Contracted through a partner firm; curriculum design and instruction by Streamline South's founder. Client name withheld under NDA.",
}
