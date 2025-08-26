'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

                {/* Executive Team Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          {/* Leadership Tier - President & Director */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-2xl"
            >
              {/* Futuristic Card Container */}
              <div className="relative group">
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200 animate-pulse"></div>
                
                {/* Main Card */}
                <div className="relative glass rounded-3xl p-10 border border-white/30 shadow-2xl backdrop-blur-xl">
                  {/* President Profile */}
                  <div className="text-center">
                    {/* Executive Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        ✨ PRESIDENT ✨
                      </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="relative mb-8 mt-6">
                      <div className="w-40 h-40 mx-auto relative group-hover:scale-110 transition-transform duration-500">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                          <Image
                            src="/logos/ZO.png"
                            alt="Zach Ooi"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin" style={{ animation: 'spin 20s linear infinite' }}></div>
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="mb-8">
                      <h2 className="text-4xl font-bold text-gradient-holographic mb-2 glow-text-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Zach Ooi
          </h2>
                      <p className="text-cyan-300 text-lg font-semibold">Visionary Leader & Founder</p>
                    </div>

                    {/* Content Sections */}
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                      {/* Mission Statement */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
                          </div>
                          <h3 className="text-cyan-400 font-bold text-lg">Why BEE?</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          Driven by this mission, I launched an inclusive competition featuring complimentary mentorship, hands-on workshops, and access to distinguished guest speakers. My goal is to empower every participant—regardless of background—with equal opportunities to develop crucial business skills, connect with professionals, and realize their potential as future leaders.
                        </p>
                      </div>

                      {/* Interests */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white rounded-full relative">
                              <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          </div>
                          <h3 className="text-purple-400 font-bold text-lg">Hobbies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['Research', 'Cycling', 'Tennis', 'Art Exhibitions', 'AI/LLM', 'Social Entrepreneurship', 'Startup Discussions'].map((interest, index) => (
                            <span key={index} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-400/30">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Chu Gin Nie - Liaison Manager */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative"
            >
              {/* Animated Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              <div className="relative glass rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl hover:shadow-emerald-500/20 transition-all duration-500">
                {/* Role Badge */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-emerald-400 to-green-500 text-black px-4 py-1 rounded-full text-xs font-bold z-10">
                  LIAISON MANAGER
                </div>

                {/* Profile Section */}
                <div className="text-center mb-6 pt-4">
                  <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full blur-md opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl">
                      <Image
                        src="/logos/CGN.png"
                        alt="Chu Gin Nie"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Chu Gin Nie
                  </h3>
                  <p className="text-emerald-400 text-sm font-medium">Strategic Communications</p>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-sm rotate-45"></div>
                      </div>
                      <h4 className="text-emerald-400 font-semibold text-sm">Why BEE?</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      I joined the BEE "SCALE-UP" team because I'm passionate about business, leadership, and making a real impact. I wanted to help empower students like me to solve real problems, support local communities, and bridge the education gap while growing my own skills in communication, strategy, and innovation.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-emerald-400 rounded-full relative">
                          <div className="w-1 h-1 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                      <h4 className="text-emerald-400 font-semibold text-sm">Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Market Analysis', 'Entrepreneurship', 'Hiking', 'Adventure Sports'].map((hobby, index) => (
                        <span key={index} className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-400/20">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Jiaren - Director of Technology */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              <div className="relative glass rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-400 to-violet-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  DIRECTOR OF TECHNOLOGY
                </div>

                <div className="text-center mb-6 pt-4">
                  <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full blur-md opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl">
                      <Image
                        src="/logos/JR.png"
                        alt="Jiaren"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Jiaren
                  </h3>
                  <p className="text-purple-400 text-sm font-medium">Innovation & Tech Leadership</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-sm rotate-45"></div>
                      </div>
                      <h4 className="text-purple-400 font-semibold text-sm">Why BEE?</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Imagine a world where your achievement and success are determined not by chance, but by merit. I joined because we're nowhere near that world yet. The brightest minds often go unrecognized while mediocrity advances through proximity to power. This competition strips away everything but pure capability, where ideas fight on equal ground and brilliance wins regardless of birthplace.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-purple-400 rounded-full relative">
                          <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                      <h4 className="text-purple-400 font-semibold text-sm">Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Literature', 'Startups', 'AI Development', 'Future Tech'].map((hobby, index) => (
                        <span key={index} className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded text-xs border border-purple-400/20">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yining Li - Marketing Manager */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              <div className="relative glass rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl hover:shadow-pink-500/20 transition-all duration-500">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  MARKETING MANAGER
                </div>

                <div className="text-center mb-6 pt-4">
                  <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full blur-md opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl">
                      <Image
                        src="/logos/YL.png"
                        alt="Yining Li"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Yining Li
                  </h3>
                  <p className="text-pink-400 text-sm font-medium">Brand & Growth Strategy</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-sm rotate-45"></div>
                      </div>
                      <h4 className="text-pink-400 font-semibold text-sm">Why BEE?</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      The reason why I want to join this team is because of my interest and passion to continue the exploration of economics, finance and business.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-pink-400 rounded-full relative">
                          <div className="w-1 h-1 bg-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                      <h4 className="text-pink-400 font-semibold text-sm">Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Makeup Artistry', 'Content Creation', 'Business Planning', 'Social Media'].map((hobby, index) => (
                        <span key={index} className="bg-pink-500/10 text-pink-300 px-2 py-1 rounded text-xs border border-pink-400/20">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nathan Ng - General Support/Admin */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              <div className="relative glass rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl hover:shadow-orange-500/20 transition-all duration-500">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  OPERATIONS SPECIALIST
                </div>

                <div className="text-center mb-6 pt-4">
                  <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur-md opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
                      NN
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Nathan Ng
                  </h3>
                  <p className="text-orange-400 text-sm font-medium">Administrative Excellence</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-sm rotate-45"></div>
                      </div>
                      <h4 className="text-orange-400 font-semibold text-sm">Why BEE?</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Hello, I am Nathan Ng. I am interested in joining this competition to expand my potential and knowledge in the business world.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-orange-400 rounded-full relative">
                          <div className="w-1 h-1 bg-orange-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                      <h4 className="text-orange-400 font-semibold text-sm">Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Digital Art', 'Historical Research', 'Documentation'].map((hobby, index) => (
                        <span key={index} className="bg-orange-500/10 text-orange-300 px-2 py-1 rounded text-xs border border-orange-400/20">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Onyx Cho - Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="group relative lg:col-start-2 xl:col-start-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              <div className="relative glass rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl hover:shadow-indigo-500/20 transition-all duration-500">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-400 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  EXECUTIVE SECRETARY
                </div>

                <div className="text-center mb-6 pt-4">
                  <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full blur-md opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                      OC
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Onyx Cho
                  </h3>
                  <p className="text-indigo-400 text-sm font-medium">Organizational Leadership</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-sm rotate-45"></div>
                      </div>
                      <h4 className="text-indigo-400 font-semibold text-sm">Why BEE?</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      I am eager to learn and assist Bee Business club as it provides opportunities to those who are persistent and full with dreams.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-indigo-400 rounded-full relative">
                          <div className="w-1 h-1 bg-indigo-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                      <h4 className="text-indigo-400 font-semibold text-sm">Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Soccer', 'Rubik\'s Cubes', 'Problem Solving'].map((hobby, index) => (
                        <span key={index} className="bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-400/20">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
