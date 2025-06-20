'use client'


import { Play, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const CLIENT_LOGOS = [
  { src: '/images/carousel/kingfisher.png', alt: 'Kingfisher' },
  { src: '/images/carousel/radice.png', alt: 'Radice' },
  { src: '/images/carousel/itc.png', alt: 'ITC Limited' },
  { src: '/images/carousel/abd.png', alt: 'ABD' },
  { src: '/images/carousel/mayora.png', alt: 'Mayora' },

]


export default function HomeHero() {
  
  

  


  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex flex-col overflow-visible mt-12 z-10 bg-gradient-to-b from-[#F0F4F9] to-[#95D7FA]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-20 flex flex-col lg:flex-row justify-between items-center ">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-gray-900 leading-tight mb-18">
        <span className="text-3xl font-bold md:text-4xl lg:text-5xl leading-snug">
          We mold not just plastic — but
        </span>
        <span className="pl-[20px] text-[6rem] sm:text-[6rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem] font-vultures text-transparent bg-clip-text bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] leading-[0.1] ">
          partnerships.
        </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
        NR Allied is a diversified group of companies united by one mission — to lead innovation in plastic packaging 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="group bg-gradient-to-r from-[#0476D9] to-[#0456B3] text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <Link href="#contact">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="group bg-black text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform">
          <Link href="#our-journey" onClick={(e) => { e.preventDefault(); scrollTo('our-journey') }}>
            <Play className="mr-2 w-4 h-4" /> Watch Our Story
          </Link>
        </Button>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full lg:w-1/2 max-w-[600px] xl:max-w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mx-auto mt-10 lg:mt-0">
          <Image
        src="/images/hero-product.png"
        alt="Plastic Packaging"
        fill
        className="object-contain"
        priority
          />
        </div>
      </div>

      {/* Carousel */}
     {/* Carousel */}
<div className="overflow-hidden w-full max-w-6xl mx-auto px-8 mb-16 relative">
  <p className="text-center text-gray-800 text-base md:text-sm font-semibold uppercase tracking-wide mb-6">
    Trusted by leading brands across India
  </p>

  <div className="relative w-full overflow-hidden">
    <div className="animate-scroll flex gap-24 w-max">
      {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Scroll Down */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  )
}
