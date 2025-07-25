const FundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Fund Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Support the BEE SCALE-UP Competition and help us empower the next generation of entrepreneurs.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed">
            Information about funding opportunities and sponsorship details will be available here soon.
            Join us in making a difference in students' lives across Malaysia and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundPage; 