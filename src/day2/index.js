const readfile = require('../helper/readfile');

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

const solve = (lines, outcome) => {
  let score = 0;
  for (const line of lines) {
    let [a, b] = line.split(' ');
    if (outcome) b = chooseShape[a][b];
    score += shapeScore[b] + outcomeScore[a][b];
  }

  return score;
}

const content = readfile(__dirname + '/riddle.txt');
console.log(solve(content, true));
