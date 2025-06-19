import { type FC } from 'react';

interface SpecificationCardProps {
  title: string;
  items: string[];
}

export const SpecificationCard: FC<SpecificationCardProps> = ({ title, items }) => {
  return (
    <div className="marketplace__card">
      <h3>{title}</h3>
      <ul className="marketplace__list">
        {items.map((item, index) => (
          <li key={index} className="marketplace__list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
