import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';
import { getQuestionAndAnswerArray } from '../util.js';

function gcdrec(a, b) {
  if (b) {
    return gcdrec(b, a % b);
  }
  return Math.abs(a);
}

const gcdRule = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = gcdrec(num1, num2);
  return [question, rightAnswer];
};

const desc = 'Find the greatest common divisor of given numbers.';

export default function gcdLogic() {
  roundLogic(getQuestionAndAnswerArray(3, gcdRule), desc);
}
