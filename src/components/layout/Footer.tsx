import { type FC } from 'react';
import '../../styles/components/layout/Footer.css';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const SOCIAL_LINKS = [
    {
      name: 'X',
      icon: <XIcon />,
      url: 'https://x.com/agorizbot',
      label: 'Follow us on X'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/company/agoriz',
      label: 'Connect with us on LinkedIn'
    }
  ];

 return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand-section">
            <div className="footer__brand">
              <img
                src="/images/brand/agoriz-logo.png"
                alt="Agoriz Logo"
                className="footer__logo"
              />
              <span className="footer__brand-name">Agoriz</span>
            </div>
            {/* Copyright for Desktop (below brand) */}
            <p className="footer__copyright">
              © {currentYear} Agoriz. Build the Markets They Fear.
            </p>
          </div>

          {/* Social Section */}
          <nav className="footer__social-section">
            <div className="footer__social">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="footer__social-tooltip">{link.name}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Copyright Section */}
          <div className="footer__copyright-section">
            <p className="footer__copyright">
              © {currentYear} Agoriz. Build the Markets They Fear.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
