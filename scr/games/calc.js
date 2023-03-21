import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';
import { getQuestionAndAnswerArray } from '../util.js';

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
      console.log('error! out of bounds');
      break;
  }
  return [question, rightAnswer];
}

const desc = 'What is the result of the expression?';

export default function calcLogic() {
  roundLogic(getQuestionAndAnswerArray(3, calcRule), desc);
}
