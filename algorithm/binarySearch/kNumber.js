const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arrayLength = Number(input.shift());
const kNumber = Number(input.shift());

let arr = Array.from(Array(arrayLength), () => new Array(arrayLength));
for (let i = 0; i < arrayLength; i++) {
  for (let j = 0; j < arrayLength; j++) {
    arr[i][j] = (i + 1) * (j + 1);
  }
}
const sortArr = arr.flat().sort((a, b) => a - b);
console.log(sortArr[kNumber - 1]);
