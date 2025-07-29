import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import AuthModal from "./AuthModal";

const GlobalAuthModal = () => {
  const { isAuthModalOpen, authModalDefaultForm, closeAuthModal } = useAuth();

  return (
    <AuthModal
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      defaultForm={authModalDefaultForm}
    />
  );
};

export default GlobalAuthModal;
