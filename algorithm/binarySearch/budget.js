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
  .sort((a, b) => a - b);
const totalBudget = Number(input.shift());

const isBiggerThanTotal = (arr, totalBudget, budget) => {
  let money = 0;
  arr.map((budgetMoney) => {
    if (budgetMoney >= budget) money += budget;
    else money += budgetMoney;
  });
  if (money > totalBudget) return true;
  else return false;
};

const binarySearch = (arr, target, start, end) => {
  const arrSum = arr.reduce((a, b) => a + b);
  if (arrSum <= target) return end;
  else {
    let result = 0;
    while (start <= end) {
      const mid = parseInt((start + end) / 2);
      if (!isBiggerThanTotal(arr, target, mid)) {
        result = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return result;
  }
};

// 최대 금액 < 상한액 및 요구 금액 합계 break
// start : localNumber , bugetList[localNumber-1]

const answer = binarySearch(budgetList, totalBudget, 1, budgetList[localNumber - 1]);

console.log(answer);
