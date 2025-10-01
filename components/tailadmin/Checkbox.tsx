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

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  id,
  className = "",
  disabled = false,
  required = false,
  hint,
  error = false,
  errorMessage,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      <label
        className={`flex items-start space-x-3 cursor-pointer ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        }`}
      >
        <div className="relative flex-shrink-0">
          <input
            id={checkboxId}
            type="checkbox"
            className={`
              w-5 h-5 appearance-none rounded-md border-2 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-brand-500/20
              dark:border-gray-600
              ${disabled 
                ? 'cursor-not-allowed opacity-60 border-gray-300 dark:border-gray-600' 
                : error
                ? 'border-red-300 dark:border-red-600'
                : 'border-gray-300 dark:border-gray-600'
              }
              ${checked 
                ? 'bg-brand-500 border-brand-500 dark:bg-brand-500 dark:border-brand-500' 
                : 'bg-white dark:bg-gray-900'
              }
              ${className}
            `.trim()}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            required={required}
          />
          
          {checked && (
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        
        {label && (
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          </div>
        )}
      </label>
      
      {(hint || errorMessage) && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-red-600 dark:text-red-400"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {error ? errorMessage : hint}
        </p>
      )}
    </div>
  );
};
