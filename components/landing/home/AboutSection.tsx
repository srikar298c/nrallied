'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import SectionTitle from '../SectionTitle'

/**
 * CountUp: Animates a number from 0 → end over `duration` seconds.
 */
interface CountUpProps {
  end: number
  duration?: number     // in seconds
  decimals?: number     // number of decimal places
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  decimals = 0,
}) => {
  const [value, setValue] = useState(0)
  const startTime = useRef<number | undefined>(undefined)
  const frame = useRef<number | undefined>(undefined)

  // Format with thousands separators
  const format = (n: number) =>
    n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = (timestamp - startTime.current) / (duration * 1000)
      if (progress < 1) {
        setValue(end * progress)
        frame.current = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }
    frame.current = requestAnimationFrame(step)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [end, duration])

  return <>{format(value)}</>
}

const AboutUsSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <SectionTitle
          title="ABOUT "
          highlight="Us"
          subtitle=" Our journey from a single manufacturing unit to an umbrella corporation with multiple specialized divisions."
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-md">
                To become India&apos;s most trusted plastic packaging group by delivering scalable,
                sustainable, and innovative solutions—while nurturing long-term partnerships
                based on quality, speed, and reliability.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-md">
                We aim to lead the industry with high-capacity, precision-driven plastic packaging
                by combining cutting-edge technology with environmentally responsible practices.
                Through our RPET initiatives and specialized group divisions, we strive to deliver
                exceptional value to every partner we serve.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Our Values</h2>
              <div className="space-y-2">
                {[
                  'Excellence in Quality & Output',
                  'Innovation through Automation',
                  'Commitment to Sustainable Manufacturing',
                  'Transparent Client Relationships',
                  'Team-Driven Growth Culture',
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-slate-700 text-md">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Leadership Image */}
          <div className="lg:sticky lg:top-8">
            <Card className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className="relative w-full h-[430px]">
                  <Image
                    src="/images/team/leadr.png"
                    alt="Leadership"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Group Companies */}
          <Card className="bg-white/70 backdrop-blur-md border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-3">Group Companies</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <CountUp end={7} duration={2} />
              </div>
              <p className="text-slate-600 text-md">
                Specialized divisions serving diverse markets
              </p>
            </CardContent>
          </Card>

          {/* Daily Capacity */}
          <Card className="bg-white/70 backdrop-blur-md border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-3">Daily Capacity</h3>
              <div className="text-3xl font-bold text-pink-500 mb-1">
                <CountUp end={1700000} duration={2.5} />
              </div>
              <div className="text-xl font-semibold text-pink-400">bottles</div>
              <p className="text-slate-600 text-md mt-2">
                High-volume production capability
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
