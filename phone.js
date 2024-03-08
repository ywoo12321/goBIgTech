const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const setPhone = new Set();

a = input.map((number) => Number(number));
a.map((number) => {
  setPhone.add(number);
});

console.log(setPhone);
