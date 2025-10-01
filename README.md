# My Design System

A unified component library combining Tailwind UI and TailAdmin components, optimized for Builder.io integration.

## 🚀 Features

- **Unified Component Library**: Combines the best of Tailwind UI and TailAdmin
- **Builder.io Ready**: Pre-configured for seamless Builder.io integration
- **TypeScript Support**: Full type safety and IntelliSense
- **Documentation**: Comprehensive component documentation and examples
- **Automation**: Scripts for syncing and managing components

## 📁 Project Structure

```
my-design-system/
├── components/
│   ├── tailwindui/     # Tailwind UI components
│   ├── tailadmin/      # TailAdmin components
│   └── custom/         # Custom components
├── src/
│   └── builder-registry.ts  # Builder.io registration
├── docs/
│   ├── component-library.md  # Master documentation
│   ├── builder-registry.json # Machine-readable catalog
│   └── component-template.md # Template for new components
├── examples/           # Usage examples
├── scripts/
│   └── sync-components.js    # Automation scripts
└── dist/              # Built output
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/tindevelopers/my-design-system.git
cd my-design-system

# Install dependencies
npm install
```

## 📝 Usage

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Sync Components

Run this after adding or modifying components to update the registry:

```bash
npm run sync
```

### Register with Builder.io

```bash
npm run register
```

## 📚 Documentation

See [docs/component-library.md](docs/component-library.md) for complete component documentation.

### Component Template

Each component follows this structure:

```typescript
import React from 'react';

export interface ComponentProps {
  /** Prop description */
  propName: string;
}

export const Component: React.FC<ComponentProps> = ({ propName }) => {
  return (
    <div className="tailwind-classes">
      {/* Component content */}
    </div>
  );
};
```

## 🤝 Contributing

### Adding a New Component

1. **Create the component** in the appropriate folder:
   - `components/tailwindui/` for Tailwind UI components
   - `components/tailadmin/` for TailAdmin components
   - `components/custom/` for custom components

2. **Follow the coding standards** (see `.cursorrules`)

3. **Document the component**:
   - Add to `docs/component-library.md`
   - Update `docs/builder-registry.json`
   - Add registration to `src/builder-registry.ts`

4. **Run the sync script**:
   ```bash
   npm run sync
   ```

5. **Test the component**:
   - Create an example in `examples/`
   - Test in Builder.io

### Code Style

- Use TypeScript for all components
- Follow the TypeScript interface pattern for props
- Use Tailwind CSS utility classes exclusively
- Add JSDoc comments for all props
- Provide sensible defaults for optional props

## 🏗️ Builder.io Integration

Components are automatically registered with Builder.io through `src/builder-registry.ts`.

### Registration Example

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
  ],
});
```

## 🔧 Scripts

- `npm run dev` - Watch mode for development
- `npm run build` - Build TypeScript to `dist/`
- `npm run sync` - Sync component registry and validate
- `npm run register` - Register components with Builder.io

## 📦 Dependencies

### Core
- `@builder.io/react` - Builder.io React SDK
- `react` & `react-dom` - React framework
- `typescript` - TypeScript support

### Styling
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/forms` - Form styles
- `@tailwindcss/typography` - Typography plugin
- `@tailwindcss/aspect-ratio` - Aspect ratio utilities

## 🎨 Component Sources

- **Tailwind UI**: Premium components from [tailwindui.com](https://tailwindui.com)
- **TailAdmin**: Dashboard components from [tailadmin.com](https://tailadmin.com)
- **Custom**: Project-specific custom components

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Builder.io Documentation](https://www.builder.io/c/docs/developers)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 📄 License

MIT

## 🆘 Need Help?

- Check the [component documentation](docs/component-library.md)
- Read the [.cursorrules](.cursorrules) for AI assistant instructions
- Review existing components for examples

---

Built with ❤️ using Tailwind CSS, React, and TypeScript
