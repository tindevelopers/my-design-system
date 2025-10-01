# Component Import Guide

This guide will help you import your existing Tailwind UI and TailAdmin components into this design system.

## 🚀 Quick Start

### Step 1: Clone the Repository

```bash
git clone https://github.com/tindevelopers/my-design-system.git
cd my-design-system
npm install
```

### Step 2: Update Source Paths

Edit `scripts/import-components.sh` and update these lines with your actual paths:

```bash
TAILWIND_UI_SOURCE="/Users/foo/projects/tailadmin/catalyst-ui-kit/typescript"
TAILADMIN_SOURCE="/Users/foo/projects/tailadmin/src/compon"
```

### Step 3: Make Scripts Executable

```bash
chmod +x scripts/import-components.sh
chmod +x scripts/organize-components.sh
```

### Step 4: Import Components

```bash
# Import all components from source directories
./scripts/import-components.sh
```

This will:
- Copy all `.ts` and `.tsx` files from your Tailwind UI source
- Copy all `.ts` and `.tsx` files from your TailAdmin source
- Create the necessary directory structure

### Step 5: Organize Components

```bash
# Organize components into subdirectories
./scripts/organize-components.sh
```

This will automatically organize components based on filename patterns into:

**Tailwind UI:**
- `Marketing/` - Hero, CTA, Testimonials, Pricing, Features, Newsletter
- `Application/` - Sidebar, Navigation, Dropdowns, Modals, Dialogs, Notifications
- `Ecommerce/` - Products, Cart, Checkout, Shop
- `Forms/` - Form controls, Inputs, Buttons, Selects

**TailAdmin:**
- `Dashboard/` - Dashboard widgets, Stats, Metrics, Cards
- `Tables/` - Tables, DataGrids, Lists
- `Charts/` - Charts and Graphs
- `Forms/` - Form components

### Step 6: Manual Organization

Review any components that weren't automatically organized:

```bash
# List remaining unorganized files
ls -1 components/tailwindui/*.{ts,tsx} 2>/dev/null
ls -1 components/tailadmin/*.{ts,tsx} 2>/dev/null
```

Move them manually to the appropriate subdirectory:

```bash
# Example
mv components/tailwindui/CustomComponent.tsx components/tailwindui/Marketing/
```

### Step 7: Validate and Sync

```bash
# Run the sync script to validate everything
npm run sync
```

### Step 8: Commit Changes

```bash
git add .
git commit -m "Import Tailwind UI and TailAdmin components"
git push origin main
```

---

## 📂 Recommended Directory Structure

After import and organization, your structure should look like:

```
components/
├── tailwindui/
│   ├── Marketing/
│   │   ├── hero-section.tsx
│   │   ├── cta-simple.tsx
│   │   ├── testimonials-grid.tsx
│   │   ├── pricing-tiers.tsx
│   │   └── features-list.tsx
│   ├── Application/
│   │   ├── sidebar-nav.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── modal-dialog.tsx
│   │   └── notification-panel.tsx
│   ├── Ecommerce/
│   │   ├── product-card.tsx
│   │   ├── shopping-cart.tsx
│   │   └── checkout-form.tsx
│   └── Forms/
│       ├── input-field.tsx
│       ├── button.tsx
│       └── select-dropdown.tsx
└── tailadmin/
    ├── Dashboard/
    │   ├── dashboard-card.tsx
    │   ├── stats-widget.tsx
    │   └── metrics-panel.tsx
    ├── Tables/
    │   ├── data-table.tsx
    │   └── table-pagination.tsx
    ├── Charts/
    │   ├── line-chart.tsx
    │   └── bar-chart.tsx
    └── Forms/
        ├── form-input.tsx
        └── form-select.tsx
```

---

## 🔧 Manual Import (Alternative Method)

If you prefer to do this manually or the script doesn't work:

### 1. Copy Files Manually

