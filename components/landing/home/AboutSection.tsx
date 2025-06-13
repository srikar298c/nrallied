import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../SectionTitle';

const AboutUsSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <SectionTitle
          title="ABOUT US"
          subtitle=" Our journey from a single manufacturing unit to an umbrella corporation with multiple 
            specialized divisions."
        />
       

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-md">
                To become India&aposs most trusted plastic packaging group by delivering scalable, 
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
                  'Team-Driven Growth Culture'
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
                    src="/images/team/leader.png"
                    alt="Leadership"
                    layout="fill"
                    objectFit="cover"
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
          <Card className="bg-white/70 backdrop-blur-md border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-3">Group Companies</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
              <p className="text-slate-600 text-md">Specialized divisions serving diverse markets</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-md border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-3">Daily Capacity</h3>
              <div className="text-3xl font-bold text-pink-500 mb-1">17 lakh</div>
              <div className="text-xl font-semibold text-pink-400">bottles</div>
              <p className="text-slate-600 text-md mt-2">High-volume production capability</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
