'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CertificatePage = () => {
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
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20"
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
            Certificates
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Earn recognition that opens doors. Showcase achievements that matter. Build credentials that last.
          </motion.p>
        </motion.div>

        {/* Certificate Value Proposition */}
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
                  More Than Paper, More Than Proof
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  Your BEE SCALE-UP certificate represents real skills, proven dedication, and measurable impact.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  Every participant receives professional recognition for their journey through the competition. Whether you reach the finals or complete the workshops, your certificate validates authentic learning experiences that employers and universities value.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Certificate Types */}
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
            Certificate Levels
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
                level: "Completion Certificate",
                description: "For all participants who complete the full program",
                requirements: [
                  "Complete all workshop modules",
                  "Submit team formation",
                  "Participate in mentorship sessions",
                  "Submit preliminary case analysis"
                ],
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/></svg>,
                color: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-500/30"
              },
              {
                level: "Excellence Certificate", 
                description: "For teams that advance to the final round",
                requirements: [
                  "All completion requirements",
                  "Qualify for final round",
                  "Present final solutions",
                  "Demonstrate innovation and impact"
                ],
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>,
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/30"
              },
              {
                level: "Achievement Certificate",
                description: "For winning teams and outstanding performers",
                requirements: [
                  "All excellence requirements",
                  "Top 3 final placement OR",
                  "Special recognition award",
                  "Exceptional contribution to program"
                ],
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/></svg>,
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-500/30"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border ${cert.borderColor} shadow-card hover:shadow-glow transition-all duration-500 h-full overflow-hidden`}>
                  {/* Flowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-3xl transform rotate-1 group-hover:rotate-0 transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <motion.div
                      className="text-center mb-8"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-blue-600 mb-4 flex justify-center">{cert.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {cert.level}
                      </h3>
                      <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {cert.description}
                      </p>
                    </motion.div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>Requirements:</h4>
                      {cert.requirements.map((req, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{req}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>





        {/* Certificate Preview Mockup */}
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
            Certificate Preview
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
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
              
              {/* Certificate Mockup */}
              <div className="relative bg-white rounded-[2rem] p-8 md:p-16 border-4 border-blue-500/20 shadow-2xl">
                <div className="text-center">
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-blue-600 text-lg font-semibold mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      BEE SCALE-UP COMPETITION
                    </h3>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      Certificate of Excellence
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-slate-700 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      This certifies that
                    </p>
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      [Participant Name]
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      has successfully completed the BEE SCALE-UP Competition, demonstrating exceptional skills in business analysis, innovation, and collaborative problem-solving
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="flex justify-between items-end max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-left">
                      <div className="text-sm text-slate-500 mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>Date</div>
                      <div className="font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>November 16, 2025</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>Certificate ID</div>
                      <div className="font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>BSU-2025-EXC-001</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
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
                Ready to Earn Your Certificate?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join BEE SCALE-UP and earn professional recognition that enhances your academic and career prospects.
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
                  <span>Start Your Journey</span>
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
                  Certificates awarded upon program completion
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CertificatePage; 