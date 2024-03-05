const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const localNumber = Number(input.shift());
const budgetList = input
  .shift()
  .split(" ")
  .map((budget) => Number(budget))
  .sort();
const totalBudget = Number(input.shift());

const parametricSearch = (arr, target, start, end) => {};

// 최대 금액 < 상한액 및 요구 금액 합계 break

console.log(budgetList);
