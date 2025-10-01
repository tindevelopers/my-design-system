import React from 'react';
import { AdminLayout } from '../components/admin-layout';

const SimpleAdminDemo: React.FC = () => {
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

  return (
    <AdminLayout
      pageTitle="Admin Dashboard"
      userInfo={userInfo}
      navigationItems={navigationItems}
      showBreadcrumbs={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Admin Panel</h2>
          <p className="text-gray-600">
            This is your custom AdminLayout component from the design system.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Component Information</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Component:</strong> AdminLayout</p>
            <p><strong>Location:</strong> components/custom/admin-layout.tsx</p>
            <p><strong>Features:</strong></p>
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

export default SimpleAdminDemo;
