// 'use client'

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import SectionTitle from '../SectionTitle';

// interface Product {
//   name: string;
//   imageSrc: string;
//   description?: string; // Optional for more detail if needed
// }

// const productData: Product[] = [
//   { name: 'Water Grade Bottles', imageSrc: '/images/water-bottles.png' },
//   { name: 'Oil Grade Containers', imageSrc: '/images/oil-containers.png' },
//   { name: 'Confectionery Grade Containers', imageSrc: '/images/confectionery-containers.png' },
//   { name: 'Pharmaceutical Grade Bottles', imageSrc: '/images/pharma-bottles.png' },
//   { name: 'Spirits & Beverage Grade Bottles', imageSrc: '/images/beverage-bottles.png' },
//   { name: 'Caps & Closures', imageSrc: '/images/caps-closures.png' },
// ];

// // Framer Motion Variants for staggered animation
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08, // Slightly faster stagger for more cards
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0, scale: 0.95 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 10,
//     },
//   },
// };

// export default function ProductsSection() {
//   return (
//     <section className="bg-gradient-to-br from-[#E0F2FE] to-[#C2E0FF] py-16 sm:py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
//         <SectionTitle
//           title="OUR "
//           highlight="PRODUCTS"
//           subtitle="Explore our extensive range of high-quality packaging solutions, meticulously crafted to meet diverse industry needs."
//         />

//         <motion.div
//           className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2 gap-8 md:gap-10 mt-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }} // Animate once when 15% of element is in view
//         >
//           {productData.map((product, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between items-center p-6 border border-gray-100 transform hover:-translate-y-2"
//               variants={itemVariants}
//             >
//               {/* Product Image Container */}
//               <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[300px] mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-gray-50 p-4"> {/* Added bg-gray-50 and padding for image backdrop */}
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   className="object-contain" // Ensures image fits without cropping
//                   sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
//                   priority={index < 3} // Prioritize loading for the first few visible cards
//                 />
//               </div>

//               {/* Product Name */}
//               <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-2">
//                 {product.name}
//               </h3>

//               {/* Optional Description (uncomment if you add descriptions to productData) */}
//               {/* {product.description && (
//                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center mb-4">
//                   {product.description}
//                 </p>
//               )} */}

//               {/* Call to Action Button */}
//               {/* <button className="mt-4 px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
//                 Learn More
//               </button> */}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }