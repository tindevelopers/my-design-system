import React from 'react';
import { AdminLayout } from '../components/admin-layout';

const AdminDemo: React.FC = () => {
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin',
      icon: '🏠',
    },
    {
      id: 'users',
      label: 'Users',
      href: '/admin/users',
      icon: '👥',
      badge: '12',
      children: [
        { id: 'all-users', label: 'All Users', href: '/admin/users' },
        { id: 'add-user', label: 'Add User', href: '/admin/users/add' },
        { id: 'roles', label: 'Roles & Permissions', href: '/admin/users/roles' },
      ],
    },
    {
      id: 'products',
      label: 'Products',
      href: '/admin/products',
      icon: '📦',
      children: [
        { id: 'all-products', label: 'All Products', href: '/admin/products' },
        { id: 'add-product', label: 'Add Product', href: '/admin/products/add' },
        { id: 'categories', label: 'Categories', href: '/admin/products/categories' },
      ],
    },
    {
      id: 'orders',
      label: 'Orders',
      href: '/admin/orders',
      icon: '📋',
      badge: '3',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      href: '/admin/analytics',
      icon: '📊',
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/admin/settings',
      icon: '⚙️',
    },
  ];

  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Dashboard' },
  ];

  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@company.com',
  };

  const headerActions = (
    <>
      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
        Export
      </button>
      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add New
      </button>
    </>
  );

  return (
    <AdminLayout
      pageTitle="Admin Dashboard"
      userInfo={userInfo}
      navigationItems={navigationItems}
      showBreadcrumbs={true}
      breadcrumbs={breadcrumbs}
      headerActions={headerActions}
    >
      {/* Main content area */}
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your Admin Panel</h2>
          <p className="text-blue-100">
            This is your custom AdminLayout component from the design system. 
            It provides consistent navigation, header, and styling across all admin pages.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">1,180</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">54</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Blocked</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { action: 'New user registered', user: 'John Smith', time: '2 minutes ago', type: 'success' },
                { action: 'Product updated', user: 'Jane Doe', time: '15 minutes ago', type: 'info' },
                { action: 'Order completed', user: 'Bob Johnson', time: '1 hour ago', type: 'success' },
                { action: 'Payment failed', user: 'Alice Brown', time: '2 hours ago', type: 'error' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design System Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">About This Admin Panel</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Component:</strong> AdminLayout from your design system
            </p>
            <p>
              <strong>Location:</strong> components/custom/admin-layout.tsx
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Responsive sidebar with collapsible functionality</li>
              <li>Professional header with breadcrumbs and user info</li>
              <li>Flexible navigation with icons and badges</li>
              <li>Mobile-friendly with overlay and toggle</li>
              <li>Fully customizable through props</li>
              <li>Builder.io integration ready</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDemo;
