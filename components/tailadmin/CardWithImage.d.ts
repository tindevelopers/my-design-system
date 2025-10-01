import React, { ReactNode } from "react";
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
export declare const CardWithImage: React.FC<CardWithImageProps>;
//# sourceMappingURL=CardWithImage.d.ts.map