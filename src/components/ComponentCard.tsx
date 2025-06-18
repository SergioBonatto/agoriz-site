import { type FC } from 'react';

interface ComponentCardProps {
  title: string;
  description: string;
}

export const ComponentCard: FC<ComponentCardProps> = ({ title, description }) => {
  return (
    <div className="marketplace__card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
