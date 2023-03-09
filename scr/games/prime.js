import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;

const isNumberIsPrime = (num) => {
  for (let i = num; i > 1; i -= 1) {
    if (num % i !== 0 || num === 1) {
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
