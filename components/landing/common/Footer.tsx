'use client';

import Link from 'next/link';
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
          {/* Branding */}
          <div>
            {/* <h3 className="text-2xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
                NR
              </span>{' '}
              Allied
            </h3> */}
            <p className="text-gray-400 mb-6 max-w-xs">
              Leading plastic packaging 
              <br />solutions across India.
            </p>
            {/* Social icons (uncomment when needed) */}
            {/*
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#0476D9] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#0476D9] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#0476D9] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#0476D9] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            */}
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#our-journey', label: 'Our Journey' },
                { href: '#infrastructure', label: 'Infrastructure' },
                { href: '#industries', label: 'Industries' },
                { href: '#contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Group Companies */}
          <nav aria-label="Group Companies">
            <h4 className="text-lg font-semibold mb-4">Group Companies</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                'NR Industries',
                'NR Polymers',
                'NR Beverages',
                'NR Udhyog LLP',
                'Surya Polymers',
                'Surana Enterprises',
                'Elite Agro Brew',
              ].map((company) => (
                <li key={company}>
                  <Link href="#divisions" className="hover:text-white transition-colors">
                    {company}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p className="font-medium">Address:</p>
              <p>Sy No -45, Road no 25, IDA Kattedan, R.R District, 500077. Telangana</p>
              {/* <p>
                Phone:{' '}
                <a href="tel:+919866682202" className="hover:text-white">
                  +91 9866682202
                </a>
              </p> */}
              <p>
                Email:{' '}
                <a href="mailto:nrcommercialspvtltd@gmail.com" className="hover:text-white">
                  nrcommercialspvtltd@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NR Allied. All rights reserved.</p>
            <Link
            href="https://saaviksolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-0 hover:text-white transition-colors"
            >
            Powered by Saavik Solutions
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
