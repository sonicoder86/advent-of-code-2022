const readfile = require('../helper/readfile');

const solve = (lines) => {
  let increase = 0;
  let previous = null;

  for (let current = 0; current < lines.length; current++) {
    if (previous !== null && lines[previous] < lines[current]) {
      increase++;
    }
    previous = current;
  }

  return increase;
}

console.log(solve(readfile(__dirname + '/example.txt')));
