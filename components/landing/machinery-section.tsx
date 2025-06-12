'use client';

import { motion } from 'framer-motion';
import { Cog, Factory, Shield, Zap } from 'lucide-react';

/**
 * Machinery & Infrastructure section showcasing technical capabilities
 */
export function MachinerySection() {
  const machineryList = [
    'ASB 70 DPW Machines',
    // 'NISSEI ISBM Machines', 
    'L&T PET Preform Molding',
    'SHYAM PLAST SBM MACHINES',
    'HILDA Automation (120 BPM)',
    // 'Injection Molding Machines (350 MT/month)',
    // 'Washing, flaking, and SSP units for PET recycling'
  ];

  const features = [
    {
      icon: Factory,
      title: 'Fully Automated Lines',
      description: 'Minimal human touch with advanced automation systems'
    },
    {
      icon: Shield,
      title: 'FSSAI Standards',
      description: 'Facility hygiene managed with strict food safety protocols'
    },
    {
      icon: Cog,
      title: 'Advanced Equipment',
      description: 'State-of-the-art machinery for precision manufacturing'
    },
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Optimized production lines for maximum output quality'
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Machinery &
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art equipment and fully automated production lines ensure consistent quality and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Machinery list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Equipment</h3>
            <div className="grid grid-cols-1 gap-3">
              {machineryList.map((machine, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#0476D9] to-[#AB64F2] rounded-full mr-4" />
                  <span className="text-gray-700 font-medium">{machine}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}