import { type FC, type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  className?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};
