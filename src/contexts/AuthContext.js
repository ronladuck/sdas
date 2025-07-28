import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, TEST_CREDENTIALS } from '../config/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalDefaultForm, setAuthModalDefaultForm] = useState('signin');

  const openAuthModal = (defaultForm = 'signin') => {
    setAuthModalDefaultForm(defaultForm);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email, password, displayName) => {
    try {
      // For demo purposes, we'll simulate signup
      if (email === TEST_CREDENTIALS.email) {
        // Simulate successful signup
        const mockUser = {
          id: 'demo-user-id',
          email: TEST_CREDENTIALS.email,
          user_metadata: {
            display_name: displayName || TEST_CREDENTIALS.displayName
          }
        };
        setUser(mockUser);
        return { user: mockUser, error: null };
      }

      // In a real app, this would be:
      // const { data, error } = await supabase.auth.signUp({
      //   email,
      //   password,
      //   options: {
      //     data: {
      //       display_name: displayName
      //     }
      //   }
      // });
      
      // For demo, simulate error for other emails
      return { 
        user: null, 
        error: { message: 'For demo purposes, please use the test credentials provided.' }
      };
    } catch (error) {
      return { user: null, error };
    }
  };

  const signIn = async (email, password) => {
    try {
      // For demo purposes, check against test credentials
      if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
        // Simulate successful login
        const mockUser = {
          id: 'demo-user-id',
          email: TEST_CREDENTIALS.email,
          user_metadata: {
            display_name: TEST_CREDENTIALS.displayName
          }
        };
        setUser(mockUser);
        return { user: mockUser, error: null };
      }

      // In a real app, this would be:
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password
      // });
      
      // For demo, simulate error for wrong credentials
      return { 
        user: null, 
        error: { message: 'Invalid credentials. Use test@stopdropscroll.co / testpassword123' }
      };
    } catch (error) {
      return { user: null, error };
    }
  };

  const signOut = async () => {
    try {
      // For demo purposes, just clear the user
      setUser(null);
      
      // In a real app, this would be:
      // const { error } = await supabase.auth.signOut();
      // return { error };
      
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    loading,
    isAuthModalOpen,
    authModalDefaultForm,
    openAuthModal,
    closeAuthModal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 