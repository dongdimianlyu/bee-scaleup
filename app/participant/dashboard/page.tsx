'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';

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

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const progress = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'participant')) {
      router.push('/');
      return;
    }

    if (user) {
      fetchTasks();
    }
  }, [user, authLoading, router]);

  const fetchTasks = async () => {
    if (!user) return;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      
      if (userData?.tasks) {
        setTasks(userData.tasks);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <motion.div
          className="text-blue-600 text-xl font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontFamily: 'Exo 2, sans-serif' }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <ProtectedRoute requiredRole="participant">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5"
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
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-3"
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
              className="text-5xl md:text-6xl font-bold text-gradient mb-4"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
            >
              Participant Dashboard
            </h1>
            <p 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Exo 2, sans-serif' }}
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
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-card border border-white/20 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 
                  className="text-2xl font-bold text-slate-800"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Onboarding Progress
                </h2>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-sm text-slate-600">Complete</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
              </div>
              
              <div className="flex items-center text-sm text-slate-600">
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
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
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
                      className="text-lg font-bold text-blue-800 mb-1"
                      style={{ fontFamily: 'Exo 2, sans-serif' }}
                    >
                      Onboarding Required
                    </h3>
                    <p className="text-blue-700" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      Please complete {incompleteTasks.length} remaining task{incompleteTasks.length !== 1 ? 's' : ''} to fully prepare for the competition.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tasks Grid */}
          <div className="max-w-4xl mx-auto grid gap-6">
            {/* Pending Tasks */}
            {incompleteTasks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 
                  className="text-2xl font-bold text-slate-800 mb-6"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Pending Tasks
                </h3>
                <div className="space-y-4">
                  {incompleteTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-card border border-white/20 p-6 hover:shadow-glow transition-all duration-300"
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
                            className="text-lg font-semibold text-slate-800"
                            style={{ fontFamily: 'Exo 2, sans-serif' }}
                          >
                            {task.title}
                          </h4>
                          <div className="flex items-center mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              Pending
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className="text-slate-400"
                          whileHover={{ scale: 1.1 }}
                        >
                          →
                        </motion.div>
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
                  className="text-2xl font-bold text-slate-800 mb-6 mt-12"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Completed Tasks
                </h3>
                <div className="space-y-4">
                  {completedTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className="bg-green-50/80 backdrop-blur-xl rounded-2xl shadow-card border border-green-200/20 p-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleTask(task.id)}
                          className="mr-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
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
                            className="text-lg font-semibold text-green-800 line-through"
                            style={{ fontFamily: 'Exo 2, sans-serif' }}
                          >
                            {task.title}
                          </h4>
                          <div className="flex items-center mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
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
    </ProtectedRoute>
  );
};

export default ParticipantDashboard; 