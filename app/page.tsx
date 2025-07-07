import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">BEE SCALE-UP Competition</h1>
          <p className="text-xl text-gray-700 mb-8">
            Empowering students to solve real business problems and drive impact in Malaysia and beyond.
          </p>
          <Link href="/register" className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300">
            Register Now
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="p-6">
              <span className="text-4xl">🚀</span>
              <h3 className="font-bold text-xl my-2 text-gray-900">Who?</h3>
              <p className="text-gray-700">Students ages 13–22, especially from Malaysia&apos;s B40 communities. 100–700 participants expected.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">📅</span>
              <h3 className="font-bold text-xl my-2 text-gray-900">When?</h3>
              <p className="text-gray-700">7 months: Registration opens April 2025. Prelims: Sept 10. Finals: Nov 10.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">🏆</span>
              <h3 className="font-bold text-xl my-2 text-gray-900">Why?</h3>
              <p className="text-gray-700">RM2000–3000 prize pool, mentorship, internships, certificates, and real-world impact.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">🌏</span>
              <h3 className="font-bold text-xl my-2 text-gray-900">Where?</h3>
              <p className="text-gray-700">Penang, Malaysia & Asia. Submission in English (no penalty for second-language learners).</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">💡</span>
              <h3 className="font-bold text-xl my-2 text-gray-900">What?</h3>
              <p className="text-gray-700">Teams solve real business cases for Penang-based SMEs, focusing on finance, marketing, and tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="p-6">🤝 Professional & peer mentorship</div>
            <div className="p-6">📈 Financial literacy & STEM workshops</div>
            <div className="p-6">🎓 Internship opportunities</div>
            <div className="p-6">📜 Certificates for all participants</div>
            <div className="p-6">💬 Team finder & networking</div>
            <div className="p-6">🌱 Real-world business impact</div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Timeline</h2>
          <div className="relative">
            <div className="border-l-2 border-yellow-500 absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
                <h3 className="font-bold text-gray-800 text-xl">April 2025</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Registration Opens</p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
                <h3 className="font-bold text-gray-800 text-xl">May–Aug</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Mentorship & Workshops</p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
                <h3 className="font-bold text-gray-800 text-xl">Sept 10</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Prelims</p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
                <h3 className="font-bold text-gray-800 text-xl">Oct</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Finalist Mentorship</p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
                <h3 className="font-bold text-gray-800 text-xl">Nov 10</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Finals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <span className="text-4xl">📝</span>
              <h4 className="font-bold my-2 text-gray-900">1. Register</h4>
              <p className="text-gray-700">Sign up solo or with a team. Use our team finder if needed!</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">📚</span>
              <h4 className="font-bold my-2 text-gray-900">2. Prepare</h4>
              <p className="text-gray-700">Access study resources, attend workshops, and meet your mentors.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">💼</span>
              <h4 className="font-bold my-2 text-gray-900">3. Solve Cases</h4>
              <p className="text-gray-700">Work on real business problems for Penang SMEs.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl">🚩</span>
              <h4 className="font-bold my-2 text-gray-900">4. Compete</h4>
              <p className="text-gray-700">Submit your plans, present in prelims and finals, and win prizes!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">Who can join?</h4>
              <p className="text-gray-700">Any student aged 13–22, especially from Malaysia&apos;s B40 communities.</p>
            </div>
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">What is the submission language?</h4>
              <p className="text-gray-700">English (no penalty for second-language learners).</p>
            </div>
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">How do I register?</h4>
              <p className="text-gray-700">Click the Register button above or visit the Registration section.</p>
            </div>
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">What are the prizes?</h4>
              <p className="text-gray-700">RM2000–3000 prize pool, mentorship, internships, and certificates.</p>
            </div>
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">Can I join solo?</h4>
              <p className="text-gray-700">Yes! Use our team finder to connect with others.</p>
            </div>
            <div className="mb-4 p-4 border-l-4 border-yellow-500 text-left">
              <h4 className="font-bold text-gray-900">Do I need business experience?</h4>
              <p className="text-gray-700">No prior experience needed—just curiosity and drive!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported By Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Supported By</h2>
          <p className="mb-4 font-semibold text-gray-700">Emory University of Chicago Singapore American School BPA</p>
          <h3 className="font-bold mb-2 text-gray-900">Academic Sponsor</h3>
          <p className="text-gray-700">SKT Education Group</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
