const readfile = require('../helper/readfile');
const lines = readfile(__dirname + '/input.txt');

const getPriority = (char) => char === char.toLowerCase() ? char.charCodeAt() - 96 : char.charCodeAt() - 64 + 26;

const match = (first, second) => first.match(new RegExp('[' + second + ']', 'g'));

const part1 = lines.reduce(
  (acc, curr) => {
    const before = curr.substring(0, curr.length / 2);
    const after = curr.substring(curr.length / 2);
    const matches = match(before, after);

    return acc + getPriority(matches[0]);
  },
  0
);

const solve2 = (lines) => {
  let score = 0;
  for (let i = 0; i < lines.length; i += 3) {
    const matches1 = match(lines[i], lines[i + 1]);
    const matches2 = match(lines[i], lines[i + 2]);
    const filtered = matches1.filter(value => matches2.includes(value));

    score += getPriority(filtered[0]);
  }

  return score;
}

const part2 = solve2(lines);

console.log('Part 1: ' + part1);
console.log('Part 1: ' + part2);
