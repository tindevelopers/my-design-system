import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

const AnalyticsPage: React.FC = () => {
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
      id: 'settings',
      label: 'Settings',
      href: '/account-settings',
      icon: '⚙️',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'SaaS Admin', href: '/saas-admin' },
    { label: 'Analytics' },
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="Analytics Dashboard"
      userInfo={userInfo}
      navigationItems={navigationItems}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor your SaaS performance and key metrics</p>
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">12,345</p>
                <p className="text-sm text-green-600 dark:text-green-400">+1.2% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$56,789</p>
                <p className="text-sm text-green-600 dark:text-green-400">+3.5% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <span className="text-2xl">📉</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Churn Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">2.1%</p>
                <p className="text-sm text-red-600 dark:text-red-400">-0.5% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">4m 32s</p>
                <p className="text-sm text-green-600 dark:text-green-400">+12% from last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">User Growth</h3>
            <div className="h-64 bg-gray-50 dark:bg-gray-700 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-gray-600 dark:text-gray-300">User Growth Chart</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Integrate with Chart.js or similar</p>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Revenue Trends</h3>
            <div className="h-64 bg-gray-50 dark:bg-gray-700 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">💹</div>
                <p className="text-gray-600 dark:text-gray-300">Revenue Chart</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly recurring revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-gray-100">New user registered</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com • 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">$</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-gray-100">Payment received</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$99.00 from Acme Corp • 15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 text-sm">⚠</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-gray-100">Trial expiring soon</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">StartupXYZ trial ends in 2 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Plans</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Pro Plan</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">35%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Basic</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">20%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gray-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutSaaS>
  );
};

export default AnalyticsPage;
