const features = [
  {
    icon: '🌿',
    title: 'Single-origin',
    description:
      'Every batch is grown in the Lakadong region of Meghalaya — never blended with lower-grade turmeric from other sources.',
  },
  {
    icon: '🧪',
    title: 'Lab-verified curcumin',
    description:
      'Each lot ships with a certificate of analysis confirming curcumin content, moisture, and purity before it leaves the warehouse.',
  },
  {
    icon: '🤝',
    title: 'Fair, direct trade',
    description:
      'We buy straight from farmer collectives at fair prices, cutting out middlemen so growers earn more and you pay for quality.',
  },
  {
    icon: '🚢',
    title: 'Export-ready logistics',
    description:
      'We handle phytosanitary certificates, customs documentation, and container shipping so your consignment clears smoothly.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Why source with us</p>
          <h2 className="section__title">Turmeric buyers can trust</h2>
        </div>
        <div className="features__grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
