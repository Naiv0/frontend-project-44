import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';

function calcRule() {
  const select = getRandomIntInclusive(1, 3);
  let question;
  let rightAnswer;
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);
  switch (select) {
    case 1:
      question = (`${number1} + ${number2}`);
      rightAnswer = number1 + number2;
      break;
    case 2:
      question = (`${number1} - ${number2}`);
      rightAnswer = number1 - number2;
      break;
    case 3:
      question = (`${number1} * ${number2}`);
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  return [question, rightAnswer];
}

export default function calcLogic() {
  roundLogic(calcRule, 2);
}
