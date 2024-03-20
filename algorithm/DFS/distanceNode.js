const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = new Array(n + 1).fill().map(() => new Object());
let answer = "";
let dist = 0;

for (let i = 0; i < n - 1; i++) {
  const [node1, node2, distance] = input.shift().split(" ").map(Number);
  graph[node1][node2] = distance;
  graph[node2][node1] = distance;
}

const dfs = (startNode, endNode, visit, distance) => {
  if (Number(startNode) == Number(endNode)) {
    dist += distance;
  }
  visit[startNode] = true;
  for (i of Object.keys(graph[startNode])) {
    if (!visit[i]) dfs(i, endNode, visit, distance + graph[startNode][i]);
  }
};

for (let i = 0; i < m; i++) {
  const [startNode, endNode] = input.shift().split(" ").map(Number);
  let visit = new Array(n + 1).fill(false);
  dfs(startNode, endNode, visit, 0);
  answer += dist + "\n";
  dist = 0;
}
console.log(answer.trim());
