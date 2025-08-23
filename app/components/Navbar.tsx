'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLink {
  href: string;
  label: string;
}

const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <nav className="hidden lg:flex space-x-8">
      {navLinks.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link 
            href={link.href} 
            className="text-gray-300 hover:text-white font-medium transition-all duration-200 relative group px-4 py-3 rounded-lg"
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
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar; 