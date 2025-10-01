import React from "react";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarStatus = "online" | "offline" | "busy" | "away" | "none";
export interface AvatarProps {
    /** URL of the avatar image */
    src?: string;
    /** Alt text for the avatar */
    alt?: string;
    /** Avatar size */
    size?: AvatarSize;
    /** Status indicator */
    status?: AvatarStatus;
    /** Fallback text (first letter of each word) */
    fallback?: string;
    /** Additional CSS classes */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}
export declare const Avatar: React.FC<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map