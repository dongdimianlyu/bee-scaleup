'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FindTeamPage = () => {
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
          className="absolute top-1/4 left-1/5 w-4 h-4 bg-blue-400 rounded-full opacity-20"
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
            Find Your Team
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Great minds think differently together. Find your perfect teammates and build something extraordinary.
          </motion.p>
        </motion.div>

        {/* Why Teams Matter Section */}
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
                  Why Teams Win
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  The best solutions come from diverse perspectives collaborating toward a common goal.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  In BEE SCALE-UP, you'll tackle complex business challenges that require multiple skill sets, different viewpoints, and complementary strengths. The magic happens when finance minds meet creative thinkers, when tech enthusiasts collaborate with marketing strategists.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Formation Options */}
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
            Ways to Form Your Team
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Existing Team */}
            <motion.div
              className="group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-4xl">🤝</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Already Have a Team?
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Perfect! Register your existing team of 3-5 members. Make sure everyone is aged 13-22 and ready to tackle real business challenges together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>Team size: 3-5 members</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>All members must be 13-22 years old</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>One person registers for the whole team</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Need Teammates */}
            <motion.div
              className="group"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-4xl">🔍</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Looking for Teammates?
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  No problem! Our intelligent matching system connects you with like-minded participants based on skills, interests, and goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>AI-powered teammate matching</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>Skill-based compatibility</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span style={{ fontFamily: 'Exo 2, sans-serif' }}>Regional and time zone consideration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Ideal Team Composition */}
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
            The Winning Team Formula
          </motion.h2>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                role: "The Strategist", 
                icon: "🧠", 
                description: "Analytical thinker who sees the big picture",
                skills: ["Business Analysis", "Strategic Planning", "Problem Solving"],
                color: "from-purple-500/20 to-pink-500/20"
              },
              { 
                role: "The Creator", 
                icon: "🎨", 
                description: "Creative mind who brings ideas to life",
                skills: ["Design", "Innovation", "Storytelling"],
                color: "from-pink-500/20 to-red-500/20"
              },
              { 
                role: "The Builder", 
                icon: "⚡", 
                description: "Technical expert who makes things work",
                skills: ["Technology", "Implementation", "Systems"],
                color: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                role: "The Connector", 
                icon: "🌟", 
                description: "People person who brings teams together",
                skills: ["Leadership", "Communication", "Networking"],
                color: "from-green-500/20 to-emerald-500/20"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{member.icon}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {member.role}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {member.description}
                  </p>
                  <div className="space-y-1">
                    {member.skills.map((skill, i) => (
                      <div key={i} className="text-xs text-blue-600 font-medium" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              <span className="font-semibold text-slate-700">Pro tip:</span> The best teams combine different strengths. 
              You don't need to be perfect in every area—that's what teammates are for!
            </p>
          </motion.div>
        </motion.section>

        {/* Team Matching Process */}
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
            How Team Matching Works
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                step: "01", 
                title: "Create Your Profile", 
                description: "Tell us about your skills, interests, goals, and what you're looking for in teammates",
                icon: "📝"
              },
              { 
                step: "02", 
                title: "Get Matched", 
                description: "Our algorithm finds potential teammates based on complementary skills and shared goals",
                icon: "🎯"
              },
              { 
                step: "03", 
                title: "Connect & Form", 
                description: "Chat with matches, meet virtually, and form your dream team for the competition",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-4xl">{step.icon}</span>
                  </motion.div>
                  <div className="text-sm font-bold text-blue-600 mb-3" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {step.description}
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
                Ready to Find Your Team?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Whether you're coming with friends or looking to meet new collaborators, your perfect team is waiting.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
                  <span>Register & Find Team</span>
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
                
                <p className="text-slate-500 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Team formation opens with registration in April 2025
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FindTeamPage; 