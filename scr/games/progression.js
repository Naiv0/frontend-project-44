import getRandomIntInclusive from '../random-num-in-range-inclusive.js';
import { roundLogic } from '../index.js';

const getRandomProgression = () => {
  const progression = [];
  const step = getRandomIntInclusive(1, 10);
  for (let i = getRandomIntInclusive(1, 100), j = 0; j < 10; i += step, j += 1) {
    progression.push(i);
  }
  return progression;
};

const GetNumTohidden = () => {
  const num = getRandomIntInclusive(1, 10) - 1;
  return num;
};

const getRoundProgression = () => {
  const progression = getRandomProgression();
  const roundNum = GetNumTohidden();
  const whichIsMissing = progression[roundNum];
  progression.splice(roundNum, 1, '..');
  const progressionWithHidden = progression.join(' ');
  return [progressionWithHidden, whichIsMissing];
};

const progressionRule = () => {
  const [question, rightAnswer] = getRoundProgression();
  return [question, rightAnswer];
};

export default function progressionLogic() {
  roundLogic(progressionRule, 4);
}
