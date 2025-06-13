import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block font-[Fontspring]">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26]"></span>
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
