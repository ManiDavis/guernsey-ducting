interface Settings {
  companyName?: string | null
  shortName?: string | null
  tagline?: string | null
  phone?: string | null
  email?: string | null
}

export default function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear()
  const shortName = settings.shortName ?? 'Guernsey Ducting'
  const tagline =
    settings.tagline ?? 'Specialist ducting manufacturer based in Guernsey, Channel Islands.'
  const phone = settings.phone ?? '01481 249268'
  const email = settings.email ?? 'guernseyducting@cwgsy.net'

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo">
            <span className="logo-icon">&#9632;</span>
            {shortName}
          </span>
          <p>{tagline}</p>
        </div>
        <div className="footer-links">
          <nav>
            <a href="#what-we-do">What We Make</a>
            <a href="#why-us">Why Us</a>
            <a href="#our-story">Our Story</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-contact-links">
            <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} {settings.companyName ?? shortName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
