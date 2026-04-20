interface Pillar {
  _key: string
  title: string
  description?: string | null
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
        <div className="why-us-header">
          <span className="section-tag section-tag-light">Why We&apos;re Different</span>
          {data.headline && <h2>{data.headline}</h2>}
          {data.subtext && <p>{data.subtext}</p>}
        </div>
        {data.pillars && data.pillars.length > 0 && (
          <ul className="differentiators">
            {data.pillars.map((p) => (
              <li key={p._key} className="differentiator">
                <span className="diff-check">&#10003;</span>
                <div>
                  <strong>{p.title}</strong>
                  {p.description && <p>{p.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
