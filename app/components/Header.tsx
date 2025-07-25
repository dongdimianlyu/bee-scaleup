'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Navbar';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

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

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center ml-2 transition-all duration-300 hover:opacity-80">
          <img 
            src="/bee-scale-logo.png" 
            alt="Bee Scale Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'block';
              }
            }}
          />
          <span className="text-3xl font-bold text-gradient transition-all duration-300 hidden">
            BEE SCALE-UP
          </span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Navbar navLinks={navLinks} />
          <div className="flex items-center space-x-4">
            {user ? (
              // User Menu
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-700 hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.displayName?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user.displayName || user.email}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-1 border border-blue-100">
                    <div className="px-4 py-2 text-sm text-slate-500 border-b border-blue-100">
                      {user.email}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Auth Links
              <>
                {authLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      link.label === 'Register' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
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
            {user ? (
              <>
                <div className="px-4 py-2 text-sm text-slate-500">
                  Signed in as {user.email}
                </div>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Sign out
                </button>
              </>
            ) : (
              authLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    link.label === 'Register' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 