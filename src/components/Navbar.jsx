import { useState } from 'react'
import Logo from './Logo.jsx'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#mission' },
  { label: 'Product', href: '#features' },
  { label: 'Shop', href: '#products' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          aria-label="Century Trading, home"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#products" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Order Now
          </a>
        </nav>
      </div>
    </header>
  )
}
