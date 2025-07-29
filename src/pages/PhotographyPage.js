import React, { useState } from "react";
import {
  Camera,
  ArrowRight,
  Play,
  Award,
  Users,
  Zap,
  Star,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PhotographyPage = () => {
  const navigate = useNavigate();
  const { user, openAuthModal } = useAuth();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, redirect to dashboard
      navigate("/dashboard");
    } else {
      // If not logged in, open signup modal
      openAuthModal("signup");
    }
  };

  const handleContactClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=80",
      category: "Portrait",
      title: "Professional Headshots",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1200&fit=crop&q=80",
      category: "Wedding",
      title: "Romantic Ceremonies",
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop&q=80",
      category: "Fashion",
      title: "Editorial Fashion",
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop&q=80",
      category: "Architecture",
      title: "Architectural Photography",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80",
      category: "Corporate",
      title: "Business Events",
    },
    {
      url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=1200&fit=crop&q=80",
      category: "Wedding",
      title: "Intimate Moments",
    },
  ];

  const services = [
    {
      icon: Camera,
      title: "Event Coverage",
      description: "Capturing life's special moments",
      features: ["Weddings", "Corporate Events", "Parties"],
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      description: "Professional headshots & portraits",
      features: ["Headshots", "Family Portraits", "LinkedIn Photos"],
    },
    {
      icon: Zap,
      title: "Commercial Work",
      description: "Brand & product photography",
      features: ["Product Shots", "Brand Content", "Marketing Materials"],
    },
    {
      icon: Award,
      title: "Creative Projects",
      description: "Artistic & themed shoots",
      features: ["Fashion", "Conceptual", "Fine Art"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332765c?w=80&h=80&fit=crop&crop=face",
      quote: "Absolutely stunning work! They captured our brand perfectly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Event Planner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      quote: "Professional, creative, and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "The photos transformed our entire marketing strategy!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop')`,
            animation:
              "backgroundMove 20s ease-in-out infinite alternate, backgroundZoom 15s ease-in-out infinite alternate",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <div className="text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
                <Camera size={24} className="mr-3 text-purple-400 inline" />
                <span className="text-purple-300 font-medium tracking-wide">
                  PROFESSIONAL PHOTOGRAPHY
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-relaxed">
              Visual
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient py-2">
                Storytelling
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your story deserves to be captured beautifully. Let us bring it to
              life with skill and passion.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {user ? "Go to Dashboard" : "Start Your Project"}
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400 rounded-full animate-float stagger-1 opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-float stagger-2 opacity-50"></div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">
                Award-Winning Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Masterpieces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated selection of our finest work across different styles and
              genres
            </p>
          </div>

          {/* Premium Gallery Layout */}
          <div className="space-y-8">
            {/* First Row - Hero Image */}
            <div className="relative group cursor-pointer">
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={portfolioImages[0].url}
                  alt={portfolioImages[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                    {portfolioImages[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {portfolioImages[0].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Second Row - Two Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioImages.slice(1, 3).map((image, index) => (
                <div key={index + 1} className="group relative cursor-pointer">
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row - Three Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioImages.slice(3).map((image, index) => (
                <div key={index + 3} className="group relative cursor-pointer">
                  <div className="relative h-56 md:h-72 overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-base font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-pulse-soft">
              <div className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10k+
              </div>
              <div className="text-gray-300 font-medium">
                Content Pieces Created
              </div>
            </div>
            <div className="animate-pulse-soft stagger-1">
              <div className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-300 font-medium">Happy Clients</div>
            </div>
            <div className="animate-pulse-soft stagger-2">
              <div className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-300 font-medium">
                AI-Powered Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Create Something
            <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with professional photography that
            tells your unique story and captivates your audience.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleGetStarted}
              className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {user ? "Access Dashboard" : "Get Started Today"}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              🎯 Free consultation included • 📸 Same-day booking available • ⭐
              100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyPage;
