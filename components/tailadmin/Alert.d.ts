import React from "react";
export type AlertVariant = "success" | "error" | "warning" | "info";
export type AlertSize = "sm" | "md" | "lg";
export interface AlertProps {
    /** Alert variant */
    variant: AlertVariant;
    /** Alert title */
    title?: string;
    /** Alert message */
    message: string;
    /** Show close button */
    closable?: boolean;
    /** Close handler */
    onClose?: () => void;
    /** Show action link */
    showLink?: boolean;
    /** Link URL */
    linkHref?: string;
    /** Link text */
    linkText?: string;
    /** Link click handler */
    onLinkClick?: () => void;
    /** Alert size */
    size?: AlertSize;
    /** Additional CSS classes */
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map