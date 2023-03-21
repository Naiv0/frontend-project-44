import {
  askUserAnswer, isUserRightCheck, congratulations,
} from './util.js';
import hello from './hello.js';

function roundLogic(rule, description) {
  const name = hello(description);
  let isRight = false;
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = rule[i];
    console.log(`Question: ${question}`);
    const answer = askUserAnswer();
    isRight = isUserRightCheck(answer, rightAnswer, name);
    if (!isRight) {
      return null;
    }
  }
  return congratulations(name);
}

export default roundLogic;
