'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, Users, Target } from 'lucide-react';

/**
 * About Us section showcasing company history and core values
 */
export function AboutSection() {
  const highlights = [
    {
      icon: Calendar,
      title: 'Founded in 2016',
      description: 'Rapid growth with focus on scale, innovation, and sustainable practices'
    },
    {
      icon: Building2,
      title: 'Multi-State Presence',
      description: 'Expanding with new plants in Rajahmundry, Maharashtra, and Chennai'
    },
    {
      icon: Users,
      title: 'Team-First Culture',
      description: 'Centralized quality control with advanced in-house design capabilities'
    },
    {
      icon: Target,
      title: 'Core Expertise',
      description: 'PET preforms, bottles, closures, injection molding, ISBM, and RPET production'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              NR Allied
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NR Allied is a diversified group of plastic packaging companies with six specialized units. 
            Since our founding in 2016,  we&rsquo;ve grown with an unwavering focus on scale, innovation, and sustainable practices.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <highlight.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#F0F4F9] to-[#95D7FA]/20 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our core expertise spans PET preforms, bottles, closures, injection molding, ISBM, and RPET-based production. 
            With a presence across multiple states and new plants planned in key locations, we maintain a team-first culture 
            with centralized quality control and advanced design and prototyping capabilities in-house.
          </p>
        </motion.div>
      </div>
    </section>
  );
}