/**
 * Development Tools and Utilities
 * These utilities are designed to help during development and debugging
 */

/**
 * Environment configuration
 */
export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";
export const isTest = process.env.NODE_ENV === "test";

/**
 * Enhanced console logging with timestamps and styling
 */
export const logger = {
  info: (...args) => {
    if (isDev) {
      console.log(
        `%c[INFO] ${new Date().toLocaleTimeString()}`,
        "color: #3b82f6; font-weight: bold",
        ...args,
      );
    }
  },
  warn: (...args) => {
    if (isDev) {
      console.warn(
        `%c[WARN] ${new Date().toLocaleTimeString()}`,
        "color: #f59e0b; font-weight: bold",
        ...args,
      );
    }
  },
  error: (...args) => {
    if (isDev) {
      console.error(
        `%c[ERROR] ${new Date().toLocaleTimeString()}`,
        "color: #ef4444; font-weight: bold",
        ...args,
      );
    }
  },
  debug: (...args) => {
    if (isDev && process.env.REACT_APP_ENABLE_DEBUG === "true") {
      console.log(
        `%c[DEBUG] ${new Date().toLocaleTimeString()}`,
        "color: #8b5cf6; font-weight: bold",
        ...args,
      );
    }
  },
  success: (...args) => {
    if (isDev) {
      console.log(
        `%c[SUCCESS] ${new Date().toLocaleTimeString()}`,
        "color: #10b981; font-weight: bold",
        ...args,
      );
    }
  },
};

/**
 * Performance monitoring utilities
 */
export const performance = {
  measure: (name, fn) => {
    if (!isDev) return fn();

    const start = Date.now();
    const result = fn();
    const end = Date.now();

    logger.debug(`Performance: ${name} took ${end - start}ms`);
    return result;
  },

  measureAsync: async (name, fn) => {
    if (!isDev) return await fn();

    const start = Date.now();
    const result = await fn();
    const end = Date.now();

    logger.debug(`Performance: ${name} took ${end - start}ms`);
    return result;
  },

  markRender: (componentName) => {
    if (isDev) {
      logger.debug(`Component rendered: ${componentName}`);
    }
  },
};

/**
 * Local storage utilities with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      logger.error(`Error reading from localStorage:`, error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      logger.error(`Error writing to localStorage:`, error);
      return false;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      logger.error(`Error removing from localStorage:`, error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      logger.error(`Error clearing localStorage:`, error);
      return false;
    }
  },
};

/**
 * URL and query parameter utilities
 */
export const urlUtils = {
  getQueryParam: (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },

  setQueryParam: (param, value) => {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, "", url);
  },

  removeQueryParam: (param) => {
    const url = new URL(window.location);
    url.searchParams.delete(param);
    window.history.pushState({}, "", url);
  },

  getCurrentPath: () => window.location.pathname,

  isExternalLink: (url) => {
    try {
      const link = new URL(url);
      return link.hostname !== window.location.hostname;
    } catch {
      return false;
    }
  },
};

/**
 * Device and browser detection
 */
export const device = {
  isMobile: () => window.innerWidth <= 768,
  isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: () => window.innerWidth > 1024,

  getViewportSize: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }),

  isRetina: () => window.devicePixelRatio > 1,

  supportsWebP: () => {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").indexOf("image/webp") === 5;
  },

  getUserAgent: () => navigator.userAgent,

  isOnline: () => navigator.onLine,
};

/**
 * Form validation utilities
 */
export const validators = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  },

  url: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  required: (value) => {
    if (typeof value === "string") return value.trim().length > 0;
    return value != null && value !== "";
  },

  minLength: (value, min) => {
    return typeof value === "string" && value.length >= min;
  },

  maxLength: (value, max) => {
    return typeof value === "string" && value.length <= max;
  },
};

/**
 * Debounce and throttle utilities
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Date and time utilities
 */
export const dateUtils = {
  formatDate: (date, options = {}) => {
    const defaultOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", {
      ...defaultOptions,
      ...options,
    });
  },

  formatTime: (date, options = {}) => {
    const defaultOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleTimeString("en-US", {
      ...defaultOptions,
      ...options,
    });
  },

  isToday: (date) => {
    const today = new Date();
    const compareDate = new Date(date);
    return today.toDateString() === compareDate.toDateString();
  },

  daysBetween: (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((new Date(date1) - new Date(date2)) / oneDay));
  },
};

/**
 * Error reporting utility
 */
export const errorReporter = {
  report: (error, context = {}) => {
    logger.error("Error reported:", error, context);

    // In production, send to error reporting service
    if (isProd) {
      // Example: Send to Sentry, LogRocket, etc.
      // Sentry.captureException(error, { extra: context });
    }
  },

  reportUserAction: (action, data = {}) => {
    if (isDev) {
      logger.debug("User action:", action, data);
    }

    // In production, send to analytics
    if (isProd) {
      // Example: Send to Google Analytics, Mixpanel, etc.
      // gtag('event', action, data);
    }
  },
};

/**
 * Feature flag utilities
 */
export const featureFlags = {
  isEnabled: (flag) => {
    return process.env[`REACT_APP_ENABLE_${flag.toUpperCase()}`] === "true";
  },

  analytics: () => featureFlags.isEnabled("analytics"),
  chatbot: () => featureFlags.isEnabled("chatbot"),
  abTesting: () => featureFlags.isEnabled("ab_testing"),
  debug: () => featureFlags.isEnabled("debug"),
};

/**
 * Development shortcuts (only available in development)
 */
if (isDev) {
  // Add utilities to window for console access
  window.devTools = {
    logger,
    performance,
    storage,
    urlUtils,
    device,
    validators,
    dateUtils,
    featureFlags,
    errorReporter,
  };

  // Log available dev tools
  logger.info("Dev tools available at window.devTools");
}
