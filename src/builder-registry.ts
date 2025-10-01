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
import { 
  Button, 
  Badge, 
  Input, 
  Select, 
  Checkbox,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardWithImage,
  CardWithIcon,
  Avatar,
  Alert
} from '../components/tailadmin';

// Import components from Catalyst UI
import { 
  Button as CatalystButton,
  Input as CatalystInput,
  Avatar as CatalystAvatar,
  Badge as CatalystBadge,
  Alert as CatalystAlert,
  Fieldset,
  Field,
  Label,
  Description,
  ErrorMessage,
  Switch as CatalystSwitch,
  Checkbox as CatalystCheckbox,
  Select as CatalystSelect,
  Table as CatalystTable,
  Dialog as CatalystDialog
} from './catalyst-ui-kit';

// Import custom components
import { Hero, AdminLayout, AdminLayoutSaaS, SaasDashboard, UserProfile } from '../components/custom';

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

// Button Component
Builder.registerComponent(Button, {
  name: 'TailAdmin Button',
  image: 'https://via.placeholder.com/150x100?text=Button',
  inputs: [
    {
      name: 'children',
      type: 'string',
      defaultValue: 'Click Me',
      required: true,
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['primary', 'secondary', 'outline', 'ghost'],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'type',
      type: 'string',
      enum: ['button', 'submit', 'reset'],
      defaultValue: 'button',
    },
  ],
});

// Badge Component
Builder.registerComponent(Badge, {
  name: 'TailAdmin Badge',
  image: 'https://via.placeholder.com/150x100?text=Badge',
  inputs: [
    {
      name: 'children',
      type: 'string',
      defaultValue: 'Badge',
      required: true,
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['light', 'solid', 'outline'],
      defaultValue: 'light',
    },
    {
      name: 'color',
      type: 'string',
      enum: ['primary', 'success', 'error', 'warning', 'info', 'gray'],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['xs', 'sm', 'md'],
      defaultValue: 'md',
    },
  ],
});

// Input Component
Builder.registerComponent(Input, {
  name: 'TailAdmin Input',
  image: 'https://via.placeholder.com/150x100?text=Input',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Label',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Enter text...',
    },
    {
      name: 'type',
      type: 'string',
      enum: ['text', 'email', 'password', 'number', 'tel', 'url'],
      defaultValue: 'text',
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'hint',
      type: 'string',
      defaultValue: '',
    },
  ],
});

// Card Component
Builder.registerComponent(Card, {
  name: 'TailAdmin Card',
  image: 'https://via.placeholder.com/150x100?text=Card',
  inputs: [
    {
      name: 'children',
      type: 'richText',
      defaultValue: 'Card content',
    },
    {
      name: 'hover',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// Avatar Component
Builder.registerComponent(Avatar, {
  name: 'TailAdmin Avatar',
  image: 'https://via.placeholder.com/150x100?text=Avatar',
  inputs: [
    {
      name: 'src',
      type: 'file',
    },
    {
      name: 'alt',
      type: 'string',
      defaultValue: 'User Avatar',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
    {
      name: 'status',
      type: 'string',
      enum: ['online', 'offline', 'busy', 'away', 'none'],
      defaultValue: 'none',
    },
    {
      name: 'fallback',
      type: 'string',
      defaultValue: '',
    },
  ],
});

// Alert Component
Builder.registerComponent(Alert, {
  name: 'TailAdmin Alert',
  image: 'https://via.placeholder.com/150x100?text=Alert',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['success', 'error', 'warning', 'info'],
      defaultValue: 'info',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Alert Title',
    },
    {
      name: 'message',
      type: 'string',
      defaultValue: 'This is an alert message.',
      required: true,
    },
    {
      name: 'closable',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'showLink',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'linkText',
      type: 'string',
      defaultValue: 'Learn more',
    },
  ],
});

// TailAdmin Select Component
Builder.registerComponent(Select, {
  name: 'TailAdmin Select',
  image: 'https://via.placeholder.com/150x100?text=Select',
  inputs: [
    {
      name: 'options',
      type: 'list',
      subFields: [
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' }
      ],
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Select an option...'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ],
});

// TailAdmin Checkbox Component
Builder.registerComponent(Checkbox, {
  name: 'TailAdmin Checkbox',
  image: 'https://via.placeholder.com/150x100?text=Checkbox',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Checkbox Label'
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ],
});

// TailAdmin CardWithImage Component
Builder.registerComponent(CardWithImage, {
  name: 'TailAdmin Card With Image',
  image: 'https://via.placeholder.com/150x100?text=Card+Image',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Card Title'
    },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'Card description goes here...'
    },
    {
      name: 'imageSrc',
      type: 'file',
    },
    {
      name: 'imageAlt',
      type: 'string',
      defaultValue: 'Card image'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Learn More'
    }
  ],
});

// TailAdmin CardWithIcon Component
Builder.registerComponent(CardWithIcon, {
  name: 'TailAdmin Card With Icon',
  image: 'https://via.placeholder.com/150x100?text=Card+Icon',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Card Title'
    },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'Card description goes here...'
    },
    {
      name: 'iconName',
      type: 'string',
      defaultValue: 'heart'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Learn More'
    }
  ],
});

