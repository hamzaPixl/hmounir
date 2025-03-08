import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-primary inline-block">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
