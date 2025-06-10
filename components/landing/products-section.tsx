'use client';

import { motion } from 'framer-motion';
import { Package, PillBottle, CircleDot, Container, Droplets, Recycle, Palette, Cuboid } from 'lucide-react';

/**
 * Product Range section showcasing comprehensive product offerings
 */
export function ProductsSection() {
  const products = [
    {
      icon: Package,
      title: 'PET Preforms',
      description: 'Various sizes for liquor, FMCG, and pharmaceutical applications'
    },
    {
      icon: PillBottle,
      title: 'JMFL Bottles',
      description: 'Indian-made foreign liquor bottles with premium quality standards'
    },
    {
      icon: CircleDot,
      title: 'Closures & Caps',
      description: 'Custom molds available for specialized closure requirements'
    },
    {
      icon: Container,
      title: 'PET Jars & Containers',
      description: 'Food-grade containers for dry snacks, pharmaceuticals, and more'
    },
    {
      icon: Droplets,
      title: 'Blown Bottles',
      description: 'For beverages, dairy products, and edible oil packaging'
    },
    {
      icon: Recycle,
      title: 'RPET-Based Products',
      description: 'Sustainable bottles and jars made from recycled PET materials'
    },
    {
      icon: Palette,
      title: 'Custom Solutions',
      description: 'Tailored packaging solutions with comprehensive design support'
    },
    {
      icon: Cuboid,
      title: '3D Prototypes',
      description: 'Rapid prototyping available on request for product development'
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
            Comprehensive
            <span className="block bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
              Product Range
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From PET preforms to custom packaging solutions, we deliver comprehensive plastic packaging 
            products tailored to diverse industry needs.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0476D9]/5 to-[#AB64F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#0476D9] to-[#0366c7] text-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <product.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0476D9] transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0476D9]/10 to-transparent rounded-bl-full opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need a custom solution? Our design team works closely with clients to develop 
            tailored packaging solutions that meet specific requirements and industry standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}