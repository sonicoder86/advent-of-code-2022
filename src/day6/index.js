const path = require("path");
const fs = require("fs");

const file = fs
  .readFileSync(path.join(__dirname, "riddle.txt"), "utf8")
  .toString()
  .trim();

const input = [...file]

for(let i = 0; i < input.length; i++) {
  let x = new Set(input.slice(i, i+4))

  if(x.size  === 4) {
    console.log(i+4)
    break
  }
}

for(let i = 0; i < input.length; i++) {
  let x = new Set(input.slice(i, i+14))

  if(x.size  === 14) {
    console.log(i+14)
    break
  }
}

