import React from 'react';

import { ArrowRight, Factory } from 'lucide-react';
import { Division } from '@/types/division';

interface DivisionCardProps {
  division: Division;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ division }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="h-2 bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26]"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{division.name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-[#0476D9] text-sm font-medium rounded-full">
            Est. {division.year}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{division.specialization}</p>
        
        <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden group-hover:overflow-visible group-hover:mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Machines:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {division.machines.map((machine, index) => (
              <li key={index}>{machine}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Factory size={16} className="mr-1" />
            <span>{division.location}</span>
          </div>
          <div>
            <span className="font-medium text-[#0476D9]">{division.dailyCapacity}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
            {division.category}
          </span>
          <button className="text-[#0476D9] flex items-center text-sm font-medium transition-all duration-200 group-hover:translate-x-1">
            Learn more <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;