import React from "react";
import { cn } from "../../utils/cn";

/**
 * LoadingSpinner - Professional loading spinner with multiple variants
 */
const LoadingSpinner = ({
  size = "md",
  variant = "primary",
  className = "",
  label = "Loading...",
  fullScreen = false,
}) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16",
  };

  const variantClasses = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    white: "text-white",
    gradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600",
  };

  const spinnerElement = (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-transparent",
          sizeClasses[size],
          variant === "gradient"
            ? "border-t-purple-600 border-r-blue-600"
            : `border-t-current ${variantClasses[variant]}`,
        )}
        role="status"
        aria-label={label}
      >
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          {spinnerElement}
          <p className="text-sm text-gray-600 font-medium">{label}</p>
        </div>
      </div>
    );
  }

  return spinnerElement;
};

/**
 * DotsLoader - Three dots bouncing animation
 */
export const DotsLoader = ({
  size = "md",
  variant = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const variantClasses = {
    primary: "bg-blue-600",
    secondary: "bg-gray-600",
    white: "bg-white",
  };

  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={cn(
            "rounded-full animate-bounce",
            sizeClasses[size],
            variantClasses[variant],
          )}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: "1.4s",
          }}
        />
      ))}
    </div>
  );
};

/**
 * PulseLoader - Pulsing circle animation
 */
export const PulseLoader = ({
  size = "md",
  variant = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const variantClasses = {
    primary: "bg-blue-600",
    secondary: "bg-gray-600",
    white: "bg-white",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-full animate-ping",
          variantClasses[variant],
          "opacity-75",
        )}
      />
      <div
        className={cn(
          "relative rounded-full h-full w-full",
          variantClasses[variant],
        )}
      />
    </div>
  );
};

/**
 * SkeletonLoader - Content placeholder with shimmer effect
 */
export const SkeletonLoader = ({
  className = "",
  variant = "text",
  lines = 3,
  ...props
}) => {
  const variants = {
    text: "h-4 bg-gray-200 rounded",
    title: "h-6 bg-gray-200 rounded",
    avatar: "w-10 h-10 bg-gray-200 rounded-full",
    image: "w-full h-48 bg-gray-200 rounded-lg",
    button: "h-10 w-24 bg-gray-200 rounded-full",
    card: "w-full h-64 bg-gray-200 rounded-lg",
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              variants.text,
              "animate-pulse",
              index === lines - 1 ? "w-3/4" : "w-full",
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(variants[variant], "animate-pulse", className)}
      {...props}
    />
  );
};

/**
 * LoadingOverlay - Full component overlay with loading state
 */
export const LoadingOverlay = ({
  isLoading,
  children,
  loadingText = "Loading...",
  className = "",
}) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <div className="text-center space-y-3">
            <LoadingSpinner size="lg" />
            <p className="text-sm text-gray-600 font-medium">{loadingText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
