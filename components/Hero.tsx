import { Fragment } from 'react'

interface HeroData {
  badge?: string | null
  headline?: string | null
  subheadline?: string | null
  primaryCtaLabel?: string | null
  secondaryCtaLabel?: string | null
  videoUrl?: string | null
  stats?: Array<{ _key: string; value: string; label: string }> | null
}

export default function Hero({ data }: { data: HeroData }) {
  const lines = (data.headline ?? '').split('\n').filter(Boolean)

  return (
    <section className="hero">
      {data.videoUrl ? (
        <video
          className="hero-video"
          src={data.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : null}
      <div className="hero-bg" />
      <div className="container hero-content">
        {data.badge && <div className="hero-badge">{data.badge}</div>}
        <h1>
          {lines.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </h1>
        {data.subheadline && <p className="hero-sub">{data.subheadline}</p>}
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            {data.primaryCtaLabel ?? 'Get in Touch'}
          </a>
          <a href="#what-we-do" className="btn btn-outline">
            {data.secondaryCtaLabel ?? 'What We Do'}
          </a>
        </div>
        {data.stats && data.stats.length > 0 && (
          <div className="hero-stats">
            {data.stats.map((stat, i) => (
              <Fragment key={stat._key}>
                {i > 0 && <div className="stat-divider" />}
                <div className="stat">
                  <span className="stat-num">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
