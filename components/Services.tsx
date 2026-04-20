interface ServiceItem {
  _id: string
  title: string
  description?: string | null
  icon?: string | null
}

export default function Services({ data }: { data: ServiceItem[] }) {
  return (
    <section className="services section" id="what-we-do">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">What We Do</span>
          <h2>Built here.<br />Installed here.</h2>
        </div>
        <div className="services-body">
          <div className="photo-placeholder" aria-hidden="true">
            <span>Photo coming soon</span>
          </div>
          <div className="services-list-wrap">
            <ul className="services-list">
              {data.map((svc) => (
                <li key={svc._id}>{svc.title}</li>
              ))}
            </ul>
            <p className="services-pull">
              We don&apos;t order solutions.<br />We make them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
