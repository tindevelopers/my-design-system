import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Alert = ({ variant, title, message, closable = false, onClose, showLink = false, linkHref = "#", linkText = "Learn more", onLinkClick, size = "md", className = "", }) => {
    const sizeClasses = {
        sm: "p-3 text-sm",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
    };
    // Tailwind classes for each variant
    const variantClasses = {
        success: {
            container: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
            icon: "text-green-600 dark:text-green-400",
            title: "text-green-800 dark:text-green-200",
            message: "text-green-700 dark:text-green-300",
        },
        error: {
            container: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
            icon: "text-red-600 dark:text-red-400",
            title: "text-red-800 dark:text-red-200",
            message: "text-red-700 dark:text-red-300",
        },
        warning: {
            container: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
            icon: "text-yellow-600 dark:text-yellow-400",
            title: "text-yellow-800 dark:text-yellow-200",
            message: "text-yellow-700 dark:text-yellow-300",
        },
        info: {
            container: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
            icon: "text-blue-600 dark:text-blue-400",
            title: "text-blue-800 dark:text-blue-200",
            message: "text-blue-700 dark:text-blue-300",
        },
    };
    // Icon for each variant
    const icons = {
        success: (_jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) })),
        error: (_jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) })),
        warning: (_jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) })),
        info: (_jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) })),
    };
    return (_jsx("div", { className: `
        rounded-lg border ${sizeClasses[size]}
        ${variantClasses[variant].container}
        ${className}
      `.trim(), children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: `flex-shrink-0 ${variantClasses[variant].icon}`, children: icons[variant] }), _jsxs("div", { className: "flex-1", children: [title && (_jsx("h4", { className: `font-semibold mb-1 ${variantClasses[variant].title}`, children: title })), _jsx("p", { className: variantClasses[variant].message, children: message }), showLink && (_jsx("button", { onClick: onLinkClick, className: "inline-block mt-2 font-medium underline hover:no-underline", children: linkText }))] }), closable && (_jsx("button", { onClick: onClose, className: `flex-shrink-0 ${variantClasses[variant].icon} hover:opacity-70 transition-opacity`, children: _jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }))] }) }));
};
