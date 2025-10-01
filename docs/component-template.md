# Component Template

Use this template when documenting new components in the design system.

---

## [Component Name]

**Display Name:** [Friendly name for Builder.io]  
**Source:** [Tailwind UI / TailAdmin / Custom]  
**File Path:** `components/[source]/[component-file].tsx`  
**Category:** [Forms / Navigation / Layout / Data Display / Feedback / Marketing]  
**Status:** [Draft / Review / Ready / Deprecated]

### Description

[A brief description of what this component does and when to use it]

### Preview

[Optional: Add a screenshot or link to a live preview]

---

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `propName` | `string` | `'default'` | Yes/No | Description of what this prop does |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | No | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Component size |
| `onClick` | `() => void` | - | No | Click event handler |
| `disabled` | `boolean` | `false` | No | Whether component is disabled |
| `className` | `string` | `''` | No | Additional CSS classes |
| `children` | `React.ReactNode` | - | No | Child elements |

---

## Usage Examples

### Basic Usage

```tsx
import { ComponentName } from '@/components/[source]/[component-file]';

function App() {
  return (
    <ComponentName
      propName="value"
      variant="primary"
    />
  );
}
```

### With All Props

```tsx
import { ComponentName } from '@/components/[source]/[component-file]';

function App() {
  return (
    <ComponentName
      propName="value"
      variant="secondary"
      size="lg"
      onClick={() => console.log('Clicked')}
      disabled={false}
      className="custom-class"
    >
      Optional children content
    </ComponentName>
  );
}
```

### Advanced Example

```tsx
// Add a more complex usage example if applicable
import { ComponentName } from '@/components/[source]/[component-file]';

function AdvancedExample() {
  const [state, setState] = useState('initial');

  const handleAction = () => {
    // Custom logic
    setState('updated');
  };

  return (
    <div className="container">
      <ComponentName
        propName={state}
        variant="primary"
        onClick={handleAction}
      />
    </div>
  );
}
```

---

## TypeScript Interface

```typescript
export interface ComponentNameProps {
  /** Description of propName */
  propName: string;
  
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  
  /** Component size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Click event handler */
  onClick?: () => void;
  
  /** Whether component is disabled */
  disabled?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Child elements */
  children?: React.ReactNode;
}
```

---

## Builder.io Registration

### Registration Code

```typescript
import { Builder } from '@builder.io/react';
import { ComponentName } from './components/[source]/[component-file]';

Builder.registerComponent(ComponentName, {
  name: '[Display Name]',
  image: 'https://via.placeholder.com/150x100?text=[ComponentName]',
  inputs: [
    {
      name: 'propName',
      type: 'string',
      defaultValue: 'default',
      required: true,
      helperText: 'Description of what this prop does',
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['primary', 'secondary', 'outline'],
      defaultValue: 'primary',
      helperText: 'Visual style of the component',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      helperText: 'Size of the component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Whether the component is disabled',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: '',
      helperText: 'Additional CSS classes',
    },
  ],
  canHaveChildren: false, // Set to true if component accepts children
  defaultStyles: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});
```

### Builder Registry Entry (builder-registry.json)

```json
{
  "id": "component-name-unique-id",
  "name": "ComponentName",
  "displayName": "[Display Name]",
  "source": "[tailwindui|tailadmin|custom]",
  "filePath": "components/[source]/[component-file].tsx",
  "category": "[Category]",
  "description": "[Brief description]",
  "props": [
    {
      "name": "propName",
      "type": "string",
      "required": true,
      "defaultValue": "default",
      "description": "Description of prop"
    }
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "builderConfig": {
    "name": "[Display Name]",
    "image": "https://via.placeholder.com/150x100?text=[ComponentName]",
    "canHaveChildren": false
  }
}
```

---

## Styling

### CSS Classes Used

```
[List the main Tailwind CSS classes used in the component]

- Layout: flex, grid, etc.
- Spacing: p-4, m-2, etc.
- Colors: bg-blue-500, text-white, etc.
- Typography: text-lg, font-bold, etc.
- Effects: shadow-lg, hover:opacity-80, etc.
```

### Responsive Design

[Describe how the component behaves at different breakpoints]

- **Mobile** (< 640px): [Behavior]
- **Tablet** (640px - 1024px): [Behavior]
- **Desktop** (> 1024px): [Behavior]

### Dark Mode Support

[Describe dark mode behavior if applicable]

```tsx
// Example dark mode classes
className="bg-white dark:bg-gray-800 text-black dark:text-white"
```

---

## Accessibility

### ARIA Attributes

- `aria-label`: [Description]
- `aria-describedby`: [Description]
- `role`: [Description]

### Keyboard Navigation

- **Tab**: [Behavior]
- **Enter/Space**: [Behavior]
- **Escape**: [Behavior]

### Screen Reader Support

[Describe how the component works with screen readers]

---

## Best Practices

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

## Common Pitfalls

1. [Pitfall 1 and how to avoid it]
2. [Pitfall 2 and how to avoid it]

---

## Related Components

- [ComponentName1](./component1.md) - [Brief description]
- [ComponentName2](./component2.md) - [Brief description]

---

## Version History

- **v1.0.0** (YYYY-MM-DD): Initial release
- **v1.1.0** (YYYY-MM-DD): Added [feature]
- **v1.2.0** (YYYY-MM-DD): Fixed [bug]

---

## Notes

[Any additional notes, warnings, or considerations for using this component]
