import React from 'react';
import Image from 'next/image';
import { SkillCardProps } from '../types';

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="card">
      <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={14}
                height={14}
                className="mr-1.5"
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
