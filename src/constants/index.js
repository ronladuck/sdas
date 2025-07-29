/**
 * Constants Index - Central hub for all application constants
 * Organized by category for better maintainability
 */

// Re-export existing data
export * from "./data";

/**
 * Application Configuration
 */
export const APP_CONFIG = {
  name: "Stop Drop & Scroll",
  version: "1.0.0",
  description:
    "Professional Marketing Agency specializing in Photography, Videography, and Editing services",
  domain: "stopdropscroll.vercel.app",
  author: "Stop Drop & Scroll Team",
  keywords: [
    "photography",
    "videography",
    "marketing agency",
    "social media",
    "content creation",
    "video editing",
    "professional photography",
    "brand marketing",
    "digital marketing",
  ],
};

/**
 * API Endpoints and URLs
 */
export const API_ENDPOINTS = {
  base: process.env.REACT_APP_API_BASE_URL || "https://api.stopdropscroll.co",
  supabase: {
    url: process.env.REACT_APP_SUPABASE_URL,
    anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY,
  },
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  portfolio: "/api/portfolio",
};

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  instagram:
    process.env.REACT_APP_SOCIAL_INSTAGRAM ||
    "https://instagram.com/stopdropscroll",
  facebook:
    process.env.REACT_APP_SOCIAL_FACEBOOK ||
    "https://facebook.com/stopdropscroll",
  linkedin:
    process.env.REACT_APP_SOCIAL_LINKEDIN ||
    "https://linkedin.com/company/stopdropscroll",
  twitter:
    process.env.REACT_APP_SOCIAL_TWITTER ||
    "https://twitter.com/stopdropscroll",
  youtube: "https://youtube.com/@stopdropscroll",
  tiktok: "https://tiktok.com/@stopdropscroll",
};

/**
 * Navigation Routes
 */
export const ROUTES = {
  home: "/",
  services: {
    base: "/services",
    photography: "/services/photography",
    videography: "/services/videography",
    contentEditing: "/services/content-editing",
  },
  about: "/about",
  portfolio: "/portfolio",
  contact: "/contact",
  dashboard: "/dashboard",
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    resetPassword: "/auth/reset-password",
  },
};

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 750,
  slowest: 1000,
};

/**
 * Z-Index scale
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
};

/**
 * Form validation rules
 */
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: "Please enter a valid phone number",
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: "Name must be between 2 and 50 characters",
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: "Message must be between 10 and 1000 characters",
  },
};

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  network: "Network error. Please check your connection and try again.",
  server: "Server error. Please try again later.",
  validation: "Please check your input and try again.",
  unauthorized: "You are not authorized to perform this action.",
  notFound: "The requested resource was not found.",
  generic: "Something went wrong. Please try again.",
  formSubmission: "There was an error submitting the form. Please try again.",
  emailFailed: "Failed to send email. Please try again or contact us directly.",
  fileUpload: "Failed to upload file. Please try again with a different file.",
  sessionExpired: "Your session has expired. Please log in again.",
};

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  contactForm:
    "Thank you for your message! We'll get back to you within 24 hours.",
  newsletter: "Successfully subscribed to our newsletter!",
  fileUpload: "File uploaded successfully!",
  profileUpdate: "Profile updated successfully!",
  passwordUpdate: "Password updated successfully!",
  emailVerification: "Email verification sent. Please check your inbox.",
  accountCreated: "Account created successfully! Please verify your email.",
};

/**
 * Loading states
 */
export const LOADING_STATES = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};

/**
 * Theme configuration
 */
export const THEME = {
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
    },
    gradient: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
  },
  fonts: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },
};

/**
 * File upload configuration
 */
export const FILE_UPLOAD = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: {
    images: ["image/jpeg", "image/png", "image/webp", "image/gif"],
    videos: ["video/mp4", "video/webm", "video/mov"],
    documents: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
  maxFiles: 10,
};

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  user: "user",
  preferences: "preferences",
  cart: "cart",
  recentlyViewed: "recentlyViewed",
  authToken: "authToken",
  theme: "theme",
  language: "language",
};

/**
 * Analytics events
 */
export const ANALYTICS_EVENTS = {
  pageView: "page_view",
  contactForm: "contact_form_submitted",
  serviceInquiry: "service_inquiry",
  portfolioView: "portfolio_viewed",
  socialClick: "social_media_clicked",
  downloadPortfolio: "portfolio_downloaded",
  newsletterSignup: "newsletter_signup",
  phoneCall: "phone_call_initiated",
  emailClick: "email_clicked",
};

/**
 * Default values
 */
export const DEFAULTS = {
  pagination: {
    page: 1,
    limit: 12,
  },
  debounceDelay: 300,
  apiTimeout: 30000,
  retryAttempts: 3,
  cacheTime: 5 * 60 * 1000, // 5 minutes
};
