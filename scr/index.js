import readlineSync from 'readline-sync';
import nameAsk from './cli.js';
import getRandomIntInclusive from './random-num-in-range-inclusive.js';

const rightAnswersToWin = 3;
let userAnswer;
let rightAnswer;
let name;
let userAreRight;
let smallestNum;
let biggestNum;
let progression = [];
const progressionLength = 10;
let progressionStartNum;
let progressionStep;
let hiddenNum;
let roundProgresstion;
let progressionWithHidden;
let GameNumber;

export const gameStart = (WhatKindOfGame) => {
  console.log('Welcome to the Brain Games!');
  name = nameAsk();
  console.log(`Hello, ${name}!`);
  switch (WhatKindOfGame) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 2:
      console.log('What is the result of the expression?');
      break;
    case 3:
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 4:
      console.log('What number is missing in the progression?');
      break;
    case 5:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
};

const updateNumber = () => {
  GameNumber = getRandomIntInclusive(1, 100);
  return GameNumber;
};

const askUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

const AreUserRightCheck = () => {
  if (`${userAnswer}` === `${rightAnswer}`) {
    console.log('Correct!');
    userAreRight = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    userAreRight = false;
  }
};

const Congratulations = () => (console.log(`Congratulations, ${name}!`));

const isEven = (num) => {
  rightAnswer = num % 2 === 0 ? 'yes' : 'no';
};

const selectCalcGameAction = (num1, num2) => {
  switch (getRandomIntInclusive(1, 3)) {
    case 1:
      console.log(`Question: ${num1} + ${num2}`);
      rightAnswer = num1 + num2;
      break;
    case 2:
      console.log(`Question: ${num1} - ${num2}`);
      rightAnswer = num1 - num2;
      break;
    case 3:
      console.log(`Question: ${num1} * ${num2}`);
      rightAnswer = num1 * num2;
      break;
    default:
      console.log('woops!');
      break;
  }
};

const GetSmallestAndBiggestNum = (number1, number2) => {
  if (number1 >= number2) {
    smallestNum = number2;
    biggestNum = number1;
  } else {
    smallestNum = number1;
    biggestNum = number2;
  }
};

const GetGreatestCommonDivider = (num1 = smallestNum, num2 = biggestNum) => {
  for (let j = num1; j > 0; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      rightAnswer = j;
      break;
    }
  }
};

const GetRandomProgression = () => {
  progressionStartNum = getRandomIntInclusive(1, 25);
  progressionStep = getRandomIntInclusive(1, 10);
  for (let k = 1; k < progressionLength; k += 1) {
    progression.push(progressionStartNum + (progressionStep * k));
  }
  // console.log(progression) //debug
  return progression;
};

const makeHiddenNumAnswer = (arrOfNums) => {
  const numberOfNumToHideInProgression = getRandomIntInclusive(1, 10) - 1;
  hiddenNum = arrOfNums[numberOfNumToHideInProgression];
  rightAnswer = hiddenNum;
  progressionWithHidden = arrOfNums;
  progressionWithHidden[numberOfNumToHideInProgression] = '..';
};

const clearProgressions = () => {
  progression = [];
  progressionWithHidden = [];
  roundProgresstion = [];
};

const numberIsPrimeCheck = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      rightAnswer = 'no';
      return null;
    }
    // nothing
  }
  rightAnswer = 'yes';
  return null;
};

export const gameEven = () => {
  gameStart(1);
  for (let i = 0; i < rightAnswersToWin; i += 1) {
    const number = updateNumber();
    isEven(number);
    console.log(`Question: ${number}`);
    askUserAnswer();
    AreUserRightCheck();
    if (userAreRight !== true) return null;
  }
  return Congratulations();
};

export const gameCalc = () => {
  gameStart(2);
  for (let u = 0; u < rightAnswersToWin; u += 1) {
    const number1 = updateNumber();
    const number2 = updateNumber();
    selectCalcGameAction(number1, number2);
    askUserAnswer();
    AreUserRightCheck();
    if (userAreRight !== true) return null;
  }
  return Congratulations();
};

export const gameGCD = () => {
  gameStart(3);
  for (let g = 0; g < rightAnswersToWin; g += 1) {
    const number1 = updateNumber();
    const number2 = updateNumber();
    GetSmallestAndBiggestNum(number1, number2);
    GetGreatestCommonDivider();
    console.log(`Question: ${number1} ${number2}`);
    askUserAnswer();
    AreUserRightCheck();
    if (userAreRight !== true) return null;
  }
  return Congratulations();
};

export const gameProgression = () => {
  gameStart(4);
  for (let m = 0; m < rightAnswersToWin; m += 1) {
    clearProgressions();
    roundProgresstion = GetRandomProgression();
    makeHiddenNumAnswer(roundProgresstion);
    console.log(`Question: ${progressionWithHidden.join(' ')}`);
    askUserAnswer();
    AreUserRightCheck();
    if (userAreRight !== true) return null;
  }
  return Congratulations();
};

export const gamePrime = () => {
  gameStart(5);
  for (let h = 0; h < rightAnswersToWin; h += 1) {
    const number = updateNumber();
    numberIsPrimeCheck(number);
    console.log(`Question: ${number}`);
    askUserAnswer();
    AreUserRightCheck();
    if (userAreRight !== true) return null;
  }
  return Congratulations();
};
