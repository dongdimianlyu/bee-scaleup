'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FundPage = () => {
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
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-30"
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
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Invest in tomorrow's business leaders today. Join us in creating opportunities that transform lives and communities.
          </motion.p>
        </motion.div>

        {/* Impact Statement */}
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
                  Your Investment, Their Future
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  Every contribution creates ripple effects that extend far beyond the competition.
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  variants={fadeInUp}
                >
                  When you fund BEE SCALE-UP, you're not just sponsoring an event—you're launching careers, fostering innovation, and building bridges between education and entrepreneurship. Your partnership helps level the playing field for students from all backgrounds.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Sponsorship Tiers */}
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
            Sponsorship Opportunities
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
                tier: "Gold Partner",
                amount: "RM 2,000+",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-500/30",
                benefits: [
                  "Prominent logo placement on all materials",
                  "Speaking opportunity at final event",
                  "Access to top talent for recruitment",
                  "Social media feature campaign",
                  "Certificate of partnership",
                  "Networking session with mentors"
                ],
                icon: "🥇"
              },
              {
                tier: "Silver Partner", 
                amount: "RM 1,000+",
                color: "from-slate-300/20 to-slate-500/20",
                borderColor: "border-slate-300/30",
                benefits: [
                  "Logo on event materials and website",
                  "Access to participant resumes",
                  "Social media mentions",
                  "Partnership certificate",
                  "Final event recognition",
                  "Workshop naming opportunity"
                ],
                icon: "🥈"
              },
              {
                tier: "Bronze Partner",
                amount: "RM 500+",
                color: "from-amber-600/20 to-amber-800/20", 
                borderColor: "border-amber-600/30",
                benefits: [
                  "Website logo placement",
                  "Event day recognition",
                  "Partnership certificate",
                  "Access to final presentations",
                  "Networking opportunities",
                  "Thank you feature"
                ],
                icon: "🥉"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border ${tier.borderColor} shadow-card hover:shadow-glow transition-all duration-500 h-full overflow-hidden`}>
                  {/* Flowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-3xl transform rotate-1 group-hover:rotate-0 transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <motion.div
                      className="text-center mb-8"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-5xl mb-4 block">{tier.icon}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {tier.tier}
                      </h3>
                      <div className="text-3xl font-black text-gradient" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                        {tier.amount}
                      </div>
                    </motion.div>

                    <div className="space-y-4">
                      {tier.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Partner With Us */}
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
            Why Partner With Us
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
                title: "Access to Talent",
                description: "Connect with Malaysia's brightest young minds before they graduate",
                icon: "🎯",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                title: "Brand Visibility", 
                description: "Reach 100-700 participants plus their networks across Malaysia and beyond",
                icon: "📢",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Social Impact",
                description: "Make a meaningful difference in educational equity and opportunity access",
                icon: "🌍",
                color: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "Innovation Pipeline",
                description: "Discover fresh solutions and innovative approaches to business challenges",
                icon: "💡",
                color: "from-yellow-500/20 to-orange-500/20"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-glow transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{reason.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Impact Numbers */}
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
            Your Investment Impact
          </motion.h2>

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
            
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/20 shadow-xl">
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { number: "100-700", label: "Students Reached", suffix: "" },
                  { number: "7", label: "Months of Impact", suffix: "" },
                  { number: "RM 3,000", label: "Prize Pool Funded", suffix: "" },
                  { number: "100%", label: "ROI on Talent", suffix: "" }
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

        {/* Current Sponsors Recognition */}
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
            Our Champions
          </motion.h2>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-card p-12 max-w-2xl mx-auto border border-blue-100">
              <motion.div
                className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-8 mx-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-4xl font-bold text-white">MC</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Mr. Chong</h3>
              <p className="text-xl text-blue-600 font-semibold mb-6" style={{ fontFamily: 'Exo 2, sans-serif' }}>Platinum Sponsor</p>
              <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Leading the charge in supporting educational excellence and creating opportunities for Malaysia's brightest minds.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Join visionary partners who believe in the power of education to transform lives and communities.
            </p>
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
                Ready to Make an Impact?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's discuss how your organization can partner with us to shape the future of business education in Malaysia.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="mailto:partnerships@beescaleup.com"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-12 rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Become a Partner</span>
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
                </motion.a>
                
                <p className="text-slate-500 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Partnership opportunities available now
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FundPage; 