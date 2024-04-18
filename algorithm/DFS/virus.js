const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const computerNumber = Number(input.shift());
const networkPairNumber = Number(input.shift());

const networkList = Array.from(Array(computerNumber + 1), () => new Array());
const visited = new Array(computerNumber + 1).fill(false);
let countVirusComputer = -1;

for (let i = 0; i < networkPairNumber; i++) {
  const [left, right] = input[i].split(" ").map(Number);
  networkList[right].push(left);
  networkList[left].push(right);
}

const dfs = (arr, target, visited) => {
  visited[target] = true;
  countVirusComputer += 1;
  for (computer of arr[target]) {
    if (!visited[computer]) {
      dfs(arr, computer, visited);
    }
  }
};

dfs(networkList, 1, visited);

console.log(countVirusComputer);
