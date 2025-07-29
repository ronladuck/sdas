import React from "react";

const SectionHeader = ({
  badge,
  title,
  subtitle,
  titleClassName = "text-4xl md:text-5xl font-bold text-gray-900",
  subtitleClassName = "text-xl text-gray-600",
  badgeClassName = "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800",
}) => {
  return (
    <div className="text-center mb-16">
      {badge && <span className={`${badgeClassName} mb-4`}>{badge}</span>}
      <h2 className={`${titleClassName} mb-6`}>{title}</h2>
      {subtitle && (
        <p className={`${subtitleClassName} max-w-3xl mx-auto`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
