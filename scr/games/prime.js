import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import { roundLogic } from '../index.js';

const notPrimeDividers = [2, 3, 5, 7, 11];

const primeRule = () => {
  const question = getRandomIntInclusive(1, 100);
  let rightAnswer;
  for (let i = notPrimeDividers.length; i >= 0; i -= 1) {
    if (question % notPrimeDividers[i] !== 0 || question === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
      break;
    }
  }
  return [question, rightAnswer];
};

export default function primeLogic() {
  roundLogic(primeRule, 5);
}
