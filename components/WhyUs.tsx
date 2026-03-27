interface Pillar {
  _key: string
  title: string
  description: string
}

interface WhyUsData {
  headline?: string | null
  subtext?: string | null
  pillars?: Pillar[] | null
}

export default function WhyUs({ data }: { data: WhyUsData }) {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header section-header-light">
          <span className="section-tag section-tag-light">Why Choose Us</span>
          {data.headline && <h2>{data.headline}</h2>}
          {data.subtext && <p>{data.subtext}</p>}
        </div>
        {data.pillars && data.pillars.length > 0 && (
          <div className="pillars-grid">
            {data.pillars.map((pillar, i) => (
              <div className="pillar" key={pillar._key}>
                <div className="pillar-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
