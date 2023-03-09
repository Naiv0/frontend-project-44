import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import {
  gameStart, askUserAnswer, isUserRightCheck, Congratulations,
} from '../index.js';

const rounds = 3;
let rightAnswer;
let isRight = false;

const getRandomProgression = () => {
  const progression = [];
  const step = getRandomIntInclusive(1, 10);
  for (let i = getRandomIntInclusive(1, 100), j = 0; j < 10; i += step, j += 1) {
    progression.push(i);
  }
  return progression;
};

const GetNumTohidden = () => {
  const num = getRandomIntInclusive(1, 10);
  return num;
};

export default function progressionLogic() {
  const name = gameStart(4);
  for (let i = 0; i < rounds; i += 1) {
    const progression = getRandomProgression();
    const roundNum = GetNumTohidden();
    rightAnswer = progression[roundNum];
    progression.splice(roundNum, 1, '..');
    const progressionWithHidden = progression.join(' ');
    console.log(`Question: ${progressionWithHidden}`);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (isRight !== true) {
      break;
    }
    // nothing
  }
  return isRight === true ? Congratulations(name) : null;
}
