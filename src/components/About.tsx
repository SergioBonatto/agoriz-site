import { type FC } from 'react';
import { Section } from './Section';
import '../styles/About.css';

export const About: FC = () => {
  return (
    <Section id="about" title="About" className="about">
      <div className="about__container">
        <p>
          Agoriz is a company dedicated to building technologies that make payments and exchanges more open, efficient, and secure.
          Inspired by the spirit of the ancient agoras — spaces of free commerce and debate — we believe in a future where transactions are decentralized, accessible, and programmable.
        </p>
        <p>
          Our team combines expertise in blockchain, digital security, and product design to develop solutions that enhance economic freedom and user autonomy.
          We continuously pursue technical excellence, transparency, and respect for the communities we serve.
        </p>
        <p>
          We are committed to contributing to a fairer financial ecosystem where individuals and businesses can operate without unnecessary barriers and with full control over their assets.
        </p>
      </div>
    </Section>
  );
};

export default About;
