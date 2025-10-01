import React, { ReactNode } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";

export interface CardWithImageProps {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt?: string;
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Card content */
  children?: ReactNode;
  /** Action button/link */
  action?: ReactNode;
  /** Image aspect ratio */
  aspectRatio?: "square" | "video" | "wide" | "tall";
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const CardWithImage: React.FC<CardWithImageProps> = ({
  src,
  alt = "Card image",
  title,
  description,
  children,
  action,
  aspectRatio = "video",
  className = "",
  onClick,
}) => {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <Card className={className} onClick={onClick}>
      <div>
        <div className="mb-5 overflow-hidden rounded-lg">
          <img
            src={src}
            alt={alt}
            className={`w-full object-cover ${aspectRatioClasses[aspectRatio]}`}
          />
        </div>
        
        <CardContent>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {children}
          {action && <div className="mt-4">{action}</div>}
        </CardContent>
      </div>
    </Card>
  );
};
