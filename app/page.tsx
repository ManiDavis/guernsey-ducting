import { sanityFetch } from '@/sanity/lib/live'
import { SITE_DATA_QUERY } from '@/sanity/lib/queries'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TheIdea from '@/components/TheIdea'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import WhereFound from '@/components/WhereFound'
import ForContractors from '@/components/ForContractors'
import OurStory from '@/components/OurStory'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

// ── Fallback content shown before Sanity is populated ─────────────────────────
const DEFAULTS = {
  settings: {
    companyName: 'Guernsey Ducting & Manufacturing Co Ltd',
    shortName: 'Guernsey Ducting',
    tagline: 'Specialist ducting manufacturer based in Guernsey, Channel Islands.',
    phone: '01481 249268',
    email: 'guernseyducting@cwgsy.net',
    address: 'Bulwer Avenue, St Sampson\nGuernsey GY1 3EB',
    hours: 'Monday – Friday, closes 4:30pm',
  },
  hero: {
    badge: "Guernsey's Ducting Specialist",
    headline: 'Built here.\nDelivered here.',
    subheadline:
      'Bespoke ductwork and sheet metal fabrication, manufactured on-island for Channel Islands projects.',
    primaryCtaLabel: 'Get in Touch',
    secondaryCtaLabel: 'What We Make',
    videoUrl: null,
    stats: [
      { _key: 'k1', value: 'Local', label: 'Guernsey Based' },
      { _key: 'k2', value: 'Custom', label: 'Made to Measure' },
      { _key: 'k3', value: 'Fast', label: 'Island Turnaround' },
    ],
  },
  theIdea: {
    heading: 'The Idea',
    lines: [
      'Guernsey is a small island.',
      "That means long waits for mainland stock, expensive freight, and components that don't quite fit.",
      'We fix that.',
    ],
    closing: 'Everything we make is fabricated here, for projects here.',
  },
  services: [
    { _id: 's1', title: 'Rectangular Ductwork', order: 1 },
    { _id: 's2', title: 'Circular & Spiral Ducting', order: 2 },
    { _id: 's3', title: 'Bends, Junctions & Fittings', order: 3 },
    { _id: 's4', title: 'Plenums & Housings', order: 4 },
    { _id: 's5', title: 'Stainless Steel Fabrication', order: 5 },
    { _id: 's6', title: 'Kitchen Extract Systems', order: 6 },
    { _id: 's7', title: 'Custom Sheet Metal', order: 7 },
  ],
  whyUs: {
    headline: "Why We're Different",
    subtext:
      'A local manufacturer means faster answers, shorter lead times, and no mainland freight.',
    pillars: [
      {
        _key: 'p1',
        title: 'Made here, not shipped in',
        description:
          'Every component is fabricated on-island. No long waits, no customs delays, no damaged deliveries.',
      },
      {
        _key: 'p2',
        title: 'Bespoke as standard',
        description:
          'We work from your drawings or take site measurements. Every piece is made to fit your project.',
      },
      {
        _key: 'p3',
        title: 'Trade-ready turnaround',
        description:
          'We understand build programmes. When you need something fast, we can make it happen.',
      },
      {
        _key: 'p4',
        title: 'One call, one supplier',
        description:
          'Ductwork, fittings, sheet metal — all from one place. Simpler ordering, simpler site logistics.',
      },
    ],
  },
  whereFound: {
    headline: "Where You'll Find Our Ducting",
    environments: [
      'Commercial kitchens',
      'Office fit-outs',
      'Housing developments',
      'Industrial units',
      'Schools & public buildings',
      'Marine & offshore',
      'Retail & hospitality',
      'Healthcare facilities',
    ],
    tagline: 'Anywhere air needs to move.',
  },
  forContractors: {
    headline: 'Built for the Trade',
    paragraph1:
      "If you're a contractor, developer, or mechanical engineer working on a project in Guernsey, we're the straightforward choice. No mainland lead times. No freight headaches. Just ducting, made here.",
    paragraph2:
      'We work from drawings, specs, or a conversation on site. Whatever stage your project is at, we can help.',
    tagline: "Get in touch and we'll turn it around.",
  },
  ourStory: {
    headline: 'Made in Guernsey',
    paragraph1:
      "Guernsey Ducting & Manufacturing Co Ltd has been supplying the local building trade for years. We started because contractors on the island needed a reliable local source — and the mainland option simply wasn't good enough for an island with tight schedules and no room for error.",
    paragraph2:
      'Today we supply ductwork and sheet metal components to residential, commercial, and industrial projects across the Channel Islands. Local knowledge. Local stock. Local people.',
  },
  finalCta: {
    headline: 'Ready to talk about your project?',
    subtext:
      "Get in touch and we'll discuss what you need. Whether it's a single component or a full system, we can help.",
    buttonLabel: 'Call Us',
  },
}

export default async function HomePage() {
  let data: Awaited<ReturnType<typeof sanityFetch>>['data'] = null
  try {
    const result = await sanityFetch({ query: SITE_DATA_QUERY })
    data = result.data
  } catch {
    // Sanity not configured or unreachable — render with fallback content
  }

  const settings    = { ...DEFAULTS.settings,      ...(data?.settings      ?? {}) }
  const hero        = { ...DEFAULTS.hero,           ...(data?.hero          ?? {}) }
  const theIdea     = { ...DEFAULTS.theIdea,        ...(data?.theIdea       ?? {}) }
  const services    = data?.services?.length ? data.services : DEFAULTS.services
  const whyUs       = { ...DEFAULTS.whyUs,          ...(data?.whyUs         ?? {}) }
  const whereFound  = { ...DEFAULTS.whereFound,     ...(data?.whereFound    ?? {}) }
  const forContractors = { ...DEFAULTS.forContractors, ...(data?.forContractors ?? {}) }
  const ourStory    = { ...DEFAULTS.ourStory,       ...(data?.ourStory      ?? {}) }
  const finalCta    = { ...DEFAULTS.finalCta,       ...(data?.finalCta      ?? {}) }

  return (
    <>
      <Navigation shortName={settings.shortName} />
      <Hero data={hero} />
      <TheIdea data={theIdea} />
      <Services data={services as typeof DEFAULTS.services} />
      <WhyUs data={whyUs} />
      <WhereFound data={whereFound} />
      <ForContractors data={forContractors} />
      <OurStory data={ourStory} />
      <FinalCta data={finalCta} settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
