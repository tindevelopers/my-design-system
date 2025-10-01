import React, { ReactNode } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";

export interface CardWithIconProps {
  /** Icon component or SVG */
  icon: ReactNode;
  /** Icon background color */
  iconBgColor?: string;
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Card content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const CardWithIcon: React.FC<CardWithIconProps> = ({
  icon,
  iconBgColor = "bg-brand-50 text-brand-500 dark:bg-brand-500/10",
  title,
  description,
  children,
  className = "",
  onClick,
}) => {
  return (
    <Card className={className} onClick={onClick}>
      <div>
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${iconBgColor}`}>
          <div className="flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <CardContent>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {children}
        </CardContent>
      </div>
    </Card>
  );
};
