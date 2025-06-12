'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Divisions', href: '#divisions' },
  { name: 'Infrastructure', href: '#infrastructure' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {isScrolled ? (
                <Image src="/images/logo-scrolled.png" alt="NR Allied Logo Scrolled" width={70} height={70} />
              ) : (
                <Image src="/images/logo.png" alt="NR Allied Logo" width={70} height={70} />
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ name, href }) => (
              <a
                key={href}
                href={href}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-[#0476D9]' : 'text-white hover:text-[#95D7FA]'
                }`}
              >
                {name}
              </a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-lg bg-white shadow-lg overflow-hidden animate__animated animate__fadeInDown">
            <div className="py-2">
              {sections.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
