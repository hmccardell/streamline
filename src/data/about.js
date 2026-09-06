export const introduction = `I'm an automation engineer and a career-long trainer. For the past seven years I've led technical training for an enterprise software apprenticeship program, and before that I did backend development at a major healthcare analytics platform and automated test engineering at Nike. Streamline South is where those two threads meet: build the system, then make sure your team can run it.`

export const differentiators = [
  {
    label: 'Real engineering experience',
    description:
      'Backend development at a major cloud-based healthcare analytics firm; automated test engineering at Nike.',
  },
  {
    label: 'Proven training outcomes',
    description:
      'We know what success means. Training program graduates working at Bloomberg, DRW, Koch Industries, Kroger, Nike, Snap-On, United Airlines, and others.',
  },
  {
    label: 'Requirements expertise',
    description:
      'Business analyst training background means we define the problem correctly before building the solution.',
  },
  {
    label: 'Breaking it down',
    description:
      'Every engagement includes knowledge transfer; clients understand what was built.',
  },
  {
    label: 'Presence',
    description:
      'Based in Hattiesburg, MS, serving clients across the Gulf Coast in person or anywhere remotely.',
  },
]

export const valueStatement =
  'Most technology consultants either can\'t explain what they\'re building or can\'t train the people who need to maintain it. Streamline South does both.'

/**
 * The apprenticeship-training section on the About page. First-person voice, to
 * match the rest of the page. Photos are optimized by
 * scripts/optimize-images.mjs (owner-*.jpg sources).
 */
export const apprenticeship = {
  heading: 'Seven years training engineers and analysts',
  intro:
    "Since 2019 I've worked at Catalyte, an enterprise apprenticeship program with no tuition cost that takes people with little or no technical background and prepares them for careers in software engineering and business analysis. I started as a trainer, then led project-based learning and client readiness, then the software development training team. Today I'm the senior manager over technical training, and I still deliver training full time: writing curriculum, coaching engineers, and running assessments. Across seven years I've personally trained about 500 people. Most became software engineers; a few dozen trained as business analysts. Some direct hired into positions straight from graduation, the rest plugged into teams as consulting junior engineers. Many of those continued on to convert to full-time roles after their contract period.",
  rows: [
    {
      image: 'owner-united',
      width: 648,
      height: 735,
      alt: 'Hayes seated inside the cowling of a jet engine at United Airlines headquarters',
      side: 'left',
      heading: 'Trained for real enterprise systems, now for AI-first ones',
      body: "The program embeds apprentices directly into large organizations, so the curriculum is the actual working environment of an enterprise engineer: n-tier and microservice architecture, REST APIs, authentication, and test suites with mocking and integration coverage. This photo is inside a jet engine at United Airlines' headquarters in Chicago's Willis Tower. We trained ten engineers for United through its Innovate apprenticeship program, and after six months on the job every one of them converted to a full-time role. Lately the bigger job has been moving that curriculum to AI-first development, the same shift I help Gulf Coast businesses make now.",
      caption: "Inside a jet engine housing at United Airlines headquarters, Willis Tower, Chicago.",
    },
    {
      image: 'owner-chicago',
      width: 973,
      height: 909,
      alt: 'Hayes standing with four program graduates in Chicago',
      side: 'right',
      heading: 'The test is whether they can do it without me',
      body: "I trained every person in this photo one hundred percent remotely from Mississippi. All four had already graduated and moved into engineering jobs. I was in Chicago for other business and asked who wanted to meet up, and this was the first time we'd been in the same room. A training program only counts if the graduate can carry the work alone. Every Streamline South engagement ends the same way: your team owns what was built and can change it.",
      caption: 'Four program graduates in Chicago, all trained remotely from Mississippi, meeting in person for the first time.',
    },
  ],
  xchange: {
    heading: "A pipeline into tech jobs on Chicago's South Side",
    body:
      "Over the past couple of years, one of our biggest clients has been Xchange Chicago. We've graduated dozens of apprentices recruited from the South Side of Chicago, from every age and walk of life, many with little or no technical experience. Graduates are offered positions at SDI Presence, a local managed service provider working across a range of clients.",
    about:
      'Xchange Chicago is led by the Comer Science & Education Foundation, SDI Presence, and P33. It builds tech workforce hubs meant to be open to every Chicagoan, pairing training and wrap-around services with a direct pathway into apprenticeships and jobs at employers based in the same community.',
    links: [
      { label: 'Xchange Chicago', href: 'https://xchangechicago.org/' },
      { label: 'SDI Presence', href: 'https://www.sdipresence.com/' },
      { label: 'P33', href: 'https://p33chicago.com/' },
    ],
  },
  stats: [
    { value: '~500', label: 'engineers and analysts trained since 2019' },
    { value: '65% to 85%', label: 'graduation rate, cohort to cohort' },
    { value: '~90%', label: 'of hires converted to full-time roles' },
    { value: '100%', label: 'delivered remotely, nationwide, and now from Mississippi' },
  ],
  // Companies where people Hayes has trained have gone on to work, on contract
  // or full time. Alphabetized (84.51 sorts first).
  companies: [
    '84.51° (Kroger)',
    'Bloomberg',
    'Choice Hotels',
    'DRW',
    'Koch Industries',
    'Maryland Department of Health',
    'Microsoft',
    'Nationwide Insurance',
    'Nike',
    'T. Rowe Price',
    'United Airlines',
    'USA Swimming',
  ],
}
