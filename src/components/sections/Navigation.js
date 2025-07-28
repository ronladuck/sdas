import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection, NAVIGATION_ITEMS } from '../../utils/navigation';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../auth/AuthModal';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollY }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Auto-redirect to dashboard when user logs in
  useEffect(() => {
    if (user && isAuthModalOpen) {
      setIsAuthModalOpen(false);
      navigate('/dashboard');
    }
  }, [user, isAuthModalOpen, navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If on another page, navigate to home
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const handleAuthClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      setIsAuthModalOpen(true);
    }
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button 
                onClick={handleLogoClick}
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                Stop, Drop & Scroll
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAVIGATION_ITEMS.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                
                {user ? (
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => navigate('/dashboard')}
                      className="flex items-center space-x-2 text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      <User size={16} />
                      <span>Dashboard</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={handleAuthClick}
                    data-auth-trigger
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAVIGATION_ITEMS.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
                
                {user ? (
                  <>
                    <button 
                      onClick={() => {
                        navigate('/dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 w-full"
                    >
                      <User size={16} />
                      <span>Dashboard</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 w-full"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleAuthClick}
                    data-auth-trigger
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 w-full text-left"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navigation; 