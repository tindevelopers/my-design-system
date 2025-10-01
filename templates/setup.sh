#!/bin/bash

# SaaS Admin Dashboard Setup Script
# This script copies the complete SaaS admin dashboard templates to your project

echo "🚀 Setting up SaaS Admin Dashboard Templates..."

# Check if we're in a Next.js project
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in a project directory. Please run this from your Next.js project root."
    exit 1
fi

# Check if pages directory exists
if [ ! -d "pages" ]; then
    echo "📁 Creating pages directory..."
    mkdir -p pages
fi

# Copy the main SaaS admin page
echo "📄 Copying main dashboard page..."
cp node_modules/@tindeveloper/design-system/templates/pages/saas-admin.tsx pages/

# Copy SaaS admin sub-pages
echo "📄 Copying SaaS admin sub-pages..."
mkdir -p pages/saas-admin
cp node_modules/@tindeveloper/design-system/templates/pages/saas-admin/* pages/saas-admin/

# Check if design system is installed
if [ ! -d "node_modules/@tindeveloper/design-system" ]; then
    echo "📦 Installing design system..."
    npm install @tindeveloper/design-system
fi

# Check if required dependencies are installed
echo "🔍 Checking dependencies..."

if ! npm list @headlessui/react > /dev/null 2>&1; then
    echo "📦 Installing @headlessui/react..."
    npm install @headlessui/react
fi

if ! npm list clsx > /dev/null 2>&1; then
    echo "📦 Installing clsx..."
    npm install clsx
fi

echo "✅ Setup complete!"
echo ""
echo "🎉 Your SaaS Admin Dashboard is ready!"
echo ""
echo "Available pages:"
echo "  • Main Dashboard: http://localhost:3000/saas-admin"
echo "  • Users: http://localhost:3000/saas-admin/users"
echo "  • Organizations: http://localhost:3000/saas-admin/organizations"
echo "  • Analytics: http://localhost:3000/saas-admin/analytics"
echo ""
echo "🚀 Start your development server with: npm run dev"
echo ""
echo "📚 For customization, check: node_modules/@tindeveloper/design-system/templates/README.md"
