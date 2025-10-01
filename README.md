# My Design System

A comprehensive, unified component library combining Tailwind UI, TailAdmin, and Catalyst UI components for Builder.io integration and modern web applications.

## 🚀 Overview

This design system provides a curated collection of production-ready React components with TypeScript support, designed for:
- **Builder.io Integration**: All components are registered for visual editing
- **Modern Web Applications**: Built with React 18+ and TypeScript
- **Tailwind CSS**: Utility-first styling with dark mode support
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized bundle size and tree-shaking support

## 📦 Installation

### NPM Package (Recommended)
```bash
npm install @tindeveloper/design-system
```

### Local Development
```bash
git clone <repository-url>
cd my-design-system
npm install
```

## 🏗️ Project Structure

```
my-design-system/
├── components/                    # Component implementations
│   ├── tailwindui/               # Tailwind UI components
│   ├── tailadmin/                # TailAdmin components
│   ├── catalyst-ui-kit/          # Catalyst UI components
│   └── custom/                   # Custom components
├── src/                         # Source files and exports
│   ├── index.ts                 # Main export file
│   ├── builder-registry.ts      # Builder.io registrations
│   └── catalyst-ui-kit/         # Catalyst UI source
├── docs/                        # Documentation
│   ├── component-library.md     # Component documentation
│   └── builder-registry.json    # Machine-readable registry
├── demo/                        # Next.js demo application
├── examples/                    # Usage examples
└── scripts/                     # Build and sync scripts
```

## 🎨 Component Categories

### Form Components
- **Input**: Text, email, password inputs with validation states
- **Select**: Dropdown selectors with search functionality
- **Checkbox**: Custom styled checkboxes
- **Button**: Multiple variants (primary, secondary, outline, danger)
- **Textarea**: Multi-line text input

### Layout Components
- **AdminLayout**: Standard admin panel layout
- **AdminLayoutSaaS**: SaaS-specific admin layout with user profile
- **Card**: Flexible container with header, body, footer
- **Sidebar**: Navigation sidebar with collapsible functionality

### Data Display
- **Table**: Responsive data tables
- **Avatar**: User profile images with fallbacks
- **Badge**: Status indicators and labels
- **Alert**: Notification messages with different types

### Navigation
- **Navbar**: Top navigation bar
- **Breadcrumbs**: Navigation breadcrumb trails
- **Pagination**: Page navigation controls

## 🔧 Usage Examples

### Basic Component Usage

```tsx
import { Button, Input, Card } from '@tindeveloper/design-system';

function MyComponent() {
  return (
    <Card title="User Profile" description="Manage user settings">
      <Input 
        label="Email Address"
        type="email"
        placeholder="user@example.com"
      />
      <Button 
        variant="primary"
        onClick={() => console.log('Saved!')}
      >
        Save Changes
      </Button>
    </Card>
  );
}
```

### Admin Layout Usage

```tsx
import { AdminLayoutSaaS } from '@tindeveloper/design-system';

function DashboardPage() {
  const userInfo = {
    name: 'John Doe',
    email: 'john@company.com',
    avatar: 'https://example.com/avatar.jpg',
    role: 'Administrator'
  };

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboard',
      icon: '🏠'
    },
    {
      id: 'users',
      label: 'Users',
      href: '/users',
      icon: '👥',
      badge: '12'
    }
  ];

  return (
    <AdminLayoutSaaS
      pageTitle="Dashboard"
      userInfo={userInfo}
      navigationItems={navigationItems}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard' }
      ]}
    >
      <div>Your dashboard content here</div>
    </AdminLayoutSaaS>
  );
}
```

### Builder.io Integration

Components are automatically registered with Builder.io. To use in Builder.io:

1. Import the design system in your Builder.io model
2. Components will appear in the Builder.io component panel
3. Configure props through the visual editor
4. Components render with real data in your application

```tsx
import '@tindeveloper/design-system';

// Components are now available in Builder.io editor
```

## 🎯 Component Props & Types

### Button Component
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}
```

### Input Component
```tsx
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
}
```

### AdminLayoutSaaS Component
```tsx
interface AdminLayoutSaaSProps {
  pageTitle: string;
  userInfo: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
  navigationItems: Array<{
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    badge?: string;
  }>;
  children: React.ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  defaultCollapsed?: boolean;
}
```

## 🌙 Dark Mode Support

All components support dark mode through Tailwind CSS dark mode classes:

```tsx
// Automatic dark mode detection
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Content adapts to system theme
</div>

