const FindTeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Find Your Team
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with like-minded students and form your competition team.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed">
            Our team matching system will help you find the perfect teammates for the competition.
            Connect with students who share your passion for business innovation and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindTeamPage; 