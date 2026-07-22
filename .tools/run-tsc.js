const { execSync } = require('child_process');
const path = require('path');

process.env.DATABASE_URL = 'file:./prisma/dev.db';
const tscBin = path.join(__dirname, '../apps/web/node_modules/typescript/bin/tsc');
const webDir = path.join(__dirname, '../apps/web');

console.log('Running TypeScript type-check...');
try {
  execSync(`"${process.execPath}" "${tscBin}" --noEmit`, {
    cwd: webDir,
    env: process.env,
    stdio: 'inherit',
  });
  console.log('TypeScript type-check passed cleanly with 0 errors!');
} catch (err) {
  console.error('TypeScript errors found:', err.message);
  process.exit(1);
}
