import React from 'react';
import SectionTitle from '../SectionTitle';
import AnimatedSection from '../AnimatedSection';
import ProductionCounter from '../ProductionCounter';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F0F4F9] to-[#95D7FA]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="About NR Allied"
          subtitle="Our journey from a single manufacturing unit to an umbrella corporation with multiple specialized divisions."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the leading provider of innovative and sustainable plastic packaging solutions in India, fostering long-term partnerships with our clients through quality, reliability, and continuous improvement.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We are committed to delivering high-quality plastic packaging products while minimizing environmental impact through our RPET initiatives and sustainable practices. We strive to exceed customer expectations through innovation and operational excellence.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Quality and Excellence</li>
                <li>Innovation and Adaptability</li>
                <li>Environmental Responsibility</li>
                <li>Customer Partnership</li>
                <li>Team-First Work Culture</li>
              </ul>
              
              <Button >Learn More About Us</Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Factory" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                  width={1260}
                  height={750}
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold text-gray-800">Since 2016</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Group Companies</h3>
                  <span className="text-4xl font-bold text-[#0476D9]">6</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">MT per Month</h3>
                  <span className="text-4xl font-bold text-[#0476D9]">500+</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Clients</h3>
                  <span className="text-4xl font-bold text-[#0476D9]">100+</span>
                </div>
                
                <ProductionCounter dailyCapacity={17} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;