const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const words = input.shift().split(" ");

words[0] == "" ? console.log(0) : console.log(words.length);
