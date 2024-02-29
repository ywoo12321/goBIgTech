const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const numberString = Number(input.shift());

//하나씩 담고 전에거가 지금거랑 다른데 배열이 이미 존재하는 것이라면 안된다.
//나라면 set , array 하나씩 만들어서 set에는 기존에 있던 것들 넣고, array.pop()으로 비교할듯?

let count = 0;
const wordAnalyze = (word) => {
  const letters = word.split("");
  let speciesLetter = new Set();
  let letterArray = [];
  letters.map((letter) => {
    if (findLetter(letter, speciesLetter, letterArray)) {
      speciesLetter.add(letter);
      letterArray.push(letter);
    }
  });
  if (letterArray.toString() === letters.toString()) {
    count += 1;
  }
};

const findLetter = (letter, speciesLetter, letterArray) => {
  if (letterArray[letterArray.length - 1] === letter) {
    return true;
  } else {
    if (!speciesLetter.has(letter)) {
      return true;
    }
    return false;
  }
};

input.map((word) => {
  wordAnalyze(word);
});

console.log(count);
