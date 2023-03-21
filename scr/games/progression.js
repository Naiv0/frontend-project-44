import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import roundLogic from '../index.js';
import { getQuestionAndAnswerArray } from '../util.js';

const getRandomProgression = () => {
  const progression = [];
  const step = getRandomIntInclusive(1, 10);
  for (let i = getRandomIntInclusive(1, 100), j = 0; j < 10; i += step, j += 1) {
    progression.push(i);
  }
  return progression;
};

const getNumTohidden = () => {
  const num = getRandomIntInclusive(1, 10) - 1;
  return num;
};

const progressionRule = () => {
  const progression = getRandomProgression();
  const roundNum = getNumTohidden();
  const rightAnswer = progression[roundNum];
  progression.splice(roundNum, 1, '..');
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const desc = 'What number is missing in the progression?';

export default function progressionLogic() {
  roundLogic(getQuestionAndAnswerArray(3, progressionRule), desc);
}
