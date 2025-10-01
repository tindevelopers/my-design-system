# AI Tools Guide for My Design System

This guide provides specific instructions for AI assistants working with this design system codebase.

## 🎯 Quick Start for AI Tools

### Essential Commands
```bash
# Check if dev server is running
curl -s http://localhost:3000 | head -5

# Restart dev server if needed
cd demo && pkill -f "next dev" && sleep 2 && npm run dev

# Build and sync components
npm run build && npm run sync

# Check component exports
npm run type-check
```

### Project Status Check
```bash
# Verify all key files exist
ls -la components/custom/ src/ docs/ demo/pages/
```

## 📁 File Structure for AI Tools

### Critical Files to Monitor
```
my-design-system/
├── components/custom/           # 🎯 Main component directory
│   ├── admin-layout-saas.tsx   # SaaS admin layout
│   ├── saas-dashboard.tsx      # Dashboard content
│   ├── user-profile.tsx        # User profile component
│   └── index.ts               # Component exports
├── src/
│   ├── index.ts               # 🎯 Main export file
│   ├── builder-registry.ts    # Builder.io registrations
│   └── catalyst-ui-kit/       # Catalyst UI components
├── demo/pages/                # 🎯 Demo pages
│   ├── saas-admin/
│   │   ├── users.tsx
│   │   ├── organizations.tsx
│   │   └── analytics.tsx
│   └── account-settings.tsx
└── docs/
    ├── component-library.md    # 🎯 Documentation
    └── builder-registry.json  # Machine registry
```

## 🔧 AI Tool Workflows

### 1. Adding New Components

**Step 1: Create Component**
```typescript
// components/custom/new-component.tsx
import React from 'react';

export interface NewComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export const NewComponent: React.FC<NewComponentProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>
      )}
      {onClick && (
        <button
          onClick={onClick}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Action
        </button>
      )}
    </div>
  );
};
```

**Step 2: Export Component**
```typescript
// components/custom/index.ts
export { NewComponent, type NewComponentProps } from './new-component';
```

**Step 3: Register with Builder.io**
```typescript
// src/builder-registry.ts
import { NewComponent } from '../components/custom/new-component';

Builder.registerComponent(NewComponent, {
  name: 'New Component',
  image: 'https://via.placeholder.com/150x100?text=New+Component',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Component Title', required: true },
    { name: 'description', type: 'string', defaultValue: 'Component description' },
    { name: 'onClick', type: 'javascript', defaultValue: '() => console.log("Clicked")' },
  ],
});
```

**Step 4: Sync Documentation**
```bash
npm run sync
```

### 2. Creating New Pages

**Template for New Pages**
```typescript
// demo/pages/new-page.tsx
import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

const NewPage: React.FC = () => {
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
      id: 'new-page',
      label: 'New Page',
      href: '/new-page',
      icon: '🆕',
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
    { label: 'New Page' },
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="New Page"
      userInfo={userInfo}
      navigationItems={navigationItems}
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            New Page Content
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Add your page content here.
          </p>
        </div>
      </div>
    </AdminLayoutSaaS>
  );
};

export default NewPage;
```

### 3. Fixing Common Issues

**Import/Export Errors**
```bash
# Check component exports
npm run type-check

# Rebuild if needed
npm run build
```

**Dev Server Issues**
```bash
# Kill existing processes
pkill -f "next dev"

# Restart clean
cd demo && npm run dev
```

**Builder.io Registration Issues**
```bash
# Re-sync all components
npm run sync
```

## 🎨 Design Patterns for AI Tools

### 1. Consistent Styling
Always use these Tailwind classes for consistency:
```typescript
// Card containers
className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6"

// Headings
className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4"

// Body text
className="text-gray-600 dark:text-gray-400"

// Buttons
className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"

// Input fields
className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
```

### 2. User Info Object
Always use this structure for user information:
```typescript
const userInfo = {
  name: 'Musharof Chowdhury',
  email: 'musharof@company.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  role: 'Team Manager',
};
```

