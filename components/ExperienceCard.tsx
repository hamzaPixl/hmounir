import React from 'react';
import Image from 'next/image';
import { ExperienceCardProps } from '../types';

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  logoUrl,
}) => {
  return (
    <div className="flex gap-5">
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-accent ring-[3px] ring-white dark:ring-[#0a0a0a] mt-1.5" />
        <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 mb-2">
          {logoUrl && (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={28}
              height={28}
              className="rounded object-contain"
            />
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {company} · {period}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-gray-500 dark:text-gray-400 pl-3.5 relative">
                <span className="absolute left-0 top-[9px] w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
