import { sanityFetch } from '@/sanity/lib/live'
import { SITE_DATA_QUERY } from '@/sanity/lib/queries'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
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
    headline: 'Quality Ducting.\nManufactured Locally.',
    subheadline:
      'Bespoke ducting fabrication and ventilation solutions for residential, commercial, and industrial projects across the Channel Islands.',
    primaryCtaLabel: 'Request a Quote',
    secondaryCtaLabel: 'Our Services',
    stats: [
      { _key: 'k1', value: 'Local', label: 'Guernsey Based' },
      { _key: 'k2', value: 'Custom', label: 'Made to Measure' },
      { _key: 'k3', value: 'All Sizes', label: 'Any Specification' },
    ],
  },
  services: [
    { _id: 's1', title: 'Rectangular Ducting', description: 'Precision-fabricated rectangular ductwork in galvanised steel or stainless steel, suited to commercial and industrial HVAC installations.', icon: 'rectangular', order: 1 },
    { _id: 's2', title: 'Circular & Spiral Ducting', description: 'Spiral wound and straight seam circular ducting in a wide range of diameters for efficient, low-resistance airflow systems.', icon: 'circular', order: 2 },
    { _id: 's3', title: 'Flexible Ducting', description: 'Flexible duct connectors and insulated flexible ducting for connecting terminal units, fan coil units, and diffusers with ease.', icon: 'flexible', order: 3 },
    { _id: 's4', title: 'Fittings & Accessories', description: 'A complete range of bends, junctions, reducers, dampers, grilles, and access doors fabricated to match your duct system.', icon: 'fittings', order: 4 },
    { _id: 's5', title: 'Sheet Metal Fabrication', description: 'Custom sheet metal components, plenums, housings, and enclosures fabricated to drawing or from site measurements.', icon: 'sheet-metal', order: 5 },
    { _id: 's6', title: 'Ventilation Systems', description: 'Supply and extract ventilation systems designed and manufactured locally, from domestic kitchen extract to full commercial mechanical ventilation.', icon: 'ventilation', order: 6 },
  ],
  about: {
    headline: "Guernsey's Own Ducting Manufacturer",
    paragraph1:
      'Guernsey Ducting & Manufacturing Co Ltd is a specialist manufacturer of ductwork and ventilation components based right here in the Channel Islands. We supply contractors, builders, and tradespeople across Guernsey and the surrounding islands.',
    paragraph2:
      'Because we manufacture locally, we can turn around bespoke orders faster than mainland suppliers — no long lead times, no expensive shipping, and no compromises on quality. Whether you need a single bespoke component or a full duct system, we have the capability to deliver.',
    checklist: [
      'Fabricated to your drawings or specifications',
      'Galvanised steel, stainless steel, and aluminium options',
      'Fast local turnaround',
      'Competitive pricing with no import delays',
    ],
  },
  whyUs: {
    headline: 'The Local Advantage',
    subtext:
      'Working with a Guernsey-based manufacturer means a faster, simpler, and more cost-effective process from start to finish.',
    pillars: [
      { _key: 'p1', title: 'Made to Measure', description: "Every piece is fabricated to your exact specification. No off-the-shelf compromises — dimensions, materials, and finishes all tailored to your project." },
      { _key: 'p2', title: 'Fast Turnaround', description: "Local manufacturing means shorter lead times. We understand the pace of building projects in Guernsey and work to keep your programme on track." },
      { _key: 'p3', title: 'No Import Hassle', description: "Avoid the cost and delays of shipping ductwork from the mainland. We manufacture here, so your order arrives quickly and without customs complications." },
      { _key: 'p4', title: 'Expert Knowledge', description: "We know the local building trade and the challenges of Channel Islands projects. Get straightforward advice from people who understand your needs." },
    ],
  },
}

export default async function HomePage() {
  const { data } = await sanityFetch({ query: SITE_DATA_QUERY })

  const settings = { ...DEFAULTS.settings, ...(data?.settings ?? {}) }
  const hero = { ...DEFAULTS.hero, ...(data?.hero ?? {}) }
  const services = data?.services?.length ? data.services : DEFAULTS.services
  const about = { ...DEFAULTS.about, ...(data?.about ?? {}) }
  const whyUs = { ...DEFAULTS.whyUs, ...(data?.whyUs ?? {}) }

  return (
    <>
      <Navigation shortName={settings.shortName} />
      <Hero data={hero} />
      <Services data={services as typeof DEFAULTS.services} />
      <About data={about} />
      <WhyUs data={whyUs} />
      <Contact settings={settings} />
      <Footer settings={settings} />
    </>
  )
}
