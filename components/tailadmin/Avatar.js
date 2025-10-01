import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const sizeClasses = {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-14 w-14 text-lg",
    "2xl": "h-16 w-16 text-xl",
};
const statusSizeClasses = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-3.5 w-3.5",
    "2xl": "h-4 w-4",
};
const statusColorClasses = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
};
export const Avatar = ({ src, alt = "User Avatar", size = "md", status = "none", fallback, className = "", onClick, }) => {
    const avatarClasses = `
    relative inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800
    ${sizeClasses[size]}
    ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity duration-200' : ''}
    ${className}
  `.trim();
    const renderAvatarContent = () => {
        if (src) {
            return (_jsx("img", { src: src, alt: alt, className: "h-full w-full rounded-full object-cover", onError: (e) => {
                    // Fallback to text if image fails to load
                    const target = e.target;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `<div class="flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${sizeClasses[size]}">${fallback || '?'}</div>`;
                    }
                } }));
        }
        if (fallback) {
            return (_jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300", children: fallback }));
        }
        return (_jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300", children: _jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { fillRule: "evenodd", d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z", clipRule: "evenodd" }) }) }));
    };
    return (_jsxs("div", { className: avatarClasses, onClick: onClick, children: [renderAvatarContent(), status !== "none" && (_jsx("span", { className: `
            absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-gray-900
            ${statusSizeClasses[size]}
            ${statusColorClasses[status]}
          ` }))] }));
};
