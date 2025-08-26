'use client';

import { motion } from 'framer-motion';

export default function OurTeamPage() {
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
            Our Team
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Meet the passionate individuals behind BeeScaleUp who are dedicated to fostering innovation and entrepreneurship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 border border-white/20 shadow-2xl text-center"
        >
          <div className="text-6xl mb-6">👥</div>
          <h2 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Coming Soon
          </h2>
          <p 
            className="text-gray-300 text-lg"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We&apos;re excited to introduce you to our amazing team members. 
            Stay tuned for detailed profiles of the people making BeeScaleUp possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
