import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase, TEST_CREDENTIALS, isDemoMode } from "../config/supabase";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalDefaultForm, setAuthModalDefaultForm] = useState("signin");

  const openAuthModal = (defaultForm = "signin") => {
    setAuthModalDefaultForm(defaultForm);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.warn("Error getting session:", error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email, password, displayName) => {
    try {
      if (isDemoMode) {
        // Demo mode - simulate signup with test credentials
        if (TEST_CREDENTIALS && email === TEST_CREDENTIALS.email) {
          const mockUser = {
            id: "demo-user-id",
            email: TEST_CREDENTIALS.email,
            user_metadata: {
              display_name: displayName || TEST_CREDENTIALS.displayName,
            },
          };
          setUser(mockUser);
          return { user: mockUser, error: null };
        }

        return {
          user: null,
          error: {
            message: "Demo mode: Please use the test credentials provided.",
          },
        };
      }

      // Production mode - real Supabase signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName,
          },
        },
      });

      return { user: data.user, error };
    } catch (error) {
      console.error("Signup error:", error);
      return {
        user: null,
        error: { message: "An unexpected error occurred during signup." },
      };
    }
  };

  const signIn = async (email, password) => {
    try {
      if (isDemoMode) {
        // Demo mode - check against test credentials
        if (
          TEST_CREDENTIALS &&
          email === TEST_CREDENTIALS.email &&
          password === TEST_CREDENTIALS.password
        ) {
          const mockUser = {
            id: "demo-user-id",
            email: TEST_CREDENTIALS.email,
            user_metadata: {
              display_name: TEST_CREDENTIALS.displayName,
            },
          };
          setUser(mockUser);
          return { user: mockUser, error: null };
        }

        return {
          user: null,
          error: {
            message:
              "Invalid credentials. Please use the demo credentials provided.",
          },
        };
      }

      // Production mode - real Supabase signin
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return { user: data.user, error };
    } catch (error) {
      console.error("Signin error:", error);
      return {
        user: null,
        error: { message: "An unexpected error occurred during signin." },
      };
    }
  };

  const signOut = async () => {
    try {
      if (isDemoMode) {
        // Demo mode - just clear the user
        setUser(null);
        return { error: null };
      }

      // Production mode - real Supabase signout
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      console.error("Signout error:", error);
      return { error: { message: "An error occurred during signout." } };
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
    closeAuthModal,
    isDemoMode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
