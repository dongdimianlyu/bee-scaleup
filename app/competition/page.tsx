'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CompetitionPage = () => {
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
          className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-30"
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
            The Competition
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Where business meets innovation. Where students become entrepreneurs. Where the future takes shape.
          </motion.p>
        </motion.div>

        {/* Competition Format Section */}
        <motion.section
          className="mb-24"
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
              { 
                step: "01", 
                title: "Team Formation", 
                description: "Form teams of 3-5 students or use our matching system to find teammates",
                icon: "👥",
                color: "from-purple-500/20 to-pink-500/20"
              },
              { 
                step: "02", 
                title: "Case Assignment", 
                description: "Receive real business challenges from Penang SMEs across different industries",
                icon: "📋",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                step: "03", 
                title: "Research & Develop", 
                description: "Conduct research, analyze data, and develop comprehensive business solutions",
                icon: "🔬",
                color: "from-green-500/20 to-emerald-500/20"
              },
              { 
                step: "04", 
                title: "Present & Win", 
                description: "Present your solutions to expert judges and compete for prizes and recognition",
                icon: "🏆",
                color: "from-yellow-500/20 to-orange-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </motion.div>
                  <div className="text-sm font-bold text-blue-600 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Competition Phases */}
        <motion.section
          className="mb-24"
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
            Competition Phases
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "Preparation & Mentorship",
                duration: "May - August 2025",
                description: "Intensive preparation phase with workshops, mentorship sessions, and skill-building activities.",
                highlights: ["Weekly mentorship sessions", "Business fundamentals workshops", "Team building activities", "Research methodology training"],
                color: "from-blue-500 to-blue-600"
              },
              {
                phase: "Phase 2", 
                title: "Preliminary Round",
                duration: "September 10, 2025",
                description: "Teams present their initial case solutions to qualify for the final round.",
                highlights: ["Case study analysis", "10-minute presentations", "Q&A with judges", "Top teams advance to finals"],
                color: "from-purple-500 to-purple-600"
              },
              {
                phase: "Phase 3",
                title: "Final Preparation",
                duration: "October 2025",
                description: "Finalist teams receive advanced mentorship and refine their solutions.",
                highlights: ["Advanced mentorship", "Solution refinement", "Presentation coaching", "Final preparation workshops"],
                color: "from-green-500 to-green-600"
              },
              {
                phase: "Phase 4",
                title: "Grand Finals",
                duration: "November 10, 2025",
                description: "The ultimate showdown where final teams compete for the grand prize.",
                highlights: ["Final presentations", "Industry expert judging", "Awards ceremony", "Networking opportunities"],
                color: "from-yellow-500 to-orange-500"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <motion.div
                        className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${phase.color} text-white rounded-full font-bold text-lg mb-4`}
                        style={{ fontFamily: 'Exo 2, sans-serif' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {phase.phase}
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {phase.title}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {phase.duration}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-slate-600 text-lg leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {phase.description}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="font-bold text-slate-900 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Key Highlights:</h4>
                      <ul className="space-y-2">
                        {phase.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-slate-600"
                            style={{ fontFamily: 'Exo 2, sans-serif' }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Judging Criteria */}
        <motion.section
          className="mb-24"
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
            Judging Criteria
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Innovation", 
                percentage: "30%", 
                description: "Creativity and originality of your solution approach",
                icon: "💡",
                color: "from-purple-500/20 to-pink-500/20"
              },
              { 
                title: "Feasibility", 
                percentage: "25%", 
                description: "Practicality and implementability of your proposed solution",
                icon: "⚙️",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                title: "Impact", 
                percentage: "25%", 
                description: "Potential positive effect on the business and community",
                icon: "🎯",
                color: "from-green-500/20 to-emerald-500/20"
              },
              { 
                title: "Presentation", 
                percentage: "20%", 
                description: "Clarity, structure, and persuasiveness of your pitch",
                icon: "🎤",
                color: "from-yellow-500/20 to-orange-500/20"
              }
            ].map((criteria, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${criteria.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{criteria.icon}</span>
                  </motion.div>
                  <div className="text-3xl font-black text-gradient mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {criteria.percentage}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {criteria.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {criteria.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Compete?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join hundreds of ambitious students in solving real business challenges. The future of business starts here.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
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
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CompetitionPage; 