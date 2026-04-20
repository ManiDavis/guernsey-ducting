interface FinalCtaData {
  headline?: string | null
  subtext?: string | null
  buttonLabel?: string | null
}

interface Settings {
  phone?: string | null
  email?: string | null
}

export default function FinalCta({
  data,
  settings,
}: {
  data: FinalCtaData
  settings: Settings
}) {
  return (
    <section className="final-cta section" id="contact">
      <div className="container final-cta-inner">
        <div className="fca-text">
          {data.headline && <h2>{data.headline}</h2>}
          {data.subtext && <p>{data.subtext}</p>}
        </div>
        <div className="fca-actions">
          <a href={`tel:${(settings.phone ?? '01481249268').replace(/\s/g, '')}`} className="btn btn-primary">
            {data.buttonLabel ?? 'Call Us'}
          </a>
          <a href={`mailto:${settings.email ?? 'guernseyducting@cwgsy.net'}`} className="btn btn-outline-dark">
            {settings.email ?? 'guernseyducting@cwgsy.net'}
          </a>
        </div>
      </div>
    </section>
  )
}
