# Demo Mode Information

## ⚠️ Important Security Notice

This application is currently running in **DEMO MODE**. No real authentication is being performed.

## Demo Access

The application will automatically detect if you have configured real Supabase credentials. If not, it will run in demo mode with simulated authentication.

**Demo Credentials:**
- Email: demo@stopdropscroll.co
- Password: DemoPassword123!

## Production Setup

To use this application with real authentication:

1. **Set up Supabase:**
   - Create a project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key

2. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual Supabase credentials
   ```

3. **Enable Authentication:**
   - The application will automatically switch to production mode
   - Configure your Supabase authentication providers as needed

## Security Best Practices

- ✅ Environment variables are used for secrets
- ✅ Demo credentials are only available in demo mode
- ✅ Real authentication is used when properly configured
- ✅ Credentials are not hardcoded in source code

## Development vs Production

- **Development**: Demo mode allows testing without setup
- **Production**: Real Supabase integration with proper security 