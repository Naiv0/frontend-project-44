import { GameStartNameAsk } from "./cli.js";
import { getRandomIntInclusive } from "./random-num-in-range-inclusive.js";
import readlineSync from 'readline-sync';

export const gameEven = () => {
 const name = GameStartNameAsk();
 const numOfRightAnwers = 3;
 let userRightAnwers = 0;
 console.log(`Answer "yes" if the number is even, otherwise answer "no"`);

 for (let gameCounts = 0; gameCounts < numOfRightAnwers; gameCounts += 1) {
   let number = getRandomIntInclusive(1,100);
   let rightAnswer;
   if (number % 2 === 0) {
    rightAnswer = 'yes'
   } else {
    rightAnswer = 'no'
   }
   console.log('Question: ' + number)
   let userAnswer = readlineSync.question('Your answer: ')
   if (userAnswer === rightAnswer) {
    console.log('Correct!')
    userRightAnwers += 1
   } else {
    console.log('Wrong!')
   }
 }
 if (userRightAnwers === numOfRightAnwers) {
    return (console.log('Congratulations, ' + name + '!'))
 } else {
    return (console.log('Try your best next time, ' + name + '!'))
 }
};