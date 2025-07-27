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

  // Logo data for the scrolling section
  const supportedByLogos = [
    {
      name: "Emory University",
      url: "/logos/emory.png"
    },
    {
      name: "University of Chicago",
      url: "/logos/uchicago.png"
    },
    {
      name: "Singapore American School",
      url: "/logos/sas.png"
    },
    {
      name: "BPA",
      url: "/logos/bpa.png"
    },
    {
      name: "University of Southern California",
      url: "/logos/usc.png"
    },
    {
      name: "University College London",
      url: "/logos/ucl.png"
    },
    {
      name: "University of California, Berkeley",
      url: "/logos/ucb.png"
    }
  ];

  const academicSponsorLogos = [
    { name: "SKT Education Group", url: "/logos/skt.png" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 animate-float"
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
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-5 animate-float"
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
            className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20"
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
            className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-30"
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              BEE SCALE-UP
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-6xl text-slate-700 font-medium mt-2"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                Competition
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
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
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-12 rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
              >
                <span>Register Now</span>
                <motion.svg
                  className="ml-2 w-5 h-5"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Supported By - Horizontal Scrolling Logo Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-white to-slate-50 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Supported By
          </motion.h2>
          
          {/* Main Supporters - Scrolling Marquee */}
          <div className="relative mb-12">
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-16 py-8"
                animate={{ 
                  x: [0, -100 * supportedByLogos.length] 
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{ minWidth: "200%" }}
              >
                {/* First set of logos */}
                {supportedByLogos.map((logo, index) => (
                  <motion.div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-24 w-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      width={300}
                      height={120}
                      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                    />
                    <div 
                      className="hidden items-center justify-center h-full w-full bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 text-slate-600 font-semibold text-sm text-center p-4"
                      style={{ display: 'none' }}
                    >
                      {logo.name}
                    </div>
                  </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {supportedByLogos.map((logo, index) => (
                  <motion.div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-24 w-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      width={300}
                      height={120}
                      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const fallback = img.nextElementSibling as HTMLElement;
                        img.style.display = 'none';
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div 
                      className="hidden items-center justify-center h-full w-full bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 text-slate-600 font-semibold text-sm text-center p-4"
                      style={{ display: 'none' }}
                    >
                      {logo.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Academic Sponsors */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>Academic Sponsor</h3>
            <div className="flex justify-center">
              {academicSponsorLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center h-20 w-64 bg-white rounded-xl shadow-card p-6"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={300}
                    height={120}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Philanthropist Sponsor */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
                         <h3 className="text-2xl font-bold mb-8 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>Personal Philanthropist</h3>
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-card p-8 max-w-2xl mx-auto border border-blue-100"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl font-bold text-white">MC</span>
                </motion.div>
                                 <h4 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Mr. Chong</h4>
                 <p className="text-lg text-blue-600 font-semibold mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Platinum Sponsor</p>
                 <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Supporting the next generation of business leaders through educational excellence and opportunity creation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Prize Pool Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full"
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
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/3 rounded-full"
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
            className="absolute top-1/3 left-1/5 w-32 h-32 bg-white/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/8 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
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
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 shadow-xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl">🏆</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Prize Pool
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
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
                    <div className={`relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border ${item.border} group-hover:bg-white/20 transition-all duration-500 shadow-2xl`}>
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
                                                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.place}</h3>
                        <p className="text-white/70 text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>Winner</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <motion.p 
                            className="text-3xl font-bold text-white"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item.prize}
                          </motion.p>
                          <p className="text-white/70 text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>Cash Prize</p>
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
                  
                  <div className="relative bg-white/15 backdrop-blur-xl rounded-[2rem] p-10 border border-white/20 shadow-2xl">
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
                        style={{ fontFamily: 'Exo 2, sans-serif' }}
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
                        <div className="text-6xl md:text-7xl font-black text-white leading-none drop-shadow-2xl">
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
                          { icon: "💰", label: "Cash Prizes", color: "bg-green-400" },
                          { icon: "🎯", label: "Mentorship Opportunities", color: "bg-blue-400" },
                          { icon: "🚀", label: "Internship Placements", color: "bg-purple-400" },
                          { icon: "🏅", label: "Professional Certificates", color: "bg-yellow-400" }
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
                            <div className={`w-3 h-3 ${benefit.color} rounded-full shadow-lg`}></div>
                            <span className="text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>{benefit.label}</span>
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
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { emoji: "🚀", title: "Who?", text: "Students ages 13–22, especially from Malaysia's B40 communities. 100–700 participants expected." },
              { emoji: "📅", title: "When?", text: "7 months: Registration opens April 2025. Prelims: Sept 10. Finals: Nov 10." },
              { emoji: "🏆", title: "Why?", text: "RM2000–3000 prize pool, mentorship, internships, certificates, and real-world impact." },
              { emoji: "🌏", title: "Where?", text: "Penang, Malaysia & Asia. Submission in English (no penalty for second-language learners)." },
              { emoji: "💡", title: "What?", text: "Teams solve real business cases for Penang-based SMEs, focusing on finance, marketing, and tech." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center group hover:transform hover:scale-105 border border-slate-100"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.span 
                  className="text-5xl block mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.emoji}
                </motion.span>
                <h3 className="font-bold text-2xl mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.title}</h3>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
              "🤝 Professional & peer mentorship",
              "📈 Financial literacy & STEM workshops", 
              "🎓 Internship opportunities",
              "📜 Certificates for all participants",
              "💬 Team finder & networking",
              "🌱 Real-world business impact"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-lg font-medium text-slate-700 hover:transform hover:scale-105 border border-slate-100"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
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
        className="py-24 bg-gradient-to-br from-slate-100 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-20 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Timeline
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ top: 0, bottom: 0 }}
            />
            
            {[
              { date: "April 2025", event: "Registration Opens", side: "left" },
              { date: "May–Aug", event: "Mentorship & Workshops", side: "right" },
              { date: "Sept 10", event: "Prelims", side: "left" },
              { date: "Oct", event: "Finalist Mentorship", side: "right" },
              { date: "Nov 10", event: "Finals", side: "left" }
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
                  className="z-20 flex items-center justify-center order-1 bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl w-12 h-12 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="order-1 bg-white rounded-2xl shadow-card hover:shadow-glow w-5/12 px-8 py-6 text-left border border-slate-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-slate-800 text-xl mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.date}</h3>
                  <p className="text-slate-600 font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { emoji: "📝", step: "1. Register", text: "Sign up solo or with a team. Use our team finder if needed!" },
              { emoji: "📚", step: "2. Prepare", text: "Access study resources, attend workshops, and meet your mentors." },
              { emoji: "💼", step: "3. Solve Cases", text: "Work on real business problems for Penang SMEs." },
              { emoji: "🚩", step: "4. Compete", text: "Submit your plans, present in prelims and finals, and win prizes!" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group hover:transform hover:scale-105 border border-slate-100"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.span 
                  className="text-5xl block mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.emoji}
                </motion.span>
                <h4 className="font-bold text-xl mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.step}</h4>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
              { q: "What are the prizes?", a: "RM2000–3000 prize pool, mentorship, internships, and certificates." },
              { q: "Can I join solo?", a: "Yes! Use our team finder to connect with others." },
              { q: "Do I need business experience?", a: "No prior experience needed—just curiosity and drive!" }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border-l-4 border-blue-500 rounded-r-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <h4 className="font-bold text-xl text-slate-900 mb-3" style={{ fontFamily: 'Exo 2, sans-serif' }}>{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
