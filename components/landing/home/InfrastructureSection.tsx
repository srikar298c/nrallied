'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import SectionTitle from '../SectionTitle'

interface Machine {
  src: string
  label: string
  upcoming?: boolean
}

const machines: Machine[] = [
  { src: '/images/asb-70-dpw.png', label: 'ASB 70 DPW Machine' },
  { src: '/images/asb-50-mb.png', label: 'ASB 50 MB Machine' },
  { src: '/images/upcoming-asb-70dph.png', label: 'Machine ASB 70DPH', upcoming: true },
  { src: '/images/techno-robo-packing.png', label: 'Techno Robo Automatic Packing Machine' },
  { src: '/images/shyam-plast.png', label: 'SHYAM Plast Machine' },
  { src: '/images/hlda-automation.png', label: 'HILDA Automation System' },
  { src: '/images/landt.png', label: 'L&T PET Preform Line' },
  { src: '/images/kaesar-air-compressor.png', label: 'Kaesar Air Compressor' },
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
      'With a combined output of over 17 lakh bottles per day, NR Allied is equipped to manage large-scale packaging demands across multiple sectors with speed and reliability.',
  },
]

// ✅ Machine card component
const ImageCard = ({ m }: { m: Machine }) => (
  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
    <Image src={m.src} alt={m.label} fill className="object-contain" />
    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 bg-white text-xs px-3 py-1 rounded-md outline outline-gray-400">
      {m.label}
    </span>
    {m.upcoming && (
      <span className="absolute top-2 right-2 bg-pink-600 text-white text-[0.65rem] px-2 py-0.5 rounded">
        UPCOMING
      </span>
    )}
  </div>
)

export default function InfrastructureSection() {
  const [showAllMobile, setShowAllMobile] = useState(false)

  // Device‑specific slicing
  const leftMachines = machines.slice(0, 2)
  const rightMachines = machines.slice(2, 4)
  const bottomMachinesDesktop = machines.slice(4)
  //const bottomMachinesMobile = showAllMobile ? bottomMachinesDesktop : machines.slice(4, 6)

  return (
    <section className="bg-gradient-to-b from-[#F0F4F9] to-[#95D7FA] py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <SectionTitle
          title="Our "
          highlight="Infrastructure"
          subtitle="Discover our state‑of‑the‑art manufacturing facilities, meticulously equipped with the latest technology to ensure unparalleled precision, efficiency, and quality in every product."
        />

        {/* 💠 Desktop Grid: 3 Columns */}
        <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] gap-12 mt-12 items-start">
          {/* Left */}
          <div className="flex flex-col items-center space-y-8">
            {leftMachines.map((m, i) => <ImageCard key={i} m={m} />)}
          </div>

          {/* Center Features */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8 text-left">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-4">
                <CheckCircle className="text-[#0476D9] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">{f.title}</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col items-center space-y-8">
            {rightMachines.map((m, i) => <ImageCard key={i} m={m} />)}
          </div>
        </div>

        {/* 💠 Mobile Grid: Features on Top, Machines Below */}
        <div className="lg:hidden mt-12">
  {/* Features */}
  <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-8 text-left">
    {features.map((f, i) => (
      <div key={i} className="flex items-start space-x-3">
        <CheckCircle className="text-[#0476D9] mt-1" size={20} />
        <div>
          <h4 className="font-semibold text-gray-800 text-base">{f.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
        </div>
      </div>
    ))}
  </div>

        {/* ✅ Mobile: Show all machines if toggled */}
  <div className="mt-12 flex flex-wrap justify-center gap-10">
    {(showAllMobile ? machines : machines.slice(0, 4)).map((m, i) => (
      <ImageCard key={i} m={m} />
    ))}
  </div>

  {/* Show More/Less Button */}
  <button
    onClick={() => setShowAllMobile(!showAllMobile)}
    className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0476D9] to-[#0456B3] text-white rounded-full hover:scale-105 transition-transform"
  >
    {showAllMobile ? 'Show Less' : 'See More Machines'}
  </button>
</div>

        {/* 💠 Desktop Bottom Machines */}
        <div className="hidden lg:flex flex-wrap justify-center gap-10 mt-16">
          {bottomMachinesDesktop.map((m, i) => <ImageCard key={i} m={m} />)}
        </div>
      </div>
    </section>
  )
}

