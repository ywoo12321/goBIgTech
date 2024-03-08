const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [alreadyHas, needNumber] = input
  .shift()
  .split(" ")
  .map((number) => Number(number));
const lanList = input.map((number) => Number(number)).sort((a, b) => a - b);

// 각자 랜선 길이에서 mid의 값으로 나눈 몫의 합 >= traget start = mid +1 else end = mid -1

const isPossibleLength = (arr, target, cutLength) => {
  let count = 0;
  arr.map((lanLength) => {
    count += parseInt(lanLength / cutLength);
  });
  if (count >= target) return true;
  else return false;
};

const binarySearch = (arr, target, start, end) => {
  let result = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (isPossibleLength(arr, target, mid)) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

const answer = binarySearch(lanList, needNumber, 1, lanList[alreadyHas - 1]);
console.log(answer);
