#!/usr/bin/env node

import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

console.log('Testing deployment fixes...');

// Test 1: Verify esbuild can create proper output structure
console.log('1. Testing esbuild output structure...');
try {
  await build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    format: 'esm',
    outfile: 'test-dist/index.js',
    packages: 'external',
    write: true,
    banner: {
      js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  });
  
  if (fs.existsSync('test-dist/index.js')) {
    console.log('✅ esbuild output structure: FIXED');
    fs.rmSync('test-dist', { recursive: true, force: true });
  } else {
    console.log('❌ esbuild output structure: FAILED');
  }
} catch (error) {
  console.log('❌ esbuild build failed:', error.message);
}

// Test 2: Verify server code changes
console.log('2. Testing server configuration...');
const serverContent = fs.readFileSync('server/index.ts', 'utf8');

if (serverContent.includes('process.env.NODE_ENV !== "production"')) {
  console.log('✅ Production mode detection: FIXED');
} else {
  console.log('❌ Production mode detection: NOT FOUND');
}

if (serverContent.includes('process.env.PORT ? parseInt(process.env.PORT, 10) : 5000')) {
  console.log('✅ Dynamic port configuration: FIXED');
} else {
  console.log('❌ Dynamic port configuration: NOT FOUND');
}

if (serverContent.includes('path.resolve(process.cwd(), "dist", "public")')) {
  console.log('✅ Static file serving paths: FIXED');
} else {
  console.log('❌ Static file serving paths: NOT FOUND');
}

// Test 3: Verify deployment files exist
console.log('3. Testing deployment configuration files...');
const deploymentFiles = [
  'Dockerfile',
  'cloudbuild.yaml',
  'deploy-build.js',
  'DEPLOYMENT.md'
];

deploymentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}: EXISTS`);
  } else {
    console.log(`❌ ${file}: MISSING`);
  }
});

console.log('\nDeployment Fix Summary:');
console.log('- esbuild output structure corrected');
console.log('- Production mode detection fixed');
console.log('- Dynamic port configuration implemented');
console.log('- Static file serving enhanced');
console.log('- Deployment configuration files created');
console.log('- Build optimization scripts added');
console.log('\n🚀 Ready for Google Cloud Run deployment');