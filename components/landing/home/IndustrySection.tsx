'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
 // Assuming SectionTitle is in the same 'components' directory now

interface Industry {
  category: string;
  imageSrc: string;
  title: string;
  description: string;
}

const industryData: Industry[] = [
  {
    category: 'FMCG',
    imageSrc: '/images/fmcg.png', // Replace with your actual image path
    title: 'Fast-moving consumer goods',
    description: 'Packaging solutions including bottles for personal care, home care, and food products.',
  },
  {
    category: 'OIL',
    imageSrc: '/images/oil.png', // Replace with your actual image path
    title: 'Robust and leak-proof packaging',
    description: 'Tailored for the transportation and storage of various edible and industrial oils.',
  },
  {
    category: 'PHARMA',
    imageSrc: '/images/pharma.png', // Replace with your actual image path
    title: 'High-grade, sterile packaging solutions',
    description: 'Ensuring safety and compliance for medical and health-related products.',
  },
  {
    category: 'BEVERAGE SPIRITS',
    imageSrc: '/images/beverage-spirits.png', // Replace with your actual image path
    title: 'Beverage and spirits packaging',
    description: 'Specialized solutions for the beverage and spirits industry, ensuring product integrity and compliance.',
  },
];

// Framer Motion Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function IndustrySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <SectionTitle
          title="INDUSTRIES "
          highlight="WE SERVE"
          subtitle="Specialized packaging solutions for diverse industry requirements"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
        >
          {industryData.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image and Category */}
                <div className="relative w-full md:w-2/5 aspect-[3/2] md:aspect-auto md:h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={industry.imageSrc}
                    alt={industry.category}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2} // Prioritize loading for the first two cards
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 z-10">
                    {industry.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5 text-left">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>
                  <button className="self-start px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-base font-medium">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}