/**
 * Design System Entry Point
 * 
 * Main entry file that exports all components from the design system
 */

// Export Builder.io registration
export { default as registerAllComponents } from './builder-registry';

// Export Tailwind UI Components
// Uncomment and add as components are created
// export { Button } from '../components/tailwindui/button';
// export type { ButtonProps } from '../components/tailwindui/button';

// Export TailAdmin Components
// Uncomment and add as components are created
// export { DashboardCard } from '../components/tailadmin/dashboard-card';
// export type { DashboardCardProps } from '../components/tailadmin/dashboard-card';

// Export Custom Components
// Uncomment and add as components are created
// export { CustomHero } from '../components/custom/hero';
// export type { CustomHeroProps } from '../components/custom/hero';

// Version
export const VERSION = '1.0.0';

// Component metadata
export const COMPONENT_SOURCES = {
  TAILWIND_UI: 'tailwindui',
  TAILADMIN: 'tailadmin',
  CUSTOM: 'custom',
} as const;

export const COMPONENT_CATEGORIES = {
  FORMS: 'forms',
  NAVIGATION: 'navigation',
  LAYOUT: 'layout',
  DATA_DISPLAY: 'data-display',
  FEEDBACK: 'feedback',
  MARKETING: 'marketing',
} as const;
