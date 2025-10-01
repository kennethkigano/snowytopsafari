#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Check if built assets exist
const distPath = path.resolve('dist');
const publicPath = path.resolve('dist', 'public');
const serverPath = path.resolve('dist', 'index.js');

console.log('Checking build artifacts...');

if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory not found');
  process.exit(1);
}

if (!fs.existsSync(serverPath)) {
  console.error('Error: Server bundle not found at dist/index.js');
  process.exit(1);
}

if (!fs.existsSync(publicPath)) {
  console.error('Warning: Public assets not found at dist/public');
}

console.log('Starting server...');

// Import and start the server
import('./dist/index.js').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});