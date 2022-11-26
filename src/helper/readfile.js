const fs = require('fs');

module.exports = (fileName) => {
  const content = fs.readFileSync(fileName, { encoding: 'utf8' }).trim();
  return content.split('\n');
}
