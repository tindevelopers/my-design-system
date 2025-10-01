import React, { useState } from "react";

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

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
  value,
  disabled = false,
  error = false,
  label,
  required = false,
  hint,
  errorMessage,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(value || defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const selectClasses = `
    h-11 w-full appearance-none rounded-lg border px-4 py-2.5 pr-10 text-sm shadow-sm 
    focus:outline-none focus:ring-2 transition-colors duration-200
    dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500
    ${disabled 
      ? 'bg-gray-50 text-gray-500 border-gray-200 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
      : error
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-600'
      : 'border-gray-300 focus:border-brand-500 focus:ring-brand-500/20 dark:border-gray-600 dark:focus:border-brand-500'
    }
    ${selectedValue ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}
    ${className}
  `.trim();

  const selectId = `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={selectId}
          className={selectClasses}
          value={selectedValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
        >
          <option
            value=""
            disabled
            className="text-gray-500 dark:text-gray-400"
          >
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="text-gray-900 dark:text-white dark:bg-gray-900"
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

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
