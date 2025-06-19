import { type FC } from 'react';
import { Section } from '../common/Section';
import '../../styles/components/sections/Contact.css';

// Define contact information as constants for easy maintenance
const CONTACT_INFO = {
  xProfile: 'https://x.com/agorizbot',
  linkedIn: 'https://www.linkedin.com/company/agoriz',
  xHandle: '@agorizbot',
};

export const Contact: FC = () => {
  return (
    <Section id="contact" title="Contact" className="contact">
      <div className="contact__container">
        <p className="contact__description">
          Have questions or want to connect? Reach out to us on our social platforms:
        </p>
        <ul className="contact__list">
          <li className="contact__item">
            <a
              href={CONTACT_INFO.xProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="Follow us on X"
            >
              <span className="contact__platform">X</span>: {CONTACT_INFO.xHandle}
            </a>
          </li>
          <li className="contact__item">
            <a
              href={CONTACT_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="Connect with us on LinkedIn"
            >
              <span className="contact__platform">LinkedIn</span>: Agoriz
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
