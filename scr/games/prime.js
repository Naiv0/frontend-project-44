import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;
const notPrimeDividers = [2, 3, 5, 7, 11];

const isNumberIsPrime = (num) => {
  for (let i = notPrimeDividers.length; i > 0; i -= 1) {
    if (num % notPrimeDividers[i] !== 0 || num === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
      break;
    }
  }
};
export default function primeLogic() {
  const name = gameStart(5);
  for (let i = 0; i < rounds; i += 1) {
    const number = getRandomIntInclusive(1, 100);
    isNumberIsPrime(number);
    console.log(`Question: ${number}`);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (isRight !== true) {
      break;
    }
    // nothing
  }
  return isRight === true ? Congratulations(name) : null;
}
