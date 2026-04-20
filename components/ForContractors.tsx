interface ForContractorsData {
  headline?: string | null
  paragraph1?: string | null
  paragraph2?: string | null
  tagline?: string | null
}

export default function ForContractors({ data }: { data: ForContractorsData }) {
  return (
    <section className="for-contractors section" id="for-contractors">
      <div className="container for-contractors-inner">
        <div className="fc-label">
          <span className="section-tag section-tag-light">For Contractors</span>
        </div>
        <div className="fc-content">
          {data.headline && <h2>{data.headline}</h2>}
          {data.paragraph1 && <p>{data.paragraph1}</p>}
          {data.paragraph2 && <p>{data.paragraph2}</p>}
          {data.tagline && <p className="fc-tagline">{data.tagline}</p>}
        </div>
      </div>
    </section>
  )
}
