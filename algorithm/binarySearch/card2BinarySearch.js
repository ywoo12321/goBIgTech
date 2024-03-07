const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return leftIndex - rightIndex;
};

answer = "";
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + " ";
}

console.log(answer);
