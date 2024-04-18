const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const numberList = input.shift().split(" ").map(Number);
const visited = new Array(N).fill(false);
const result = [];
let maxNumber = -1e9;

const dfs = (count) => {
  if (count === N) {
    let current = 0;
    for (let i = 0; i < N - 1; i++) {
      current += Math.abs(result[i] - result[i + 1]);
    }
    maxNumber = Math.max(current, maxNumber);
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(numberList[i]);
    dfs(count + 1);
    visited[i] = false;
    result.pop();
  }
};
dfs(0);
console.log(maxNumber);
//For 문 돌려서 하나씩 뽑아서 모든 위치에 넣고 절대값 계산기 함수 => 최대값 저장
