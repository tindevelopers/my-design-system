import React, { ReactNode } from "react";
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
export declare const CardWithIcon: React.FC<CardWithIconProps>;
//# sourceMappingURL=CardWithIcon.d.ts.map