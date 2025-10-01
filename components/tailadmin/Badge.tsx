import React from "react";

export type BadgeVariant = "light" | "solid" | "outline";
export type BadgeSize = "xs" | "sm" | "md";
export type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "gray";

export interface BadgeProps {
  /** Light, solid, or outline variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Badge color theme */
  color?: BadgeColor;
  /** Icon at the start */
  startIcon?: React.ReactNode;
  /** Icon at the end */
  endIcon?: React.ReactNode;
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-1 rounded-full font-medium";

  // Define size styles
  const sizeStyles = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
  };

  // Define color styles for variants
  const variants = {
    light: {
      primary:
        "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      success:
        "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      error:
        "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-400",
      warning:
        "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      info: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      gray: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    },
    solid: {
      primary: "bg-brand-500 text-white",
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-yellow-500 text-white",
      info: "bg-blue-500 text-white",
      gray: "bg-gray-500 text-white",
    },
    outline: {
      primary:
        "bg-transparent text-brand-700 border border-brand-200 dark:text-brand-400 dark:border-brand-700",
      success:
        "bg-transparent text-green-700 border border-green-200 dark:text-green-400 dark:border-green-700",
      error:
        "bg-transparent text-red-700 border border-red-200 dark:text-red-400 dark:border-red-700",
      warning:
        "bg-transparent text-yellow-700 border border-yellow-200 dark:text-yellow-400 dark:border-yellow-700",
      info:
        "bg-transparent text-blue-700 border border-blue-200 dark:text-blue-400 dark:border-blue-700",
      gray:
        "bg-transparent text-gray-700 border border-gray-200 dark:text-gray-400 dark:border-gray-700",
    },
  };

  // Get styles based on size and color variant
  const sizeClass = sizeStyles[size];
  const colorStyles = variants[variant][color];

  return (
    <span className={`${baseStyles} ${sizeClass} ${colorStyles} ${className}`}>
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </span>
  );
};
