import { type FC } from 'react';
import { Section } from './Section';
import '../styles/Team.css';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  bio: string;
  github?: string;
}

const teamMembers: TeamMember[] = [

  {
    image: './member2.jpg',
    name: 'Gleizi Barbosa',
    role: 'Software Engineer',
    bio: `Software engineer passionate about low-level programming, compilers, and the open-source world.
          Explores decentralized, self-hosted technologies and loves understanding how things work under the hood.
          Deeply interested in libertarian ethics, epistemology, and the philosophy of mind.`,
  },
    {
    image: './member1.jpg',
    name: 'Sergio Bonatto',
    role: 'Software Engineer',
    bio: `Software engineer focused on blockchain, decentralized systems, and smart contracts.
          Passionate about formal verification, functional programming, and the philosophy of technology.
          Believer in open markets, individual freedom, and the power of well-designed code to shape the world.`,
  },
];

export const Team: FC = () => {
  return (
    <Section id="team" title="Team" className="team">
      <div className="team__container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team__member" data-testid="team-member">
            <div className="team__member-card">
              <img
                src={member.image}
                alt={`${member.name} profile`}
                className="team__photo"
                loading="lazy"
              />
              <h3 className="team__name">{member.name}</h3>
              <span className="team__role">{member.role}</span>
              <p className="team__bio">{member.bio}</p>
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team__github"
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  View GitHub Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
