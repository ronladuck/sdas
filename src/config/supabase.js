import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// For demo purposes, using a public demo project
// Replace with your actual Supabase project credentials
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emNvbXBhbnkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTU2NzI0MCwiZXhwIjoxOTYxMTQzMjQwfQ.demo-key-for-testing';

// For testing purposes, we'll use a mock setup
// In production, replace these with your actual Supabase project URL and anon key
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      // Enable auto refresh
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Test credentials for demo
export const TEST_CREDENTIALS = {
  email: 'test@stopdropscroll.co',
  password: 'testpassword123',
  displayName: 'Test User'
};

export default supabase; 