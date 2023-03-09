import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;

function WhatExpression(number1, number2) {
  const select = getRandomIntInclusive(1, 3);
  switch (select) {
    case 1:
      console.log(`Question: ${number1} + ${number2}`);
      rightAnswer = number1 + number2;
      break;
    case 2:
      console.log(`Question: ${number1} - ${number2}`);
      rightAnswer = number1 - number2;
      break;
    case 3:
      console.log(`Question: ${number1} * ${number2}`);
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
}

export default function calcLogic() {
  const name = gameStart(2);
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    WhatExpression(num1, num2);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (isRight !== true) {
      break;
    }
    // nothing
  }
  return isRight === true ? Congratulations(name) : null;
}
