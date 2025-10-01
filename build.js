#!/usr/bin/env node

import { build } from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building frontend...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('Building server...');
await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  outfile: 'dist/index.js',
  packages: 'external',
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});

// Ensure the public directory exists in the dist folder
const publicSrc = path.join('dist', 'public');
const publicDest = path.join('dist', 'public');

if (fs.existsSync(publicSrc)) {
  console.log('Frontend build assets found in dist/public');
} else {
  console.error('Warning: Frontend build assets not found in dist/public');
}

console.log('Build complete!');