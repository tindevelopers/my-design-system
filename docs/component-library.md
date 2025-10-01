# Component Library Documentation

This document serves as the master reference for all components in the design system.

## Table of Contents

- [Tailwind UI Components](#tailwind-ui-components)
- [TailAdmin Components](#tailadmin-components)
- [Custom Components](#custom-components)
- [Component Template](#component-template)

---

## Tailwind UI Components

Components sourced from Tailwind UI, organized by category.

### Example: Button Component (TEMPLATE)

**Display Name:** Primary Button  
**Source:** Tailwind UI  
**File Path:** `components/tailwindui/button.tsx`  
**Category:** Forms

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `label` | `string` | - | Yes | Button text to display |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | No | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Button size |
| `onClick` | `() => void` | - | No | Click event handler |
| `disabled` | `boolean` | `false` | No | Whether button is disabled |

#### Usage Example

```tsx
import { Button } from './components/tailwindui/button';

function App() {
  return (
    <Button 
      label="Click Me" 
      variant="primary"
      size="md"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

#### Builder.io Registration

```typescript
import { Builder } from '@builder.io/react';
import { Button } from './components/tailwindui/button';

Builder.registerComponent(Button, {
  name: 'TailwindUI Button',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Click Me',
      required: true,
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['primary', 'secondary', 'outline'],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});
```

---

## TailAdmin Components

Components sourced from TailAdmin dashboard template.

### Coming Soon

Add TailAdmin components following the same template structure as above.

---

## Custom Components

Custom-built components specific to this project.

### Coming Soon

Add custom components following the same template structure as above.

---

## Component Template

Use this template when documenting new components:

### Component Name

**Display Name:** [Friendly name for Builder.io]  
**Source:** [Tailwind UI / TailAdmin / Custom]  
**File Path:** `components/[source]/[filename].tsx`  
**Category:** [Forms / Navigation / Layout / Data Display / etc.]

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `propName` | `type` | `default` | Yes/No | Description |

#### Usage Example

```tsx
// Code example
```

#### Builder.io Registration

```typescript
// Registration code
```

---

## Guidelines

### Adding New Components

1. Create the component file in the appropriate folder
2. Follow the TypeScript interface pattern for props
3. Use Tailwind CSS utility classes for styling
4. Document the component using this template
5. Update `docs/builder-registry.json`
6. Add registration code to `src/builder-registry.ts`
7. Run `npm run sync` to update all references

### Component Best Practices

- **Accessibility**: Include proper ARIA labels and keyboard navigation
- **Responsive**: Ensure components work on all screen sizes
- **Dark Mode**: Support dark mode where applicable
- **Performance**: Optimize for React rendering performance
- **Type Safety**: Use strict TypeScript typing
- **Documentation**: Provide clear examples and prop descriptions

---

## Need Help?

See `.cursorrules` for AI assistant instructions and coding standards.
