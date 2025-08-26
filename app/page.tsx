'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Floating Holographic Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 holographic-border rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 border-2 border-purple-500/30"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Neon Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full glow-cyan"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full glow-purple"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400 rounded-full glow-cyan animate-pulse-glow"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full glow-purple animate-pulse-glow"
            animate={{
              y: [0, -15, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center max-w-6xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-gradient-holographic leading-tight text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              BEE SCALE-UP
              <motion.span 
                className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/90 font-medium mt-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                Competition
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
            Empowering students to solve real business problems and drive impact in Malaysia and beyond.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            >
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc-rS-QJrmAuiAEQjhkV2pzBuV26mRMy2GPFjHR8jXq89Yf8Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span>Register Now</span>
                <motion.svg
                  className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Futuristic Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/70 rounded-full flex justify-center glow-cyan backdrop-blur-sm bg-black/20">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Four Scrolling Logo Sections */}
      <motion.section 
        className="py-32 bg-[#0a0a0a] overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>
        <div className="container mx-auto px-4">
          
          {/* Organization Sections */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Guest Speakers From */}
              <motion.div 
                className="bg-black/30 rounded-lg p-8 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Guest Speakers From
                </h3>
                <div className="flex justify-center items-center space-x-8">
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/columbia.png" 
                      alt="Columbia Business School" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/capisa.png" 
                      alt="Capisa" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/jpm.png" 
                      alt="JPMorgan Chase" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Mentors From */}
              <motion.div 
                className="bg-black/30 rounded-lg p-8 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Mentors From
                </h3>
                <div className="flex justify-center items-center space-x-6">
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/met.png" 
                      alt="Berkeley M.E.T" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/ucl.png" 
                      alt="UCL" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/hkust.png" 
                      alt="HKUST" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/usc.png" 
                      alt="USC" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/boston.png" 
                      alt="Boston College" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Partners */}
              <motion.div 
                className="bg-black/30 rounded-lg p-8 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Partners
                </h3>
                <div className="flex justify-center items-center space-x-8">
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/pydc.png" 
                      alt="PYDC" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/skt.png" 
                      alt="SKT" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  & philanthropists
                </p>
              </motion.div>

              {/* Advisors From */}
              <motion.div 
                className="bg-black/30 rounded-lg p-8 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Advisors From
                </h3>
                <div className="flex justify-center items-center space-x-8">
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/uchicago.png" 
                      alt="University of Chicago" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/john.png" 
                      alt="Johns Hopkins University" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/logos/lse.png" 
                      alt="LSE" 
                      width={100} 
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </motion.section>

      {/* Prize Pool Section */}
      <motion.section 
        className="py-40 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Premium holographic border */}
        <div className="absolute inset-0 border-t border-b border-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full glow-cyan"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translate(40%, -40%)' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full glow-purple"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translate(-40%, 40%)' }}
          />
          {/* Additional floating elements */}
          <motion.div
            className="absolute top-1/3 left-1/5 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full glow-cyan"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full glow-purple"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 glass rounded-3xl mb-8 glow-cyan"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl animate-pulse-glow">🏆</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-holographic glow-text-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Prize Pool
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cash prizes, mentorship opportunities, internships, and certificates awaiting winners!
              </p>
            </motion.div>

            {/* Main Content - Flowing Layout */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              
              {/* Left Side - Prize Positions (3 columns) */}
              <div className="lg:col-span-3 space-y-6">
                {[
                  { place: "1st Place", prize: "RM 1,500", emoji: "🥇", gradient: "from-yellow-400/20 to-orange-500/20", border: "border-yellow-400/30" },
                  { place: "2nd Place", prize: "RM 1,000", emoji: "🥈", gradient: "from-slate-300/20 to-slate-500/20", border: "border-slate-300/30" },
                  { place: "3rd Place", prize: "RM 500", emoji: "🥉", gradient: "from-amber-600/20 to-amber-800/20", border: "border-amber-600/30" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative group overflow-hidden`}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -8 }}
                  >
                    {/* Flowing background with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl transform rotate-1 group-hover:rotate-0 transition-all duration-500`}></div>
                    <div className={`relative card-futuristic p-8 group-hover:glow-cyan transition-all duration-500`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <motion.div 
                            className="text-6xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.emoji}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.place}</h3>
                            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Winner</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <motion.p 
                            className="text-3xl font-bold text-gradient-holographic glow-text-cyan"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item.prize}
                          </motion.p>
                          <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Cash Prize</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Side - Total Prize Amount (2 columns) */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Main prize card with flowing design */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glowing background layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-[2rem] blur-sm transform -rotate-1"
                    animate={{
                      rotate: [-1, 1, -1],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] blur-md"></div>
                  
                  <div className="relative card-elevated p-10">
                    {/* Floating elements inside card */}
                    <motion.div
                      className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="text-center relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-8"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        Total Prize Pool
                      </motion.h3>
                      
                      <motion.div
                        className="mb-10"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-6xl md:text-7xl font-black text-gradient-holographic leading-none glow-text-purple">
                          RM 3,000
                        </div>
                      </motion.div>

                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                      >
                        {[
                          { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/></svg>, label: "Cash Prizes", color: "bg-green-400" },
                          { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>, label: "Mentorship Opportunities", color: "bg-blue-400" },
                          { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM7 9a1 1 0 000 2v2a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 100-2H7z" clipRule="evenodd"/></svg>, label: "Internship Placements", color: "bg-purple-400" },
                          { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/></svg>, label: "Professional Certificates", color: "bg-yellow-400" }
                        ].map((benefit, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center space-x-4 text-white/90"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, x: 5 }}
                          >
                            <div className={`w-6 h-6 ${benefit.color} rounded-full shadow-lg flex items-center justify-center text-white`}>
                              {benefit.icon}
                            </div>
                            <span className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit.label}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section 
        className="py-32 bg-[#0a0a0a] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '75px 75px'
          }} />
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { emoji: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>, title: "Who?", text: "Students ages 13–22, especially from Malaysia's B40 communities. 100–700 participants expected." },
              { emoji: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>, title: "When?", text: "2 months: Registration opens April 2025. Prelims: October 30. Finals: November 16." },
              { emoji: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>, title: "Why?", text: "3000 prize pool, mentorship, internships, certificates, and real-world impact." },
              { emoji: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>, title: "Where?", text: "Penang, Malaysia & Asia. Submission in English (no penalty for second-language learners)." },
              { emoji: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"/></svg>, title: "What?", text: "Teams solve real business cases for local based SMEs, focusing on expanding the business across region." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 card-futuristic text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-cyan-400 block mb-6 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-32 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-gradient-holographic text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Benefits
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Professional & peer mentorship",
              "Financial literacy & STEM workshops", 
              "Internship opportunities",
              "Certificates for all participants",
              "Team finder & networking",
              "Real-world business impact"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 card-futuristic text-lg font-medium text-gray-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {benefit}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="py-32 bg-[#0a0a0a] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-20 text-gradient-holographic text-center"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Timeline
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full glow-cyan"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ top: 0, bottom: 0 }}
            />
            
            {[
              { date: "April 2025", event: "Registration Opens", side: "left" },
              { date: "May–Aug", event: "Mentorship & Workshops", side: "right" },
              { date: "October 30", event: "Prelims", side: "left" },
              { date: "Oct", event: "Finalist Mentorship", side: "right" },
              { date: "November 16", event: "Finals", side: "left" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex justify-between items-center w-full ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <div className="order-1 w-5/12"></div>
                <motion.div 
                  className="z-20 flex items-center justify-center order-1 bg-gradient-to-r from-cyan-500 to-purple-500 shadow-xl w-12 h-12 rounded-full glow-cyan"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="order-1 card-futuristic w-5/12 px-8 py-6 text-left"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-white text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.date}</h3>
                  <p className="text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{item.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* FAQ Section */}
      <motion.section 
        className="py-32 bg-[#0a0a0a] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient-holographic"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            FAQ
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { q: "Who can join?", a: "Any student aged 13–22, especially from Malaysia's B40 communities." },
              { q: "What is the submission language?", a: "English (no penalty for second-language learners)." },
              { q: "How do I register?", a: "Click the Register Now button to access our registration form." },
              { q: "What are the prizes?", a: "3000 prize pool, mentorship, internships, and certificates." },
              { q: "Can I join solo?", a: "Yes! Use our team finder to connect with others." },
              { q: "Do I need business experience?", a: "No prior experience needed—just curiosity and drive!" }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card-futuristic p-8 border-l-4 border-cyan-500 rounded-r-2xl"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <h4 className="font-bold text-xl text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{faq.q}</h4>
                <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
