const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const toolsDir = __dirname;
console.log('Downloading npm@10.9.0 tarball...');
fetch('https://registry.npmjs.org/npm/-/npm-10.9.0.tgz')
  .then(async res => {
    const buffer = Buffer.from(await res.arrayBuffer());
    const tgzPath = path.join(toolsDir, 'npm-10.tgz');
    fs.writeFileSync(tgzPath, buffer);

    const npmExtractDir = path.join(toolsDir, 'npm-10-pkg');
    if (!fs.existsSync(npmExtractDir)) {
      fs.mkdirSync(npmExtractDir, { recursive: true });
    }
    console.log('Extracting npm@10.9.0...');
    execSync(`tar -xzf "${tgzPath}" -C "${npmExtractDir}"`, { stdio: 'inherit' });
    console.log('npm@10.9.0 ready!');
  })
  .catch(err => {
    console.error('Error setting up npm:', err);
  });
