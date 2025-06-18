import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
     <div className="relative inline-flex flex-wrap items-center justify-center gap-x-6 overflow-visible">

        {/* Title */}
        <span className="relative z-0 font-[Fontspring] p-0 left-3 text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </span>

        {/* Highlighted Part */}
        {highlight && (
         <span
         className="relative pl-[20px] z-10 bg-gradient-to-r  right-4 from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
         style={{
           fontFamily: 'TakenByVultures, cursive',
           fontWeight: 400,
           lineHeight: '1.2', // Add some breathing room
           
           paddingTop: '1rem',
           paddingBottom: '1.5rem', // Ensures descenders like 'g', 'y' show
           filter: 'drop-shadow(0 4px 8px rgba(241, 68, 114, 0.2))',
         }}
       >
         {highlight}
       </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
