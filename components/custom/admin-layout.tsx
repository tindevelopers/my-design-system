import React, { useState } from 'react';

export interface AdminLayoutProps {
  /** Page title shown in the header */
  pageTitle: string;
  /** User information for the header */
  userInfo?: {
    name: string;
    email?: string;
    avatar?: string;
  };
  /** Navigation items for the sidebar */
  navigationItems: Array<{
    id: string;
    label: string;
    href?: string;
    icon?: string;
    badge?: string | number;
    children?: Array<{
      id: string;
      label: string;
      href: string;
    }>;
  }>;
  /** Main content area */
  children: React.ReactNode;
  /** Show breadcrumbs */
  showBreadcrumbs?: boolean;
  /** Breadcrumb items */
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  /** Custom header actions */
  headerActions?: React.ReactNode;
  /** Sidebar collapsed state */
  defaultCollapsed?: boolean;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  pageTitle,
  userInfo,
  navigationItems,
  children,
  showBreadcrumbs = true,
  breadcrumbs = [],
  headerActions,
  defaultCollapsed = false,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultCollapsed);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0'
      }`}>
        <AdminSidebar 
          items={navigationItems}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main content area */}
      <div className="transition-all duration-300 ease-in-out">
        {/* Header */}
        <AdminHeader
          pageTitle={pageTitle}
          userInfo={userInfo}
          showBreadcrumbs={showBreadcrumbs}
          breadcrumbs={breadcrumbs}
          headerActions={headerActions}
          onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {!sidebarCollapsed && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
  );
};

// Admin Header Component
interface AdminHeaderProps {
  pageTitle: string;
  userInfo?: AdminLayoutProps['userInfo'];
  showBreadcrumbs: boolean;
  breadcrumbs: AdminLayoutProps['breadcrumbs'];
  headerActions?: React.ReactNode;
  onMenuToggle: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  pageTitle,
  userInfo,
  showBreadcrumbs,
  breadcrumbs,
  headerActions,
  onMenuToggle,
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Menu button and breadcrumbs */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div>
              <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
              {showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index} className="flex items-center">
                        {index > 0 && (
                          <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {crumb.href ? (
                          <a href={crumb.href} className="hover:text-gray-700">
                            {crumb.label}
                          </a>
                        ) : (
                          <span>{crumb.label}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </div>

          {/* Right side - Actions and user info */}
          <div className="flex items-center space-x-4">
            {headerActions && (
              <div className="flex items-center space-x-2">
                {headerActions}
              </div>
            )}

            {userInfo && (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{userInfo.name}</p>
                  {userInfo.email && (
                    <p className="text-xs text-gray-500">{userInfo.email}</p>
                  )}
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  {userInfo.avatar ? (
                    <img src={userInfo.avatar} alt={userInfo.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <span className="text-sm font-medium text-gray-700">
                      {userInfo.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Admin Sidebar Component
interface AdminSidebarProps {
  items: AdminLayoutProps['navigationItems'];
  collapsed: boolean;
  onToggle: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ items, collapsed, onToggle }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-gray-900">Admin</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id}>
            <a
              href={item.href || '#'}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                collapsed ? 'justify-center' : 'justify-between'
              } ${
                item.href ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-900 bg-gray-100'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <span className="text-lg">{item.icon}</span>
                )}
                {!collapsed && <span>{item.label}</span>}
              </div>
              {!collapsed && item.badge && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {item.badge}
                </span>
              )}
            </a>
            
            {/* Sub-navigation */}
            {!collapsed && item.children && item.children.length > 0 && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={child.href}
                    className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar toggle button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg 
            className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          {!collapsed && <span className="ml-2">Collapse</span>}
        </button>
      </div>
    </div>
  );
};
