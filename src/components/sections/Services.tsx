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
    title: 'Core Payment Layer',
    subtitle: 'ETH-Optimized Payment Gateway',
    description:
      'Process ETH payments with maximal efficiency and robust security. Our core layer offers smart progressive fees that adjust to a user’s daily volume, built-in anti-MEV protection, and advanced security controls. Designed with a modular architecture for low gas costs and maximum reliability.',
    noteSubtitle: 'Key features',
    note:
      'Progressive volume-based fees, MEV protection, configurable daily limits, emergency pause capability, timelock for critical functions.'
  },
  {
    title: 'Advanced Extensions Suite',
    subtitle: 'Multi‑token Expansion & Advanced Functionality',
    description:
      'Unlock the protocol’s full potential with native USDT support, batch processing, and EIP‑712 signatures. This extensible suite enables multi-asset payments with the same efficiency and security as the core—while maintaining flexibility for future integrations.',
    noteSubtitle: 'Key features',
    note:
      'USDT support, batch payments, EIP‑712, extensible architecture, progressive multi‑token fees.'
  },
  {
    title: 'API & SDK Layer',
    subtitle: 'Simplified Integration & Accelerated Development',
    description:
      'Full-featured TypeScript SDK with auto-generated typings via TypeChain for seamless contract integration. Monitor real-time events, calculate fees dynamically, and integrate decentralized payments into your app with just a few lines of code.',
    noteSubtitle: 'Coming soon',
    note:
      'Robust REST API and automated onboarding system for an even smoother developer experience.'
  }
];

const Services: FC = () => {
  return (
    <article id="services" title="Services" className="services">
      <header className="services__header">
        <h2>Services</h2>
        <p>
        Discover Agoriz: the future of crypto payments, engineered for seamless integration and unmatched reliability. Our robust smart contracts fuse with a developer-friendly API, empowering businesses to effortlessly craft secure, programmable payment solutions on Ethereum and compatible chains. With our Telegram Bot showcase, see firsthand how quickly you can deploy cutting-edge payment flows. Unlock global, instant-settlement transactions with zero chargebacks by integrating the Agoriz Protocol into your apps, services, or marketplaces—revolutionizing how you transact, worldwide.
        </p>
      </header>

      <Section title="Core Architecture" className="services__infrastructure">
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
    </article>
  );
};

export default Services;
