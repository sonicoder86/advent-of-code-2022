const readfile = require('../helper/readfile');

function getPriority(char) {
  let priority = char.charCodeAt();
  return char === char.toLowerCase() ? priority - 96 : priority - 64 + 26
}

const solve = (lines) => {
  let score = 0;
  for (const line of lines) {
    const middle = Math.floor(line.length / 2);
    const before = line.substring(0, middle);
    const after = line.substring(middle);

    const matches = before.match(new RegExp('[' + after + ']', 'g'));
    score += getPriority(matches[0]);
  }

  return score;
}

const solve2 = (lines) => {
  const groups = [];
  let currentGroup = [];
  for (let i = 0; i < lines.length; i++) {
    if (currentGroup.length < 3) {
      currentGroup.push(lines[i])
    } else {
      groups.push(currentGroup);
      currentGroup = [];
      currentGroup.push(lines[i])
    }
  }
  groups.push(currentGroup);

  let score = 0;
  for (const group of groups) {
    const matches1 = group[0].match(new RegExp('[' + group[1] + ']', 'g'));
    const matches2 = group[0].match(new RegExp('[' + group[2] + ']', 'g'));
    const filtered = matches1.filter(value => matches2.includes(value));

    score += getPriority(filtered[0]);
  }

  return score;
}

const content = readfile(__dirname + '/riddle.txt');
console.log(solve2(content));

