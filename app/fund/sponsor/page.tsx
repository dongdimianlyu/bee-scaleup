'use client';

import { motion } from 'framer-motion';

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-5xl md:text-7xl font-bold text-gradient-holographic mb-6 glow-text-cyan"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Our Sponsors
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We&apos;re grateful to our corporate sponsors and partners who support our mission to foster innovation and entrepreneurship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 border border-white/20 shadow-2xl text-center"
        >
          <div className="text-6xl mb-6">
            <svg className="w-16 h-16 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Sponsor Partnerships Coming Soon
          </h2>
          <p 
            className="text-gray-300 text-lg"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We&apos;re actively seeking partnerships with forward-thinking organizations that share our vision for innovation and entrepreneurship.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
