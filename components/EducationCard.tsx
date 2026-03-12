import React from 'react';
import Image from 'next/image';
import { EducationCardProps } from '../types';

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, period, logoUrl }) => {
  return (
    <div className="flex items-center gap-3">
      {logoUrl && (
        <Image
          src={logoUrl}
          alt={`${institution} logo`}
          width={36}
          height={36}
          className="rounded object-contain flex-shrink-0"
        />
      )}
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{degree}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {institution}
          {period && <span className="text-gray-400 dark:text-gray-600"> · {period}</span>}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
