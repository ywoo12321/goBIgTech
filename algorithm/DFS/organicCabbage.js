const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input.shift());
let answer = "";

const dfs = (farm, visited, [startY, startX], column, row) => {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  if (startX <= -1 || startY <= -1 || startY >= row || startX >= column) return false;

  if (farm[startY][startX] === 1 && visited[startY][startX] == false) {
    // console.log(" X : ", startX, "Y : ", startY);
    visited[startY][startX] = true;
    for (let i = 0; i < 4; i++) {
      nextY = direction[i][0] + startY;
      nextX = direction[i][1] + startX;
      dfs(farm, visited, [nextY, nextX], column, row);
    }
    return true;
  }

  return false;
};

for (let i = 0; i < testCase; i++) {
  const [column, row, cabbageNum] = input.shift().split(" ").map(Number);
  const farm = Array.from(Array(row), () => Array(column).fill(0));
  const visited = Array.from(Array(row), () => Array(column).fill(false));
  for (let i = 0; i < cabbageNum; i++) {
    const [row, col] = input.shift().split(" ").map(Number);
    farm[col][row] = 1;
  }
  //   console.log(farm.map((row) => `[${row.join(", ")}]`).join(",\n"));
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      //   console.log("X :", i, "Y : ", j);
      if (dfs(farm, visited, [i, j], column, row)) count += 1;
    }
  }
  //   console.log(visited.map((row) => `[${row.join(", ")}]`).join(",\n"));
  answer += count + "\n";
}

console.log(answer.trim());
