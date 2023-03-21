import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';
import { getQuestionAndAnswerArray } from '../util.js';

const isEven = (num) => num % 2 === 0;

const evenRule = () => {
  const random = getRandomIntInclusive(1, 100);
  const rightAnswer = isEven(random) ? 'yes' : 'no';
  return [random, rightAnswer];
};

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function evenLogic() {
  roundLogic(getQuestionAndAnswerArray(3, evenRule), desc);
}
