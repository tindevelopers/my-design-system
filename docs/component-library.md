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

Components sourced from TailAdmin dashboard template, organized by category.

### Button Component

**Display Name:** TailAdmin Button  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Button.tsx`  
**Category:** Forms

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `ReactNode` | - | Yes | Button text or content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | No | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Button size |
| `startIcon` | `ReactNode` | - | No | Icon before the text |
| `endIcon` | `ReactNode` | - | No | Icon after the text |
| `onClick` | `() => void` | - | No | Click event handler |
| `disabled` | `boolean` | `false` | No | Whether button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | No | Button type |

#### Usage Example

```tsx
import { Button } from './components/tailadmin';

function App() {
  return (
    <Button 
      variant="primary"
      size="md"
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </Button>
  );
}
```

### Badge Component

**Display Name:** TailAdmin Badge  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Badge.tsx`  
**Category:** Data Display

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `ReactNode` | - | Yes | Badge content |
| `variant` | `'light' \| 'solid' \| 'outline'` | `'light'` | No | Visual style variant |
| `color` | `'primary' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'gray'` | `'primary'` | No | Color theme |
| `size` | `'xs' \| 'sm' \| 'md'` | `'md'` | No | Badge size |
| `startIcon` | `ReactNode` | - | No | Icon at the start |
| `endIcon` | `ReactNode` | - | No | Icon at the end |

#### Usage Example

```tsx
import { Badge } from './components/tailadmin';

function App() {
  return (
    <Badge variant="solid" color="success" size="md">
      Active
    </Badge>
  );
}
```

### Input Component

**Display Name:** TailAdmin Input  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Input.tsx`  
**Category:** Forms

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `type` | `string` | `'text'` | No | Input type |
| `label` | `string` | - | No | Input label |
| `placeholder` | `string` | - | No | Placeholder text |
| `value` | `string \| number` | - | No | Current value |
| `onChange` | `(e: ChangeEvent) => void` | - | No | Change handler |
| `disabled` | `boolean` | `false` | No | Whether input is disabled |
| `error` | `boolean` | `false` | No | Error state |
| `hint` | `string` | - | No | Hint text |
| `required` | `boolean` | `false` | No | Required field |

#### Usage Example

```tsx
import { Input } from './components/tailadmin';

function App() {
  return (
    <Input 
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      required
    />
  );
}
```

### Card Component

**Display Name:** TailAdmin Card  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Card.tsx`  
**Category:** Layout

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `ReactNode` | - | No | Card content |
| `hover` | `boolean` | `false` | No | Hover effect |
| `onClick` | `() => void` | - | No | Click handler |

#### Usage Example

```tsx
import { Card, CardHeader, CardTitle, CardContent } from './components/tailadmin';

function App() {
  return (
    <Card hover>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Card content goes here
      </CardContent>
    </Card>
  );
}
```

### Avatar Component

**Display Name:** TailAdmin Avatar  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Avatar.tsx`  
**Category:** Data Display

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `src` | `string` | - | No | Image URL |
| `alt` | `string` | `'User Avatar'` | No | Alt text |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | No | Avatar size |
| `status` | `'online' \| 'offline' \| 'busy' \| 'away' \| 'none'` | `'none'` | No | Status indicator |
| `fallback` | `string` | - | No | Fallback text |

#### Usage Example

```tsx
import { Avatar } from './components/tailadmin';

function App() {
  return (
    <Avatar 
      src="/path/to/image.jpg"
      size="lg"
      status="online"
      fallback="JD"
    />
  );
}
```

### Alert Component

**Display Name:** TailAdmin Alert  
**Source:** TailAdmin  
**File Path:** `components/tailadmin/Alert.tsx`  
**Category:** Feedback

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | - | Yes | Alert type |
| `title` | `string` | - | No | Alert title |
| `message` | `string` | - | Yes | Alert message |
| `closable` | `boolean` | `false` | No | Show close button |
| `onClose` | `() => void` | - | No | Close handler |
| `showLink` | `boolean` | `false` | No | Show action link |
| `linkText` | `string` | `'Learn more'` | No | Link text |

#### Usage Example

```tsx
import { Alert } from './components/tailadmin';

function App() {
  return (
    <Alert 
      variant="success"
      title="Success!"
      message="Your changes have been saved."
      closable
    />
  );
}
```

---

## Catalyst UI Components

Catalyst UI is a premium component library built by the Tailwind CSS team, featuring modern, accessible components with advanced styling and interaction patterns.

### Catalyst Button

**Display Name:** Catalyst Button  
**Source:** Catalyst UI Kit  
**File Path:** `src/catalyst-ui-kit/typescript/button.tsx`  
**Category:** Form Controls  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `color` | `string` | `'dark/zinc'` | Button color variant |
| `outline` | `boolean` | `false` | Use outline style |
| `plain` | `boolean` | `false` | Use plain style |
| `disabled` | `boolean` | `false` | Disabled state |
| `href` | `string` | - | Link URL (makes button a link) |

**Usage Example:**
```tsx
import { Button } from './src/catalyst-ui-kit';

// Primary button
<Button color="indigo">Save Changes</Button>

// Outline button
<Button outline>Cancel</Button>

// Link button
<Button href="/dashboard">Go to Dashboard</Button>
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(CatalystButton, {
  name: 'Catalyst Button',
  inputs: [
    { name: 'children', type: 'string', required: true },
    { name: 'color', type: 'string', enum: ['dark/zinc', 'light', 'indigo', ...] },
    { name: 'outline', type: 'boolean' },
    { name: 'plain', type: 'boolean' },
    { name: 'disabled', type: 'boolean' },
  ],
});
```

---

### Catalyst Input

**Display Name:** Catalyst Input  
**Source:** Catalyst UI Kit  
**File Path:** `src/catalyst-ui-kit/typescript/input.tsx`  
**Category:** Form Controls  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |
| `className` | `string` | - | Additional CSS classes |

**Usage Example:**
```tsx
import { Input, InputGroup } from './src/catalyst-ui-kit';

