import React from 'react';
import Image from 'next/image';
import { EducationCardProps } from '../types';

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  logoUrl
}) => {
  return (
    <div className="card">
      <div className="flex items-center mb-4">
        {logoUrl && (
          <div className="w-12 h-12 relative mr-4 flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${institution} logo`}
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-dark">{degree}</h3>
          <p className="text-lg font-medium text-gray-700">{institution}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
