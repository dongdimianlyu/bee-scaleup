'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

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

  const handleSignOut = async () => {
    try {
      await signOut();
      setUserMenuOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
            {loading ? (
              <div className="w-8 h-8 animate-spin">
                <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user.displayName?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="text-slate-700 font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {user.displayName || user.email.split('@')[0]}
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {userMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-card border border-slate-200 py-2"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {user.displayName || user.email.split('@')[0]}
                      </p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                      <div className="mt-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'judge' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role === 'judge' ? '👨‍⚖️ Judge' : '🎓 Participant'}
                        </span>
                      </div>
                    </div>
                    
                    {user.role === 'judge' && (
                      <Link
                        href="/judge/dashboard"
                        className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                        style={{ fontFamily: 'Exo 2, sans-serif' }}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        Judge Dashboard
                      </Link>
                    )}

                    {user.role === 'participant' && (
                      <Link
                        href="/participant/dashboard"
                        className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                        style={{ fontFamily: 'Exo 2, sans-serif' }}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Participant Dashboard
                      </Link>
                    )}
                    
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      style={{ fontFamily: 'Exo 2, sans-serif' }}
                    >
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Login
                </Link>
                <Link 
                  href="/register"
                  className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Sign Up
                </Link>
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="border-t border-blue-100 pt-4 space-y-2">
            {loading ? (
              <div className="flex justify-center py-3">
                <div className="w-6 h-6 animate-spin">
                  <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              </div>
            ) : user ? (
              <>
                <div className="px-4 py-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {user.displayName || user.email.split('@')[0]}
                  </p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    user.role === 'judge' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role === 'judge' ? '👨‍⚖️ Judge' : '🎓 Participant'}
                  </span>
                </div>
                
                {user.role === 'judge' && (
                  <Link
                    href="/judge/dashboard"
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    Judge Dashboard
                  </Link>
                )}

                {user.role === 'participant' && (
                  <Link
                    href="/participant/dashboard"
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    Participant Dashboard
                  </Link>
                )}
                
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 text-left"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-center"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/register"
                  className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 