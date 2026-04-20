interface TheIdeaData {
  heading?: string | null
  lines?: string[] | null
  closing?: string | null
}

export default function TheIdea({ data }: { data: TheIdeaData }) {
  return (
    <section className="the-idea section" id="the-idea">
      <div className="container the-idea-inner">
        {data.heading && <p className="idea-heading">{data.heading}</p>}
        {data.lines && data.lines.length > 0 && (
          <div className="idea-lines">
            {data.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
        {data.closing && <p className="idea-closing">{data.closing}</p>}
      </div>
    </section>
  )
}
