import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <div className="flex items-center gap-2.5 mb-14">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500">
              {title}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
