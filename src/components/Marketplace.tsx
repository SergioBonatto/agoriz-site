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
    description: 'Enterprise-grade Solidity contracts powering secure, trustless payments. Features include atomic transactions, configurable fees, multi-signature governance, real-time auditability, and built-in risk controls — designed for easy integration into any business workflow.'
  },
  {
    title: 'Telegram Business Bot',
    description: 'Production-ready Telegram bot offering instant onboarding, automated KYB/AML, escrowed P2P transactions, and real-time payment notifications — built as a reference marketplace for demonstrating Agoriz Protocol capabilities.'
  },
  {
    title: 'API & SDK Layer',
    description: 'Developer-friendly REST API and TypeScript SDK providing seamless access to Agoriz smart contract services — enabling fast integration of crypto payments into websites, mobile apps, SaaS platforms, and marketplaces.'
  }
];

const Marketplace: FC = () => {
  return (
    <article className="marketplace">
      <header className="marketplace__header">
        <h2>Agoriz Payments Infrastructure</h2>
        <p>
          Agoriz builds next-generation crypto payment rails — combining battle-tested smart contracts with an easy-to-integrate API layer.
          Our reference Telegram Bot demonstrates how businesses can quickly deploy secure, programmable payment flows on top of Ethereum or compatible chains.
          Developers can use our API and SDK to integrate Agoriz Protocol into their own apps, services, and marketplaces — unlocking global payments with instant settlement and no chargebacks.
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