```bash
# Create directories
mkdir -p components/tailwindui/{Marketing,Application,Ecommerce,Forms}
mkdir -p components/tailadmin/{Dashboard,Tables,Charts,Forms}

# Copy Tailwind UI files
cp -r /Users/foo/projects/tailadmin/catalyst-ui-kit/typescript/*.tsx components/tailwindui/

# Copy TailAdmin files
cp -r /Users/foo/projects/tailadmin/src/compon/*.tsx components/tailadmin/
```

### 2. Organize Manually

Move each component to its appropriate subdirectory based on its purpose.

### 3. Update Imports

After moving files, update any import statements in the components to reflect their new locations.

---

## 📝 Post-Import Tasks

### 1. Fix Import Paths

Components may have import statements that need updating:

```typescript
// Old import (might break)
import { Button } from '../components/Button';

// New import (update to)
import { Button } from '../Forms/button';
```

### 2. Document Components

For each component, create documentation using the template:

```bash
# See docs/component-template.md for the full template
```

Add entries to:
- `docs/component-library.md`
- `docs/builder-registry.json`
- `src/builder-registry.ts`

### 3. Update Exports

Add components to `src/index.ts`:

```typescript
// Tailwind UI Marketing
export { HeroSection } from '../components/tailwindui/Marketing/hero-section';
export type { HeroSectionProps } from '../components/tailwindui/Marketing/hero-section';

// TailAdmin Dashboard
export { DashboardCard } from '../components/tailadmin/Dashboard/dashboard-card';
export type { DashboardCardProps } from '../components/tailadmin/Dashboard/dashboard-card';
```

### 4. Register with Builder.io

Update `src/builder-registry.ts` to register each component:

```typescript
import { Builder } from '@builder.io/react';
import { HeroSection } from '../components/tailwindui/Marketing/hero-section';

Builder.registerComponent(HeroSection, {
  name: 'TailwindUI Hero Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Welcome',
      required: true,
    },
    // ... more inputs
  ],
});
```

---

## 🐛 Troubleshooting

### Script Won't Run

```bash
# Make sure scripts are executable
chmod +x scripts/*.sh

# Try running with bash explicitly
bash scripts/import-components.sh
```

### Source Directories Not Found

Update the paths in `scripts/import-components.sh`:

```bash
# Edit the script
nano scripts/import-components.sh

# Or use your preferred editor
code scripts/import-components.sh
```

### Import Errors After Moving Files

Search and replace import paths:

```bash
# Example: Update all imports in a directory
find components/tailwindui/Marketing -name "*.tsx" -exec sed -i '' 's/from "..\/components\//from "..\//' {} \;
```

### TypeScript Errors

```bash
# Rebuild TypeScript
npm run build

# Check for errors
npx tsc --noEmit
```

---

## 📊 Component Inventory

After import, create an inventory of what you have:

```bash
# Count components by directory
echo "Tailwind UI Marketing: $(find components/tailwindui/Marketing -name "*.tsx" | wc -l)"
echo "Tailwind UI Application: $(find components/tailwindui/Application -name "*.tsx" | wc -l)"
echo "Tailwind UI Ecommerce: $(find components/tailwindui/Ecommerce -name "*.tsx" | wc -l)"
echo "TailAdmin Dashboard: $(find components/tailadmin/Dashboard -name "*.tsx" | wc -l)"
echo "TailAdmin Tables: $(find components/tailadmin/Tables -name "*.tsx" | wc -l)"
```

---

## 🎯 Next Steps

1. **Review Components**: Check that all components are properly organized
2. **Fix Dependencies**: Ensure all imports and dependencies are correct
3. **Document**: Add documentation for key components
4. **Test**: Build the project and test components
5. **Register**: Register components with Builder.io
6. **Commit**: Commit and push your changes

---

## 💡 Tips

- **Start Small**: Import and organize a few components at a time
- **Test Often**: Run `npm run build` frequently to catch errors early
- **Document as You Go**: Add documentation while components are fresh in your mind
- **Use Version Control**: Commit frequently with meaningful messages
- **Ask for Help**: Check `.cursorrules` for guidance on component structure

---

## 🆘 Need Help?

- Check the [README.md](README.md) for general project information
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- See [docs/component-template.md](docs/component-template.md) for documentation templates
- Read [.cursorrules](.cursorrules) for coding standards
