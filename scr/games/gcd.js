import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;
let small;
let big;

const getSmallestAndBiggestNum = (number1, number2) => {
  if (number1 < number2) {
    small = number1;
    big = number2;
  } else {
    small = number2;
    big = number1;
  }
};

const findTheGreatestCommonDivider = (smallest, biggest) => {
  for (let i = smallest; i >= 1; i -= 1) {
    if (smallest % i === 0 && biggest % i === 0) {
      rightAnswer = i;
      break;
    }
  }
};

export default function gcdLogic() {
  const name = gameStart(3);
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    getSmallestAndBiggestNum(num1, num2);
    findTheGreatestCommonDivider(small, big);
    console.log(`Question: ${num1} ${num2}`);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (isRight !== true) {
      break;
    }
    // nothing
  }
  return isRight === true ? Congratulations(name) : null;
}
