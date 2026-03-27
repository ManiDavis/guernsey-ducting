const ICONS: Record<string, React.ReactNode> = {
  rectangular: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="36" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 24h36" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  circular: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  flexible: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24 Q18 10 24 24 Q30 38 40 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  fittings: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 36L24 12L36 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 28h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  'sheet-metal': (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 22h28M22 10v28" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  ventilation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
}

const DEFAULT_ICON = (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
  </svg>
)

interface ServiceItem {
  _id: string
  title: string
  description: string
  icon?: string | null
}

export default function Services({ data }: { data: ServiceItem[] }) {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Products &amp; Services</h2>
          <p>
            We manufacture and supply a full range of ducting products, fabricated to your exact
            requirements.
          </p>
        </div>
        <div className="services-grid">
          {data.map((svc, i) => (
            <div
              className="service-card"
              key={svc._id}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="service-icon">
                {svc.icon ? (ICONS[svc.icon] ?? DEFAULT_ICON) : DEFAULT_ICON}
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
