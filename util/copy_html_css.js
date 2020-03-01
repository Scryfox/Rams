const fs = require('fs-extra');

try {
    fs.copySync('src/html', 'build/html');
    fs.copySync('src/css', 'build/css');
} catch (err) {
    console.error(err);
}