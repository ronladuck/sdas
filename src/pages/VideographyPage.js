import React from 'react';
import { Video, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';

const VideographyPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
    // Wait for navigation, then scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-8">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        <SectionHeader
          badge={<><Video size={16} className="mr-2" /> Videography Services</>}
          title={
            <>
              Professional <span className="gradient-text">Videography</span> Services
            </>
          }
          subtitle="Bring your brand to life through compelling video content and storytelling."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Videography Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Music Videos</h4>
                    <p className="text-gray-600">Creative and engaging music video production for artists and bands.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Event Coverage</h4>
                    <p className="text-gray-600">Professional video documentation of corporate events, weddings, and special occasions.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Promotional Content</h4>
                    <p className="text-gray-600">Engaging promotional videos for businesses, products, and services.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Highlight Reels</h4>
                    <p className="text-gray-600">Dynamic highlight videos for sports events, performances, and special moments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Videography Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">High-Quality Equipment</h4>
                    <p className="text-gray-600">Professional-grade cameras, lighting, and audio equipment for stunning results.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Creative Direction</h4>
                    <p className="text-gray-600">Expert guidance in storytelling and visual composition.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Editing</h4>
                    <p className="text-gray-600">Polished post-production with attention to detail and creative effects.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored video production packages to meet your specific needs and vision.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Let's discuss your videography needs and create something amazing together.</p>
              <button
                onClick={handleContactClick}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideographyPage; 