import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimatedSection from '../AnimatedSection';
import Image from 'next/image';

const machines = [
  {
    src: '/images/asb-70-dpw.png',
    label: 'ASB 70 DPW machines',
  },
  {
    src: '/images/hlda-automation.png',
    label: 'HILDA Automation',
  },
  {
    src: '/images/landt.png',
    label: 'L&T PET Preform line',
  },
  {
    src: '/images/shyam-plast.png',
    label: 'SHYAM Plast Machine',
  },
];

const features = [
  {
    title: 'Advanced Machinery',
    description:
      'Our plants are equipped with high-performance ASB 70 DPW machines, L&T PET Preform lines, and HILDA Automation systems—designed to deliver precision, speed, and consistency across production.',
  },
  {
    title: 'Quality Control',
    description:
      'We follow a multi-stage quality inspection process across all units to ensure every product meets the highest industry benchmarks for safety, durability, and finish.',
  },
  {
    title: 'Sustainability',
    description:
      'Through our RPET initiative, we use recycled PET sourced from FSSAI-compliant recyclers, contributing to a circular economy without compromising product integrity.',
  },
  {
    title: 'Production Capacity',
    description:
      'With a combined output of over 17 lakh bottles per day, NR Allied is equipped to manage large-scale packaging demands across multiple sectors with speed and reliability.',
  },
];

const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="py-20 bg-gradient-to-r from-[#F0F4F9] to-[#95D7FA] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Infrastructure"
          subtitle="State-of-the-art manufacturing facilities equipped with the latest technology"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
            {machines.map(({ src, label }, idx) => (
  <div
    key={idx}
    className="rounded-lg overflow-hidden shadow-md border bg-white flex flex-col items-center"
  >
    <div className="w-full h-[220px] relative">
      <Image
        src={src}
        alt={label}
        width={300}
        height={180}
        className="object-contain w-full h-full p-2"
      />
    </div>
    <div className="p-3 w-full text-center">
      <p className="text-sm font-medium text-gray-800">{label}</p>
    </div>
  </div>
))}

            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Manufacturing Capabilities</h3>
              <div className="space-y-6">
                {features.map(({ title, description }, idx) => (
                  <div className="flex items-start" key={idx}>
                    <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
