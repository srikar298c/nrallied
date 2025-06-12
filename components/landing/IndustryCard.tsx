import { Industry } from '@/types/division';
import React from 'react';
import { Button } from '../ui/button';


interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${industry.image})` }}
      >
        <div className="h-full w-full bg-black bg-opacity-30 flex items-end p-6">
          <h3 className="text-xl font-bold text-white">{industry.name}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-4">{industry.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Products:</h4>
          <div className="flex flex-wrap gap-2">
            {industry.products.map((product, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-[#0476D9] text-sm rounded-full"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
        
        {industry.clients && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-700 mb-2">Clients:</h4>
            <div className="flex flex-wrap gap-2">
              {industry.clients.map((client, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Button variant="secondary" size="sm" className="w-full">
            Explore Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;