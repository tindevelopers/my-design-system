/**
 * Builder.io Component Registration
 * 
 * This file registers all components with Builder.io's visual editor.
 * Components registered here will be available in the Builder.io UI.
 */

import { Builder } from '@builder.io/react';

// Import components from Tailwind UI
// import { Button } from '../components/tailwindui/button';

// Import components from TailAdmin
// import { DashboardCard } from '../components/tailadmin/dashboard-card';

// Import custom components
// import { CustomHero } from '../components/custom/hero';

/**
 * Register Tailwind UI Components
 */

// Example Button Registration (uncomment when component exists)
/*
Builder.registerComponent(Button, {
  name: 'TailwindUI Button',
  image: 'https://via.placeholder.com/150x100?text=Button',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Click Me',
      required: true,
      helperText: 'The text displayed on the button',
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['primary', 'secondary', 'outline'],
      defaultValue: 'primary',
      helperText: 'Visual style of the button',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      helperText: 'Size of the button',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Whether the button is disabled',
    },
  ],
  defaultStyles: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});
*/

/**
 * Register TailAdmin Components
 */

// Add TailAdmin component registrations here

/**
 * Register Custom Components
 */

// Add custom component registrations here

/**
 * Helper function to register multiple components at once
 */
export function registerAllComponents() {
  console.log('Registering components with Builder.io...');
  
  // Components are registered when this module is imported
  // Add any initialization logic here
  
  console.log('All components registered successfully!');
}

// Auto-register when imported
if (typeof window !== 'undefined') {
  registerAllComponents();
}

export default registerAllComponents;
