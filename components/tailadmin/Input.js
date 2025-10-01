import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ type = "text", id, name, placeholder, defaultValue, value, onChange, onBlur, onFocus, className = "", min, max, step, disabled = false, success = false, error = false, hint, errorMessage, label, required = false, autoComplete, }) => {
    let inputClasses = `h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 ${className}`;
    if (disabled) {
        inputClasses += ` bg-gray-50 text-gray-500 border-gray-200 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
    }
    else if (error) {
        inputClasses += ` border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-600 dark:focus:border-red-500`;
    }
    else if (success) {
        inputClasses += ` border-green-300 focus:border-green-500 focus:ring-green-500/20 dark:border-green-600 dark:focus:border-green-500`;
    }
    else {
        inputClasses += ` bg-white border-gray-300 focus:border-brand-500 focus:ring-brand-500/20 dark:border-gray-600 dark:focus:border-brand-500`;
    }
    const inputId = id || name;
    return (_jsxs("div", { className: "w-full", children: [label && (_jsxs("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] })), _jsx("input", { type: type, id: inputId, name: name, placeholder: placeholder, defaultValue: defaultValue, value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, min: min, max: max, step: step, disabled: disabled, required: required, autoComplete: autoComplete, className: inputClasses }), (hint || errorMessage) && (_jsx("p", { className: `mt-1.5 text-xs ${error
                    ? "text-red-600 dark:text-red-400"
                    : success
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-500 dark:text-gray-400"}`, children: error ? errorMessage : hint }))] }));
};
