interface OurStoryData {
  headline?: string | null
  paragraph1?: string | null
  paragraph2?: string | null
}

export default function OurStory({ data }: { data: OurStoryData }) {
  return (
    <section className="our-story section" id="our-story">
      <div className="container our-story-inner">
        <div className="story-label">
          <span className="section-tag">Our Story</span>
        </div>
        <div className="story-content">
          {data.headline && <h2>{data.headline}</h2>}
          {data.paragraph1 && <p>{data.paragraph1}</p>}
          {data.paragraph2 && <p>{data.paragraph2}</p>}
        </div>
      </div>
    </section>
  )
}
