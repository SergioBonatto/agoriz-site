import { type FC } from 'react';
import { Section } from '../common/Section';
import { ComponentCard } from '../common/ComponentCard';
import '../../styles/components/sections/Marketplace.css';

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
        Discover Agoriz: the future of crypto payments, engineered for seamless integration and unmatched reliability. Our robust smart contracts fuse with a developer-friendly API, empowering businesses to effortlessly craft secure, programmable payment solutions on Ethereum and compatible chains. With our Telegram Bot showcase, see firsthand how quickly you can deploy cutting-edge payment flows. Unlock global, instant-settlement transactions with zero chargebacks by integrating the Agoriz Protocol into your apps, services, or marketplaces—revolutionizing how you transact, worldwide.
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
