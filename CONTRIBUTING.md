# Contributing to My Design System

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this component library.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-design-system.git
   cd my-design-system
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Adding a New Component

### Step 1: Create the Component File

Choose the appropriate directory:
- `components/tailwindui/` for Tailwind UI components
- `components/tailadmin/` for TailAdmin components
- `components/custom/` for custom components

Create your component file (e.g., `button.tsx`):

```typescript
import React from 'react';

export interface ButtonProps {
  /** Button label */
  label: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Click handler */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]}`}
    >
      {label}
    </button>
  );
};
```

### Step 2: Document the Component

Add documentation to `docs/component-library.md` using the template in `docs/component-template.md`.

### Step 3: Update Builder Registry

Add an entry to `docs/builder-registry.json`:

```json
{
  "id": "button-primary",
  "name": "Button",
  "displayName": "TailwindUI Button",
  "source": "tailwindui",
  "filePath": "components/tailwindui/button.tsx",
  "category": "Forms",
  "description": "A customizable button component",
  "props": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "defaultValue": "Click Me",
      "description": "Button text"
    }
  ],
  "tags": ["button", "form", "interactive"]
}
```

### Step 4: Add Builder.io Registration

Update `src/builder-registry.ts`:

```typescript
import { Button } from '../components/tailwindui/button';

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
  ],
});
```

### Step 5: Export the Component

Update `src/index.ts`:

```typescript
export { Button } from '../components/tailwindui/button';
export type { ButtonProps } from '../components/tailwindui/button';
```

### Step 6: Create an Example

Add an example to `examples/`:

```typescript
// examples/button-example.tsx
import React from 'react';
import { Button } from '../components/tailwindui/button';

export function ButtonExample() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Button Examples</h1>
      
      <div className="flex gap-4">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Outline" variant="outline" />
      </div>
    </div>
  );
}
```

### Step 7: Run Sync Script

```bash
npm run sync
```

### Step 8: Test Your Component

```bash
npm run build
npm run dev
```

## 🎨 Code Style Guidelines

### TypeScript

- Use TypeScript for all components
- Define explicit interfaces for props
- Avoid using `any` type
- Use union types for variants
- Add JSDoc comments for all props

### React

- Use functional components with hooks
- Prefer named exports over default exports
- Use React.FC type for components
- Destructure props in function parameters

### Tailwind CSS

- Use utility classes exclusively
- Avoid custom CSS unless necessary
- Use the extended theme from `tailwind.config.js`
- Keep class names organized (layout → spacing → colors → typography → effects)
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Support dark mode: `dark:` prefix

### File Naming

- Components: PascalCase (e.g., `Button`, `HeroSection`)
- Files: kebab-case (e.g., `button.tsx`, `hero-section.tsx`)
- Props: camelCase (e.g., `onClick`, `isDisabled`)

## ✅ Code Quality Checklist

Before submitting a PR, ensure:

- [ ] Component follows TypeScript best practices
- [ ] All props have JSDoc comments
- [ ] Component is fully responsive
- [ ] Dark mode is supported (if applicable)
- [ ] Accessibility attributes are included
- [ ] Component is documented in `component-library.md`
- [ ] Builder registry is updated
- [ ] Component is registered in `builder-registry.ts`
- [ ] Component is exported in `src/index.ts`
- [ ] Example is created
- [ ] `npm run sync` passes without errors
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No console warnings

## 🧪 Testing

While we don't have automated tests yet, please:

1. Test all prop variations
2. Test responsive behavior
3. Test dark mode (if applicable)
4. Test accessibility with keyboard navigation
5. Test in Builder.io (if possible)

## 📤 Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add Button component"
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Submit!

## 📋 Commit Message Convention

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add Button component with variants
fix: resolve responsive issue in Hero component
docs: update component-library.md with new examples
```

## 🤝 Code Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## 💡 Need Help?

- Check existing components for examples
- Read the [.cursorrules](.cursorrules) file
- Review [docs/component-library.md](docs/component-library.md)
- Open an issue for questions

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
