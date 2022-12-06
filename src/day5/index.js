const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "riddle.txt"), "utf8")
  .toString()
  .split("\n\n");

let containersInitial = input[0].split("\n");

let containerCount = (containersInitial[0].length + 1) / 4;
let containers = new Array(containerCount).fill("");

for (let i = 0; i < containersInitial.length - 1; i++) {
  let line = containersInitial[i];
  for (let i = 1; i < line.length; i += 4) {
    if (line[i] !== " ") {
      containers[Math.floor(i / 4)] += line[i];
    }
  }
}

let instructions = input[1]
  .trim()
  .split("\n")
  .map((instruction) => {
    let split = instruction.split(" ");
    return {
      count: parseInt(split[1]),
      from: parseInt(split[3]) - 1,
      to: parseInt(split[5]) - 1,
    };
  });

let inputs = { containers, instructions };

const part1 = () => {
  let { containers, instructions } = inputs;

  for (let instruction of instructions) {
    let taken = containers[instruction.from].substring(0, instruction.count);
    taken = taken.split("").reverse().join("");

    let left = containers[instruction.from].substring(instruction.count);
    containers[instruction.from] = left;

    containers[instruction.to] = taken + containers[instruction.to];
  }

  let result = "";
  for (let container of containers) {
    result += container[0];
  }

  console.log(result);
}

const part2 = () => {
  let { containers, instructions } = inputs;

  for (let instruction of instructions) {
    let taken = containers[instruction.from].substring(0, instruction.count);

    let left = containers[instruction.from].substring(instruction.count);
    containers[instruction.from] = left;

    containers[instruction.to] = taken + containers[instruction.to];
  }

  let result = "";
  for (let container of containers) {
    result += container[0];
  }

  console.log(result);
}

part2();
