const testimonials = [
  {
    quote:
      'The curcumin levels matched the certificate exactly, and the colour is unmatched. Our customers immediately noticed the difference in every blend.',
    name: 'Priya Nair',
    role: 'Spice wholesaler, London',
  },
  {
    quote:
      'Direct sourcing from the farmer collectives gave us the traceability our retail partners demand. The export paperwork was handled end to end.',
    name: 'Marcus Feld',
    role: 'Importer, Hamburg',
  },
  {
    quote:
      'Consistent quality batch after batch. Ordering is simple, and every lot arrives with lab results that match what we were promised.',
    name: 'Aisha Rahman',
    role: 'Founder, wellness brand, Dubai',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">From our buyers</p>
          <h2 className="section__title">Trusted by importers worldwide</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <blockquote className="testimonial-card__quote">
                “{item.quote}”
              </blockquote>
              <figcaption className="testimonial-card__person">
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__role">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
