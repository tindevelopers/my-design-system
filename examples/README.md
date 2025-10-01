# Component Examples

This directory contains usage examples and demo applications for the component library.

## Structure

- `basic/` - Basic usage examples for each component
- `advanced/` - Advanced use cases and compositions
- `builder/` - Builder.io integration examples
- `demo-app/` - Full demo application

## Creating Examples

When creating examples:

1. Create a new file named after the component (e.g., `button-example.tsx`)
2. Import the component from the library
3. Show different prop combinations
4. Include comments explaining the usage
5. Make it runnable if possible

## Example Template

```tsx
import React from 'react';
import { ComponentName } from '../components/source/component-name';

export function ComponentExample() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold">Component Name Examples</h1>
      
      {/* Basic usage */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Basic</h2>
        <ComponentName prop="value" />
      </section>
      
      {/* Variant examples */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Variants</h2>
        <div className="flex gap-4">
          <ComponentName variant="primary" />
          <ComponentName variant="secondary" />
        </div>
      </section>
    </div>
  );
}
```

## Running Examples

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Navigate to http://localhost:3000/examples
```
