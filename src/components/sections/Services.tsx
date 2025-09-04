import { type FC } from 'react';
import { Section } from '../common/Section';
import { ComponentCard } from '../common/ComponentCard';
import '../../styles/components/sections/Services.css';

interface CoreComponent {
  title: string;
  subtitle: string;
  description: string;
  noteSubtitle: string;
  note: string;
}

const coreComponents: CoreComponent[] = [
  {
    title: 'Zero-Custody Core',
    subtitle: 'Your Money Never Leaves Your Control',
    description:
      'Process ETH payments without ever giving up custody. Our core protocol includes dynamic fees that reward honest merchants (3-7%), real-time bot protection, and circuit breakers that pause attacks automatically. Built lean and auditable — because your security can\'t depend on complexity.',
    noteSubtitle: 'What you get',
    note:
      'True zero-custody, anti-MEV protection, fair dynamic pricing, emergency controls, battle-tested security.'
  },
  {
    title: 'Multi-Token Power',
    subtitle: 'ETH, USDT, and Beyond',
    description:
      'Accept digital dollars (USDT) and ETH with the same security guarantees. Batch multiple payments to save gas, use gasless signatures for better UX, and scale across any EVM chain. One protocol, unlimited possibilities.',
    noteSubtitle: 'What you get',
    note:
      'USDT support, gas-efficient batching, EIP-712 signatures, multi-chain ready, extensible architecture.'
  },
  {
    title: 'Developer Experience',
    subtitle: 'From Concept to Live in Minutes',
    description:
      'TypeScript SDK with full type safety, real-time event monitoring, and automatic fee calculations. Whether you\'re building a marketplace, service platform, or DeFi protocol — integrate Agoriz payments with just a few function calls.',
    noteSubtitle: 'Coming soon',
    note:
      'REST APIs, auto-generated documentation, one-click deployment tools, and pre-built UI components.'
  }
];

const Services: FC = () => {
  return (
    <article id="services" title="Services" className="services">
      <header className="services__header">
        <h2>How Agoriz Works</h2>
        <p>
          Stop choosing between security and simplicity. Agoriz gives you both: enterprise-grade payment infrastructure that's as easy to use as calling a smart contract. No custody risks, no bureaucracy, no compromise — just crypto payments that finally make sense for real businesses.
        </p>
      </header>

      <Section title="Built in Layers, Deployed as One" className="services__infrastructure">
        <div className="services__grid">
          {coreComponents.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              subtitle={component.subtitle}
              description={component.description}
              noteSubtitle={component.noteSubtitle}
              note={component.note}
            />
          ))}
        </div>
      </Section>

      <div className="services__cta">
        <h3>Ready to Build?</h3>
        <p>
          The protocol is live on mainnet. Smart contracts are deployed. TypeScript types are ready.
          <br />
          <strong>Your next crypto payment integration starts here.</strong>
        </p>
      </div>
    </article>
  );
};

export default Services;