### 3. Navigation Items
Standard navigation structure:
```typescript
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
  // Add more items as needed
];
```

### 4. Breadcrumbs
Standard breadcrumb structure:
```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'SaaS Admin', href: '/saas-admin' },
  { label: 'Current Page' }, // No href for current page
];
```

## 🔍 Testing Commands for AI Tools

### Verify Page Loading
```bash
# Test specific pages
curl -s http://localhost:3000/saas-admin/users | head -5
curl -s http://localhost:3000/saas-admin/organizations | head -5
curl -s http://localhost:3000/saas-admin/analytics | head -5
curl -s http://localhost:3000/account-settings | head -5
```

### Check Component Exports
```bash
# Verify TypeScript compilation
npm run type-check

# Check build output
npm run build
```

### Validate Documentation
```bash
# Sync and check docs
npm run sync

# Verify registry file
cat docs/builder-registry.json | jq '.components | length'
```

## 🚨 Common Error Patterns

### 1. Hydration Errors
**Cause**: Inconsistent date formatting between server and client
**Fix**: Use explicit locale and options
```typescript
// ❌ Problematic
new Date().toLocaleDateString()

// ✅ Fixed
new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'short', 
  day: 'numeric' 
})
```

### 2. Import Errors
**Cause**: Missing exports or circular dependencies
**Fix**: Check component exports and imports
```typescript
// ✅ Correct import
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

// ❌ Incorrect
import AdminLayoutSaaS from '@tindeveloper/design-system';
```

### 3. Missing Dependencies
**Cause**: Components using libraries not in dependencies
**Fix**: Add missing dependencies
```bash
cd demo && npm install @headlessui/react clsx
```

## 📊 Component Status Dashboard

### Current Components
- ✅ **AdminLayoutSaaS**: SaaS admin layout with user profile
- ✅ **SaasDashboard**: Dashboard with metrics and tables
- ✅ **UserProfile**: User profile management
- ✅ **Organizations**: Organization management page
- ✅ **Users**: User management page
- ✅ **Analytics**: Analytics dashboard page
- ✅ **Account Settings**: Settings page with tabs

### Navigation Structure
```
/saas-admin (Dashboard)
├── /saas-admin/users (User Management)
├── /saas-admin/organizations (Organization Management)
├── /saas-admin/analytics (Analytics Dashboard)
├── /account-settings (Account Settings)
└── /user-profile (User Profile)
```

## 🔄 Update Procedures

### After Adding Components
1. Update `components/custom/index.ts`
2. Update `src/index.ts`
3. Update `src/builder-registry.ts`
4. Run `npm run sync`
5. Test in demo app

### After Adding Pages
1. Create page in `demo/pages/`
2. Update navigation items in all pages
3. Test page loading
4. Verify routing works

### After Making Changes
1. Run `npm run type-check`
2. Run `npm run build`
3. Test demo app
4. Update documentation if needed

## 🎯 AI Tool Best Practices

### 1. Always Test Changes
```bash
# Quick test
curl -s http://localhost:3000/[page-url] | head -5

# Full test
npm run dev # In demo folder
```

### 2. Maintain Consistency
- Use same styling patterns
- Keep navigation structure consistent
- Use same user info object
- Follow TypeScript interfaces

### 3. Update Documentation
- Always run `npm run sync` after changes
- Update README if adding new features
- Keep component props documented

### 4. Handle Errors Gracefully
- Check for existing processes before starting dev server
- Verify file paths before making changes
- Test imports and exports after modifications

## 📝 Quick Reference

### File Locations
- **Components**: `components/custom/`
- **Pages**: `demo/pages/`
- **Exports**: `src/index.ts`
- **Builder.io**: `src/builder-registry.ts`
- **Docs**: `docs/component-library.md`

### Key Commands
```bash
npm run sync          # Sync component registry
npm run build         # Build TypeScript
npm run type-check    # Check types
npm run dev           # Start demo (in demo folder)
```

### Standard Imports
```typescript
import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';
```

This guide ensures AI tools can effectively work with the design system while maintaining consistency and quality.
