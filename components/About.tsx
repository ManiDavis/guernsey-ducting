interface AboutData {
  headline?: string | null
  paragraph1?: string | null
  paragraph2?: string | null
  checklist?: string[] | null
}

export default function About({ data }: { data: AboutData }) {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-graphic">
            <div className="ag-duct ag-duct-1" />
            <div className="ag-duct ag-duct-2" />
            <div className="ag-duct ag-duct-3" />
            <div className="ag-label">Locally Manufactured</div>
          </div>
        </div>
        <div className="about-text">
          <span className="section-tag">About Us</span>
          {data.headline && <h2>{data.headline}</h2>}
          {data.paragraph1 && <p>{data.paragraph1}</p>}
          {data.paragraph2 && <p>{data.paragraph2}</p>}
          {data.checklist && data.checklist.length > 0 && (
            <ul className="about-list">
              {data.checklist.map((item, i) => (
                <li key={i}>
                  <span className="check">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <a href="#contact" className="btn btn-primary">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}
