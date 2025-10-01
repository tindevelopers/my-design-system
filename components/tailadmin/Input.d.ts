import React from "react";
export interface InputProps {
    /** Input type */
    type?: "text" | "number" | "email" | "password" | "date" | "time" | "tel" | "url";
    /** Input id */
    id?: string;
    /** Input name */
    name?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Default value */
    defaultValue?: string | number;
    /** Current value */
    value?: string | number;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Blur handler */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** Focus handler */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** Additional CSS classes */
    className?: string;
    /** Minimum value (for number inputs) */
    min?: string | number;
    /** Maximum value (for number inputs) */
    max?: string | number;
    /** Step value (for number inputs) */
    step?: number;
    /** Disabled state */
    disabled?: boolean;
    /** Success state */
    success?: boolean;
    /** Error state */
    error?: boolean;
    /** Hint text */
    hint?: string;
    /** Error message */
    errorMessage?: string;
    /** Label text */
    label?: string;
    /** Required field */
    required?: boolean;
    /** Auto complete */
    autoComplete?: string;
}
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map