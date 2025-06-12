'use client';

import { motion } from 'framer-motion';
import { BrandLogoCard } from './brand-logo-card';

/**
 * Brand trust section showcasing client partnerships
 * Features animated logo placeholders in a responsive grid
 */
export function BrandTrustSection() {
  const brandPartners = [
    'Hindustan Unilever',
    'Dabur India',
    'Marico Limited',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F0F4F9] via-white to-[#95D7FA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by India&rsquo;s
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From FMCG to Pharmaceuticals — our partnerships speak volumes about our commitment to quality and reliability.
          </p>
        </motion.div>

        {/* Brand logos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPartners.map((brand, index) => (
            <BrandLogoCard
              key={index}
              companyName={brand}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our manufacturing expertise and commitment to sustainability have made us the preferred partner 
            for companies that demand the highest standards in plastic packaging solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}