import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../auth/AuthModal';
import { 
  Brain, 
  Calendar, 
  Zap, 
  Target, 
  TrendingUp, 
  Clock, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Camera,
  Video,
  Image,
  MessageSquare,
  Heart,
  Share2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Music
} from 'lucide-react';

// Enhanced Interactive Calendar Component with scroll effects
const InteractiveCalendar = ({ springX, springY }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState('December 2024');
  const calendarRef = useRef(null);

  // Rich content data with different types
  const contentData = {
    2: { 
      type: 'video', 
      platform: 'instagram', 
      title: 'Behind the Scenes Video',
      engagement: '2.4K',
      scheduled: '9:00 AM',
      color: 'from-pink-500 to-rose-400',
      icon: Video,
      description: 'Show your workspace and daily routine',
      hashtags: '#behindthescenes #workspace #entrepreneur'
    },
    5: { 
      type: 'carousel', 
      platform: 'instagram', 
      title: 'Customer Testimonials',
      engagement: '1.8K',
      scheduled: '2:00 PM',
      color: 'from-blue-500 to-cyan-400',
      icon: Heart,
      description: 'Share 3 powerful customer success stories',
      hashtags: '#testimonials #happycustomers #success'
    },
    8: { 
      type: 'story', 
      platform: 'instagram', 
      title: 'Quick Tips Series',
      engagement: '956',
      scheduled: '11:30 AM',
      color: 'from-purple-500 to-indigo-400',
      icon: MessageSquare,
      description: 'Share 5 quick business tips in story format',
      hashtags: '#tips #business #quickwin'
    },
    11: { 
      type: 'reel', 
      platform: 'tiktok', 
      title: 'Trending Challenge',
      engagement: '5.2K',
      scheduled: '7:00 PM',
      color: 'from-emerald-500 to-teal-400',
      icon: Music,
      description: 'Participate in trending business challenge',
      hashtags: '#trending #challenge #businessowner'
    },
    13: { 
      type: 'post', 
      platform: 'linkedin', 
      title: 'Industry Insights',
      engagement: '892',
      scheduled: '8:00 AM',
      color: 'from-blue-600 to-blue-500',
      icon: Linkedin,
      description: 'Share valuable industry insights and trends',
      hashtags: '#industry #insights #business #trends'
    },
    15: { 
      type: 'live', 
      platform: 'instagram', 
      title: 'Live Q&A Session',
      engagement: '1.5K',
      scheduled: '6:00 PM',
      color: 'from-red-500 to-pink-400',
      icon: Play,
      description: 'Answer customer questions live',
      hashtags: '#live #qa #community'
    },
    17: { 
      type: 'carousel', 
      platform: 'facebook', 
      title: 'Product Showcase',
      engagement: '2.1K',
      scheduled: '12:00 PM',
      color: 'from-indigo-500 to-purple-400',
      icon: Image,
      description: 'Showcase your best products with details',
      hashtags: '#products #showcase #business'
    },
    20: { 
      type: 'story', 
      platform: 'instagram', 
      title: 'Day in the Life',
      engagement: '1.2K',
      scheduled: '3:00 PM',
      color: 'from-orange-500 to-red-400',
      icon: Camera,
      description: 'Show a typical day running your business',
      hashtags: '#dayinthelife #business #entrepreneur'
    },
    23: { 
      type: 'post', 
      platform: 'twitter', 
      title: 'Thread: Best Practices',
      engagement: '743',
      scheduled: '10:00 AM',
      color: 'from-sky-500 to-blue-400',
      icon: Twitter,
      description: 'Create educational thread about best practices',
      hashtags: '#thread #bestpractices #tips'
    },
    25: { 
      type: 'video', 
      platform: 'youtube', 
      title: 'Tutorial Content',
      engagement: '3.8K',
      scheduled: '4:00 PM',
      color: 'from-red-600 to-red-500',
      icon: Play,
      description: 'Create helpful tutorial for your audience',
      hashtags: '#tutorial #howto #education'
    },
    27: { 
      type: 'carousel', 
      platform: 'instagram', 
      title: 'Before & After',
      engagement: '2.9K',
      scheduled: '1:00 PM',
      color: 'from-green-500 to-emerald-400',
      icon: Image,
      description: 'Show transformation or progress',
      hashtags: '#beforeafter #transformation #results'
    },
    29: { 
      type: 'post', 
      platform: 'linkedin', 
      title: 'Monthly Reflection',
      engagement: '1.1K',
      scheduled: '9:00 AM',
      color: 'from-violet-500 to-purple-400',
      icon: MessageSquare,
      description: 'Reflect on the month and share learnings',
      hashtags: '#reflection #growth #business #learning'
    }
  };

  const platformIcons = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    tiktok: Music,
    youtube: Play
  };

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative">
      <motion.div 
        className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 rounded-2xl shadow-xl p-6 border border-white/20 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Dynamic background elements that respond to mouse */}
        {springX && springY && (
          <>
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"
              style={{ x: springX, y: springY }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"
              style={{ x: springX, y: springY, scale: 1.2 }}
            />
          </>
        )}
        
        {/* Header with enhanced interactivity */}
        <motion.div 
          className="flex items-center justify-between mb-4 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 text-white" />
            </motion.div>
            <div>
              <h4 className="text-base font-bold text-gray-900">AI Content Calendar</h4>
              <p className="text-xs text-gray-500">December 2024</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <motion.div 
              className="flex items-center space-x-2 bg-green-100 px-2 py-1 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-medium text-green-700">AI Generated</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Day Headers with staggered animation */}
        <motion.div 
          className="grid grid-cols-7 gap-1 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {dayNames.map((day, index) => (
            <motion.div 
              key={day}
              className="text-center text-xs font-semibold text-gray-600 py-1"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 * index }}
              viewport={{ once: true }}
            >
              {day}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Calendar Grid with better hover performance */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {Array.from({ length: 35 }, (_, index) => {
            const day = index + 1;
            const hasContent = contentData[day];
            const isSelected = selectedDay === day;
            const isHovered = hoveredDay === day;
            
            if (day > 31) return <div key={index} className="aspect-square" />;

            return (
              <motion.div
                key={day}
                className={`aspect-square rounded-lg cursor-pointer relative overflow-hidden ${
                  hasContent
                    ? `bg-gradient-to-br ${hasContent.color} text-white shadow-md`
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                } ${isSelected ? 'ring-2 ring-purple-500 ring-offset-1' : ''}`}
                whileHover={{ 
                  scale: 1.08,
                  zIndex: 10,
                  boxShadow: hasContent ? "0 15px 30px -8px rgba(0, 0, 0, 0.35)" : "0 8px 16px -4px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.15, type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.25, 
                  delay: 0.015 * index,
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
                viewport={{ once: true }}
              >
                {/* Enhanced background pattern */}
                {hasContent && (
                  <motion.div 
                    className="absolute inset-0 opacity-20"
                    animate={isHovered ? { scale: 1.1, opacity: 0.3 } : { scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white/20 rounded-full -translate-y-3 translate-x-3"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/10 rounded-full translate-y-2 -translate-x-2"></div>
                  </motion.div>
                )}
                
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-1">
                  <span className={`text-xs font-bold mb-1 ${hasContent ? 'text-white' : 'text-gray-700'}`}>
                    {day}
                  </span>
                  
                  {hasContent && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.015 * index + 0.15, type: "spring", stiffness: 500 }}
                      className="flex flex-col items-center space-y-1"
                    >
                      {(() => {
                        const ContentIcon = hasContent.icon;
                        return <ContentIcon className="w-2.5 h-2.5 text-white opacity-90" />;
                      })()}
                      <div className="w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>
                    </motion.div>
                  )}
                </div>

                {/* Enhanced hover preview */}
                {(isHovered || isSelected) && hasContent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 8 }}
                    transition={{ duration: 0.15, type: "spring", stiffness: 400 }}
                    className="absolute -top-2 -right-2 z-20"
                  >
                    <motion.div 
                      className="bg-white rounded-full p-1 shadow-lg border-2 border-purple-200"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.1 }}
                    >
                      {(() => {
                        const PlatformIcon = platformIcons[hasContent.platform];
                        return <PlatformIcon className="w-2.5 h-2.5 text-gray-600" />;
                      })()}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced content suggestions */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-3 border border-purple-100"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex items-center justify-center mb-2">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Sparkles className="w-5 h-5 text-purple-500" />
            </motion.div>
          </div>
          <h5 className="font-semibold text-gray-900 mb-2 text-center text-sm">Smart Content Suggestions</h5>
          <p className="text-xs text-gray-600 mb-3 text-center leading-relaxed">
            <strong>Today's Suggestion:</strong> Post about a customer success story or testimonial to build trust
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:shadow-lg transition-all duration-200 w-full"
          >
            Generate More Ideas
          </motion.button>
        </motion.div>

        {/* Enhanced content details panel */}
        {selectedDay && contentData[selectedDay] && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className={`w-10 h-10 bg-gradient-to-br ${contentData[selectedDay].color} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  {(() => {
                    const ContentIcon = contentData[selectedDay].icon;
                    return <ContentIcon className="w-5 h-5 text-white" />;
                  })()}
                </motion.div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{contentData[selectedDay].title}</h5>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    {(() => {
                      const PlatformIcon = platformIcons[contentData[selectedDay].platform];
                      return <PlatformIcon className="w-3 h-3" />;
                    })()}
                    <span className="capitalize">{contentData[selectedDay].platform}</span>
                    <span>•</span>
                    <span>{contentData[selectedDay].scheduled}</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => setSelectedDay(null)}
                className="text-gray-400 hover:text-gray-600 p-1 text-xs"
              >
                ✕
              </motion.button>
            </div>
            
            <motion.div 
              className="text-xs text-gray-600 mb-3"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              <strong>Content:</strong> {contentData[selectedDay].description}
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>245</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>12</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Share2 className="w-3 h-3" />
                  <span>8</span>
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors duration-150"
              >
                Edit Content
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const AIContentSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Enhanced mouse tracking with better performance
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 20);
        mouseY.set((e.clientY - centerY) / 20);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-redirect to dashboard when user logs in via this modal
  useEffect(() => {
    if (user && isAuthModalOpen) {
      setIsAuthModalOpen(false);
      navigate('/dashboard');
    }
  }, [user, isAuthModalOpen, navigate]);

  // Enhanced animation variants with faster timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger
        delayChildren: 0.03,   // Less initial delay
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI analyzes your brand, audience, and industry trends to create personalized strategies."
    },
    {
      icon: Calendar,
      title: "30-Day Content Calendar",
      description: "Complete month of content with posts, captions, hashtags, and optimal posting times."
    },
    {
      icon: Target,
      title: "Audience-Focused Content",
      description: "Every piece tailored to resonate with your specific target audience and business goals."
    },
    {
      icon: TrendingUp,
      title: "Growth-Optimized Strategy",
      description: "Content designed to increase engagement, followers, and conversions."
    },
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Eliminate brainstorming and planning time. Focus on what matters most."
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Get your complete content calendar in under 3 minutes."
    }
  ];

  const features = [
    "Custom brand voice integration",
    "Industry-specific content themes",
    "Hashtag research and optimization",
    "Competitor analysis insights"
  ];

  return (
    <section id="ai-content" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden" ref={containerRef}>
      {/* Parallax background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
        style={{ y: y2 }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/25 rounded-full blur-xl"
        style={{ y: y3 }}
      />

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Enhanced header section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-10"
        >
          <motion.div 
            className="flex items-center justify-center mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            >
              <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
            </motion.div>
            <span className="text-purple-600 font-semibold">Step 1: AI Content Calendar</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get Your AI-Powered Content Strategy in Minutes
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Transform your content creation with AI that understands your business and creates 
            strategic, engaging content that drives real results.
          </motion.p>
        </motion.div>

        {/* Enhanced feature showcase with calendar */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 relative overflow-hidden"
        >
          {/* Enhanced background decoration */}
          <motion.div 
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-100 to-transparent rounded-full -translate-y-20 translate-x-20"
            style={{ x: springX, y: springY }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-16 -translate-x-16"
            style={{ x: springX, y: springY, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {/* Main heading and description */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Strategic Content That Drives Results
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  Our AI doesn't just generate random content. It understands your business, 
                  analyzes your industry, and creates a strategic content plan that drives real results.
                </motion.p>
              </div>
              
              {/* Enhanced features list */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div 
                      className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.06 + 0.1, type: "spring", stiffness: 400 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </motion.div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-3"
                >
                  <span>{user ? 'Go to Dashboard' : 'Try AI Content Generator'}</span>
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </div>

            <div className="relative">
              <InteractiveCalendar springX={springX} springY={springY} />
            </div>
          </div>
        </motion.div>

        {/* Enhanced benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 group"
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                whileHover={{ rotate: 5 }}
              >
                <benefit.icon className="w-5 h-5 text-purple-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Content Strategy?
            </motion.h3>
            <motion.p 
              className="text-lg opacity-90 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses already using our AI to create engaging, 
              strategic content that drives real results.
            </motion.p>
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>{user ? 'Go to Dashboard' : 'Start Creating Content'}</span>
              <Sparkles className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultForm="signup"
      />
    </section>
  );
};

export default AIContentSection; 