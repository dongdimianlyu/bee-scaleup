'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/competition', label: 'Competition' },
    { href: '/about', label: 'About Us' },
    { href: '/mentors', label: 'Mentors' },
    { href: '/resources', label: 'Resources' },
    { href: '/fund', label: 'Fund Us' },
    { href: '/find-team', label: 'Find Team' },
    { href: '/certificate', label: 'Certificate' },
  ];

  const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc-rS-QJrmAuiAEQjhkV2pzBuV26mRMy2GPFjHR8jXq89Yf8Q/viewform?usp=header';

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center ml-2 transition-all duration-300 hover:opacity-80">
          {!imageError ? (
            <Image 
              src="/bee-scale-logo.png" 
              alt="Bee Scale Logo" 
              width={48}
              height={48}
              className="h-12 w-auto"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-3xl font-bold text-gradient transition-all duration-300">
              BEE SCALE-UP
            </span>
          )}
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Navbar navLinks={navLinks} />
          <div className="flex items-center space-x-4">
            <Link 
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Register Now
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-blue-50 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-blue-100 pt-4 space-y-2">
            <Link 
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 