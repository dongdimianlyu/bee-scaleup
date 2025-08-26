'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export type UserRole = 'participant' | 'judge';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: (role?: UserRole) => Promise<void>;
  signUp: (email: string, password: string, role: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Get user role from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data();
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email!,
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0],
          role: userData?.role || 'participant'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const signInWithGoogle = async (role: UserRole = 'participant'): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if user already exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (!userDoc.exists()) {
        // If new user, create their profile with the specified role
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: user.displayName,
          role: role,
          createdAt: new Date().toISOString(),
          // Initialize role-specific data
          ...(role === 'judge' && {
            tasks: [
              { id: 'verify-credentials', title: 'Verify Your Credentials', completed: false },
              { id: 'review-guidelines', title: 'Review Judging Guidelines', completed: false },
              { id: 'complete-training', title: 'Complete Judge Training Module', completed: false }
            ]
          }),
          ...(role === 'participant' && {
            tasks: [
              { id: 'register', title: 'Register for Competition', completed: false },
              { id: 'complete-profile', title: 'Complete Your Profile', completed: false },
              { id: 'join-team', title: 'Join or Create a Team', completed: false },
              { id: 'review-competition', title: 'Review Competition Guidelines', completed: false }
            ]
          })
        });
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, role: UserRole): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user role to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role,
        createdAt: new Date().toISOString(),
        // Initialize role-specific data
        ...(role === 'judge' && {
          tasks: [
            { id: 'verify-credentials', title: 'Verify Your Credentials', completed: false },
            { id: 'review-guidelines', title: 'Review Judging Guidelines', completed: false },
            { id: 'complete-training', title: 'Complete Judge Training Module', completed: false }
          ]
        }),
        ...(role === 'participant' && {
          tasks: [
            { id: 'register', title: 'Register for Competition', completed: false },
            { id: 'complete-profile', title: 'Complete Your Profile', completed: false },
            { id: 'join-team', title: 'Join or Create a Team', completed: false },
            { id: 'review-competition', title: 'Review Competition Guidelines', completed: false }
          ]
        })
      });
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signInWithGoogle,
    signUp,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 