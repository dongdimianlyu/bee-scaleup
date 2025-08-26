'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              BEE SCALE-UP Competition Privacy Terms & Policy
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 text-gray-700">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">—General</h3>
            </div>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Introduction</h3>
              <p className="leading-relaxed">
                Welcome to the BEE SCALE-UP Competition. We value your privacy and are committed to protecting your personal information. This Privacy Terms & Policy outlines how we collect, use, and safeguard your data during your participation in our competition.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2. How We Use Your Information</h3>
              <p className="leading-relaxed mb-3">
                The information you provide is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Registration and Participation:</strong> To process your registration and facilitate your involvement in the competition.</li>
                <li><strong>Event Planning:</strong> To organize and plan the final round and related events effectively.</li>
                <li><strong>Communication:</strong> To send important updates, notifications, and information related to the competition.</li>
                <li><strong>Feedback and Improvement:</strong> To gather feedback for enhancing future competitions and events.</li>
                <li><strong>Internal training purposes:</strong> To provide trainings to the organising committee</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Specific Legal Terms & Agreement by parties</h3>
              <ul className="space-y-2">
                <li><strong>Participants:</strong> <a href="https://docs.google.com/document/d/e/2PACX-1vRgmlK93qdiFly5K_6dH7mJvbokNiraEyoA2-JOgc8XMsv8ZTJSZufBQpq9-IlXwMbjru6jlSk1_cNg/pub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://docs.google.com/document/d/e/2PACX-1vRgmlK93qdiFly5K_6dH7mJvbokNiraEyoA2-JOgc8XMsv8ZTJSZufBQpq9-IlXwMbjru6jlSk1_cNg/pub</a></li>
                <li><strong>Team Search:</strong> <a href="https://docs.google.com/document/d/e/2PACX-1vQttCpEF6hBm4yRaz3i8Yyg47rCl_dwM3XOHD2UZCzBKU-3vffgsN-W8JdMCSbpRqnIF3MF7Lr12haW/pub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://docs.google.com/document/d/e/2PACX-1vQttCpEF6hBm4yRaz3i8Yyg47rCl_dwM3XOHD2UZCzBKU-3vffgsN-W8JdMCSbpRqnIF3MF7Lr12haW/pub</a></li>
                <li><strong>Guest Speakers:</strong> <a href="https://docs.google.com/document/d/1ZriGQk4HG_YH609xbYZvGDcFsAm099scvDhp2W3V20Y/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://docs.google.com/document/d/1ZriGQk4HG_YH609xbYZvGDcFsAm099scvDhp2W3V20Y/edit?tab=t.0</a></li>
                <li><strong>Mentor Pair:</strong> <a href="https://docs.google.com/document/d/1WOr5ArmNzwKP_dnqFEC1rDWwaHpDLSaRtMEDNGsvdck/edit?tab=t.0#heading=h.w8guxrf1fu1f" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://docs.google.com/document/d/1WOr5ArmNzwKP_dnqFEC1rDWwaHpDLSaRtMEDNGsvdck/edit?tab=t.0#heading=h.w8guxrf1fu1f</a></li>
                <li><strong>Judges:</strong> <a href="https://docs.google.com/document/d/1ZQ1c0qxY6fMB461zxdVDtrHIASTfZG2UEagudcSs3PA/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://docs.google.com/document/d/1ZQ1c0qxY6fMB461zxdVDtrHIASTfZG2UEagudcSs3PA/edit?tab=t.0</a></li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Data Sharing and Disclosure</h3>
              <p className="leading-relaxed mb-3">
                We respect your privacy and do not share your personal information with third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We share information with trusted service providers (etc. Google forms) who assist in organizing and managing the competition. These providers are obligated to protect your data.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">5. Data Security</h3>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Data Retention</h3>
              <p className="leading-relaxed">
                Your personal information will be retained for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once your data is no longer needed, it will be securely deleted.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">7. Your Rights</h3>
              <p className="leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of any inaccuracies in your data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to certain conditions.</li>
                <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise these rights, please contact us at info@beebusinessclub.com.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">8. Changes to This Policy</h3>
              <p className="leading-relaxed">
                We may update this Privacy Terms & Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">9. Contact Us</h3>
              <p className="leading-relaxed mb-3">
                If you have any questions or concerns about this policy or our data practices, please contact us at:
              </p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> info@beebusinessclub.com</li>
                <li><strong>Phone:</strong> +60 12-342 9118</li>
                <li><strong>Address:</strong> Hexagon Tech Park, Penang, Malaysia</li>
              </ul>
            </section>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-2xl">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyTermsModal;
