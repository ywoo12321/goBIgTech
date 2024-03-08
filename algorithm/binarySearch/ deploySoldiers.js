const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const soldiersNumber = Number(input.shift());
const soldiersPowerList = input.shift().split(" ").map(Number).reverse();

const findNumberLocation = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else start = mid + 1;
  }
  return start;
};

let newArmy = [];
soldiersPowerList.map((power) => {
  const location = findNumberLocation(newArmy, power, 0, newArmy.length);
  location == newArmy.length ? newArmy.push(power) : (newArmy[location] = power);
});

console.log(soldiersPowerList.length - newArmy.length);
