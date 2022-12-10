const fs = require('fs');

module.exports = (fileName) => fs.readFileSync(fileName, 'utf-8').trimEnd().split('\n');
