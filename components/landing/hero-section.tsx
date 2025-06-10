'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from './animated-counter';
import { ArrowRight, Factory } from 'lucide-react';

/**
 * Hero section with animated tagline, description, and production counter
 * Features gradient backgrounds and smooth entrance animations
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F4F9] via-[#F8FBFF] to-[#95D7FA]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0476D9]/10 to-[#AB64F2]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#F14472]/10 to-[#F24C26]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        >
          <span className="block text-gray-900 mb-4">
            We mold not just plastic —
          </span>
          <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
            but partnerships.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          NR Allied stands as India&rsquo;s premier plastic packaging manufacturer, crafting sustainable solutions 
          that power leading FMCG and pharmaceutical brands with precision, quality, and unwavering reliability.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Button 
            size="lg" 
            className="bg-[#0476D9] hover:bg-[#0366c7] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__pulse animate__infinite animate__slow group"
          >
            Explore Our Divisions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>

        {/* Production counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 shadow-lg"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white">
            <Factory className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-gray-900">
              <AnimatedCounter target={17} suffix="L+ Bottles" />
            </div>
            <div className="text-sm text-gray-600">Daily Production Capacity</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}