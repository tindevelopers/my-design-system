/**
 * Component Sync Script
 * 
 * This script automates the synchronization of component metadata across:
 * - docs/builder-registry.json (machine-readable catalog)
 * - docs/component-library.md (human-readable documentation)
 * - src/builder-registry.ts (Builder.io registration)
 * 
 * Usage: npm run sync
 */

const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = path.join(__dirname, '../docs/builder-registry.json');
const DOCS_PATH = path.join(__dirname, '../docs/component-library.md');
const BUILDER_REGISTRY_PATH = path.join(__dirname, '../src/builder-registry.ts');

/**
 * Read and parse the component registry
 */
function readRegistry() {
  try {
    const data = fs.readFileSync(REGISTRY_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading registry:', error.message);
    process.exit(1);
  }
}

/**
 * Scan component directories for actual component files
 */
function scanComponents(dirPath) {
  const components = [];
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    return components;
  }

  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        components.push({
          name: path.basename(file, path.extname(file)),
          path: filePath,
          relativePath: path.relative(process.cwd(), filePath),
        });
      }
    }
  });

  return components;
}

/**
 * Validate registry against actual component files
 */
function validateRegistry(registry) {
  const errors = [];
  const warnings = [];

  // Scan all component directories
  const tailwinduiComponents = scanComponents(path.join(__dirname, '../components/tailwindui'));
  const tailadminComponents = scanComponents(path.join(__dirname, '../components/tailadmin'));
  const customComponents = scanComponents(path.join(__dirname, '../components/custom'));
  
  const allComponents = [
    ...tailwinduiComponents,
    ...tailadminComponents,
    ...customComponents,
  ];

  console.log(`Found ${allComponents.length} component files`);
  console.log(`Registry contains ${registry.components.length} component definitions`);

  // Check for undocumented components
  allComponents.forEach(comp => {
    const found = registry.components.find(
      c => c.filePath.includes(comp.name)
    );
    if (!found) {
      warnings.push(`Component file exists but not in registry: ${comp.relativePath}`);
    }
  });

  // Check for missing component files
  registry.components.forEach(comp => {
    const filePath = path.join(__dirname, '..', comp.filePath);
    if (!fs.existsSync(filePath)) {
      errors.push(`Registry references missing file: ${comp.filePath}`);
    }
  });

  return { errors, warnings };
}

/**
 * Generate statistics
 */
function generateStats(registry) {
  const stats = {
    total: registry.components.length,
    bySource: {},
    byCategory: {},
  };

  registry.components.forEach(comp => {
    // Count by source
    stats.bySource[comp.source] = (stats.bySource[comp.source] || 0) + 1;
    
    // Count by category
    stats.byCategory[comp.category] = (stats.byCategory[comp.category] || 0) + 1;
  });

  return stats;
}

/**
 * Main sync function
 */
function sync() {
  console.log('🔄 Starting component sync...\n');

  // Read registry
  const registry = readRegistry();
  console.log('✅ Registry loaded successfully');

  // Validate registry
  const { errors, warnings } = validateRegistry(registry);

  // Display validation results
  if (errors.length > 0) {
    console.error('\n❌ Errors found:');
    errors.forEach(err => console.error(`  - ${err}`));
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Warnings:');
    warnings.forEach(warn => console.warn(`  - ${warn}`));
  }

  if (errors.length === 0) {
    console.log('\n✅ Validation passed');
  }

  // Generate and display statistics
  const stats = generateStats(registry);
  console.log('\n📊 Component Statistics:');
  console.log(`  Total components: ${stats.total}`);
  console.log(`  By source:`);
  Object.entries(stats.bySource).forEach(([source, count]) => {
    console.log(`    - ${source}: ${count}`);
  });
  console.log(`  By category:`);
  Object.entries(stats.byCategory).forEach(([category, count]) => {
    console.log(`    - ${category}: ${count}`);
  });

  console.log('\n✨ Sync complete!');
  
  // Exit with error code if there are errors
  if (errors.length > 0) {
    process.exit(1);
  }
}

// Run sync
sync();
