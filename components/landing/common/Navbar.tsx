'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#our-journey' }, // Ensure your section has id="our-journey"
  { name: 'Infrastructure', href: '#infrastructure' },
  { name: 'Quality Control', href: '#quality-control' },
  { name: 'Contact Us', href: '#contact' },
];

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section state
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of document.querySelectorAll<HTMLElement>('[id]')) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${section.id}`);
          break; // Found active section, no need to continue
        }
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleSectionClick = useCallback((href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = (target as HTMLElement).offsetTop - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-all hover:scale-105">
            <div className="relative overflow-hidden ">
              <Image
                src="/images/logo-scrolled.png"
                alt="NR Allied Logo"
                width={isScrolled ? 60 : 70}
                height={isScrolled ? 60 : 70}
                className="transition-all duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#0476D9]/20 via-transparent to-[#0456B3]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 rounded-lg ring-2 ring-[#0476D9]/0 group-hover:ring-[#0476D9]/30 transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section) => (
              <NavLink
                key={section.href}
                section={section}
                isActive={activeSection === section.href}
                onClick={handleSectionClick}
              />
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative p-2 text-gray-700 hover:text-[#0476D9] focus:outline-none focus:ring-2 focus:ring-[#0476D9]/20 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="py-2">
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleSectionClick(section.href, e)}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    activeSection === section.href
                      ? 'text-[#0476D9] bg-[#0476D9]/5 border-r-2 border-[#0476D9]'
                      : 'text-gray-700 hover:text-[#0476D9] hover:bg-gray-50'
                  }`}
                >
                  {section.name}
                </a>
              ))}
              <div className="px-4 py-3 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => handleSectionClick('#contact', e)}
                  className="block w-full text-center bg-gradient-to-r from-[#0476D9] to-[#0456B3] text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink
interface NavLinkProps {
  section: NavItem;
  isActive: boolean;
  onClick: (href: string, e: React.MouseEvent) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ section, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <a
        href={section.href}
        onClick={(e) => onClick(section.href, e)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-1 overflow-hidden ${
          isActive
            ? 'text-[#0476D9] bg-gradient-to-r from-[#0476D9]/10 to-[#0456B3]/5 shadow-md shadow-[#0476D9]/10'
            : 'text-gray-700 hover:text-[#0476D9] hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 hover:shadow-lg hover:shadow-gray-200/50'
        }`}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">
          {section.name}
        </span>
        {section.submenu && (
          <ChevronDown
            size={16}
            className={`relative z-10 transition-all duration-300 ${
              isHovered ? 'rotate-180 translate-x-0.5' : 'rotate-0'
            }`}
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#0476D9]/5 to-[#0456B3]/5 transform transition-all duration-500 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#0476D9] to-[#0456B3] transition-all duration-300 ${
            isActive ? 'w-8' : 'w-0'
          }`}
        />
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#0476D9]/10 to-[#0456B3]/10 blur-xl transition-all duration-500 ${
            isHovered ? 'opacity-50 scale-110' : 'opacity-0 scale-95'
          }`}
        />
      </a>

      {section.submenu && (
        <div
          className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
            isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
          }`}
        >
          {section.submenu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onClick(item.href, e)}
              className="block px-4 py-3 text-sm text-gray-700 hover:text-[#0476D9] hover:bg-gray-50 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
