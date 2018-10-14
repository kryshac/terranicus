var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];
let Y, X;
rl.on("line", line => input.push(line.split(" ").map(v => parseInt(v))));

setTimeout(() => {
  console.log(input);
  console.log("\n\n");

  [Y, X] = input[0];
  input.shift();

  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (input[y][x] == 3) {
        changeIntoSwamp(y - 1, x);
        changeIntoSwamp(y + 1, x);
        changeIntoSwamp(y, x - 1);
        changeIntoSwamp(y, x + 1);
      }
    }
  }

  let max = 0;

  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (input[y][x] == 2) {
        const size = whichIsSize(y, x);

        max = size > max ? size : max;
      }
    }
  }

  console.log(max);
}, 1000);

const changeIntoSwamp = (y, x) => {
  if (checkIsInPolygon(y, x) && input[y][x] == 2) {
    input[y][x] = 3;
  }
};

const whichIsSize = (y, x) => {
  if (checkIsInPolygon(y, x) && input[y][x] == 2) {
    input[y][x] = 4;
    return (
      1 +
      whichIsSize(y - 1, x) +
      whichIsSize(y + 1, x) +
      whichIsSize(y, x - 1) +
      whichIsSize(y, x + 1)
    );
  } else {
    return 0;
  }
};

const checkIsInPolygon = (y, x) => {
  return y > -1 && y < Y && x > -1 && x < X;
};
