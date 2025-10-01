import React from 'react';
import { AdminLayoutSaaS, SaasDashboard } from '@tindeveloper/design-system';

const SaasAdminDemo: React.FC = () => {
  const navigationItems = [
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

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'SaaS Admin' },
  ];

  const userInfo = {
    name: 'Musharof Chowdhury',
    email: 'musharof@company.com',
    role: 'Team Manager',
    avatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MC',
  };

  const dashboardMetrics = {
    totalRevenue: {
      value: '$200,45.87',
      change: '+2.5%',
      trend: 'up' as const,
    },
    activeUsers: {
      value: '9,528',
      change: '+9.5%',
      trend: 'up' as const,
    },
    customerLifetimeValue: {
      value: '$849.54',
      change: '-1.6%',
      trend: 'down' as const,
    },
    customerAcquisitionCost: {
      value: '9,528',
      change: '+3.5%',
      trend: 'up' as const,
    },
  };

  const recentInvoices = [
    { serialNo: '#DF429', closeDate: 'April 28, 2016', user: 'Jenny Wilson', amount: '$473.85', status: 'Complete' as const },
    { serialNo: '#HTY274', closeDate: 'October 30, 2017', user: 'Wade Warren', amount: '$293.01', status: 'Complete' as const },
    { serialNo: '#LKE600', closeDate: 'May 29, 2017', user: 'Darlene Robertson', amount: '$782.01', status: 'Pending' as const },
    { serialNo: '#HRP447', closeDate: 'May 20, 2015', user: 'Arlene McCoy', amount: '$202.87', status: 'Cancelled' as const },
  ];

  const activities = [
    { user: 'Francisco Grbbs', action: 'created invoice', details: 'PQ-4491C', time: 'Just Now' },
    { user: 'Courtney Henry', action: 'created invoice', details: 'HK-234G', time: '15 minutes ago' },
    { user: 'Bessie Cooper', action: 'created invoice', details: 'LH-2891C', time: '5 months ago' },
    { user: 'Theresa Web', action: 'created invoice', details: 'CK-125NH', time: '2 weeks ago' },
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="SaaS Dashboard"
      navigationItems={navigationItems}
      userInfo={userInfo}
      showBreadcrumbs={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Overview</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome to your SaaS dashboard</p>
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Filter
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <SaasDashboard
          metrics={dashboardMetrics}
          recentInvoices={recentInvoices}
          activities={activities}
        />

        {/* Additional Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Product Performance</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  View More
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Digital Product</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">790</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Physical Product</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">572</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Average Daily Sales</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">$2,950</span>
                    <span className="text-sm text-green-500 ml-2">0.52%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <div className="text-2xl mb-2">👤</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Add User</div>
                </button>
                <button className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">View Analytics</div>
                </button>
                <button className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Create Report</div>
                </button>
                <button className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Settings</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutSaaS>
  );
};

export default SaasAdminDemo;
