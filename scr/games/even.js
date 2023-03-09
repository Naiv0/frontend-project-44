import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;

const isEven = (number) => {
  rightAnswer = number % 2 === 0 ? 'yes' : 'no';
};

export default function evenLogic() {
  const name = gameStart(1);
  for (let i = 0; i < rounds; i += 1) {
    const roundNum = getRandomIntInclusive(1, 100);
    isEven(roundNum);
    console.log(`Question: ${roundNum}`);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (isRight !== true) {
      break;
    }
    // nothing
  }
  return isRight === true ? Congratulations(name) : null;
}
