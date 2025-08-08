'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10"
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
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-5"
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
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8 text-gradient leading-tight"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            We&apos;re building the future of business education—one student, one solution, one breakthrough at a time.
          </motion.p>
        </motion.div>

        {/* Mission Statement - Large Impact Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-[3rem] blur-3xl"
              animate={{
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/20 shadow-2xl">
              <motion.div
                className="text-center max-w-5xl mx-auto"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  Bridging Dreams and Reality
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  BEE SCALE-UP isn't just another competition—it's a launchpad for the next generation of business innovators.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  We connect ambitious students with real challenges faced by Malaysian SMEs, creating a unique ecosystem where learning meets impact, where theoretical knowledge transforms into practical solutions, and where young minds shape the future of business.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Story Grid */}
        <motion.section
          className="mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            variants={fadeInUp}
          >
            Our Story
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Problem */}
            <motion.div
              className="group"
              variants={slideIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-3xl">🎯</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  The Challenge We Saw
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Brilliant students trapped in theoretical learning. SMEs struggling with real challenges. A gap between education and application that was holding back both sides from reaching their potential.
                </p>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div
              className="group"
              variants={slideIn}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-3xl">💡</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Our Solution
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  A transformative 7-month journey where students tackle authentic business challenges. Real problems. Real solutions. Real impact. We've created the bridge between classroom theory and marketplace reality.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values Section - Redesigned with motion */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Drives Us
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "We push boundaries and challenge conventional thinking. Every solution starts with asking 'what if?' and ends with 'why not?'"
              },
              {
                icon: "🤝",
                title: "Equity Always",
                description: "Opportunity shouldn't depend on your zip code or bank balance. We're leveling the playing field, one student at a time."
              },
              {
                icon: "🌱",
                title: "Impact Forever",
                description: "We're not just solving today's problems—we're training tomorrow's leaders to build a more sustainable, inclusive business world."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                  <motion.div
                    className="text-5xl mb-6 inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Impact Metrics - Redesigned with flowing layout */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Impact by Numbers
          </motion.h2>

          <div className="relative">
            {/* Flowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-[2rem] blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/20 shadow-xl">
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { number: "100-700", label: "Future Leaders", suffix: "" },
                  { number: "RM 3,000", label: "Prize Pool", suffix: "" },
                  { number: "7", label: "Months Journey", suffix: "" },
                  { number: "∞", label: "Potential Impact", suffix: "" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-4xl md:text-5xl font-black text-gradient mb-3"
                      style={{ fontFamily: 'Exo 2, sans-serif' }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-slate-600 font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage; 