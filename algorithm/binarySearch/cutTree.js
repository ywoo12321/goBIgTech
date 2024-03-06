const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [treeNumber, wantLength] = input
  .shift()
  .split(" ")
  .map((number) => Number(number));
const treeList = input
  .shift()
  .split(" ")
  .map((number) => Number(number))
  .sort((a, b) => a - b);

//wantlength 와 같은지 다른지 check
//이진탐색으로 해결

const isWantLength = (arr, target, tryLength) => {
  let count = 0;
  arr.map((length) => {
    length > tryLength ? (count += length - tryLength) : (count += 0);
  });
  //   console.log("tryLength : ", tryLength);
  if (count >= target) return true;
  else return false;
};

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (isWantLength(arr, target, mid)) start = mid + 1;
    else end = mid - 1;
  }
  return start - 1;
};

const answer = binarySearch(treeList, wantLength, 1, treeList[treeNumber - 1]);

console.log(answer);
