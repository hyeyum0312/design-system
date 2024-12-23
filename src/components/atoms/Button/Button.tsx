import React from "react";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  const baseClass =
    "inline-block cursor-pointer rounded-full font-bold leading-none";
  const modeClass = primary
    ? "bg-blue-500 text-white hover:bg-blue-600"
    : "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100";

  return (
    <button
      type="button"
      className={`${baseClass} ${sizeClasses[size]} ${modeClass}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
