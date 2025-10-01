import React from 'react';
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
export declare const AdminLayout: React.FC<AdminLayoutProps>;
//# sourceMappingURL=admin-layout.d.ts.map