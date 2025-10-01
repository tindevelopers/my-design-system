import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";
export const CardWithImage = ({ src, alt = "Card image", title, description, children, action, aspectRatio = "video", className = "", onClick, }) => {
    const aspectRatioClasses = {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[16/9]",
        tall: "aspect-[3/4]",
    };
    return (_jsx(Card, { className: className, onClick: onClick, children: _jsxs("div", { children: [_jsx("div", { className: "mb-5 overflow-hidden rounded-lg", children: _jsx("img", { src: src, alt: alt, className: `w-full object-cover ${aspectRatioClasses[aspectRatio]}` }) }), _jsxs(CardContent, { children: [title && _jsx(CardTitle, { children: title }), description && _jsx(CardDescription, { children: description }), children, action && _jsx("div", { className: "mt-4", children: action })] })] }) }));
};
