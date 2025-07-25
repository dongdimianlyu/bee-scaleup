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
      college: "Business Professional",
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
    }
  ];

  const handleImageError = (mentorId: number) => {
    setImageErrors(prev => ({ ...prev, [mentorId]: true }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Meet Our Mentors
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from experienced professionals who will guide you through your business journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Profile Image */}
                <div className="relative h-80 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{mentor.name}</h2>
                  
                  {/* Education */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">Education</h3>
                    <p className="text-gray-700 font-medium">{mentor.college}</p>
                    <p className="text-gray-600 text-sm">{mentor.major}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">About</h3>
                    <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Key Achievements</h3>
                    <ul className="space-y-1">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
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