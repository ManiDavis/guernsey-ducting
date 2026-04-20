interface WhereFoundData {
  headline?: string | null
  environments?: string[] | null
  tagline?: string | null
}

export default function WhereFound({ data }: { data: WhereFoundData }) {
  return (
    <section className="where-found section" id="where-found">
      <div className="container">
        <div className="where-found-header">
          <span className="section-tag">Where You&apos;ll Find Us</span>
          {data.headline && <h2>{data.headline}</h2>}
        </div>
        <div className="where-found-body">
          <img
            src="/images/where-found.jpg"
            alt="Industrial ventilation pipes and ducting"
            className="section-img"
            loading="lazy"
          />
          <div className="where-found-list-wrap">
            {data.environments && data.environments.length > 0 && (
              <ul className="environments-list">
                {data.environments.map((env, i) => (
                  <li key={i}>{env}</li>
                ))}
              </ul>
            )}
            {data.tagline && <p className="where-tagline">{data.tagline}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
