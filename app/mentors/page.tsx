'use client';

import Image from 'next/image';
import { useState } from 'react';

const MentorProfilePage = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const mentors = [
    {
      id: 1,
      name: "Weston Guo",
      college: "Incoming freshman at USC Iovine and Young Academy",
      major: "Art, Technology and Business of Innovation",
      bio: "Passionate about tech-driven startups, generative AI, and web3. Previously co-founded a web3 emotional companionship startup, raising $300k USD in pre-seed funding.",
      hobbies: ["Traveling", "Video games", "Watching Netflix", "Clippers fan", "Playing poker"],
      image: "/mentors/weston-guo.jpg",
      expertise: ["Startups", "Generative AI", "Web3", "Fundraising", "Innovation"],
      achievements: ["Co-founder of web3 startup", "$300k pre-seed funding raised", "USC Iovine and Young Academy student"]
    },
    {
      id: 2,
      name: "Will Wang",
      college: "UCL Business & Health",
      major: "Business Leadership & Competition",
      bio: "2024-2026 President of Business Professionals of America (BPA) China Executive Council. 2022-2025 Founder/President of STW Business Club. 2023-2024 President of OTIA High School Student Union. Certified Young Investors Analyst (CYIA).",
      hobbies: ["Browse social media", "TikTok", "Rednote blogging", "Vlogging", "Movie fan"],
      image: "/mentors/will-wang.jpg",
      expertise: ["Business Leadership", "Competition Strategy", "Student Organizations", "Investment Analysis", "Public Speaking"],
      achievements: ["BPA China Executive Council President", "FBLA competition TOP 10 in China", "Young Investors Society (YIS) Top 5 in Asia", "Certified Young Investors Analyst (CYIA)", "STW Business Club Founder"],
      quote: "LEAP INTO THE BEYOND, from UCL Business & Health"
    },
    {
      id: 3,
      name: "Theodore Grether-Murray",
      college: "University of California Berkeley M.E.T (1 of 50 Selected students) <1% Acceptance rate",
      major: "Management, Entrepreneurship & Technology",
      bio: "Theo is a 17-year-old entrepreneur from Montreal, passionate about using technology to drive global impact. From building renewable energy in Uganda to founding Piñata Pitch, a global startup competition for youth, Theo is on a mission to empower the next generation of changemakers.",
      hobbies: ["Running"],
      image: "/mentors/theodore-grether-murray.jpg",
      expertise: ["Entrepreneurship", "Technology", "Global Impact", "Renewable Energy", "Youth Leadership"],
      achievements: ["Founded Piñata Pitch global startup competition", "Built renewable energy projects in Uganda", "UC Berkeley M.E.T Program (1% acceptance rate)", "Global youth empowerment advocate"],
      quote: "Everything around you that you call life was made up by people that were no smarter than you. - Steve Jobs"
    },
    {
      id: 4,
      name: "Chua Zhi Yu",
      college: "HKUST Business School",
      major: "Investment Banking & Private Equity",
      bio: "Experienced in investment banking and private equity, with a passion for pro-bono consulting and leadership development. Committed to driving meaningful change and creating a lasting impact in the communities we live in.",
      hobbies: ["Board Game", "Football", "Running", "Travel"],
      image: "/logos/chua.png",
      expertise: ["Investment Banking", "Private Equity", "Pro-bono Consulting", "Leadership Development", "Community Impact"],
      achievements: ["Investment Banking Professional", "Private Equity Specialist", "Pro-bono Consulting Expert", "Leadership Development Advocate"],
      quote: "To grow, look ahead; to truly succeed, look back and give back."
    }
  ];

  const handleImageError = (mentorId: number) => {
    setImageErrors(prev => ({ ...prev, [mentorId]: true }));
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-20 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Meet Our Mentors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Learn from experienced professionals who will guide you through your business journey.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-lg text-cyan-400 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Free but EXCLUSIVE to competition participants (Rolling basis - First Come First Serve)
              </p>
              <p className="text-md text-blue-400 font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                More Elite student mentors incoming...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="card-futuristic overflow-hidden hover:glow-cyan transition-all duration-300 transform hover:-translate-y-2">
                {/* Profile Image */}
                <div className="relative h-80 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg glow-cyan">
                    {imageErrors[mentor.id] ? (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl text-gray-400 mb-2">👤</div>
                          <p className="text-sm text-gray-500">Photo Coming Soon</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(mentor.id)}
                      />
                    )}
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{mentor.name}</h2>
                  
                  {/* Education */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Education</h3>
                    <p className="text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{mentor.college}</p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{mentor.major}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>About</h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{mentor.bio}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <span key={index} className="bg-cyan-500/20 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Key Achievements</h3>
                    <ul className="space-y-1">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="text-cyan-400 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hobbies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Hobbies & Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {mentor.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote (if available) */}
                  {mentor.quote && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Favorite Quote</h3>
                      <p className="text-gray-700 italic text-sm leading-relaxed">&ldquo;{mentor.quote}&rdquo;</p>
                    </div>
                  )}

                  {/* Connect Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Connect with {mentor.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorProfilePage; 