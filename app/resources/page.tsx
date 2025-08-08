'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ResourcesPage = () => {
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
          className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-300 rounded-full opacity-30"
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
            Resources
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Everything you need to excel. From fundamentals to advanced strategies. Your success toolkit awaits.
          </motion.p>
        </motion.div>

        {/* Resource Philosophy */}
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
                  Knowledge Without Limits
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  We believe great resources should be accessible, practical, and transformative.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  Our curated collection covers everything from business fundamentals to advanced case analysis. Whether you're just starting or aiming for the finals, these resources will accelerate your learning and amplify your impact.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Resource Categories */}
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
            Resource Library
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                category: "Business Fundamentals",
                description: "Core concepts every participant needs to master",
                resources: [
                  "Business Model Canvas Guide",
                  "Financial Statement Analysis",
                  "Market Research Frameworks",
                  "SWOT Analysis Templates"
                ],
                icon: "📚",
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/30",
                available: true
              },
              {
                category: "Case Study Analysis",
                description: "Structured approaches to solving business problems",
                resources: [
                  "Case Analysis Framework",
                  "Problem Identification Guide",
                  "Solution Development Process",
                  "Implementation Strategies"
                ],
                icon: "🔍",
                color: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-500/30",
                available: true
              },
              {
                category: "Presentation Skills",
                description: "Tools to communicate your ideas effectively",
                resources: [
                  "Pitch Deck Templates",
                  "Storytelling Techniques",
                  "Visual Design Principles",
                  "Q&A Preparation Guide"
                ],
                icon: "🎤",
                color: "from-purple-500/20 to-pink-500/20",
                borderColor: "border-purple-500/30",
                available: true
              },
              {
                category: "Industry Insights",
                description: "Real-world context for your solutions",
                resources: [
                  "SME Challenge Database",
                  "Industry Trend Reports",
                  "Malaysian Business Landscape",
                  "Regional Market Analysis"
                ],
                icon: "🌏",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-500/30",
                available: false
              },
              {
                category: "Team Collaboration",
                description: "Work effectively with your teammates",
                resources: [
                  "Team Formation Guide",
                  "Project Management Tools",
                  "Communication Best Practices",
                  "Conflict Resolution Strategies"
                ],
                icon: "🤝",
                color: "from-indigo-500/20 to-blue-500/20",
                borderColor: "border-indigo-500/30",
                available: true
              },
              {
                category: "Innovation & Strategy",
                description: "Advanced frameworks for breakthrough thinking",
                resources: [
                  "Design Thinking Process",
                  "Innovation Methodologies",
                  "Strategic Planning Tools",
                  "Competitive Analysis"
                ],
                icon: "💡",
                color: "from-red-500/20 to-pink-500/20",
                borderColor: "border-red-500/30",
                available: false
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor} shadow-card hover:shadow-glow transition-all duration-500 h-full overflow-hidden ${!category.available ? 'opacity-75' : ''}`}>
                  {/* Flowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl transform rotate-1 group-hover:rotate-0 transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{category.icon}</span>
                        {!category.available && (
                          <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full font-medium">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {category.category}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {category.description}
                      </p>
                    </motion.div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>Includes:</h4>
                      {category.resources.map((resource, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-2 h-2 ${category.available ? 'bg-blue-500' : 'bg-slate-400'} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{resource}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* How to Access Resources */}
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
            How to Access Resources
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
                title: "Register for Competition", 
                description: "Sign up for BEE SCALE-UP to unlock access to our comprehensive resource library",
                icon: "📝",
                status: "Available Now"
              },
              { 
                step: "02", 
                title: "Complete Profile Setup", 
                description: "Fill out your learning preferences to get personalized resource recommendations",
                icon: "⚙️",
                status: "Upon Registration"
              },
              { 
                step: "03", 
                title: "Start Learning", 
                description: "Access all materials through your dedicated participant portal dashboard",
                icon: "🚀",
                status: "April 2025"
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
                  <p className="text-slate-600 leading-relaxed mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {step.description}
                  </p>
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {step.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Featured Resources Preview */}
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
            Featured Resources
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Business Model Canvas */}
            <motion.div
              className="group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-4xl">📋</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Business Model Canvas
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Interactive template that helps you map out your business solution systematically. Includes guided questions and real examples from successful case studies.
                </p>
                <div className="space-y-3">
                  {["9 Building Blocks Framework", "Guided Question Prompts", "Industry Examples", "Downloadable Template"].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span style={{ fontFamily: 'Exo 2, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Case Analysis Framework */}
            <motion.div
              className="group"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-4xl">🎯</span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Case Analysis Framework
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Step-by-step methodology for breaking down complex business problems and developing actionable solutions that judges will love.
                </p>
                <div className="space-y-3">
                  {["Problem Identification", "Root Cause Analysis", "Solution Generation", "Implementation Planning"].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                      <span style={{ fontFamily: 'Exo 2, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Learning Path */}
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
            Recommended Learning Path
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
              { phase: "Foundation", resources: "Business Fundamentals", duration: "Week 1-2", side: "left" },
              { phase: "Analysis", resources: "Case Study Methods", duration: "Week 3-4", side: "right" },
              { phase: "Collaboration", resources: "Team Dynamics", duration: "Week 5-6", side: "left" },
              { phase: "Strategy", resources: "Innovation & Planning", duration: "Week 7-8", side: "right" },
              { phase: "Presentation", resources: "Communication Skills", duration: "Week 9-10", side: "left" }
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
                  className="order-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-card hover:shadow-glow w-5/12 px-8 py-6 text-left border border-slate-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-slate-800 text-xl mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.phase}</h3>
                  <p className="text-blue-600 font-medium mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.resources}</p>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{item.duration}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
                Ready to Start Learning?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join BEE SCALE-UP and gain access to world-class resources that will accelerate your business learning journey.
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
                  <span>Access Resources</span>
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
                  Full library unlocks with registration
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResourcesPage; 