import React from "react";
export interface CheckboxProps {
    /** Checkbox label */
    label?: string;
    /** Checked state */
    checked: boolean;
    /** Change handler */
    onChange: (checked: boolean) => void;
    /** Checkbox id */
    id?: string;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Required field */
    required?: boolean;
    /** Hint text */
    hint?: string;
    /** Error state */
    error?: boolean;
    /** Error message */
    errorMessage?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
//# sourceMappingURL=Checkbox.d.ts.map