const readfile = require('../helper/readfile');
const lines = readfile(__dirname + '/input.txt');

// X for Rock, Y for Paper, and Z for Scissors
const shapeScore = { X: 1, Y: 2, Z: 3 };

// A for Rock, B for Paper, and C for Scissors
const outcomeScore = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

const chooseShape = {
  A: { X: 'Z', Y: 'X', Z: 'Y' },
  B: { X: 'X', Y: 'Y', Z: 'Z' },
  C: { X: 'Y', Y: 'Z', Z: 'X' },
};

const part1 = lines.reduce(
  (acc, curr) => {
    const [opponent, you] = curr.split(' ');
    return acc + shapeScore[you] + outcomeScore[opponent][you];
  },
  0
);

const part2 = lines.reduce(
  (acc, curr) => {
    let [opponent, you] = curr.split(' ');
    you = chooseShape[opponent][you];
    return acc + shapeScore[you] + outcomeScore[opponent][you];
  },
  0
);

console.log('Part 1: ' + part1);
console.log('Part 2: ' + part2);
