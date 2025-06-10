'use client';

import { motion } from 'framer-motion';

interface BrandLogoCardProps {
  /** Company name for the logo placeholder */
  companyName: string;
  /** Animation delay for staggered entrance */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Brand logo placeholder card with hover animations
 * Displays company name as placeholder for actual logos
 */
export function BrandLogoCard({
  companyName,
  delay = 0,
  className = '',
}: BrandLogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 p-8 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0476D9]/5 to-[#AB64F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo placeholder */}
      <div className="relative z-10 flex items-center justify-center h-16">
        <div className="text-lg font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {companyName}
        </div>
      </div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-xl border border-[#0476D9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}