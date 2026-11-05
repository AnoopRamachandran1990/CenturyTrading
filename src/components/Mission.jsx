export default function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="container mission__inner">
        <div className="mission__text">
          <p className="section__eyebrow">Our mission</p>
          <h2 className="section__title">
            From the Jaintia Hills to your shelves
          </h2>
          <p className="mission__paragraph">
            Lakadong turmeric is grown on small family farms in Meghalaya, cured
            and sun-dried the traditional way, and milled without additives or
            dyes. Its deep colour and high curcumin content make it one of the
            most sought-after turmerics in the world — yet most of it never
            reaches global buyers through a transparent supply chain.
          </p>
          <p className="mission__paragraph">
            Century Trading works directly with farmer collectives to handle sourcing,
            quality testing, documentation, and export logistics — so importers
            and wholesalers get consistent, lab-verified turmeric while farmers
            earn a fair price for their harvest.
          </p>
        </div>
        <div className="mission__media">
          <img
            src="https://picsum.photos/seed/lakadong-turmeric/640/480"
            alt="Freshly harvested turmeric rhizomes drying in the sun on a farm"
            className="mission__image"
            loading="lazy"
            width="640"
            height="480"
          />
        </div>
      </div>
    </section>
  )
}
