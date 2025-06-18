'use client'

import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Play, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const CLIENT_LOGOS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png', alt: 'ITC Limited' },
  { src: 'https://mma.prnewswire.com/media/1332039/Dukes_India_Logo.jpg?w=200', alt: 'Dukes' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/0/08/Kingfisher_beer_logo.png', alt: 'Kingfisher' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZLwCyQN233VIVCAqULzGrJQK0OlDAu2EPQ&s', alt: 'Premium Brand' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png', alt: 'Leading Brand' },
  { src: 'https://mma.prnewswire.com/media/1332039/Dukes_India_Logo.jpg?w=200', alt: 'Top Brand' },
]

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return
      const container = carouselRef.current
      const slideWidth = container.firstElementChild?.clientWidth ?? 0
      container.scrollBy({ left: slideWidth + 16, behavior: 'smooth' })
      setCurrentLogoIndex((i) => (i + 1) % CLIENT_LOGOS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleScrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const visible = Array.from({ length: 4 }, (_, i) =>
    CLIENT_LOGOS[(currentLogoIndex + i) % CLIENT_LOGOS.length]
  )

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'TakenByVultures';
          src: url('/fonts/Taken-by-Vultures.otf') format('opentype');
        }
      `}</style>

      <section className="relative flex flex-col bg-white z-10 overflow-visible mt-12">
        {/* Background visuals */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-70 animate-pulse" />
          <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-bl from-pink-100 to-orange-100 rounded-full blur-xl opacity-70 animate-pulse delay-[2s]" />
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-xl opacity-70 animate-pulse delay-[4s]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f9fa_1px,transparent_1px),linear-gradient(to_bottom,#f8f9fa_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />
        </div>

        {/* Main Hero Container */}
        <div className="container mx-auto px-4 md:px-6 py-20 z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center mb-16">
            {/* Left Side Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="mb-10 leading-tight">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 block -rotate-1">
                  We mold not just plastic
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-vultures text-transparent bg-clip-text bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] block rotate-2 pl-5">
                  but partnerships.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
                NR Allied is a diversified group of companies united by one mission — to lead innovation in plastic packaging with{' '}
                <span className="font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  reliability, scale, and sustainability
                </span>{' '}
                at its core.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-[#0476D9] to-[#0456B3] hover:from-[#0456B3] hover:to-[#0436A3] text-white px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="#contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-gradient-to-r from-[#131313] to-[#00070f] text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  <Link
                    href="#our-journey"
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollTo('our-journey')
                    }}
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Watch Our Story
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="relative w-full max-w-[500px] h-[80vh] max-h-[850px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                  <Image
                    src="/images/hero-product.png"
                    alt="NR Allied Plastic Packaging Solutions"
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-3xl blur-3xl scale-110 transition-transform group-hover:scale-125" />
              </div>
            </div>
          </div>

          {/* Carousel Section */}
         {/* Carousel Section */}
<div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
  <p className="text-center text-gray-700 text-lg font-semibold uppercase tracking-wider mb-6">
    Trusted by Leading Indian Brands
  </p>

  <div
    ref={carouselRef}
    className="w-full flex overflow-x-auto gap-10 sm:gap-14 items-center snap-x snap-mandatory scrollbar-none px-1 py-6 bg-white/70 backdrop-blur rounded-xl shadow-md"
    style={{ scrollBehavior: 'smooth' }}
  >
    {visible.map((logo, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 snap-start rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center p-3"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={60}
          height={60}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>

        </div>

        {/* Scroll Down Icon */}
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform focus:ring-2 focus:ring-blue-500"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </section>
    </>
  )
}
