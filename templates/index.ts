// Page Templates Export
// This file exports all the complete page templates for easy integration

// Main SaaS Admin Dashboard
export { default as SaasAdminPage } from './pages/saas-admin';

// SaaS Admin Sub-pages
export { default as SaasAdminUsersPage } from './pages/saas-admin/users';
export { default as SaasAdminOrganizationsPage } from './pages/saas-admin/organizations';
export { default as SaasAdminAnalyticsPage } from './pages/saas-admin/analytics';

// CRM Admin Dashboard
export { default as CrmAdminPage } from './pages/crm-admin';

// Re-export components for convenience
export { AdminLayoutSaaS, SaasDashboard } from '@tindeveloper/design-system';

// Template configuration
export const saasAdminTemplates = {
  main: {
    path: '/saas-admin',
    component: 'SaasAdminPage',
    title: 'SaaS Dashboard'
  },
  users: {
    path: '/saas-admin/users',
    component: 'SaasAdminUsersPage',
    title: 'User Management'
  },
  organizations: {
    path: '/saas-admin/organizations',
    component: 'SaasAdminOrganizationsPage',
    title: 'Organizations'
  },
  analytics: {
    path: '/saas-admin/analytics',
    component: 'SaasAdminAnalyticsPage',
    title: 'Analytics'
  }
};

export const crmAdminTemplates = {
  main: {
    path: '/crm-admin',
    component: 'CrmAdminPage',
    title: 'CRM Dashboard'
  }
};

// Navigation configuration
export const saasAdminNavigation = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/saas-admin',
    icon: '🏠',
  },
  {
    id: 'users',
    label: 'Users',
    href: '/saas-admin/users',
    icon: '👥',
    badge: '12',
  },
  {
    id: 'organizations',
    label: 'Organizations',
    href: '/saas-admin/organizations',
    icon: '🏢',
    badge: '8',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/saas-admin/analytics',
    icon: '📊',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    href: '/saas-admin/ecommerce',
    icon: '🛒',
    subItems: [
      { id: 'products', label: 'Products', href: '/saas-admin/products' },
      { id: 'orders', label: 'Orders', href: '/saas-admin/orders' },
      { id: 'billing', label: 'Billing', href: '/saas-admin/billing' },
    ],
  },
  {
    id: 'ai-assistant',
    label: 'AI Assistant',
    href: '/saas-admin/ai',
    icon: '🤖',
    subItems: [
      { id: 'text-generator', label: 'Text Generator', href: '/saas-admin/ai/text' },
      { id: 'image-generator', label: 'Image Generator', href: '/saas-admin/ai/image' },
      { id: 'code-generator', label: 'Code Generator', href: '/saas-admin/ai/code' },
    ],
  },
  {
    id: 'calendar',
    label: 'Calendar',
    href: '/saas-admin/calendar',
    icon: '📅',
  },
  {
    id: 'forms',
    label: 'Forms',
    href: '/saas-admin/forms',
    icon: '📝',
    subItems: [
      { id: 'form-elements', label: 'Form Elements', href: '/saas-admin/forms/elements' },
      { id: 'form-layout', label: 'Form Layout', href: '/saas-admin/forms/layout' },
    ],
  },
  {
    id: 'tables',
    label: 'Tables',
    href: '/saas-admin/tables',
    icon: '📋',
    subItems: [
      { id: 'basic-tables', label: 'Basic Tables', href: '/saas-admin/tables/basic' },
      { id: 'data-tables', label: 'Data Tables', href: '/saas-admin/tables/data' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/saas-admin/settings',
    icon: '⚙️',
  },
];
