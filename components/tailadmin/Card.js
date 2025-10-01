import { jsx as _jsx } from "react/jsx-runtime";
// Card Component
export const Card = ({ children, className = "", onClick, hover = false }) => {
    const cardClasses = `
    rounded-xl border border-gray-200 bg-white p-6 
    dark:border-gray-800 dark:bg-gray-900/50 
    ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();
    return (_jsx("div", { className: cardClasses, onClick: onClick, children: children }));
};
// CardHeader Component
export const CardHeader = ({ children, className = "" }) => {
    return (_jsx("div", { className: `mb-4 ${className}`, children: children }));
};
// CardTitle Component
export const CardTitle = ({ children, level = 3, className = "" }) => {
    const Tag = `h${level}`;
    const titleClasses = {
        1: "text-2xl font-bold text-gray-900 dark:text-white",
        2: "text-xl font-bold text-gray-900 dark:text-white",
        3: "text-lg font-semibold text-gray-900 dark:text-white",
        4: "text-base font-semibold text-gray-900 dark:text-white",
        5: "text-sm font-semibold text-gray-900 dark:text-white",
        6: "text-xs font-semibold text-gray-900 dark:text-white",
    };
    return (_jsx(Tag, { className: `${titleClasses[level]} ${className}`, children: children }));
};
// CardDescription Component
export const CardDescription = ({ children, className = "" }) => {
    return (_jsx("p", { className: `text-sm text-gray-600 dark:text-gray-400 ${className}`, children: children }));
};
// CardContent Component
export const CardContent = ({ children, className = "" }) => {
    return (_jsx("div", { className: className, children: children }));
};
// CardFooter Component
export const CardFooter = ({ children, className = "" }) => {
    return (_jsx("div", { className: `mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`, children: children }));
};
