import { type FC } from 'react';
import Marketplace from '../sections/Marketplace';
import { Section } from '../common/Section';

interface Service {
  id: string;
  component: React.ReactNode;
}

export const Services: FC = () => {
  // This array can be expanded as more services are added
  const services: Service[] = [
    {
      id: 'marketplace',
      component: <Marketplace />
    }
    // Future services can be added here
    // { id: 'payment-gateway', component: <PaymentGateway /> },
    // { id: 'analytics', component: <Analytics /> },
  ];

  return (
    <Section id="services" title="Services" className="services">
      <div className="services__container">
        {services.map(({ id, component }) => (
          <div key={id} className="services__item">
            {component}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
