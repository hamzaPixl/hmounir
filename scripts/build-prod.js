#!/usr/bin/env node

/**
 * Production build script
 *
 * This script:
 * 1. Generates OG images for social media
 * 2. Runs the Next.js build process
 * 3. Ensures development code is not included in production
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

console.log(
  `${colors.bright}${colors.blue}🚀 Starting production build process...${colors.reset}\n`
);

// Step 1: Generate OG images
console.log(`${colors.yellow}📸 Generating social media images...${colors.reset}`);
try {
  execSync('node scripts/generate-og-image.js', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Social media images generated successfully!${colors.reset}\n`);
} catch (error) {
  console.error(`❌ Error generating social media images: ${error.message}`);
  // Continue with the build even if image generation fails
}

// Step 2: Ensure we're in production mode
console.log(`${colors.yellow}🔧 Setting up production environment...${colors.reset}`);
process.env.NODE_ENV = 'production';
console.log(`${colors.green}✅ Environment set to production!${colors.reset}\n`);

// Step 3: Run the Next.js build
console.log(`${colors.yellow}🏗️ Building Next.js application...${colors.reset}`);
try {
  execSync('next build', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Next.js build completed successfully!${colors.reset}\n`);
} catch (error) {
  console.error(`❌ Next.js build failed: ${error.message}`);
  process.exit(1);
}

// Step 4: Verify build output
console.log(`${colors.yellow}🔍 Verifying build output...${colors.reset}`);
if (fs.existsSync(path.join(process.cwd(), '.next'))) {
  console.log(`${colors.green}✅ Build output verified!${colors.reset}\n`);
} else {
  console.error('❌ Build output not found!');
  process.exit(1);
}

console.log(
  `${colors.bright}${colors.magenta}🎉 Production build completed successfully!${colors.reset}`
);
console.log(
  `${colors.bright}${colors.blue}🚀 Run 'npm start' to start the production server.${colors.reset}`
);
