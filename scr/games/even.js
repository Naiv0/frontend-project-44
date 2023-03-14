import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';

const isEven = (num) => num % 2 === 0;

const evenRule = () => {
  const random = getRandomIntInclusive(1, 100);
  const rightAnswer = isEven(random) ? 'yes' : 'no';
  return [random, rightAnswer];
};

export default function evenLogic() {
  roundLogic(evenRule, 1);
}
