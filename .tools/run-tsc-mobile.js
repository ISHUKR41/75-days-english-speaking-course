const { execSync } = require('child_process');
const path = require('path');

const tscBin = path.join(__dirname, '../apps/web/node_modules/typescript/bin/tsc');
const mobileDir = path.join(__dirname, '../apps/mobile');

console.log('Running TypeScript type-check on Mobile app...');
try {
  execSync(`"${process.execPath}" "${tscBin}" --noEmit`, {
    cwd: mobileDir,
    stdio: 'inherit',
  });
  console.log('Mobile app TypeScript type-check passed cleanly with 0 errors!');
} catch (err) {
  console.error('Mobile app TypeScript errors found:', err.message);
  process.exit(1);
}
