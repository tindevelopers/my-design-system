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
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: React.FC<CardHeaderProps>;
export declare const CardTitle: React.FC<CardTitleProps>;
export declare const CardDescription: React.FC<CardDescriptionProps>;
export declare const CardContent: React.FC<CardContentProps>;
export declare const CardFooter: React.FC<CardFooterProps>;
//# sourceMappingURL=Card.d.ts.map