/**
 * Register Catalyst UI Components
 */

// Catalyst Button Component
Builder.registerComponent(CatalystButton, {
  name: 'Catalyst Button',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Button',
  inputs: [
    {
      name: 'children',
      type: 'string',
      defaultValue: 'Click Me',
      required: true,
    },
    {
      name: 'color',
      type: 'string',
      enum: ['dark/zinc', 'light', 'dark/white', 'dark', 'white', 'zinc', 'indigo', 'cyan', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'sky', 'blue', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
      defaultValue: 'dark/zinc',
    },
    {
      name: 'outline',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'plain',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// Catalyst Input Component
Builder.registerComponent(CatalystInput, {
  name: 'Catalyst Input',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Input',
  inputs: [
    {
      name: 'type',
      type: 'string',
      enum: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'date', 'datetime-local', 'month', 'time', 'week'],
      defaultValue: 'text',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Enter text...',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// Catalyst Avatar Component
Builder.registerComponent(CatalystAvatar, {
  name: 'Catalyst Avatar',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Avatar',
  inputs: [
    {
      name: 'src',
      type: 'file',
    },
    {
      name: 'alt',
      type: 'string',
      defaultValue: 'User Avatar',
    },
    {
      name: 'initials',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'square',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// Catalyst Fieldset Component (for forms)
Builder.registerComponent(Fieldset, {
  name: 'Catalyst Fieldset',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Fieldset',
  inputs: [
    {
      name: 'children',
      type: 'richText',
      defaultValue: 'Form fields go here',
    },
  ],
});

// Catalyst Switch Component
Builder.registerComponent(CatalystSwitch, {
  name: 'Catalyst Switch',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Switch',
  inputs: [
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ],
});

// Catalyst Dialog Component
Builder.registerComponent(CatalystDialog, {
  name: 'Catalyst Dialog',
  image: 'https://via.placeholder.com/150x100?text=Catalyst+Dialog',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Dialog Title'
    },
    {
      name: 'children',
      type: 'richText',
      defaultValue: 'Dialog content goes here...'
    },
    {
      name: 'open',
      type: 'boolean',
      defaultValue: false
    }
  ],
});

/**
 * Register Custom Components
 */

// Custom Hero Component
Builder.registerComponent(Hero, {
  name: 'Custom Hero',
  image: 'https://via.placeholder.com/150x100?text=Custom+Hero',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Welcome to Our Platform',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'longText',
      defaultValue: 'Build amazing experiences with our design system',
    },
    {
      name: 'ctaText',
      type: 'string',
      defaultValue: 'Get Started',
    },
    {
      name: 'backgroundImage',
      type: 'file',
    },
    {
      name: 'alignment',
      type: 'string',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
  ],
});

// Admin Layout Component
Builder.registerComponent(AdminLayout, {
  name: 'Admin Layout',
  image: 'https://via.placeholder.com/150x100?text=Admin+Layout',
  inputs: [
    {
      name: 'pageTitle',
      type: 'string',
      defaultValue: 'Admin Dashboard',
      required: true,
    },
    {
      name: 'userInfo',
      type: 'object',
      subFields: [
        {
          name: 'name',
          type: 'string',
          defaultValue: 'Admin User',
        },
        {
          name: 'email',
          type: 'string',
          defaultValue: 'admin@example.com',
        },
        {
          name: 'avatar',
          type: 'file',
        },
      ],
    },
    {
      name: 'navigationItems',
      type: 'list',
      subFields: [
        {
          name: 'id',
          type: 'string',
          defaultValue: 'dashboard',
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: 'Dashboard',
        },
        {
          name: 'href',
          type: 'string',
          defaultValue: '/admin/dashboard',
        },
        {
          name: 'icon',
          type: 'string',
          defaultValue: '🏠',
        },
        {
          name: 'badge',
          type: 'string',
        },
      ],
      defaultValue: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/admin/dashboard',
          icon: '🏠',
        },
        {
          id: 'users',
          label: 'Users',
          href: '/admin/users',
          icon: '👥',
        },
        {
          id: 'settings',
          label: 'Settings',
          href: '/admin/settings',
          icon: '⚙️',
        },
      ],
    },
    {
      name: 'showBreadcrumbs',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'breadcrumbs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'href',
          type: 'string',
        },
      ],
      defaultValue: [
        { label: 'Admin', href: '/admin' },
        { label: 'Dashboard' },
      ],
    },
    {
      name: 'children',
      type: 'richText',
      defaultValue: '<p>Admin content goes here...</p>',
    },
    {
      name: 'defaultCollapsed',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// SaaS Admin Layout Component
Builder.registerComponent(AdminLayoutSaaS, {
  name: 'SaaS Admin Layout',
  image: 'https://via.placeholder.com/150x100?text=SaaS+Admin',
  inputs: [
    { name: 'pageTitle', type: 'string', defaultValue: 'SaaS Dashboard', required: true },
    { name: 'userInfo', type: 'object', subFields: [{ name: 'name', type: 'string', defaultValue: 'John Doe' }, { name: 'email', type: 'string', defaultValue: 'john@company.com' }, { name: 'avatar', type: 'file' }, { name: 'role', type: 'string', defaultValue: 'Team Manager' }], },
    { name: 'navigationItems', type: 'list', subFields: [{ name: 'id', type: 'string', defaultValue: 'dashboard' }, { name: 'label', type: 'string', defaultValue: 'Dashboard' }, { name: 'href', type: 'string', defaultValue: '/dashboard' }, { name: 'icon', type: 'string', defaultValue: '🏠' }, { name: 'badge', type: 'string' }], defaultValue: [{ id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '🏠' }, { id: 'users', label: 'Users', href: '/users', icon: '👥' }, { id: 'analytics', label: 'Analytics', href: '/analytics', icon: '📊' }, { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️' }], },
    { name: 'showBreadcrumbs', type: 'boolean', defaultValue: true },
    { name: 'breadcrumbs', type: 'list', subFields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }], defaultValue: [{ label: 'Home', href: '/' }, { label: 'Dashboard' }], },
    { name: 'children', type: 'richText', defaultValue: '<p>SaaS dashboard content goes here...</p>', },
    { name: 'defaultCollapsed', type: 'boolean', defaultValue: false, },
  ],
});

// SaaS Dashboard Component
Builder.registerComponent(SaasDashboard, {
  name: 'SaaS Dashboard',
  image: 'https://via.placeholder.com/150x100?text=SaaS+Dashboard',
  inputs: [
    { name: 'metrics', type: 'object', subFields: [{ name: 'totalRevenue', type: 'object', subFields: [{ name: 'value', type: 'string', defaultValue: '$200,45.87' }, { name: 'change', type: 'string', defaultValue: '+2.5%' }, { name: 'trend', type: 'string', enum: ['up', 'down'], defaultValue: 'up' }] }, { name: 'activeUsers', type: 'object', subFields: [{ name: 'value', type: 'string', defaultValue: '9,528' }, { name: 'change', type: 'string', defaultValue: '+9.5%' }, { name: 'trend', type: 'string', enum: ['up', 'down'], defaultValue: 'up' }] }, { name: 'customerLifetimeValue', type: 'object', subFields: [{ name: 'value', type: 'string', defaultValue: '$849.54' }, { name: 'change', type: 'string', defaultValue: '-1.6%' }, { name: 'trend', type: 'string', enum: ['up', 'down'], defaultValue: 'down' }] }, { name: 'customerAcquisitionCost', type: 'object', subFields: [{ name: 'value', type: 'string', defaultValue: '9,528' }, { name: 'change', type: 'string', defaultValue: '+3.5%' }, { name: 'trend', type: 'string', enum: ['up', 'down'], defaultValue: 'up' }] }] },
    { name: 'recentInvoices', type: 'list', subFields: [{ name: 'serialNo', type: 'string', defaultValue: '#DF429' }, { name: 'closeDate', type: 'string', defaultValue: 'April 28, 2016' }, { name: 'user', type: 'string', defaultValue: 'Jenny Wilson' }, { name: 'amount', type: 'string', defaultValue: '$473.85' }, { name: 'status', type: 'string', enum: ['Complete', 'Pending', 'Cancelled'], defaultValue: 'Complete' }] },
    { name: 'activities', type: 'list', subFields: [{ name: 'user', type: 'string', defaultValue: 'Francisco Grbbs' }, { name: 'action', type: 'string', defaultValue: 'created invoice' }, { name: 'details', type: 'string', defaultValue: 'PQ-4491C' }, { name: 'time', type: 'string', defaultValue: 'Just Now' }, { name: 'avatar', type: 'file' }] },
  ],
});

// User Profile Component
Builder.registerComponent(UserProfile, {
  name: 'User Profile',
  image: 'https://via.placeholder.com/150x100?text=User+Profile',
  inputs: [
    { name: 'userInfo', type: 'object', subFields: [{ name: 'name', type: 'string', defaultValue: 'Musharof Chowdhury', required: true }, { name: 'email', type: 'string', defaultValue: 'musharof@company.com', required: true }, { name: 'role', type: 'string', defaultValue: 'Team Manager', required: true }, { name: 'location', type: 'string', defaultValue: 'Arizona, United States.' }, { name: 'avatar', type: 'file' }, { name: 'bio', type: 'string', defaultValue: 'Team Manager' }], required: true },
    { name: 'personalInfo', type: 'object', subFields: [{ name: 'firstName', type: 'string', defaultValue: 'Chowdury' }, { name: 'lastName', type: 'string', defaultValue: 'Musharof' }, { name: 'phone', type: 'string', defaultValue: '+09 363 398 46' }, { name: 'bio', type: 'string', defaultValue: 'Team Manager' }] },
    { name: 'address', type: 'object', subFields: [{ name: 'country', type: 'string', defaultValue: 'United States' }, { name: 'city', type: 'string', defaultValue: 'Arizona, United States.' }, { name: 'postalCode', type: 'string', defaultValue: 'ERT 2489' }, { name: 'taxId', type: 'string', defaultValue: 'AS4568384' }] },
    { name: 'socialLinks', type: 'object', subFields: [{ name: 'facebook', type: 'string', defaultValue: 'https://facebook.com' }, { name: 'twitter', type: 'string', defaultValue: 'https://x.com' }, { name: 'linkedin', type: 'string', defaultValue: 'https://linkedin.com' }, { name: 'instagram', type: 'string', defaultValue: 'https://instagram.com' }] },
  ],
});

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
