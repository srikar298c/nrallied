'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import SectionTitle from '../SectionTitle'
import AnimatedSection from '../AnimatedSection'
import Image from 'next/image'

interface Machine {
  src: string
  label: string
  upcoming?: boolean
}

const machines: Machine[] = [
  { src: '/images/asb-70-dpw.png', label: 'ASB 70 DPW Machine' },
  { src: '/images/asb-50-mb.png', label: 'ASB 50 MB Machine' },
  { src: '/images/techno-robo-packing.png', label: 'Techno Robo Automatic Packing Machine' },
  { src: '/images/kaesar-air-compressor.png', label: 'Kaesar Air Compressor' },
  { src: '/images/hlda-automation.png', label: 'HILDA Automation System' },
  { src: '/images/landt.png', label: 'L&T PET Preform Line' },
  { src: '/images/shyam-plast.png', label: 'SHYAM Plast Machine' },
  { src: '/images/upcoming-asb-70dph.png', label: 'Upcoming Machine ASB 70DPH', upcoming: true },
]

const features = [
  {
    title: 'Advanced Machinery',
    description:
      'Our plants are equipped with high-performance ASB 70 DPW machines, L&T PET Preform lines, and HILDA Automation systems—designed to deliver precision, speed, and consistency across production.',
  },
  {
    title: 'Quality Control',
    description:
      'We follow a multi-stage quality inspection process across all units to ensure every product meets the highest industry benchmarks for safety, durability, and finish.',
  },
  {
    title: 'Sustainability',
    description:
      'Through our RPET initiative, we use recycled PET sourced from FSSAI-compliant recyclers, contributing to a circular economy without compromising product integrity.',
  },
  {
    title: 'Production Capacity',
    description:
      'With a combined output of over 1.7 million bottles per day, NR Allied is equipped to manage large-scale packaging demands across multiple sectors with speed and reliability.',
  },
]

const InfrastructureSection: React.FC = () => {
  return (
    <section
      id="infrastructure"
      className="py-20 bg-gradient-to-r from-[#F0F4F9] to-[#95D7FA] overflow-visible"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our "
          highlight="Infrastructure"
          subtitle="State-of-the-art manufacturing facilities equipped with the latest technology"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* LEFT COLUMN */}
          <AnimatedSection direction="right">
            <div>
              {/* Top 4 machines: 2×2 grid */}
              <div className="grid grid-cols-2 gap-6">
              {machines.slice(0, 4).map(({ src, label }, idx) => (
                <div
                key={idx}
                className="rounded-lg overflow-hidden shadow-md border bg-white flex flex-col items-center p-4"
                >
                <div className="w-full h-[180px] relative">
                  <Image
                  src={src}
                  alt={label}
                  fill
                  className="object-contain p-2"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-gray-800">
                  {label}
                </p>
                </div>
              ))}
              </div>

              {/* Next 2 machines: horizontal row */}
              <div className="mt-20 flex justify-evenly space-x-6">
              {machines.slice(4, 8).map(({ src, label, upcoming }, idx) => (
                  <div
                  key={idx + 4}
                  className="relative rounded-lg overflow-hidden shadow-md border bg-white flex flex-col items-center p-4 group"
                >
                  {upcoming && (
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded">
                      Upcoming
                    </span>
                  )}
                  <div className="w-full h-[180px] relative">
                    <Image
                      src={src}
                      alt={label}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm font-medium text-gray-800">
                    {label}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <AnimatedSection direction="left">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Manufacturing Capabilities
                </h3>
                <div className="space-y-6">
                  {features.map(({ title, description }, idx) => (
                    <div className="flex items-start" key={idx}>
                      <CheckCircle className="text-[#0476D9] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {title}
                        </h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Bottom right: last 2 machines in a row */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureSection
