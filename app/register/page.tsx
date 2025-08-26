'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth, UserRole } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PrivacyTermsModal from '@/app/components/PrivacyTermsModal';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'participant' as UserRole,
    acceptPrivacyTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.acceptPrivacyTerms) {
      setError('You must agree to the Privacy Terms & Policy to continue');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await signUp(formData.email, formData.password, formData.role);
      if (formData.role === 'judge') {
        router.push('/judge/dashboard');
      } else {
        router.push('/participant/dashboard');
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to create account';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (role: UserRole) => {
    setError('');

    if (!formData.acceptPrivacyTerms) {
      setError('You must agree to the Privacy Terms & Policy to continue');
      return;
    }

    setLoading(true);

    try {
      await signInWithGoogle(role);
      if (role === 'judge') {
        router.push('/judge/dashboard');
      } else {
        router.push('/participant/dashboard');
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign up with Google';
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
              Join the Movement
            </h1>
            <p 
              className="text-slate-600 text-lg"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Transform your potential into impact. Choose your role and shape the future of business.
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
            {/* Role Selection */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Register as:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'participant' })}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.role === 'participant'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      <svg className="w-8 h-8 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="font-semibold text-slate-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      Participant
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      Solve. Innovate. Win.
                    </div>
                  </div>
                  {formData.role === 'participant' && (
                    <motion.div
                      className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'judge' })}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.role === 'judge'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      <svg className="w-8 h-8 mx-auto text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="font-semibold text-slate-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      Judge
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      Guide. Inspire. Shape.
                    </div>
                  </div>
                  {formData.role === 'judge' && (
                    <motion.div
                      className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Email Input */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
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
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
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

            {/* Confirm Password Input */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900"
                placeholder="••••••••"
              />
            </motion.div>

            {/* Privacy Terms Checkbox */}
            <motion.div {...fadeInUp} transition={{ delay: 0.45 }}>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptPrivacyTerms"
                  checked={formData.acceptPrivacyTerms}
                  onChange={(e) => setFormData({ ...formData, acceptPrivacyTerms: e.target.checked })}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="acceptPrivacyTerms" className="text-sm text-slate-600" style={{ fontFamily: 'Exo 2, sans-serif' }}>
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
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </motion.button>

            {/* Divider */}
            <motion.div
              className="flex items-center my-6"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <div className="flex-1 border-t border-slate-300"></div>
              <span className="px-4 text-slate-500 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>or continue with</span>
              <div className="flex-1 border-t border-slate-300"></div>
            </motion.div>

            {/* Google Sign Up Buttons */}
            <div className="space-y-3">
              <motion.button
                type="button"
                onClick={() => handleGoogleSignUp('participant')}
                disabled={loading}
                className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                {...fadeInUp}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Join as Participant with Google</span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleGoogleSignUp('judge')}
                disabled={loading}
                className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                style={{ fontFamily: 'Exo 2, sans-serif' }}
                {...fadeInUp}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Join as Judge with Google</span>
              </motion.button>
            </div>
          </form>

          <motion.div
            className="text-center mt-8"
            {...fadeInUp}
            transition={{ delay: 0.9 }}
          >
            <p className="text-slate-600" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
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

export default RegisterPage; 