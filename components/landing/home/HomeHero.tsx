import React from 'react';

import { ArrowDown, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We mold not just plastic — <span className="bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">but partnerships.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            NR Allied provides premium plastic packaging solutions across multiple industries with a production capacity of 17 lakh bottles per day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className='py-2 px-4' >
              Get in Touch
            </Button>
            <Button variant="secondary"  className='px-4 py-2' >
              Explore Our Divisions
            </Button>
          </div>
          
          <div className="mt-16 flex items-center">
            <div className="flex -space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png?20110306042056" alt="Client" className="w-12 h-12 rounded-full border-2 border-white bg-white" />
              <img src="https://mma.prnewswire.com/media/1332039/Dukes_India_Logo.jpg?w=200" alt="Client" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="https://upload.wikimedia.org/wikipedia/en/0/08/Kingfisher_beer_logo.png" alt="Client" className="w-12 h-12 rounded-full border-2 border-white bg-red-500" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZLwCyQN233VIVCAqULzGrJQK0OlDAu2EPQ&s" alt="Client" className="w-12 h-12 rounded-full border-2 border-white" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#0476D9] flex items-center justify-center text-white font-bold">
                20+
              </div>
            </div>
            <p className="ml-4 text-white">Trusted by leading brands across India</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce">
        <Link href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;