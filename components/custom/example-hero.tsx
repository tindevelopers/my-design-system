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

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  backgroundImage,
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section 
      className={`relative py-20 px-4 ${alignmentClasses[alignment]}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};
