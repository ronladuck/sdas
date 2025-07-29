import { createClient } from "@supabase/supabase-js";

// Supabase configuration using environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Validate that required environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found in environment variables. Running in demo mode.",
  );
  console.warn(
    "To use real Supabase integration, set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY",
  );
}

// Create Supabase client with secure configuration
export const supabase = createClient(
  supabaseUrl || "https://demo.supabase.co",
  supabaseAnonKey || "demo-key",
  {
    auth: {
      // Enable auto refresh for better UX
      autoRefreshToken: true,
      // Persist session for user convenience
      persistSession: true,
      // Detect session in URL for OAuth flows
      detectSessionInUrl: true,
      // Additional security settings
      flowType: "pkce",
    },
    // Global headers for additional security
    global: {
      headers: {
        "X-Client-Info": "stop-drop-scroll-web",
      },
    },
  },
);

// Check if we're in demo mode
export const isDemoMode =
  !supabaseUrl || !supabaseAnonKey || supabaseUrl.includes("demo");

// Demo credentials - only for development/testing
export const TEST_CREDENTIALS = isDemoMode
  ? {
      email: "demo@stopdropscroll.co",
      password: "DemoPassword123!",
      displayName: "Demo User",
    }
  : null;

export default supabase;
