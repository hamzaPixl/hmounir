import React from 'react';
import Image from 'next/image';
import { SkillCardProps } from '../types';

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="card mb-6">
      <h3 className="text-xl font-semibold mb-4 text-dark">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge flex items-center">
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={16}
                height={16}
                className="mr-2"
              />
            )}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
