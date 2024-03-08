const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arrayLength = Number(input.shift());
const kNumber = Number(input.shift());

const binarySearch = (target, start, end) => {
  let answer = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let count = 0;
    for (let i = 1; i < arrayLength + 1; i++) {
      count += Math.min(parseInt(mid / i), arrayLength);
    }
    if (count < target) {
      start = mid + 1;
    } else {
      answer = mid;
      end = mid - 1;
    }
  }
  return answer;
};

const answer = binarySearch(kNumber, 1, kNumber);

console.log(answer);
