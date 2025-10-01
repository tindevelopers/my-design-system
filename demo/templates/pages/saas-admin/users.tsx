import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

const SaasAdminUsersPage: React.FC = () => {
  const userInfo = {
    name: 'Musharof Chowdhury',
    email: 'musharof@company.com',
    avatar: 'https://ui-avatars.com/api/?name=Musharof+Chowdhury&background=6366f1&color=fff&size=150',
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
    { label: 'Users' },
  ];

  // Sample user data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=40',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '1 day ago',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=10b981&color=fff&size=40',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Moderator',
      status: 'Inactive',
      lastLogin: '1 week ago',
      avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=8b5cf6&color=fff&size=40',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '3 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=Alice+Brown&background=f59e0b&color=fff&size=40',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie@example.com',
      role: 'User',
      status: 'Pending',
      lastLogin: 'Never',
      avatar: 'https://ui-avatars.com/api/?name=Charlie+Wilson&background=ef4444&color=fff&size=40',
    },
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="User Management"
      userInfo={userInfo}
      navigationItems={navigationItems}
      breadcrumbs={breadcrumbs}
      showBreadcrumbs={true}
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">Users</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Manage your users and their permissions</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap">
              + Add User
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap">
              Export Users
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base flex-1 sm:flex-none">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Moderator</option>
                <option>User</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base flex-1 sm:flex-none">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                    Role
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Last Login
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                          <img 
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover" 
                            src={user.avatar} 
                            alt={user.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff&size=40`;
                            }}
                          />
                        </div>
                        <div className="ml-3 sm:ml-4 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{user.name}</div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</div>
                          {/* Show role on mobile */}
                          <div className="sm:hidden mt-1">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              {user.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : user.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                      {user.lastLogin}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 text-left">
                          Edit
                        </button>
                        <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 text-left">
                          View
                        </button>
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 text-left">
                          Delete
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

export default SaasAdminUsersPage;
