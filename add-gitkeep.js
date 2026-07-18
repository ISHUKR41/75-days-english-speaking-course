const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('.next')) {
        return;
    }
    
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (err) {
        return;
    }

    if (files.length === 0) {
        fs.writeFileSync(path.join(dir, '.gitkeep'), '');
        console.log('Added .gitkeep to', dir);
    } else {
        for (const file of files) {
            const fullPath = path.join(dir, file);
            let stat;
            try {
                stat = fs.statSync(fullPath);
            } catch (err) {
                continue;
            }
            if (stat.isDirectory()) {
                processDir(fullPath);
            }
        }
    }
}

processDir(__dirname);
