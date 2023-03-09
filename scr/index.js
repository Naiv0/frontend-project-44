import readlineSync from 'readline-sync';
import nameAsk from './cli.js';

const gameStart = (numOfGame) => {
  console.log('Welcome to brain games!');
  const name = nameAsk();
  switch (numOfGame) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 2:
      console.log('What is the result of the expression?');
      break;
    case 3:
      console.log('Find the greatest common divisor of given numbers.');
      break;
    default:
      break;
  }
  return name;
};

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

const Congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export {
  gameStart,
  askUserAnswer,
  isUserRightCheck,
  Congratulations,
};
