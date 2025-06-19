'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, Microscope, Recycle, FileCheck, Target } from 'lucide-react';
import SectionTitle from '../SectionTitle';

/**
 * Quality Control section highlighting certifications and processes
 */
export function QualitySection() {
  const qualityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Stage QC System',
      description: 'Comprehensive quality control from raw material inspection to final product testing'
    },
    {
      icon: CheckCircle,
      title: 'FSSAI-Approved RPET',
      description: 'Certified recycled PET usage meeting food safety and hygiene standards'
    },
    {
      icon: FileCheck,
      title: 'Multiple Certifications',
      description: 'BIS, FSSAI, and ISO compliant manufacturing processes and facilities'
    },
    {
      icon: Microscope,
      title: 'On-Site Testing Labs',
      description: 'Advanced material testing laboratories for real-time quality assurance'
    },
    {
      icon: Target,
      title: 'Strict Traceability',
      description: 'Complete batch control and traceability throughout the production process'
    },
    {
      icon: Recycle,
      title: 'Closed-Loop Recycling',
      description: 'Sustainability-focused closed-loop PET recycling system implementation'
    }
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
          <SectionTitle
          title="Quality Control "
          highlight="Excellence"
          subtitle=""
        />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is unwavering, with multi-stage quality control systems, 
            certified processes, and sustainability-focused manufacturing practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1  gap-12">
          {/* Quality features */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications sidebar */}
          
        </div>
      </div>
    </section>
  );
}