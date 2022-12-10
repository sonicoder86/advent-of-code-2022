const readfile = require('../helper/readfile');
const lines = readfile(__dirname + '/input.txt');

const elves = lines
  .reduce(
    (elves, line) => {
      line ? elves[elves.length - 1] += parseInt(line) : elves.push(0);
      return elves;
    },
    [0]
  );

const part1 = Math.max(...elves);
const part2 = [...elves]
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce(
    (acc, curr) => acc + curr,
    0
  );

console.log('Part 1: ' + part1);
console.log('Part 2: ' + part2);
