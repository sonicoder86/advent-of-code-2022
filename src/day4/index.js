const readfile = require('../helper/readfile');

const solve1 = (lines) => {
  return lines.map((pair) => {
    const [begin1, end1, begin2, end2] = pair.split(/[-,]/).map(Number);

    return (begin1 >= begin2 && end1 <= end2) || (begin2 >= begin1 && end2 <= end1);
  }).reduce((sum, v) => sum + v, 0);
}

const solve2 = (lines) => {
  return lines.map((pair) => {
    const [begin1, end1, begin2, end2] = pair.split(/[-,]/).map(Number);

    return begin1 <= end2 && begin2 <= end1;
  }).reduce((sum, v) => sum + v, 0);
}

const content = readfile(__dirname + '/riddle.txt');
console.log(solve2(content));
