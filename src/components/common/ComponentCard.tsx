import { type FC } from 'react';

interface ComponentCardProps {
  title: string;
  subtitle: string;
  description: string;
  noteSubtitle: string;
  note: string;
}

export const ComponentCard: FC<ComponentCardProps> = ({ title, subtitle, description,noteSubtitle, note }) => {
  return (
    <div className="services__card">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <p className="services__note"><span className="services__note-subtitle">{noteSubtitle}:</span> {note}</p>

    </div>
  );
};
