'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  /** Icon component from lucide-react */
  icon: typeof LucideIcon;
  /** Main statistic value */
  value: string;
  /** Description text */
  description: string;
  /** Animation delay for staggered entrance */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated statistics card with icon, value, and description
 * Features hover effects and entrance animations
 */
export function StatsCard({
  icon: Icon,
  value,
  description,
  delay = 0,
  className = '',
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
          {value}
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0476D9]/10 to-transparent rounded-bl-full opacity-50" />
    </motion.div>
  );
}