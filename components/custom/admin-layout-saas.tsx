import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

export interface AdminLayoutSaaSProps {
  pageTitle: string;
  userInfo: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
  navigationItems: {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    badge?: string;
    subItems?: { id: string; label: string; href: string }[];
  }[];
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
  headerActions?: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const AdminLayoutSaaS: React.FC<AdminLayoutSaaSProps> = ({
  pageTitle,
  userInfo,
  navigationItems,
  children,
  showBreadcrumbs = true,
  breadcrumbs,
  headerActions,
  defaultCollapsed = false,
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(defaultCollapsed);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode); // Toggle dark mode

  return (
    <div className={clsx("flex h-screen", { 'dark': isDarkMode })}>
      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? 'w-20' : 'w-64',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          "md:translate-x-0 md:static"
        )}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
          <span className="text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100">
            {isSidebarCollapsed ? 'AD' : 'Admin Panel'}
          </span>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id} className="mb-2">
                <a
                  href={item.href}
                  className={clsx(
                    "flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300",
                    isSidebarCollapsed ? 'justify-center' : ''
                  )}
                >
                  {item.icon && <span className={clsx("text-xl", { 'mr-3': !isSidebarCollapsed })}>{item.icon}</span>}
                  {!isSidebarCollapsed && (
                    <span className="flex-1 whitespace-nowrap">{item.label}</span>
                  )}
                  {item.badge && !isSidebarCollapsed && (
                    <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium leading-none text-blue-100 bg-blue-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        {/* Header */}
        <header className="flex items-center justify-between h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 shadow-sm">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:block"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold ml-4 text-gray-900 dark:text-gray-100">{pageTitle}</h1>
          </div>
          <div className="flex items-center space-x-4">
            {headerActions}
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.325 6.675l-.707-.707M6.707 6.707l-.707-.707m10.61 0l-.707.707M6.707 17.293l-.707.707M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.75 12.75a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0zM12.375 12a.375.375 0 100-.75.375.375 0 000 .75z" />
                </svg>
              )}
            </button>
            {/* Notifications */}
            <button className="text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
            </button>

            {/* User Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img 
                    className="h-8 w-8 rounded-full object-cover" 
                    src={userInfo.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userInfo.name)}&background=6366f1&color=fff&size=32`} 
                    alt={userInfo.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userInfo.name)}&background=6366f1&color=fff&size=32`;
                    }}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 hidden lg:block">{userInfo.name}</span>
                  <svg className="ml-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{userInfo.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{userInfo.email}</p>
                    {userInfo.role && <p className="text-xs text-gray-500 dark:text-gray-400">{userInfo.role}</p>}
                  </div>
                  <div className="my-1 h-px bg-gray-200 dark:bg-gray-600" />
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/user-profile"
                        className={clsx(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        Edit profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/account-settings"
                        className={clsx(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/support"
                        className={clsx(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/sign-out"
                        className={clsx(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </header>

        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="bg-white dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {crumb.label}
                    </a>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <svg className="w-3 h-3 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};