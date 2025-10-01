/**
 * Design System Entry Point
 * 
 * Main entry file that exports all components from the design system
 */

// Export Builder.io registration
export { registerAllComponents } from './builder-registry';

// Export Tailwind UI Components
// Uncomment and add as components are created
// export { Button } from '../components/tailwindui/button';
// export type { ButtonProps } from '../components/tailwindui/button';

// Export TailAdmin Components
export * from '../components/tailadmin';

// Export Catalyst UI Components with aliases to avoid conflicts
export {
  Button as CatalystButton,
  Input as CatalystInput,
  Avatar as CatalystAvatar,
  Badge as CatalystBadge,
  Alert as CatalystAlert,
  Checkbox as CatalystCheckbox,
  Select as CatalystSelect,
  Fieldset,
  Field,
  Label,
  Description,
  ErrorMessage,
  Switch as CatalystSwitch,
  Table as CatalystTable,
  Dialog as CatalystDialog,
  Heading,
  Text,
  Textarea as CatalystTextarea,
  Link as CatalystLink,
  Divider,
  Pagination as CatalystPagination,
  Radio as CatalystRadio,
  Listbox as CatalystListbox,
  Combobox as CatalystCombobox,
  Navbar as CatalystNavbar,
  Sidebar as CatalystSidebar,
  SidebarLayout as CatalystSidebarLayout,
  StackedLayout as CatalystStackedLayout,
  AuthLayout as CatalystAuthLayout,
  DescriptionList as CatalystDescriptionList,
} from './catalyst-ui-kit';

// Export Custom Components
export * from '../components/custom';

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
