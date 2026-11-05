const steps = [
  {
    number: '1',
    title: 'Build your order',
    description:
      'Pick your products and quantities, review the cart total, and send your order to us on WhatsApp in a couple of taps.',
  },
  {
    number: '2',
    title: 'Confirm your order',
    description:
      'Choose whole fingers, powder, or custom packing. We lock in pricing, lead time, and the export paperwork for your market.',
  },
  {
    number: '3',
    title: 'We source & ship',
    description:
      'We harvest from partner farms, test every lot, and handle logistics — tracking your consignment from Meghalaya to your door.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">How it works</p>
          <h2 className="section__title">Importing in three simple steps</h2>
        </div>
        <ol className="how__steps">
          {steps.map((step) => (
            <li className="how__step" key={step.number}>
              <span className="how__badge" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-text">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
