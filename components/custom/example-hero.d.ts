import React from 'react';
export interface HeroProps {
    /** Main heading text */
    title: string;
    /** Subheading text */
    subtitle?: string;
    /** Call-to-action button text */
    ctaText?: string;
    /** Background image URL */
    backgroundImage?: string;
    /** Text alignment */
    alignment?: 'left' | 'center' | 'right';
}
export declare const Hero: React.FC<HeroProps>;
//# sourceMappingURL=example-hero.d.ts.map