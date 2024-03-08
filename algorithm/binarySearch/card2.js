const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const sangunCardNum = Number(input.shift());
const sangunCardList = input
  .shift()
  .split(" ")
  .map((number) => Number(number));

const cardNum = Number(input.shift());
const cardList = input
  .shift()
  .split(" ")
  .map((number) => Number(number));

const sangunCardDack = sangunCardList.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

let answer = "";
cardList.map((number) => {
  if (sangunCardDack.hasOwnProperty(number)) {
    answer += sangunCardDack[number] + " ";
  } else answer += 0 + " ";
});

console.log(answer);
