const stats = [
  { value: '7–12%', label: 'Curcumin content' },
  { value: '1,200+', label: 'Partner farmers' },
  { value: '18', label: 'Export countries' },
  { value: '100%', label: 'Single-origin' },
]

export default function Stats() {
  return (
    <section className="stats" aria-label="Key metrics">
      <div className="container stats__inner">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
