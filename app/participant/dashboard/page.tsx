'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import Timeline from '@/app/components/Timeline';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const ParticipantDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchTasks = useCallback(async () => {
    if (!user) return;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      
      if (userData?.tasks) {
        setTasks(userData.tasks);
      } else {
        // Initialize with default tasks if none exist
        const defaultTasks = [
          {
            id: 'register',
            title: 'Register for Competition',
            completed: false
          },
          {
            id: 'profile-setup',
            title: 'Complete Profile Setup',
            completed: false
          },
          {
            id: 'join-team',
            title: 'Register for Team',
            completed: false
          },
          {
            id: 'review-guidelines',
            title: 'Review Competition Guidelines',
            completed: false
          }
        ];
        setTasks(defaultTasks);
        
        // Save default tasks to Firebase
        try {
          await updateDoc(doc(db, 'users', user.uid), {
            tasks: defaultTasks
          });
        } catch (error) {
          console.error('Error saving default tasks:', error);
        }
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Timeline data with updated dates
  const timelineItems = [
    { date: "April 2025", event: "Registration Opens" },
    { date: "May–Aug", event: "Mentorship & Workshops" },
    { date: "October 30", event: "Prelims Submission" },
    { date: "Oct–Nov", event: "Finalist Mentorship" },
    { date: "November 16", event: "Finals" }
  ];

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const progress = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;

  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'participant')) {
      router.push('/');
      return;
    }

    if (user) {
      fetchTasks();
    }
  }, [user, authLoading, router, fetchTasks]);

  const toggleTask = async (taskId: string) => {
    if (!user) return;

    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        tasks: updatedTasks
      });
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert on error
      setTasks(tasks);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          className="text-cyan-400 text-xl font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <ProtectedRoute requiredRole="participant">
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full"
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
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full"
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

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Participant Dashboard
            </h1>
            <p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Welcome, {user?.displayName}! Complete your onboarding tasks to get ready for the competition.
            </p>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-futuristic p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Onboarding Progress
                </h2>
                <div className="text-right">
                  <div className="text-3xl font-bold text-cyan-400">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-sm text-gray-400">Complete</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <span>{completedTasks.length} of {tasks.length} tasks completed</span>
              </div>
            </div>
          </motion.div>

          {/* Reminder Alert */}
          {incompleteTasks.length > 0 && (
            <motion.div
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center">
                  <motion.div
                    className="text-3xl mr-4"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    📋
                  </motion.div>
                  <div>
                    <h3 
                      className="text-lg font-bold text-cyan-400 mb-1"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Onboarding Required
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Please complete {incompleteTasks.length} remaining task{incompleteTasks.length !== 1 ? 's' : ''} to fully prepare for the competition.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Content Grid - Timeline and Tasks */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:pr-8"
            >
              <h3 
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Competition Timeline
              </h3>
              <Timeline items={timelineItems} />
            </motion.div>

            {/* Tasks Section */}
            <div className="space-y-6">
            {/* Pending Tasks */}
            {incompleteTasks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Pending Tasks
                </h3>
                <div className="space-y-4">
                  {incompleteTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className="card-futuristic p-6 hover:glow-cyan transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleTask(task.id)}
                          className="mr-4 w-6 h-6 border-2 border-slate-300 rounded-full hover:border-blue-500 transition-colors duration-200 flex items-center justify-center group"
                        >
                          <motion.div
                            className="w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            whileHover={{ scale: 1.2 }}
                          />
                        </button>
                        <div className="flex-1">
                          <h4 
                            className="text-lg font-semibold text-white"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {task.title}
                          </h4>
                          <div className="flex items-center mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              Pending
                            </span>
                          </div>
                        </div>
                        {task.id === 'register' ? (
                          <motion.a
                            href="https://docs.google.com/forms/d/1VS6N6P6E372Ms3JCM-hfbKuEmq1frvlheWMVStFpjD0/viewform?edit_requested=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -1 }}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            Register Now
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        ) : task.id === 'join-team' ? (
                          <motion.a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdCZx66qdgUYZw0L5vXkbCRXbgfIRKO136nabaOiHihSyMXsg/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -1 }}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            Register for Team
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        ) : (
                          <motion.div
                            className="text-slate-400"
                            whileHover={{ scale: 1.1 }}
                          >
                            →
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Completed Tasks */}
            {completedTasks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 
                  className="text-2xl font-bold text-white mb-6 mt-12"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Completed Tasks
                </h3>
                <div className="space-y-4">
                  {completedTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className="glass border border-green-500/30 rounded-2xl p-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleTask(task.id)}
                          className="mr-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200 glow-cyan"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            ✓
                          </motion.div>
                        </button>
                        <div className="flex-1">
                          <h4 
                            className="text-lg font-semibold text-green-400 line-through"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {task.title}
                          </h4>
                          <div className="flex items-center mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                              ✓ Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* All Tasks Complete */}
            {incompleteTasks.length === 0 && tasks.length > 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 border border-green-200">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎉
                  </motion.div>
                  <h3 
                    className="text-3xl font-bold text-green-800 mb-4"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                  >
                    Ready to Compete!
                  </h3>
                  <p 
                    className="text-lg text-green-700 max-w-md mx-auto"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                  >
                    You&apos;ve completed all onboarding tasks. You&apos;re now ready for the BeeScaleUp competition!
                  </p>
                </div>
              </motion.div>
            )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ParticipantDashboard; 