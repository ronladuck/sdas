import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Section components
import Navigation from './components/sections/Navigation';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AIContentSection from './components/sections/AIContentSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

// Auth components
import GlobalAuthModal from './components/auth/GlobalAuthModal';

// Service pages
import PhotographyPage from './pages/PhotographyPage';
import VideographyPage from './pages/VideographyPage';
import ContentEditingPage from './pages/ContentEditingPage';
import DashboardPage from './pages/DashboardPage';

/**
 * Main App component - orchestrates the entire landing page
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Navigation 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                scrollY={scrollY} 
              />
              <HeroSection />
              <AIContentSection />
              <ServicesSection />
              <TestimonialsSection />
              <ContactSection />
              <Footer />
            </div>
          } />
          <Route path="/services/photography" element={
            <div className="min-h-screen bg-white">
              <Navigation 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                scrollY={scrollY} 
              />
              <PhotographyPage />
              <Footer />
            </div>
          } />
          <Route path="/services/videography" element={
            <div className="min-h-screen bg-white">
              <Navigation 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                scrollY={scrollY} 
              />
              <VideographyPage />
              <Footer />
            </div>
          } />
          <Route path="/services/content-editing" element={
            <div className="min-h-screen bg-white">
              <Navigation 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                scrollY={scrollY} 
              />
              <ContentEditingPage />
              <Footer />
            </div>
          } />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <GlobalAuthModal />
      </Router>
    </AuthProvider>
  );
}

export default App;
