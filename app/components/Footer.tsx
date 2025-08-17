import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h4 className="text-3xl font-bold mb-4 text-gradient">
              BEE SCALE-UP
            </h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              A 7-month business case competition empowering students (ages 13–22) from secondary to university levels—especially in Malaysia&apos;s B40 communities—through real-world business problem solving.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/beebusinessclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>About Us</Link></li>
              <li><Link href="/competition" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>Competition</Link></li>
              <li><Link href="/mentors" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>Mentors</Link></li>
              <li><Link href="/resources" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>Resources</Link></li>
              <li><Link href="/find-team" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>Find Team</Link></li>
              <li><Link href="/fund" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2 text-blue-500">→</span>Partner Relations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-slate-400 text-sm">General Inquiries</p>
                  <p className="text-white">bee.businessclub@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">Penang, Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BEE Business Club. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm">
              <span className="font-semibold">Supported by:</span> Emory University, University of Chicago, Singapore American School BPA, SKT Education Group
            </div>
          </div>
          
          {/* Terms & Policy Link */}
          <div className="text-center border-t border-slate-700 pt-4">
            <Link 
              href="https://docs.google.com/document/d/e/2PACX-1vQttCpEF6hBm4yRaz3i8Yyg47rCl_dwM3XOHD2UZCzBKU-3vffgsN-W8JdMCSbpRqnIF3MF7Lr12haW/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm underline"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Terms & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 