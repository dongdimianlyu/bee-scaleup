const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Certificate
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Verify and showcase your participation in the BEE SCALE-UP Competition.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed">
            Certificate verification and download system will be available here after the competition.
            All participants will receive professional certificates recognizing their achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage; 