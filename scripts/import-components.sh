#!/bin/bash

# Component Import and Organization Script
# This script copies components from source directories and organizes them

set -e  # Exit on error

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Source directories (update these paths)
TAILWIND_UI_SOURCE="/Users/foo/projects/tailadmin/catalyst-ui-kit/typescript"
TAILADMIN_SOURCE="/Users/foo/projects/tailadmin/src/compon"

# Target directories
TAILWIND_UI_TARGET="components/tailwindui"
TAILADMIN_TARGET="components/tailadmin"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Component Import and Organization Script${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if source directories exist
if [ ! -d "$TAILWIND_UI_SOURCE" ]; then
    echo -e "${RED}Error: Tailwind UI source directory not found:${NC}"
    echo -e "${RED}$TAILWIND_UI_SOURCE${NC}"
    echo -e "${YELLOW}Please update the TAILWIND_UI_SOURCE path in this script.${NC}"
    exit 1
fi

if [ ! -d "$TAILADMIN_SOURCE" ]; then
    echo -e "${RED}Error: TailAdmin source directory not found:${NC}"
    echo -e "${RED}$TAILADMIN_SOURCE${NC}"
    echo -e "${YELLOW}Please update the TAILADMIN_SOURCE path in this script.${NC}"
    exit 1
fi

# Create target directory structure
echo -e "${BLUE}Creating directory structure...${NC}"
mkdir -p "$TAILWIND_UI_TARGET"/{Marketing,Application,Ecommerce,Forms}
mkdir -p "$TAILADMIN_TARGET"/{Dashboard,Tables,Forms,Charts,UI}

echo -e "${GREEN}✓ Directories created${NC}\n"

# Copy Tailwind UI components
echo -e "${BLUE}Copying Tailwind UI components...${NC}"
if [ -d "$TAILWIND_UI_SOURCE" ]; then
    # Copy all TypeScript files
    find "$TAILWIND_UI_SOURCE" -name "*.tsx" -o -name "*.ts" | while read file; do
        filename=$(basename "$file")
        echo -e "  ${YELLOW}→${NC} $filename"
        cp "$file" "$TAILWIND_UI_TARGET/"
    done
    echo -e "${GREEN}✓ Tailwind UI components copied${NC}\n"
else
    echo -e "${RED}✗ Tailwind UI source not found${NC}\n"
fi

# Copy TailAdmin components
echo -e "${BLUE}Copying TailAdmin components...${NC}"
if [ -d "$TAILADMIN_SOURCE" ]; then
    # Copy all TypeScript files
    find "$TAILADMIN_SOURCE" -name "*.tsx" -o -name "*.ts" | while read file; do
        filename=$(basename "$file")
        echo -e "  ${YELLOW}→${NC} $filename"
        cp "$file" "$TAILADMIN_TARGET/"
    done
    echo -e "${GREEN}✓ TailAdmin components copied${NC}\n"
else
    echo -e "${RED}✗ TailAdmin source not found${NC}\n"
fi

# Organize components into subdirectories
echo -e "${BLUE}Organizing components into categories...${NC}"
echo -e "${YELLOW}Note: You may need to manually move components to the correct subdirectories${NC}"
echo -e "${YELLOW}based on their purpose (Marketing, Application, Dashboard, etc.)${NC}\n"

# List all copied files for review
echo -e "${BLUE}Tailwind UI components:${NC}"
ls -1 "$TAILWIND_UI_TARGET" | grep -E '\.(tsx?|jsx?)$' || echo "  (none)"

echo -e "\n${BLUE}TailAdmin components:${NC}"
ls -1 "$TAILADMIN_TARGET" | grep -E '\.(tsx?|jsx?)$' || echo "  (none)"

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}Import complete!${NC}"
echo -e "${GREEN}========================================${NC}\n"

echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. Review the copied components in:"
echo -e "   - $TAILWIND_UI_TARGET"
echo -e "   - $TAILADMIN_TARGET"
echo -e "2. Organize them into subdirectories:"
echo -e "   - Move marketing components to $TAILWIND_UI_TARGET/Marketing"
echo -e "   - Move dashboard components to $TAILADMIN_TARGET/Dashboard"
echo -e "   - etc."
echo -e "3. Update component imports and exports"
echo -e "4. Run: ${BLUE}npm run sync${NC}"
echo -e "5. Document each component in docs/component-library.md"
echo -e "6. Commit and push: ${BLUE}git add . && git commit -m 'Import components' && git push${NC}\n"
