'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const authLinks = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
          BEE SCALE-UP
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Navbar navLinks={navLinks} />
          <div className="flex items-center space-x-4">
            {authLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  link.label === 'Register' 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
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
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 space-y-2">
            {authLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  link.label === 'Register' 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 