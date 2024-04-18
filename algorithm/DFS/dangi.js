const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const dangiNumber = Number(input.shift());
const dangiMap = new Array();
const visited = new Array();

for (let i = 0; i < dangiNumber; i++) {
  dangiMap.push(input.shift().split("").map(Number));
  visited.push(new Array(dangiNumber).fill(false));
}

// console.log(visited.map((row) => `[${row.join(", ")}]`).join(",\n"));

const dfs = (arr, visited, [x, y], row, column, count) => {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  if (x <= -1 || y <= -1 || x >= row || y >= column) return false;
  if (arr[y][x] == 1 && visited[y][x] == false) {
    visited[y][x] = count;
    for (let i = 0; i < 4; i++) {
      const nextX = x + direction[i][0];
      const nextY = y + direction[i][1];
      dfs(arr, visited, [nextX, nextY], row, column, count);
    }
    return true;
  }
  return false;
};
let answer = "";
let count = 1;
for (let i = 0; i < dangiNumber; i++) {
  for (let j = 0; j < dangiNumber; j++) {
    const countDangi = dfs(dangiMap, visited, [i, j], dangiNumber, dangiNumber, count);
    if (countDangi) count += 1;
  }
}
answerDic = visited.flat(Infinity).reduce((acc, cur) => {
  if (cur != false) acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
answerKeyLength = Object.keys(answerDic).length;
answer += answerKeyLength + "\n";
answerList = Object.values(answerDic).sort((a, b) => a - b);
answerList.map((answerNumber) => (answer += answerNumber + "\n"));
answer == "" ? console.log(0) : console.log(answer.trim());
