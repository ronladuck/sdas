import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose, defaultForm = 'login' }) => {
  const [isLogin, setIsLogin] = useState(defaultForm === 'login');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLogin(defaultForm === 'login');
    }
  }, [isOpen, defaultForm]);

  if (!isOpen) return null;

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Close button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form content */}
          <div className="mt-4">
            {isLogin ? (
              <LoginForm onToggleForm={toggleForm} onClose={onClose} />
            ) : (
              <SignupForm onToggleForm={toggleForm} onClose={onClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 