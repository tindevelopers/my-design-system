import React from "react";
export interface SelectOption {
    /** Option value */
    value: string | number;
    /** Option label */
    label: string;
    /** Disabled state */
    disabled?: boolean;
}
export interface SelectProps {
    /** Available options */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Change handler */
    onChange: (value: string | number) => void;
    /** Additional CSS classes */
    className?: string;
    /** Default selected value */
    defaultValue?: string | number;
    /** Current value */
    value?: string | number;
    /** Disabled state */
    disabled?: boolean;
    /** Error state */
    error?: boolean;
    /** Label text */
    label?: string;
    /** Required field */
    required?: boolean;
    /** Hint text */
    hint?: string;
    /** Error message */
    errorMessage?: string;
}
export declare const Select: React.FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map