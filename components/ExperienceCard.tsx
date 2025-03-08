import React from 'react';
import Image from 'next/image';
import { ExperienceCardProps } from '../types';

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  logoUrl
}) => {
  return (
    <div className="card mb-8">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center">
          {logoUrl && (
            <div className="w-12 h-12 relative mr-4 flex-shrink-0">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                width={48}
                height={48}
                className="rounded-md object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-dark">{title}</h3>
            <p className="text-lg font-medium text-gray-700">{company}</p>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
            {period}
          </span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      {achievements && achievements.length > 0 && (
        <div>
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
