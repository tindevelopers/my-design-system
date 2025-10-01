#!/bin/bash

# Component Organization Script
# This script helps organize components into logical subdirectories

set -e

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Component Organization Helper${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Function to organize files based on patterns in filenames
organize_by_pattern() {
    local source_dir=$1
    local pattern=$2
    local target_subdir=$3
    
    echo -e "${BLUE}Looking for $pattern components...${NC}"
    
    if [ ! -d "$source_dir" ]; then
        echo -e "${YELLOW}Source directory not found: $source_dir${NC}"
        return
    fi
    
    mkdir -p "$source_dir/$target_subdir"
    
    # Find and move matching files
    count=0
    for file in "$source_dir"/*; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            # Convert to lowercase for case-insensitive matching
            filename_lower=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
            
            if [[ "$filename_lower" == *"$pattern"* ]]; then
                mv "$file" "$source_dir/$target_subdir/"
                echo -e "  ${GREEN}✓${NC} Moved $filename → $target_subdir/"
                ((count++))
            fi
        fi
    done
    
    if [ $count -eq 0 ]; then
        echo -e "  ${YELLOW}No files matched pattern '$pattern'${NC}"
    else
        echo -e "  ${GREEN}Moved $count files${NC}"
    fi
    echo
}

# Organize Tailwind UI components
echo -e "${BLUE}Organizing Tailwind UI components...${NC}\n"

# Marketing components (hero, cta, testimonial, pricing, etc.)
organize_by_pattern "components/tailwindui" "hero" "Marketing"
organize_by_pattern "components/tailwindui" "cta" "Marketing"
organize_by_pattern "components/tailwindui" "testimonial" "Marketing"
organize_by_pattern "components/tailwindui" "pricing" "Marketing"
organize_by_pattern "components/tailwindui" "feature" "Marketing"
organize_by_pattern "components/tailwindui" "newsletter" "Marketing"

# Application components (sidebar, navigation, dropdown, etc.)
organize_by_pattern "components/tailwindui" "sidebar" "Application"
organize_by_pattern "components/tailwindui" "nav" "Application"
organize_by_pattern "components/tailwindui" "dropdown" "Application"
organize_by_pattern "components/tailwindui" "modal" "Application"
organize_by_pattern "components/tailwindui" "dialog" "Application"
organize_by_pattern "components/tailwindui" "notification" "Application"
organize_by_pattern "components/tailwindui" "alert" "Application"

# Ecommerce components (product, cart, checkout, etc.)
organize_by_pattern "components/tailwindui" "product" "Ecommerce"
organize_by_pattern "components/tailwindui" "cart" "Ecommerce"
organize_by_pattern "components/tailwindui" "checkout" "Ecommerce"
organize_by_pattern "components/tailwindui" "shop" "Ecommerce"

# Form components
organize_by_pattern "components/tailwindui" "form" "Forms"
organize_by_pattern "components/tailwindui" "input" "Forms"
organize_by_pattern "components/tailwindui" "button" "Forms"
organize_by_pattern "components/tailwindui" "select" "Forms"
organize_by_pattern "components/tailwindui" "checkbox" "Forms"
organize_by_pattern "components/tailwindui" "radio" "Forms"

echo -e "\n${BLUE}Organizing TailAdmin components...${NC}\n"

# Dashboard components
organize_by_pattern "components/tailadmin" "dashboard" "Dashboard"
organize_by_pattern "components/tailadmin" "stat" "Dashboard"
organize_by_pattern "components/tailadmin" "metric" "Dashboard"
organize_by_pattern "components/tailadmin" "card" "Dashboard"
organize_by_pattern "components/tailadmin" "widget" "Dashboard"

# Table components
organize_by_pattern "components/tailadmin" "table" "Tables"
organize_by_pattern "components/tailadmin" "datagrid" "Tables"
organize_by_pattern "components/tailadmin" "list" "Tables"

# Chart components
organize_by_pattern "components/tailadmin" "chart" "Charts"
organize_by_pattern "components/tailadmin" "graph" "Charts"

# Form components
organize_by_pattern "components/tailadmin" "form" "Forms"
organize_by_pattern "components/tailadmin" "input" "Forms"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Organization complete!${NC}"
echo -e "${GREEN}========================================${NC}\n"

# Show remaining unorganized files
echo -e "${BLUE}Remaining unorganized files:${NC}\n"

echo -e "${YELLOW}Tailwind UI:${NC}"
remaining_tw=$(find components/tailwindui -maxdepth 1 -type f -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l)
if [ $remaining_tw -gt 0 ]; then
    ls -1 components/tailwindui/*.{ts,tsx} 2>/dev/null | head -20
    if [ $remaining_tw -gt 20 ]; then
        echo -e "  ... and $((remaining_tw - 20)) more files"
    fi
else
    echo -e "  ${GREEN}All files organized!${NC}"
fi

echo -e "\n${YELLOW}TailAdmin:${NC}"
remaining_ta=$(find components/tailadmin -maxdepth 1 -type f -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l)
if [ $remaining_ta -gt 0 ]; then
    ls -1 components/tailadmin/*.{ts,tsx} 2>/dev/null | head -20
    if [ $remaining_ta -gt 20 ]; then
        echo -e "  ... and $((remaining_ta - 20)) more files"
    fi
else
    echo -e "  ${GREEN}All files organized!${NC}"
fi

echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. Review the organized components"
echo -e "2. Manually organize any remaining files"
echo -e "3. Update imports in component files"
echo -e "4. Run: ${BLUE}npm run sync${NC}"
echo -e "5. Document components in docs/component-library.md\n"
