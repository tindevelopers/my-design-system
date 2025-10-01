import React, { ReactNode } from "react";

export interface CardProps {
  /** Card content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Hover effect */
  hover?: boolean;
}

export interface CardHeaderProps {
  /** Header content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardTitleProps {
  /** Title content */
  children: ReactNode;
  /** Title level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Additional CSS classes */
  className?: string;
}

export interface CardDescriptionProps {
  /** Description content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardContentProps {
  /** Content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardFooterProps {
  /** Footer content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// Card Component
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  onClick,
  hover = false 
}) => {
  const cardClasses = `
    rounded-xl border border-gray-200 bg-white p-6 
    dark:border-gray-800 dark:bg-gray-900/50 
    ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

// CardHeader Component
export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

// CardTitle Component
export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  level = 3,
  className = "" 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const titleClasses = {
    1: "text-2xl font-bold text-gray-900 dark:text-white",
    2: "text-xl font-bold text-gray-900 dark:text-white",
    3: "text-lg font-semibold text-gray-900 dark:text-white",
    4: "text-base font-semibold text-gray-900 dark:text-white",
    5: "text-sm font-semibold text-gray-900 dark:text-white",
    6: "text-xs font-semibold text-gray-900 dark:text-white",
  };

  return (
    <Tag className={`${titleClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

// CardDescription Component
export const CardDescription: React.FC<CardDescriptionProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};

// CardContent Component
export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// CardFooter Component
export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};
