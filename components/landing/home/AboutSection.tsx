'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const [groupCompanies, setGroupCompanies] = useState(0)
  const [dailyCapacity, setDailyCapacity] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px',
      }
    )

    const currentSection = sectionRef.current
    if (currentSection) observer.observe(currentSection)

    return () => {
      if (currentSection) observer.unobserve(currentSection)
    }
  }, [])

  // Animate Group Companies
  useEffect(() => {
    if (!isVisible) return
    const end = 7
    const duration = 1500
    const startTime = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const value = Math.floor(progress * end)
      setGroupCompanies(value)

      if (progress < 1) requestAnimationFrame(step)
      else setGroupCompanies(end)
    }

    requestAnimationFrame(step)
  }, [isVisible])

  // Animate Daily Capacity
  useEffect(() => {
    if (!isVisible) return
    const end = 17
    const duration = 2000
    const startTime = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const value = Math.floor(progress * end)
      setDailyCapacity(value)

      if (progress < 1) requestAnimationFrame(step)
      else setDailyCapacity(end)
    }

    requestAnimationFrame(step)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#F0F4F9] to-[#95D7FA] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="About "
            highlight="Us"
            subtitle="State-of-the-art manufacturing facilities equipped with the latest technology"
          />
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto text-lg">
            Our journey from a single manufacturing unit to an umbrella corporation with multiple specialized divisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become India&apos;s most trusted plastic packaging group by delivering scalable, sustainable, and innovative
                solutions—while nurturing long-term partnerships based on quality, speed, and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We aim to lead the industry with high-capacity, precision-driven plastic packaging by combining cutting-edge
                technology with environmentally responsible practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Values</h3>
              <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
                <li>Excellence in Quality & Output</li>
                <li>Innovation through Automation</li>
                <li>Commitment to Sustainable Manufacturing</li>
                <li>Transparent Client Relationships</li>
                <li>Team-Driven Growth Culture</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-xl clip-shape bg-[#005BCE]">
              <Image
                src="/images/team/leadr1.jpg"
                alt="Leadership"
                width={600}
                height={400}
                className="relative z-10 object-contain w-full h-auto"
                priority
              />
              <style jsx>{`
                .clip-shape {
                  clip-path: ellipse(75% 65% at 50% 50%);
                }
              `}</style>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {/* Group Companies */}
              <div className="group rounded-xl bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center p-5 border border-transparent hover:border-blue-300">
                <p className="text-sm italic text-slate-600 mb-1 group-hover:text-blue-600 transition-colors">
                  Group Companies
                </p>
                <p className="text-xs text-slate-500 m-4"></p>
                <p className="text-3xl font-bold text-blue-600 min-h-[2.5rem]">
                  {groupCompanies}
                </p>
                <p className="text-xs text-slate-500 m-4"></p> 
                <div className="w-full h-1 bg-blue-100 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Daily Capacity */}
              <div className="group rounded-xl bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center p-5 border border-transparent hover:border-pink-300">
                <p className="text-sm italic text-slate-600 mb-1 group-hover:text-[#ED2B8B] transition-colors">
                  Daily Capacity
                </p>
                <p className="text-3xl font-bold text-[#ED2B8B] min-h-[2.5rem]">
                  {dailyCapacity} lakh
                </p>
                <p className="text-xs text-slate-500 mt-1">bottles</p>
                <div className="w-full h-1 bg-pink-100 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-pink-400 to-[#ED2B8B] rounded-full transition-all duration-1000 ease-out delay-100 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
