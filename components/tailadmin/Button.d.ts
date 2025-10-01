import React, { ReactNode } from "react";
export interface ButtonProps {
    /** Button text or content */
    children: ReactNode;
    /** Button size */
    size?: "sm" | "md" | "lg";
    /** Button variant */
    variant?: "primary" | "secondary" | "outline" | "ghost";
    /** Icon before the text */
    startIcon?: ReactNode;
    /** Icon after the text */
    endIcon?: ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Button type */
    type?: "button" | "submit" | "reset";
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map