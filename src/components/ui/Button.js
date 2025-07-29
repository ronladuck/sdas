import React from "react";
import { cn } from "../../utils/cn";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg",
  secondary: "bg-white text-purple-600 hover:shadow-2xl",
  glass: "glass text-white hover:bg-white/20",
  outline: "border border-white/20 text-white hover:bg-white/10",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2 text-sm",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
