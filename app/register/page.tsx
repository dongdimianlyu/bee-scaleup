'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth, UserRole } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'participant' as UserRole
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

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
                    <div className="text-2xl mb-2">🎓</div>
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
                    <div className="text-2xl mb-2">👨‍⚖️</div>
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
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="••••••••"
              />
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
          </form>

          <motion.div
            className="text-center mt-8"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
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
    </div>
  );
};

export default RegisterPage; 