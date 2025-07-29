import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthModal from "../auth/AuthModal";
import { scrollToSection } from "../../utils/navigation";
import { COMPANY_STATS } from "../../constants/data";
import { useTypewriter } from "../../hooks/useTypewriter";

import microsoftLogo from "../../assets/logos/microsoft.svg";
import googleLogo from "../../assets/logos/google.svg";
import appleLogo from "../../assets/logos/apple.svg";
import sunyCortlandLogo from "../../assets/logos/suny-cortland.svg";
import circlesLogo from "../../assets/logos/circles.svg";

const logos = [
  { src: microsoftLogo, alt: "Microsoft" },
  { src: sunyCortlandLogo, alt: "SUNY Cortland" },
  { src: appleLogo, alt: "Apple" },
  { src: googleLogo, alt: "Google" },
  { src: circlesLogo, alt: "Circles" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "social media",
    "brand story",
    "content strategy",
    "audience growth",
  ];

  // Enhanced typewriter effect with faster timing
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 80; // Faster typing/deleting
    const pauseTime = isDeleting ? 800 : 1200; // Shorter pauses

    const timer = setTimeout(() => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentWordIndex, isDeleting, words]);

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  // Optimized animation variants with faster, smoother timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Faster stagger
        delayChildren: 0.05, // Less initial delay
        ease: [0.16, 1, 0.3, 1], // Smoother easing
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15, // Reduced initial offset
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4, // Faster animation
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster stagger
        delayChildren: 0.6, // Less delay
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      y: 10, // Reduced movement
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35, // Faster
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const stats = [
    { icon: TrendingUp, value: "10k+", label: "Content Pieces Created" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "AI-Powered Support" },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Enhanced Background Elements with faster animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            {/* Badge with faster animation */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700 border border-purple-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Sparkles size={16} className="mr-2" />
                </motion.div>
                New: AI-Powered Content Calendar
              </motion.span>
            </motion.div>

            {/* Enhanced Main Headline with Typewriter Effect */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Master your
              </motion.span>
              <span className="block relative">
                <motion.span
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {typedText}
                  <motion.span
                    className="inline-block w-1 bg-purple-600 ml-1"
                    style={{
                      height: "0.9em",
                      verticalAlign: "baseline",
                    }}
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Get a personalized content calendar in minutes, then let our
                team handle all content creation to bring your strategy to life.
              </motion.span>
            </motion.p>

            {/* Value Props with faster stagger */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600"
            >
              {[
                "AI-powered content calendar",
                "Professional creative services",
                "Personal strategy consultation",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.3 + index * 0.06, // Faster stagger
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.4 + index * 0.06,
                      type: "spring",
                      stiffness: 500,
                    }}
                  />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <Sparkles size={20} />
                <span>
                  {user ? "Go to Dashboard" : "Create My Content Calendar"}
                </span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Trust Indicators with faster timing */}
            <motion.div variants={itemVariants} className="mb-16">
              <motion.p
                className="text-sm text-gray-500 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                Trusted by industry leaders around the world
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {logos.map((logo, index) => (
                  <motion.div
                    key={logo.alt}
                    className="h-10 w-28 flex items-center justify-center"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.0 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.08, opacity: 1 }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-200"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Stats with better spring animations */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statItemVariants}
                  className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-200"
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.4 + index * 0.08,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </>
  );
};

export default HeroSection;
