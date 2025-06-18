import { type FC } from 'react';
import '../styles/Footer.css';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <img
              src="/agoriz-logo.png"
              alt="Agoriz Logo"
              className="footer__logo"
            />
            <span className="footer__brand-name">Agoriz</span>
          </div>
          <p className="footer__copyright">
            © {currentYear} Agoriz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
