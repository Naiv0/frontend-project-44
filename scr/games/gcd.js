import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';

const getSmallestAndBiggestNum = (number1, number2) => {
  let small;
  let big;
  if (number1 < number2) {
    small = number1;
    big = number2;
  } else {
    small = number2;
    big = number1;
  }
  return [small, big];
};

const gcdRule = () => {
  let rightAnswer;
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);
  const question = `${num1} ${num2}`;
  const [smallest, biggest] = getSmallestAndBiggestNum(num1, num2);
  for (let i = smallest; i >= 1; i -= 1) {
    if (smallest % i === 0 && biggest % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  return [question, rightAnswer];
};

export default function gcdLogic() {
  roundLogic(gcdRule, 3);
}
