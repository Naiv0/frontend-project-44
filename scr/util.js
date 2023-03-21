import readlineSync from 'readline-sync';

const askUserAnswer = () => {
  const userAnswer = readlineSync.question('Answer: ');
  return userAnswer;
};

const isUserRightCheck = (Answer, rightAnswer, name) => {
  let userAreRight;
  if (`${Answer}` === `${rightAnswer}`) {
    console.log('Correct!');
    userAreRight = true;
  } else {
    console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    userAreRight = false;
  }
  return userAreRight;
};

const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getQuestionAndAnswerArray = (rounds, rule) => {
  const gameQuestionAndAnswerArray = [];
  for (let i = 0; i < rounds; i += 1) {
    gameQuestionAndAnswerArray.push(rule());
  }
  return gameQuestionAndAnswerArray;
};

export {
  askUserAnswer,
  isUserRightCheck,
  getQuestionAndAnswerArray,
  congratulations,
};
