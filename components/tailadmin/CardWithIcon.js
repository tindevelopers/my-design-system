import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";
export const CardWithIcon = ({ icon, iconBgColor = "bg-brand-50 text-brand-500 dark:bg-brand-500/10", title, description, children, className = "", onClick, }) => {
    return (_jsx(Card, { className: className, onClick: onClick, children: _jsxs("div", { children: [_jsx("div", { className: `mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${iconBgColor}`, children: _jsx("div", { className: "flex items-center justify-center", children: icon }) }), _jsxs(CardContent, { children: [title && _jsx(CardTitle, { children: title }), description && _jsx(CardDescription, { children: description }), children] })] }) }));
};
