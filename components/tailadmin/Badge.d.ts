import React from "react";
export type BadgeVariant = "light" | "solid" | "outline";
export type BadgeSize = "xs" | "sm" | "md";
export type BadgeColor = "primary" | "success" | "error" | "warning" | "info" | "gray";
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
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map