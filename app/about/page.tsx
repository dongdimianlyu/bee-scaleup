const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            BEE SCALE-UP is a transformative 7-month business case competition designed to empower students aged 13–22, 
            with a special focus on Malaysia's B40 communities, through real-world business problem-solving.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 mb-12 border border-slate-100">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            BEE-Business Club
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Our mission is to bridge the gap between education and real-world application by providing students with 
            hands-on experience in solving actual business challenges faced by small and medium enterprises (SMEs) in Penang.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Through mentorship, workshops, and direct engagement with industry partners, we create pathways for students 
            to develop critical business skills while making tangible impacts on local communities.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe that every student, regardless of their background, deserves access to quality business education 
            and opportunities for professional growth.
          </p>
        </div>

        {/* Short Bio Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 mb-12 border border-slate-100">
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Short Website Bio
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            BEE Business Club is dedicated to fostering entrepreneurial thinking and business acumen among young minds. 
            Our flagship competition connects students with real SME challenges, providing practical experience that 
            goes beyond traditional classroom learning.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 mb-12 border border-slate-100">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Innovation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Encouraging creative problem-solving and forward-thinking approaches to business challenges.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Equity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ensuring equal access to opportunities regardless of socioeconomic background or geographic location.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Sustainability
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Promoting business solutions that create lasting positive impact on communities and the environment.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100-700</div>
              <p className="text-slate-600">Expected Participants</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">RM 3,000</div>
              <p className="text-slate-600">Prize Pool</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <p className="text-slate-600">Months Duration</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Real</div>
              <p className="text-slate-600">Business Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 