// Basic input
<Input placeholder="Enter your email" type="email" />

// Input with icon
<InputGroup>
  <Input placeholder="Search..." type="search" />
</InputGroup>
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(CatalystInput, {
  name: 'Catalyst Input',
  inputs: [
    { name: 'type', type: 'string', enum: ['text', 'email', 'password', ...] },
    { name: 'placeholder', type: 'string' },
    { name: 'disabled', type: 'boolean' },
    { name: 'required', type: 'boolean' },
  ],
});
```

---

### Catalyst Avatar

**Display Name:** Catalyst Avatar  
**Source:** Catalyst UI Kit  
**File Path:** `src/catalyst-ui-kit/typescript/avatar.tsx`  
**Category:** Data Display  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | `''` | Alt text |
| `initials` | `string` | - | Fallback initials |
| `square` | `boolean` | `false` | Square shape instead of circle |
| `className` | `string` | - | Additional CSS classes |

**Usage Example:**
```tsx
import { Avatar, AvatarButton } from './src/catalyst-ui-kit';

// Image avatar
<Avatar src="/user.jpg" alt="John Doe" />

// Initials avatar
<Avatar initials="JD" alt="John Doe" />

// Clickable avatar
<AvatarButton src="/user.jpg" onClick={handleClick} />
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(CatalystAvatar, {
  name: 'Catalyst Avatar',
  inputs: [
    { name: 'src', type: 'file' },
    { name: 'alt', type: 'string' },
    { name: 'initials', type: 'string' },
    { name: 'square', type: 'boolean' },
  ],
});
```

---

### Catalyst Fieldset

**Display Name:** Catalyst Fieldset  
**Source:** Catalyst UI Kit  
**File Path:** `src/catalyst-ui-kit/typescript/fieldset.tsx`  
**Category:** Form Layout  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Form fields |
| `className` | `string` | - | Additional CSS classes |

**Available Sub-components:**
- `Field` - Individual form field wrapper
- `Label` - Field label
- `Description` - Field description
- `ErrorMessage` - Field error message
- `FieldGroup` - Group of fields

**Usage Example:**
```tsx
import { 
  Fieldset, 
  Field, 
  Label, 
  Input, 
  Description 
} from './src/catalyst-ui-kit';

<Fieldset>
  <Field>
    <Label>Email Address</Label>
    <Input type="email" name="email" />
    <Description>We'll never share your email.</Description>
  </Field>
</Fieldset>
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(Fieldset, {
  name: 'Catalyst Fieldset',
  inputs: [
    { name: 'children', type: 'richText' },
  ],
});
```

---

## Custom Components

Custom-built components specific to this project.

### Admin Layout

**Display Name:** Admin Layout  
**Source:** Custom  
**File Path:** `components/custom/admin-layout.tsx`  
**Category:** Layout  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pageTitle` | `string` | - | Page title shown in the header (required) |
| `userInfo` | `object` | - | User information for the header |
| `navigationItems` | `array` | - | Navigation items for the sidebar |
| `children` | `React.ReactNode` | - | Main content area |
| `showBreadcrumbs` | `boolean` | `true` | Show breadcrumbs |
| `breadcrumbs` | `array` | `[]` | Breadcrumb items |
| `headerActions` | `React.ReactNode` | - | Custom header actions |
| `defaultCollapsed` | `boolean` | `false` | Sidebar collapsed state |

**Usage Example:**
```tsx
import { AdminLayout } from './components/custom';

<AdminLayout
  pageTitle="User Management"
  userInfo={{
    name: 'John Doe',
    email: 'john@company.com'
  }}
  navigationItems={[
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: '🏠'
    },
    {
      id: 'users',
      label: 'Users',
      href: '/admin/users',
      icon: '👥',
      badge: '12'
    }
  ]}
  breadcrumbs={[
    { label: 'Admin', href: '/admin' },
    { label: 'Dashboard' }
  ]}
>
  <div>Admin content goes here...</div>
</AdminLayout>
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(AdminLayout, {
  name: 'Admin Layout',
  inputs: [
    { name: 'pageTitle', type: 'string', required: true },
    { name: 'userInfo', type: 'object', subFields: [...] },
    { name: 'navigationItems', type: 'list', subFields: [...] },
    { name: 'children', type: 'richText' },
    // ... other inputs
  ],
});
```

---

### Hero

**Display Name:** Custom Hero  
**Source:** Custom  
**File Path:** `components/custom/example-hero.tsx`  
**Category:** Layout  

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Main heading text (required) |
| `subtitle` | `string` | - | Subheading text |
| `ctaText` | `string` | `'Get Started'` | Call-to-action button text |
| `backgroundImage` | `string` | - | Background image URL |
| `alignment` | `string` | `'center'` | Text alignment |

**Usage Example:**
```tsx
import { Hero } from './components/custom';

<Hero
  title="Welcome to Our Platform"
  subtitle="Build amazing experiences with our design system"
  ctaText="Get Started"
  alignment="center"
/>
```

**Builder.io Registration:**
```typescript
Builder.registerComponent(Hero, {
  name: 'Custom Hero',
  inputs: [
    { name: 'title', type: 'string', required: true },
    { name: 'subtitle', type: 'longText' },
    { name: 'ctaText', type: 'string' },
    { name: 'backgroundImage', type: 'file' },
    { name: 'alignment', type: 'string', enum: ['left', 'center', 'right'] },
  ],
});
```

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
