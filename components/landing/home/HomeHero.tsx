'use client'

import React, { useEffect, useState } from 'react'
import {Play, Award, Factory } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const HomeHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // const stats = [
  //   { icon: Factory, value: '17L+', label: 'Bottles/Day', color: 'text-blue-600' },
  //   { icon: Users, value: '20+', label: 'Trusted Brands', color: 'text-green-600' },
  //   { icon: Award, value: '15+', label: 'Years Experience', color: 'text-purple-600' },
  // ]

  return (
    <>
      {/* Font Face Definition */}
      <style jsx global>{`
        @font-face {
          font-family: 'TakenByVultures';
          src: url('/fonts/Taken-by-Vultures.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }
      `}</style>

      <div className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-bl from-pink-100 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center min-h-[80vh]">
            {/* LEFT: Text Content */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Leading Plastic Packaging Solutions</span>
              </div>

              <h1 className="mb-8">
                <span className=" text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading">
                  We mold not just plastic {''}
                </span>
                <span
                  className=" bg-gradient-to-r pl-3.5 from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent text-7xl md:text-8xl lg:text-9xl xl:text-10xl transform "
                  style={{ 
                    fontFamily: 'TakenByVultures, cursive',
                    fontWeight: 400,
                    lineHeight: '0.5',
                    filter: 'drop-shadow(0 4px 8px rgba(241, 68, 114, 0.1))'
                  }}
                >
                {''}  but partnerships.
                </span>
              </h1>

              <p className="text-l md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                NR Allied is a diversified group of companies united by one mission — to lead innovation in plastic packaging with{' '}
                <span className="font-semibold text-gray-800">reliability, scale, and sustainability</span> at its core. Since our inception, we&apos;ve expanded through specialized entities, each contributing to our collective strength and growing daily production capacity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
  <Link href="#contact" className="w-full sm:w-auto">
    <Button 
      size="lg"
      className="w-full sm:w-auto bg-gradient-to-r from-[#0476D9] to-[#0456B3] hover:from-[#0456B3] hover:to-[#0436A3] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
    >
      Get in Touch
    </Button>
  </Link>

  <Link href="#our-journey" className="w-full sm:w-auto">
    <Button 

      size="lg"
         className="w-full sm:w-auto bg-gradient-to-r from-[#131313] to-[#00070f] hover:from-[#090b0c] hover:to-[#00030a] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <Play className="mr-2 w-4 h-4" />
      Watch Our Story
    </Button>
  </Link>
</div>


              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div> */}

              {/* Client Logos */}
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <div className="relative group">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png"
                      width={100}
                      height={100}
                      alt="ITC Limited"
                      className="w-14 h-14 rounded-full border-3 border-white bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Image
                      src="https://mma.prnewswire.com/media/1332039/Dukes_India_Logo.jpg?w=200"
                      width={100}
                      height={100}
                      alt="Dukes"
                      className="w-14 h-14 rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/en/0/08/Kingfisher_beer_logo.png"
                      width={100}
                      height={100}
                      alt="Kingfisher"
                      className="w-14 h-14 rounded-full border-3 border-white bg-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZLwCyQN233VIVCAqULzGrJQK0OlDAu2EPQ&s"
                      width={100}
                      height={100}
                      alt="Client"
                      className="w-14 h-14 rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full border-3 border-white bg-gradient-to-br from-[#0476D9] to-[#0456B3] flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                    20+
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-gray-800 font-semibold">Trusted by leading brands</p>
                  <p className="text-gray-600 text-sm">across India</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Hero Visual */}
            <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Product Image */}
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">

                <Image
  src="/images/hero-product.png"
  alt="NR Allied Plastic Packaging Solutions"
  width={600}
  height={800}
  className="rounded-2xl object-contain max-h-[850px] w-full"
/>

                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl animate-bounce">
                  <Factory className="w-8 h-8" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-xl animate-pulse">
                  <Award className="w-6 h-6" />
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-3xl blur-3xl scale-110 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Link href="#about" className="flex flex-col items-center group">
            <span className="mb-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Discover More</span>
            <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-gray-600"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeHero