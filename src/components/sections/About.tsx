import { type FC } from 'react';
import { Section } from '../common/Section';
import '../../styles/components/sections/About.css';

export const About: FC = () => {
  return (
    <Section id="about" title="About" className="about">
      <div className="about__container">
        <p>
          Agoriz builds enterprise-grade infrastructure for the next generation of payments — secure, programmable, and borderless.
          We are redefining how value moves across the internet by enabling businesses and developers to easily integrate crypto payments into any product or platform.
        </p>
        <p>
          Inspired by the spirit of the ancient agoras — centers of commerce, community, and open exchange — we envision a financial ecosystem where transactions are decentralized, transparent, and free from unnecessary friction.
        </p>
        <p>
          Our team brings deep expertise in blockchain engineering, digital security, and product design.
          We focus on delivering robust technologies that empower businesses to operate globally with instant settlement, lower fees, and full control over their payment flows — without the risks of chargebacks, fraud, or outdated intermediaries.
        </p>
        <p>
          Agoriz solutions are built with an unwavering commitment to transparency, interoperability, and user sovereignty.
          We believe financial freedom is foundational to innovation, and we aim to contribute to an open economy where individuals and organizations can transact freely, securely, and at scale.
        </p>
        <p>
          Our mission is simple: to make advanced payment technology accessible to all — from emerging startups to established enterprises — and to help build a more open and equitable digital economy.
        </p>
      </div>
    </Section>
  );
};

export default About;
