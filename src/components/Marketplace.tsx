import { type FC } from 'react';
import { Section } from './Section';
import { ComponentCard } from './ComponentCard';
import '../styles/Marketplace.css';

interface CoreComponent {
  title: string;
  description: string;
}

const coreComponents: CoreComponent[] = [
  {
    title: 'Smart Contract Layer',
    description: 'Modular Solidity-based smart contracts with multi-signature governance, automated fee handling, full auditability, and compliance tooling — designed to power secure, scalable crypto payments across any application.'
  },
  {
    title: 'Telegram Business Bot',
    description: 'A production-ready Telegram bot with secure authentication, KYB/AML automation, and real-time transaction workflows — providing a seamless P2P marketplace experience for merchants and customers.'
  }
];

const Marketplace: FC = () => {
  return (
    <article className="marketplace">
      <header className="marketplace__header">
        <h2>Agoriz Marketplace Bot</h2>
        <p>
          This bot demonstrates the capabilities of the Agoriz Protocol — combining Ethereum smart contracts with a secure Telegram interface.
          The smart contract layer will be released as a standalone API, enabling any developer or business to integrate crypto payments and trustless transactions into their products.
          The Telegram bot serves as a reference implementation built on top of this core service.
        </p>
      </header>

      <Section title="Core Architecture" className="marketplace__infrastructure">
        <div className="marketplace__grid">
          {coreComponents.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              description={component.description}
            />
          ))}
        </div>
      </Section>
    </article>
  );
};

export default Marketplace;
