import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white pt-16 pb-8 relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h4 className="text-3xl font-bold mb-4 text-gradient-holographic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              BEE SCALE-UP
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              A 2-month business case competition empowering students (ages 13–22) from secondary to university levels—especially in Malaysia&apos;s B40 communities—through real-world business problem solving.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/beebusinessclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Links</h5>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>About Us</Link></li>
              <li><Link href="/competition" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>Competition</Link></li>
              <li><Link href="/mentors" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>Mentors</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>Resources</Link></li>
              <li><Link href="/find-team" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>Find Team</Link></li>
              <li><Link href="/fund" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}><span className="mr-2 text-cyan-500">→</span>Partner Relations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>General Inquiries</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>bee.businessclub@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Penang, Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Sections */}
        <div className="border-t border-white/10 pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guest Speakers From */}
            <div className="bg-black/30 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Guest Speakers From
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/columbia.png" 
                    alt="Columbia Business School" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/capisa.png" 
                    alt="Capisa" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/jpm.png" 
                    alt="JPMorgan Chase" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Mentors From */}
            <div className="bg-black/30 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Mentors From
              </h3>
              <div className="flex justify-center items-center space-x-6">
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/met.png" 
                    alt="Berkeley M.E.T" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/ucl.png" 
                    alt="UCL" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/hkust.png" 
                    alt="HKUST" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/usc.png" 
                    alt="USC" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/boston.png" 
                    alt="Boston College" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-black/30 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Partners
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/pydc.png" 
                    alt="PYDC" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/skt.png" 
                    alt="SKT" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                & philanthropists
              </p>
            </div>

            {/* Advisors From */}
            <div className="bg-black/30 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Advisors From
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/uchicago.png" 
                    alt="University of Chicago" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/john.png" 
                    alt="Johns Hopkins University" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 w-28 h-20 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/logos/lse.png" 
                    alt="LSE" 
                    width={100} 
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {new Date().getFullYear()} BEE Business Club. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Based in Malaysia with the Government
            </div>
          </div>
          
          {/* Terms & Policy Link */}
          <div className="text-center border-t border-white/10 pt-4">
            <Link 
              href="https://docs.google.com/document/d/e/2PACX-1vQttCpEF6hBm4yRaz3i8Yyg47rCl_dwM3XOHD2UZCzBKU-3vffgsN-W8JdMCSbpRqnIF3MF7Lr12haW/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm underline"
              style={{ fontFamily: 'Inter, sans-serif' }}
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