const fs = require('fs');

const input = fs.readFileSync(__dirname + '/riddle.txt', 'utf8').trimEnd();

function solve1(input) {
  const lines = input.split('\n').map(line => [...line].map(Number));

  let seeable = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (i === 0 || j === 0 || i === lines.length - 1 || j === lines[i].length - 1) {
        seeable++;
        continue;
      }

      let hasBiggerLeft = false;
      for (let a = 1; j - a >= 0; a++) {
        // console.log(j - a, lines[i][j - a]);
        if (lines[i][j - a] >= lines[i][j]) {
          hasBiggerLeft = true;
        }
      }
      if (!hasBiggerLeft) {
        seeable++;
        continue;
      }

      let hasBiggerRight = false;
      for (let a = 1; j + a < lines[i].length; a++) {
        // console.log(j + a, lines[i][j + a]);
        if (lines[i][j + a] >= lines[i][j]) {
          hasBiggerRight = true;
        }
      }
      if (!hasBiggerRight) {
        // console.log(i, j, lines[i][j], lines[i])
        seeable++
        continue;
      }

      let hasBiggerTop = false;
      for (let a = 1; i - a >= 0; a++) {
        // console.log(i - a, lines[i - a][j]);
        if (lines[i - a][j] >= lines[i][j]) {
          hasBiggerTop = true;
        }
      }
      if (!hasBiggerTop) {
        console.log(i, j, lines[i][j], lines[i])
        seeable++
        continue;
      }

      let hasBiggerBottom = false;
      // console.log(lines.length)
      for (let a = 1; i + a < lines.length; a++) {
        // console.log(i + a, lines[i + a][j]);
        if (lines[i + a][j] >= lines[i][j]) {
          hasBiggerBottom = true;
        }
      }
      if (!hasBiggerBottom) {
        console.log(i, j, lines[i][j], lines[i])
        seeable++
        continue;
      }
    }
  }
  console.log(seeable)
}

function solve2(input) {
  const lines = input.split('\n').map(line => [...line].map(Number));

  let maxScore = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (i === 0 || j === 0 || i === lines.length - 1 || j === lines[i].length - 1) {
        continue;
      }

      let leftScore = 0;
      for (let a = 1; j - a >= 0; a++) {
        // console.log(j - a, lines[i][j - a]);
        leftScore++;
        if (lines[i][j - a] >= lines[i][j]) {
          break;
        }
      }

      let rightScore = 0;
      for (let a = 1; j + a < lines[i].length; a++) {
        // console.log(j + a, lines[i][j + a]);
        rightScore++
        if (lines[i][j + a] >= lines[i][j]) {
          break;
        }
      }

      let topScore = 0;
      for (let a = 1; i - a >= 0; a++) {
        // console.log(i - a, lines[i - a][j]);
        topScore++;
        if (lines[i - a][j] >= lines[i][j]) {
          break;
        }
      }

      let bottomScore = 0;
      for (let a = 1; i + a < lines.length; a++) {
        // console.log(i + a, lines[i + a][j]);
        bottomScore++;
        if (lines[i + a][j] >= lines[i][j]) {
          break;
        }
      }

      const score = topScore * bottomScore * leftScore * rightScore;
      if (score > maxScore) {
        maxScore = score;
      }
      // console.log(topScore * bottomScore * leftScore * rightScore)
    }
  }
  console.log(maxScore)
}


solve2(input);
