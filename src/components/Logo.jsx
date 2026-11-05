// Century Trading logo, recreated as inline SVG so it stays crisp at any size.
// Mark: open "C" arc with a gold dot (top), gold check (centre) and gold ring (bottom).
// variant="light" swaps the dark green for cream so it reads on dark backgrounds (footer).

export function LogoMark({ variant = 'dark', className = '' }) {
  const ink = variant === 'light' ? 'var(--color-on-primary)' : 'var(--color-logo-green)'
  const gold = 'var(--color-logo-gold)'

  return (
    <svg
      className={className}
      viewBox="355 200 300 285"
      aria-hidden="true"
      focusable="false"
    >
      {/* Open "C" arc */}
      <path
        d="M 583 252 A 125 125 0 1 0 583 428"
        fill="none"
        stroke={ink}
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* Gold dot at the top end */}
      <circle cx="622" cy="250" r="25" fill={gold} />
      {/* Gold check mark */}
      <polyline
        points="473,350 505,382 565,312"
        fill="none"
        stroke={gold}
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gold ring at the bottom end */}
      <circle cx="622" cy="437" r="20" fill="none" stroke={gold} strokeWidth="12" />
    </svg>
  )
}

export default function Logo({ variant = 'dark', showTagline = true }) {
  return (
    <span className={`logo logo--${variant}`}>
      <LogoMark variant={variant} className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">Century Trading</span>
        {showTagline && (
          <span className="logo__tagline">
            Sourced <span aria-hidden="true">◆</span> at{' '}
            <span aria-hidden="true">◆</span> Origin
          </span>
        )}
      </span>
    </span>
  )
}