// Manual dark mode toggle
const [isDark, setIsDark] = useState(false);
<div className={isDark ? 'dark' : ''}>
  <Component />
</div>
```

## 📱 Responsive Design

Components are built mobile-first with responsive breakpoints:

- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid layout */}
</div>
```

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- TypeScript knowledge

### Local Development
```bash
# Clone repository
git clone <repository-url>
cd my-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Sync component registry
npm run sync
```

### Demo Application
```bash
cd demo
npm install
npm run dev
# Visit http://localhost:3000
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📚 Documentation

### Component Documentation
- **File**: `docs/component-library.md`
- **Format**: Markdown with props tables and examples
- **Updated**: Automatically via sync script

### Builder.io Registry
- **File**: `docs/builder-registry.json`
- **Format**: JSON metadata for Builder.io integration
- **Usage**: Imported by Builder.io for component discovery

### API Reference
All component props and types are documented in TypeScript interfaces. Use your IDE's intellisense for inline documentation.

## 🔄 Component Sync Process

The sync script ensures consistency across:
- Component exports in `src/index.ts`
- Builder.io registrations in `src/builder-registry.ts`
- Documentation in `docs/component-library.md`
- Registry metadata in `docs/builder-registry.json`

```bash
npm run sync
```

## 🎨 Customization

### Theme Customization
Modify `tailwind.config.js` to customize:
- Colors
- Spacing
- Typography
- Breakpoints
- Dark mode behavior

### Component Styling
Components use Tailwind utility classes. Override by:
1. Passing custom className props
2. Using CSS modules
3. Extending Tailwind configuration

### Adding New Components
1. Create component in appropriate folder (`components/custom/`)
2. Export from `src/index.ts`
3. Register with Builder.io in `src/builder-registry.ts`
4. Run `npm run sync` to update documentation

## 📦 Bundle Optimization

### Tree Shaking
```tsx
// Import only needed components
import { Button, Input } from '@tindeveloper/design-system';

// Avoid importing entire library
import * from '@tindeveloper/design-system'; // ❌ Don't do this
```

### Bundle Analysis
```bash
npm run analyze
# Opens bundle analyzer in browser
```

## 🔒 Security Considerations

- All user inputs are sanitized
- No XSS vulnerabilities in components
- CSP-compliant inline styles
- Secure default configurations

## 🤝 Contributing

### Code Standards
- TypeScript strict mode
- ESLint + Prettier configuration
- Conventional commit messages
- Component prop documentation required

### Pull Request Process
1. Fork repository
2. Create feature branch
3. Add tests for new components
4. Update documentation
5. Submit pull request

### Component Requirements
- TypeScript interfaces for all props
- JSDoc comments for documentation
- Responsive design
- Dark mode support
- Accessibility compliance
- Builder.io registration

## 🐛 Troubleshooting

### Common Issues

**Import Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript Errors**
```bash
# Regenerate type definitions
npm run type-check
```

**Builder.io Registration Issues**
```bash
# Sync component registry
npm run sync
```

**Build Failures**
```bash
# Check for circular dependencies
npm run analyze
```

### Debug Mode
Enable debug logging:
```bash
DEBUG=design-system:* npm run dev
```

## 📈 Performance

### Metrics
- **Bundle Size**: < 50KB gzipped
- **Tree Shaking**: 100% supported
- **First Paint**: < 100ms
- **Component Render**: < 16ms

### Optimization Tips
1. Import only needed components
2. Use React.memo for expensive components
3. Implement lazy loading for large components
4. Optimize images and assets

## 🔮 Roadmap

### Planned Features
- [ ] Storybook integration
- [ ] Additional chart components
- [ ] Advanced form validation
- [ ] Animation library integration
- [ ] Mobile-specific components
- [ ] Internationalization support

### Version History
- **v1.0.0**: Initial release with core components
- **v1.0.1**: Bug fixes and improvements
- **v1.0.2**: Added admin layouts
- **v1.0.3**: Enhanced SaaS components
- **v1.0.4**: Logo integration and fallbacks

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

### Documentation
- Component docs: `docs/component-library.md`
- Examples: `examples/` folder
- Demo app: `demo/` folder

### Community
- GitHub Issues: Bug reports and feature requests
- Discussions: Questions and community help

### Professional Support
For enterprise support and custom development, contact the maintainers.

## 🏷️ Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

---

**Built with ❤️ for modern web development**