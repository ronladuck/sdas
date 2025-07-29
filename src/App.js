import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Section components
import Navigation from "./components/sections/Navigation";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import AIContentSection from "./components/sections/AIContentSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

// Auth components
import GlobalAuthModal from "./components/auth/GlobalAuthModal";

// Service pages
import PhotographyPage from "./pages/PhotographyPage";
import VideographyPage from "./pages/VideographyPage";
import ContentEditingPage from "./pages/ContentEditingPage";
import DashboardPage from "./pages/DashboardPage";

/**
 * Layout wrapper component to reduce duplication
 */
const Layout = ({ children, navigation }) => (
  <div className="min-h-screen bg-white">
    {navigation}
    {children}
    <Footer />
  </div>
);

/**
 * Main App component - orchestrates the entire application
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation component with consistent props
  const navigation = (
    <Navigation
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      scrollY={scrollY}
    />
  );

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Home page with all sections */}
            <Route
              path="/"
              element={
                <Layout navigation={navigation}>
                  <HeroSection />
                  <AIContentSection />
                  <ServicesSection />
                  <TestimonialsSection />
                  <ContactSection />
                </Layout>
              }
            />

            {/* Service pages */}
            <Route
              path="/services/photography"
              element={
                <Layout navigation={navigation}>
                  <PhotographyPage />
                </Layout>
              }
            />

            <Route
              path="/services/videography"
              element={
                <Layout navigation={navigation}>
                  <VideographyPage />
                </Layout>
              }
            />

            <Route
              path="/services/content-editing"
              element={
                <Layout navigation={navigation}>
                  <ContentEditingPage />
                </Layout>
              }
            />

            {/* Dashboard without standard layout */}
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <GlobalAuthModal />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
