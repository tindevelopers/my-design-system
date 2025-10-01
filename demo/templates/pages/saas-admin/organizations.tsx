import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

const SaasAdminOrganizationsPage: React.FC = () => {
  const userInfo = {
    name: 'Musharof Chowdhury',
    email: 'musharof@company.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Team Manager',
  };

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
    },
    {
      id: 'ai-assistant',
      label: 'AI Assistant',
      href: '/saas-admin/ai',
      icon: '🤖',
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
    },
    {
      id: 'tables',
      label: 'Tables',
      href: '/saas-admin/tables',
      icon: '📋',
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
    { label: 'SaaS Admin', href: '/saas-admin' },
    { label: 'Organizations' },
  ];

  // Sample organization data
  const organizations = [
    {
      id: 1,
      name: 'Acme Corporation',
      domain: 'acme.com',
      plan: 'Enterprise',
      users: 45,
      status: 'Active',
      createdAt: '2023-01-15',
      logo: 'https://logo.clearbit.com/acme.com',
    },
    {
      id: 2,
      name: 'TechStart Inc.',
      domain: 'techstart.io',
      plan: 'Pro',
      users: 12,
      status: 'Active',
      createdAt: '2023-03-22',
      logo: 'https://logo.clearbit.com/techstart.io',
    },
    {
      id: 3,
      name: 'Global Solutions',
      domain: 'globalsolutions.com',
      plan: 'Enterprise',
      users: 128,
      status: 'Active',
      createdAt: '2023-02-08',
      logo: 'https://logo.clearbit.com/globalsolutions.com',
    },
    {
      id: 4,
      name: 'StartupXYZ',
      domain: 'startupxyz.co',
      plan: 'Basic',
      users: 3,
      status: 'Trial',
      createdAt: '2024-01-10',
      logo: 'https://logo.clearbit.com/startupxyz.co',
    },
    {
      id: 5,
      name: 'Innovation Labs',
      domain: 'innovationlabs.net',
      plan: 'Pro',
      users: 28,
      status: 'Active',
      createdAt: '2023-11-05',
      logo: 'https://logo.clearbit.com/innovationlabs.net',
    },
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="Organizations"
      userInfo={userInfo}
      navigationItems={navigationItems}
      breadcrumbs={breadcrumbs}
      showBreadcrumbs={true}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Organizations</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage organizations and their subscriptions</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              + Add Organization
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Export Data
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <span className="text-2xl">🏢</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Organizations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">4</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <span className="text-2xl">⏰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Trial</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">1</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">216</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search organizations by name or domain..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
            <div className="flex gap-3">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option>All Plans</option>
                <option>Basic</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option>All Status</option>
                <option>Active</option>
                <option>Trial</option>
                <option>Suspended</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Organizations Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {organizations.map((org) => (
                  <tr key={org.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img 
                            className="h-10 w-10 rounded-full object-cover" 
                            src={org.logo} 
                            alt={org.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              const colors = ['6366f1', '3b82f6', '10b981', 'f59e0b', 'ef4444', '8b5cf6'];
                              const color = colors[org.id % colors.length];
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=${color}&color=fff&size=40&bold=true`;
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{org.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{org.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        org.plan === 'Enterprise' 
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                          : org.plan === 'Pro'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                      }`}>
                        {org.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {org.users}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        org.status === 'Active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {org.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(org.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          Edit
                        </button>
                        <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                          View
                        </button>
                        <button className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300">
                          Billing
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
              <span className="font-medium">5</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutSaaS>
  );
};

export default SaasAdminOrganizationsPage;
