const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [row, column] = input.shift().split(" ").map(Number);
const labatoryMap = new Array();
const visited = new Array();
for (let i = 1; i <= row; i++) {
  labatoryMap.push(input.shift().split(" ").map(Number));
  visited.push(new Array(column).fill(0));
}
let answer = -1e9;
// console.log(labatoryMap.map((row) => `[${row.join(", ")}]`).join(",\n"));
// console.log(visited.map((row) => `[${row.join(", ")}]`).join(",\n"));
const countZeros = (labatoryMap) => {
  const flattenedArray = labatoryMap.reduce((acc, row) => acc.concat(row), []);
  const zeroCount = flattenedArray.reduce((count, value) => {
    if (value === 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  return zeroCount;
};

const contagious = (startX, startY) => {
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  for (let i = 0; i < 4; i++) {
    const nx = startX + dx[i];
    const ny = startY + dy[i];
    if (nx < 0 || ny < 0 || ny >= column || nx >= row) continue;
    if (visited[nx][ny] == 0) {
      visited[nx][ny] = 2;
      contagious(nx, ny);
    }
  }
};

const buildWall = (count) => {
  if (count === 3) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        visited[i][j] = labatoryMap[i][j];
      }
    }
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (visited[i][j] == 2) contagious(i, j);
      }
    }
    answer = Math.max(answer, countZeros(visited));
    return;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (labatoryMap[i][j] == 0) {
        labatoryMap[i][j] = 1;
        buildWall(count + 1);
        labatoryMap[i][j] = 0;
      }
    }
  }
};

/*
    1. 벽 3개를 설치한다.
    2. 3개가 설치 됐을 때마다 dfs 돌아서 0이 몇개 나오는지 체크한다.
*/
buildWall(0);
console.log(answer);
