const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const numberList = input.shift().split(" ").map(Number);
let maxNumber = -1e9;

const dfs = () => {};

for (let i = 0; i < N; i++) {
  const copyArray = JSON.parse(JSON.stringify(numberList));
  const nowNumber = numberList[i];
  copyArray.splice(i, 1);
  for (let j = 0; j < N; j++) {
    copyArray.splice(j, 0, nowNumber);
    current = 0;
    for (let k = 0; k < N - 1; k++) {
      current += Math.abs(copyArray[k] - copyArray[k + 1]);
    }
    console.log(copyArray, current);
    maxNumber = Math.max(maxNumber, current);
    copyArray.splice(j, 1);
  }
}
console.log(maxNumber);
//For 문 돌려서 하나씩 뽑아서 모든 위치에 넣고 절대값 계산기 함수 => 최대값 저장
