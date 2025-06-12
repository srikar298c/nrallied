import React from 'react';

import { CheckCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimatedSection from '../AnimatedSection';
import Image from 'next/image';

const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-r from-[#F0F4F9] to-[#95D7FA]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Infrastructure"
          subtitle="State-of-the-art manufacturing facilities equipped with the latest technology"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/asb-70-dpw.png" 
                  alt="Factory Floor" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-gray-800">ASB 70 DPW machines</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/hlda-automation.png" 
                  alt="Factory Floor" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-gray-800">HILDA Automation</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/landt.png" 
                  alt="Factory Floor" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-gray-800">L&T PET Preform line</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/shyam-plast.png" 
                  alt="Factory Floor" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-gray-800">SHYAM Plast Machine</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Manufacturing Capabilities</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Machinery</h4>
                    <p className="text-gray-600">Our facilities are equipped with ASB 70 DPW machines, HILDA Automation, L&T PET Preform lines, and other cutting-edge technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Control</h4>
                    <p className="text-gray-600">Rigorous quality testing at every stage of production ensures our products meet the highest industry standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Sustainability</h4>
                    <p className="text-gray-600">Our RPET initiative utilizes FSSAI-approved recyclers to produce eco-friendly packaging solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Production Capacity</h4>
                    <p className="text-gray-600">With a combined capacity of 17 lakh bottles per day, we can handle large-scale production requirements efficiently.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-3">Certifications & Compliance</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-[#0476D9] text-sm rounded-full">ISO 9001:2015</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#0476D9] text-sm rounded-full">FSSAI Approved</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#0476D9] text-sm rounded-full">BIS Certified</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#0476D9] text-sm rounded-full">RPET Compliant</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;