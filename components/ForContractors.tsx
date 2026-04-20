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
        <div className="fc-content">
          <span className="section-tag section-tag-light">For Contractors</span>
          {data.headline && <h2>{data.headline}</h2>}
          {data.paragraph1 && <p>{data.paragraph1}</p>}
          {data.paragraph2 && <p>{data.paragraph2}</p>}
          {data.tagline && <p className="fc-tagline">{data.tagline}</p>}
        </div>
        <img
          src="/images/for-contractors.jpg"
          alt="Contractor reviewing building plans on site"
          className="section-img"
          loading="lazy"
        />
      </div>
    </section>
  )
}
