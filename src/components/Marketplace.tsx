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
    description: 'Robust Solidity-based smart contracts with multi-signature governance, automated fee management, auditability, and compliance tooling — enabling institutional-grade security.'
  },
  {
    title: 'Telegram Business Bot',
    description: 'Battle-tested Telegram interface featuring secure authentication, KYB/AML automation, and real-time transaction workflows — providing merchants and clients with a frictionless experience.'
  }
];

const Marketplace: FC = () => {
  return (
    <article className="marketplace">
      <header className="marketplace__header">
        <h2>Agoriz Marketplace Bot</h2>
        <p>
          A professional-grade decentralized marketplace built on the Agoriz Protocol — combining Ethereum smart contracts with a secure, fully integrated Telegram bot.
          This bot serves as a production-ready reference implementation, enabling merchants to list digital goods and customers to purchase them through seamless, trustless P2P transactions.
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
