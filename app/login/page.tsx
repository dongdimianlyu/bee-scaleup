'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PrivacyTermsModal from '@/app/components/PrivacyTermsModal';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    acceptPrivacyTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.acceptPrivacyTerms) {
      setError('You must agree to the Privacy Terms & Policy to continue');
      return;
    }

    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
      router.push('/');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign in';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');

    if (!formData.acceptPrivacyTerms) {
      setError('You must agree to the Privacy Terms & Policy to continue');
      return;
    }

    setLoading(true);

    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign in with Google';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-5"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-card border border-white/20 p-8">
                     <motion.div 
             className="text-center mb-8"
             initial={{ opacity: 0, y: 60 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
           >
            <h1 
              className="text-4xl font-bold text-gradient mb-4"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Welcome Back
            </h1>
            <p 
              className="text-slate-600 text-lg"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Continue your journey to business excellence
            </p>
          </motion.div>

          {error && (
            <motion.div
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900"
                placeholder="••••••••"
              />
            </motion.div>

            {/* Privacy Terms Checkbox */}
            <motion.div {...fadeInUp} transition={{ delay: 0.25 }}>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptPrivacyTermsLogin"
                  checked={formData.acceptPrivacyTerms}
                  onChange={(e) => setFormData({ ...formData, acceptPrivacyTerms: e.target.checked })}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="acceptPrivacyTermsLogin" className="text-sm text-slate-600" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors duration-200"
                  >
                    Privacy Terms & Policy
                  </button>
                  {' '}and understand how my data will be used.
                </label>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </motion.button>

            {/* Divider */}
            <motion.div
              className="flex items-center my-6"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-1 border-t border-slate-300"></div>
              <span className="px-4 text-slate-500 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>or</span>
              <div className="flex-1 border-t border-slate-300"></div>
            </motion.div>

            {/* Google Sign In Button */}
            <motion.button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </motion.button>
          </form>

          <motion.div
            className="text-center mt-8"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <p className="text-slate-600" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Sign up
              </Link>
            </p>
          </motion.div>

          <motion.div
            className="text-center mt-4"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-700 text-sm transition-colors duration-200"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Privacy Terms Modal */}
      <PrivacyTermsModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />
    </div>
  );
};

export default LoginPage; 