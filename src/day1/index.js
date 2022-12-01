const readfile = require('../helper/readfile');

const solve = (lines) => {
  let calories = [];
  let lastCaloriePack = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i]) {
      lastCaloriePack += parseInt(lines[i], 10);
    } else {
      calories.push(lastCaloriePack);
      lastCaloriePack = 0;
    }
  }

  if (lastCaloriePack > 0) {
    calories.push(lastCaloriePack);
  }

  const sorted = calories.sort((a, b) => b - a);
  return sorted[0] + sorted[1] + sorted[2];
}

const content = readfile(__dirname + '/riddle.txt');
console.log(solve(content));
