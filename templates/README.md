# SaaS Admin Dashboard Templates

This directory contains complete page templates for the SaaS Admin Dashboard that you can use in your new projects.

## 🚀 Quick Start

### Option 1: Use Page Templates (Recommended)

```bash
# Install the design system
npm install @tindeveloper/design-system

# Copy the page templates to your project
cp -r node_modules/@tindeveloper/design-system/templates/pages/* your-project/pages/
```

### Option 2: Import Complete Pages

```tsx
// pages/admin/index.tsx
import { SaasAdminPage } from '@tindeveloper/design-system/templates';

export default function AdminPage() {
  return <SaasAdminPage />;
}
```

## 📁 Available Templates

- **`saas-admin.tsx`** - Main dashboard page with metrics and overview
- **`saas-admin/users.tsx`** - User management page
- **`saas-admin/organizations.tsx`** - Organization management page  
- **`saas-admin/analytics.tsx`** - Analytics dashboard page

## 🎯 Complete Integration

### 1. Copy All Templates

```bash
# Copy all SaaS admin pages
cp -r node_modules/@tindeveloper/design-system/templates/pages/saas-admin your-project/pages/
cp node_modules/@tindeveloper/design-system/templates/pages/saas-admin.tsx your-project/pages/
```

### 2. Update Your Package.json

```json
{
  "dependencies": {
    "@tindeveloper/design-system": "^1.0.8",
    "@headlessui/react": "^1.7.17",
    "clsx": "^2.0.0"
  }
}
```

### 3. Configure Tailwind

```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tindeveloper/design-system/**/*.{js,ts,jsx,tsx}'
  ],
  // ... rest of config
}
```

### 4. Access Your Admin Dashboard

Once copied, you can access:
- **Main Dashboard**: `http://localhost:3000/saas-admin`
- **Users**: `http://localhost:3000/saas-admin/users`
- **Organizations**: `http://localhost:3000/saas-admin/organizations`
- **Analytics**: `http://localhost:3000/saas-admin/analytics`

## 🔧 Customization

### Custom Navigation

```tsx
import { saasAdminNavigation } from '@tindeveloper/design-system/templates';

// Use the provided navigation or customize it
const customNavigation = saasAdminNavigation.map(item => ({
  ...item,
  // Your customizations
}));
```

### Custom User Info

```tsx
// Override user information in any template
<SaasAdminPage 
  userInfo={{
    name: 'Your Name',
    email: 'your@email.com',
    avatar: 'https://example.com/avatar.jpg'
  }}
/>
```

## 📋 What You Get

✅ **Complete responsive dashboard** with metrics and charts  
✅ **User management** with search, filters, and actions  
✅ **Organization management** with data tables  
✅ **Analytics dashboard** with visualizations  
✅ **Mobile-responsive design** that works on all devices  
✅ **Dark mode support** built-in  
✅ **Professional styling** with Tailwind CSS  

## 🎨 Features Included

- **Responsive sidebar** with collapsible navigation
- **User profile dropdown** with avatar and settings
- **Breadcrumb navigation** for easy navigation
- **Data tables** with sorting and filtering
- **Metrics cards** with trend indicators
- **Activity feeds** showing recent actions
- **Search and filter** functionality
- **Mobile hamburger menu** for small screens

## 🚀 Next Steps

1. Copy the templates to your project
2. Customize the navigation and user info
3. Add your own business logic and data
4. Deploy and enjoy your professional admin dashboard!

---

**Need help?** Check the main documentation or create an issue on GitHub.
