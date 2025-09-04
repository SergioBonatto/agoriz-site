import { type FC } from 'react';
import { Section } from '../common/Section';
import '../../styles/components/sections/About.css';

export const About: FC = () => {
  return (
    <Section id="about" title="About" className="about">
      <div className="about__container">
        <p>
          <strong className="note--black">Crypto payments are broken.</strong> Most solutions force an impossible choice: trust someone else with your money, or build everything from scratch. We built Agoriz because there had to be a better way.
        </p>
        <p>
          Agoriz is a zero-custody DeFi protocol that processes payments without ever touching your funds. No frozen accounts, no "we got hacked" emails, no bureaucracy. Just direct peer-to-peer transactions with enterprise-grade protection against bots, MEV attacks, and abuse.
        </p>
        <p>
          What makes us different? We're obsessed with the details others ignore. Dynamic fee structures that reward honest merchants. Commit-reveal schemes that stop front-running. Circuit breakers that pause attacks in real-time. Modular architecture that adapts to any blockchain without compromising security.
        </p>
        <p>
          Our name comes from the ancient Greek <em className='note--black'>agora</em> — the marketplace where anyone could trade freely, without gatekeepers or intermediaries. That's exactly what we're building for digital payments: an open protocol where your money stays yours, your transactions can't be censored, and fair pricing rewards everyone who plays by the rules.
        </p>
        <p>
          Founded by blockchain engineers with battle-tested experience in formal verification and decentralized systems, we're not here to reinvent payments — we're here to fix them. Starting with P2P marketplaces, expanding to any business that wants to accept crypto the right way.
        </p>
        <p>
          <strong className="note--black">The future of payments is programmable, permissionless, and yours to control.</strong> We're just building the infrastructure to make it inevitable.
        </p>
      </div>
    </Section>
  );
};

export default About;
