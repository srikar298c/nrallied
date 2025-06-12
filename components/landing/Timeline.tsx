import { TimelineItem } from '@/types/division';
import React, { useState, useEffect } from 'react';


interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [items.length]);
  
  return (
    <div className="relative py-12">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      
      {/* Timeline Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative z-10 mb-12 transition-all duration-500 ${
            index === activeIndex ? 'scale-105' : 'scale-100'
          }`}
        >
          <div 
            className={`flex items-center justify-center w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              index === activeIndex
                ? 'bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26]'
                : 'bg-[#0476D9]'
            }`}
          >
            <span className="text-white text-xs font-bold">{item.year}</span>
          </div>
          
          <div 
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} px-6 py-4`}>
              <div 
                className={`p-6 rounded-lg shadow-md bg-white transition-all duration-300 ${
                  index === activeIndex ? 'shadow-xl' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                {item.capacity && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-[#0476D9] font-medium">Capacity: {item.capacity}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;