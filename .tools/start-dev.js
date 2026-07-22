const { execSync } = require('child_process');
const path = require('path');

process.env.DATABASE_URL = 'file:./prisma/dev.db';
process.env.PORT = '5000';
process.env.NODE_ENV = 'development';
process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_b3JnYW5pYy1sb25naG9ybi0yNi5jbGVyay5hY2NvdW50cy5kZXYk';
process.env.CLERK_SECRET_KEY = 'sk_test_jjhiceZ6sVuk1GXWkY';

const nextBin = path.join(__dirname, '../apps/web/node_modules/next/dist/bin/next');
const webDir = path.join(__dirname, '../apps/web');

console.log('Starting 75 Days Hard English Next.js Dev Server on port 5000...');
execSync(`"${process.execPath}" "${nextBin}" dev -p 5000`, {
  cwd: webDir,
  env: process.env,
  stdio: 'inherit',
});
