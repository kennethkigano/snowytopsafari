#!/usr/bin/env node

import { build } from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting optimized build for deployment...');

// Step 1: Build frontend with production optimizations
console.log('Building frontend...');
try {
  execSync('npx vite build --mode production', { 
    stdio: 'inherit',
    timeout: 300000 // 5 minutes timeout
  });
  console.log('Frontend build completed');
} catch (error) {
  console.error('Frontend build failed:', error.message);
  process.exit(1);
}

// Step 2: Build server with optimizations
console.log('Building server...');
try {
  await build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    format: 'esm',
    outfile: 'dist/index.js',
    packages: 'external',
    minify: false, // Keep readable for debugging
    sourcemap: false,
    banner: {
      js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    external: [
      'express',
      'drizzle-orm',
      '@neondatabase/serverless',
      'ws'
    ]
  });
  console.log('Server build completed');
} catch (error) {
  console.error('Server build failed:', error.message);
  process.exit(1);
}

// Step 3: Verify build artifacts
const distPath = path.resolve('dist');
const publicPath = path.resolve('dist', 'public');
const serverPath = path.resolve('dist', 'index.js');

if (!fs.existsSync(serverPath)) {
  console.error('Error: Server bundle not found at dist/index.js');
  process.exit(1);
}

if (!fs.existsSync(publicPath)) {
  console.error('Warning: Public assets not found at dist/public');
} else {
  console.log('Public assets found at dist/public');
}

console.log('Build verification completed successfully');
console.log('Deployment artifacts ready in dist/');