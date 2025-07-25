const CompetitionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Competition
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn more about the BEE SCALE-UP Competition format, rules, and timeline.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed">
            Competition details and information will be available here soon. 
            Stay tuned for more updates about the competition format, judging criteria, and prizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage; 