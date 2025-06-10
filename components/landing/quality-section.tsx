'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, Microscope, Recycle, FileCheck, Target } from 'lucide-react';

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

  const certifications = [
    'FSSAI Approved',
    'BIS Certified',
    'ISO Compliant',
    'Food Grade Safety',
    'Hygiene Standards',
    'Environmental Compliance'
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
            Quality Control
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is unwavering, with multi-stage quality control systems, 
            certified processes, and sustainability-focused manufacturing practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quality features */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Our Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center p-3 bg-gradient-to-r from-[#0476D9]/5 to-[#AB64F2]/5 rounded-lg border border-[#0476D9]/10"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#0476D9] to-[#AB64F2] rounded-full mr-3" />
                    <span className="text-gray-700 font-medium text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-6 bg-gradient-to-br from-[#0476D9]/10 to-[#AB64F2]/10 rounded-xl border border-[#0476D9]/20"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Sanitary Facility Layout
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our facilities feature sanitary layout design with comprehensive process mapping, 
                ensuring the highest standards of hygiene and safety throughout production.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}