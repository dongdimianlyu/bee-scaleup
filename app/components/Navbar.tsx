'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-center space-x-6">
      {navLinks.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative"
          onMouseEnter={() => setHoveredItem(link.href)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {link.dropdown ? (
            <div className="relative">
              <button 
                className="text-gray-300 hover:text-white font-medium transition-all duration-200 relative group px-3 py-2 rounded-lg flex items-center space-x-1 text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span>{link.label}</span>
                <motion.svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: hoveredItem === link.href ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
                <motion.span 
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredItem === link.href ? '100%' : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0"
                  animate={{ opacity: hoveredItem === link.href ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                />
              </button>

              <AnimatePresence>
                {hoveredItem === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 glass rounded-2xl border border-white/20 py-2 shadow-2xl z-50"
                  >
                    {link.dropdown.map((item, itemIndex) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link 
              href={link.href} 
              className="text-gray-300 hover:text-white font-medium transition-all duration-200 relative group px-3 py-2 rounded-lg text-sm"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {link.label}
              <motion.span 
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
            </Link>
          )}
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar; 