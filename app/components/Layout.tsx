'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles-bg fixed inset-0 pointer-events-none" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="fixed top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="fixed bottom-20 left-20 w-24 h-24 border border-purple-500/20"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        animate={{
          rotate: [0, -360],
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="fixed top-1/2 left-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed top-1/3 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50"
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main content with glass morphism */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <motion.main 
          className="flex-grow relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
      
      {/* Ambient lighting effect */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-purple-500/3 via-transparent to-transparent pointer-events-none" 
           style={{ backgroundPosition: '80% 20%' }} />
    </div>
  );
};

export default Layout; 