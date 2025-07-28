import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { useAuth } from '../../contexts/AuthContext';

const ContactSection = () => {
  const { user, openAuthModal } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      // If not logged in, open signup modal
      openAuthModal('signup');
    }
  };

  return (
    <section id="contact" className="py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<><Sparkles size={16} className="mr-2" /> Step 3: Get Started Today</>}
          title={
            <>
              Ready to transform your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">content strategy?</span>
            </>
          }
          subtitle="Join hundreds of businesses who've revolutionized their content with our AI-powered approach. Get your personalized calendar and Mark's expert consultation."
          badgeClassName="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm border border-white/20 mb-4"
          titleClassName="text-4xl md:text-5xl font-bold text-white mb-6"
          subtitleClassName="text-xl text-white/90 max-w-4xl mx-auto"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Get Your AI Content Calendar</h3>
              <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                Skip the contact form! Get started with our AI-powered content calendar generator.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">Sign Up (30 seconds)</h4>
                  <p className="text-white/70">Create your free account with just email and password</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">Tell Us About Your Business (2 minutes)</h4>
                  <p className="text-white/70">Quick questionnaire about your industry, goals, and audience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">Get Your Calendar (Instant)</h4>
                  <p className="text-white/70">AI generates 30 days of personalized content</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">We Reach Out (24 hours)</h4>
                  <p className="text-white/70">Personal consultation to optimize your strategy</p>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <button
                onClick={handleGetStarted}
                className="w-full bg-white text-purple-600 py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mb-4 text-lg"
              >
                <Sparkles size={20} />
                <span>{user ? 'Go to Dashboard' : 'Get Started – It\'s Free'}</span>
                <ArrowRight size={20} />
              </button>

              <p className="text-center text-white/60 text-sm">
                No credit card required • Get results in minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 