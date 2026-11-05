export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Single-origin spice trade</p>
          <h1 className="hero__title">
            Import Lakadong turmeric, straight from the hills of Meghalaya.
          </h1>
          <p className="hero__subtitle">
            Lakadong turmeric grows in the Jaintia Hills of Meghalaya and is
            prized for one of the highest curcumin contents in the world.
            Century Trading sources it directly from farmer collectives and ships it
            to buyers worldwide — fresh, traceable, and fairly traded.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              Order Now
            </a>
            <a href="#how-it-works" className="btn btn--secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-card">
            <span className="hero__visual-label">Curcumin content</span>
            <span className="hero__visual-value">7–12%</span>
            <div className="hero__visual-bars">
              <span style={{ height: '40%' }} />
              <span style={{ height: '65%' }} />
              <span style={{ height: '52%' }} />
              <span style={{ height: '80%' }} />
              <span style={{ height: '95%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
