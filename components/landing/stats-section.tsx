'use client';

import { motion } from 'framer-motion';
import { StatsCard } from './stats-card';
import { Package, Building2, Leaf } from 'lucide-react';

/**
 * Key statistics section showcasing company capabilities
 * Features three animated cards with production stats
 */
export function StatsSection() {
  const stats = [
    {
      icon: Package,
      value: '17L+ Bottles',
      description: 'Daily production capacity with state-of-the-art manufacturing equipment and optimized processes.',
    },
    {
      icon: Building2,
      value: '6 Specialized Units',
      description: 'Dedicated manufacturing facilities each optimized for specific product categories and quality standards.',
    },
    {
      icon: Leaf,
      value: 'RPET & FSSAI Certified',
      description: 'Sustainable manufacturing with recycled PET materials and food-grade safety certifications.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F9]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Manufacturing Excellence
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              by the Numbers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and scale delivers consistent results that power India&rsquo;s leading brands.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              description={stat.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}