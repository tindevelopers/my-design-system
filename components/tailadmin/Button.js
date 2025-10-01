import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({ children, size = "md", variant = "primary", startIcon, endIcon, onClick, className = "", disabled = false, type = "button", }) => {
    // Size Classes
    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
    };
    // Variant Classes
    const variantClasses = {
        primary: "bg-brand-500 text-white shadow-sm hover:bg-brand-600 disabled:bg-brand-300 focus:ring-2 focus:ring-brand-500/20",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 disabled:bg-gray-50 focus:ring-2 focus:ring-gray-500/20 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        outline: "bg-transparent text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:bg-transparent disabled:ring-gray-200 focus:ring-2 focus:ring-brand-500/20 dark:bg-transparent dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-800/50",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 disabled:bg-transparent focus:ring-2 focus:ring-brand-500/20 dark:text-gray-300 dark:hover:bg-gray-800/50",
    };
    return (_jsxs("button", { type: type, className: `inline-flex items-center justify-center font-medium gap-2 rounded-lg transition-colors duration-200 ${className} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`, onClick: onClick, disabled: disabled, children: [startIcon && _jsx("span", { className: "flex items-center", children: startIcon }), children, endIcon && _jsx("span", { className: "flex items-center", children: endIcon })] }));
};
