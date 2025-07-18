const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-black">About Us</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Empowering the next generation of business leaders through innovation, collaboration, and real-world impact.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Organization Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">BEE-Business Club</h2>
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  BEE-Business Club is dedicated to empowering the next generation of business leaders in Penang and beyond by bridging the gap between theoretical learning and practical application. We organize the BEE &ldquo;SCALE-UP&rdquo; Competition—a dynamic platform where high school, university, and professional students collaborate to solve real-world challenges faced by local businesses.
                </p>
                
                <p>
                  Our mission is to foster innovation, adaptability, and sustainability while developing critical business and STEM skills. By providing equal access to resources, mentorship, and educational opportunities—especially for the B40 community—we champion educational equity and professional growth. Our initiatives are aligned with Penang 2030&apos;s vision for holistic, innovation-driven development, encouraging participants to create impactful, sustainable solutions that drive local economic progress.
                </p>
                
                <p>
                  Through interactive workshops, peer-to-peer mentoring, and industry engagement, we strive to nurture entrepreneurial spirit, bridge opportunity gaps, and create lasting value for students, businesses, and the wider community.
                </p>
              </div>
            </div>

            {/* Short Website Bio Section */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Short Website Bio</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                BEE-Business Club empowers future leaders through the BEE &ldquo;SCALE-UP&rdquo; Competition, where students co-create innovative solutions for real Penang businesses. Driven by a commitment to educational equity and local impact, we connect youth with experts, offer transformative learning experiences, and support sustainable growth for both participants and the community.
              </p>
            </div>

            {/* Values Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3 text-black">Innovation</h3>
                  <p className="text-gray-800">Fostering creative thinking and innovative solutions to real-world business challenges.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3 text-black">Equity</h3>
                  <p className="text-gray-800">Ensuring equal access to opportunities, especially for the B40 community.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold mb-3 text-black">Sustainability</h3>
                  <p className="text-gray-800">Creating lasting impact for students, businesses, and the wider community.</p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6 text-black">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">100-700</div>
                  <p className="text-gray-800">Expected Participants</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">RM 3,000</div>
                  <p className="text-gray-800">Prize Pool</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">7</div>
                  <p className="text-gray-800">Months Program</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Real</div>
                  <p className="text-gray-800">Business Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 