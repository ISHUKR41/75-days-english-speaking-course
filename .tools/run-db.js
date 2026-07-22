const { execSync } = require('child_process');
const path = require('path');

process.env.DATABASE_URL = 'file:./prisma/dev.db';
const prismaBin = path.join(__dirname, '../apps/web/node_modules/prisma/build/index.js');
const tsxBin = path.join(__dirname, '../apps/web/node_modules/tsx/dist/cli.mjs');
const seedScript = path.join(__dirname, '../apps/web/prisma/seed.ts');
const webDir = path.join(__dirname, '../apps/web');

console.log('--- 1. Pushing Database Schema ---');
execSync(`"${process.execPath}" "${prismaBin}" db push`, {
  cwd: webDir,
  env: process.env,
  stdio: 'inherit',
});

console.log('--- 2. Seeding Database ---');
try {
  execSync(`"${process.execPath}" "${tsxBin}" "${seedScript}"`, {
    cwd: webDir,
    env: process.env,
    stdio: 'inherit',
  });
  console.log('Database seeded successfully!');
} catch (err) {
  console.warn('Seed execution warning:', err.message);
}
