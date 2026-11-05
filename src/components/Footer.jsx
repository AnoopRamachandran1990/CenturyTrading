import Logo from './Logo.jsx'

const linkColumns = [
  {
    heading: 'Company',
    links: ['About us', 'Our farms', 'Sustainability', 'Partners'],
  },
  {
    heading: 'Product',
    links: ['Whole fingers', 'Turmeric powder', 'Bulk orders', 'Quality & testing'],
  },
  {
    heading: 'Resources',
    links: ['How it works', 'Certifications', 'Shipping & export', 'FAQ'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Food safety', 'Cookies'],
  },
]

const socials = [
  { label: 'Century Trading on X', icon: '𝕏' },
  { label: 'Century Trading on LinkedIn', icon: 'in' },
  { label: 'Century Trading on Instagram', icon: '◎' },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__wordmark">
            <Logo variant="light" />
          </span>
          <p className="footer__blurb">
            Exporting single-origin Lakadong turmeric from the hills of
            Meghalaya — fresh, lab-verified, and fairly traded, straight from
            farmer collectives to buyers worldwide.
          </p>
          <p className="footer__contact">
            <span className="footer__contact-label">Contact</span>
            <a href="tel:+919940216612" className="footer__contact-link">
              +91 99402 16612
            </a>
          </p>
          <ul className="footer__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href="#home" className="footer__social" aria-label={social.label}>
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__columns" aria-label="Footer">
          {linkColumns.map((column) => (
            <div className="footer__column" key={column.heading}>
              <h3 className="footer__heading">{column.heading}</h3>
              <ul className="footer__links">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bar">
        <div className="container">
          <p className="footer__copyright">
            © 2025 Century Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
