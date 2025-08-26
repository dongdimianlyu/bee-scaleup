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
    { 
      href: '/competition', 
      label: 'Competition',
      dropdown: [
        { href: '/mentors', label: 'Mentors' },
        { href: '/competition/judges', label: 'Judges' },
        { href: '/resources', label: 'Resources' },
        { href: '/certificate', label: 'Certificate' },
      ]
    },
    { 
      href: '/about', 
      label: 'About Us',
      dropdown: [
        { href: '/about/our-team', label: 'Our Team' },
      ]
    },
    { 
      href: '/fund', 
      label: 'Investor Relations',
      dropdown: [
        { href: '/fund/guest-speaker', label: 'Guest Speaker' },
        { href: '/fund/advisor', label: 'Advisor' },
        { href: '/fund/sponsor', label: 'Sponsor' },
      ]
    },
    { href: '/2025-case', label: '2025 Case' },
    { href: '/find-team', label: 'Find Team' },
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
    <header className="glass-heavy sticky top-0 z-50 border-b border-white/10 shadow-2xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80 min-w-0 flex-shrink-0">
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
            <span className="text-2xl font-bold text-gradient-holographic transition-all duration-300 glow-text-cyan whitespace-nowrap">
              BEE SCALE-UP
            </span>
          )}
        </Link>
        
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <Navbar navLinks={navLinks} />
        </div>
        
        <div className="hidden lg:flex items-center space-x-3 min-w-0 flex-shrink-0">
          {loading ? (
            <div className="w-8 h-8 animate-spin">
              <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full glass-light hover:glass transition-all duration-300 border border-white/20 hover:border-cyan-500/50 hover:glow-cyan text-sm"
              >
                <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg glow-cyan">
                  <span className="text-black font-semibold text-xs">
                    {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase()}
                  </span>
                </div>
                <span className="text-white font-medium max-w-[120px] truncate" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {user?.displayName || user?.email?.split('@')[0]}
                </span>
                <svg
                  className={`w-3 h-3 text-cyan-400 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {userMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-64 glass rounded-2xl border border-white/20 py-2 shadow-2xl"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {user?.displayName || user?.email?.split('@')[0]}
                    </p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                    <div className="mt-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        user?.role === 'judge' 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      }`}>
                        {user?.role === 'judge' ? '👨‍⚖️ Judge' : '🎓 Participant'}
                      </span>
                    </div>
                  </div>
                  
                  {user?.role === 'judge' && (
                    <Link
                      href="/judge/dashboard"
                      className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Judge Dashboard
                    </Link>
                  )}

                  {user?.role === 'participant' && (
                    <Link
                      href="/participant/dashboard"
                      className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Participant Dashboard
                    </Link>
                  )}
                  
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
                className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-white/10 text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Login
              </Link>
              <Link 
                href="/register"
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
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
          className="lg:hidden px-4 pt-2 pb-4 space-y-2 glass border-t border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider border-b border-white/10 mb-2">
                    {link.label}
                  </div>
                  {link.dropdown.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 ml-4"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link 
                  href={link.href} 
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="border-t border-white/10 pt-4 space-y-2">
            {loading ? (
              <div className="flex justify-center py-3">
                <div className="w-6 h-6 animate-spin">
                  <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              </div>
            ) : user ? (
              <>
                <div className="px-4 py-3 glass-light rounded-lg">
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {user?.displayName || user?.email?.split('@')[0]}
                  </p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    user?.role === 'judge' 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {user?.role === 'judge' ? '👨‍⚖️ Judge' : '🎓 Participant'}
                  </span>
                </div>
                
                {user?.role === 'judge' && (
                  <Link
                    href="/judge/dashboard"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    onClick={() => setIsOpen(false)}
                  >
                    Judge Dashboard
                  </Link>
                )}

                {user?.role === 'participant' && (
                  <Link
                    href="/participant/dashboard"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
                  className="block w-full px-4 py-3 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-colors duration-200 text-left"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/register"
                  className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 btn-futuristic text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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