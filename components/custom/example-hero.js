import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Hero = ({ title, subtitle, ctaText = 'Get Started', backgroundImage, alignment = 'center', }) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return (_jsx("section", { className: `relative py-20 px-4 ${alignmentClasses[alignment]}`, style: backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}, children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6 text-white", children: title }), subtitle && (_jsx("p", { className: "text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto", children: subtitle })), ctaText && (_jsx("button", { className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors", children: ctaText }))] }) }));
};
