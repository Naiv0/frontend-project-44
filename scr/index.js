import { nameAsk } from "./cli.js";
import { getRandomIntInclusive } from "./random-num-in-range-inclusive.js";
import readlineSync from 'readline-sync';

const rightAnswersToWin = 3;
let userAnswer;
let rightAnswer;
let name;
let userRightAnwers = 0;
let userAreRight;
let smallestNum;
let biggestNum

const gameStart = () => {
    console.log('Welcome to the Brain Games!')
    name = nameAsk()
    console.log('Hello, ' + name + '!')
}

const AreUserRightCheck = () => {
    if (userAnswer == rightAnswer) {
        console.log('Correct!');
        userAreRight = true
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
        userAreRight = false
    }
}

const Congratulations = () => {
    return(console.log('Congratulations, ' + name + '!'));
}

const GetSmallestAndBiggestNum = (num1,num2) => {
    if (num1 >= num2) smallestNum = num2, biggestNum = num1;
    if (num1 <= num2) smallestNum = num1, biggestNum = num2;
}

const GetGreatestCommonDivider = (smallestNum,biggestNum) => {
    for (let j = smallestNum; j > 0; j -= 1) {
        if (smallestNum % j === 0 && biggestNum % j === 0) {
            rightAnswer = j
            break;
        }
    }
}

export const gameEven = () => {
 gameStart()
 console.log(`Answer "yes" if the number is even, otherwise answer "no"`);
 for (let gameCounts = 0; gameCounts < rightAnswersToWin; gameCounts += 1) {
   let number = getRandomIntInclusive(1,100);
   number % 2 === 0 ? rightAnswer = 'yes' : rightAnswer = 'no';
   console.log('Question: ' + number)
   userAnswer = readlineSync.question('Your answer: ')
   userAnswer === rightAnswer ? (console.log('Correct!'), userRightAnwers += 1) : console.log('Wrong!')
 }
 return (userRightAnwers === rightAnswersToWin ? Congratulations() : console.log('Try your best next time, ' + name + '!'))
};

export function gameCalc() {
    gameStart()
    console.log('What is the result of the expression?');
    for (let i = 0; i < rightAnswersToWin; i += 1) {
        let number1 = getRandomIntInclusive(1, 100);
        let number2 = getRandomIntInclusive(1, 100);
        switch (getRandomIntInclusive(1, 3)) {
            case 1:
                console.log(`Question: ${number1} + ${number2}`);
                rightAnswer = number1 + number2;
                break;
            case 2:
                console.log(`Question: ${number1} - ${number2}`);
                rightAnswer = number1 - number2;
                break;
            case 3:
                console.log(`Question: ${number1} * ${number2}`);
                rightAnswer = number1 * number2;
                break;
        }
        userAnswer = readlineSync.question('Your answer: ');
        AreUserRightCheck();
        if (userAreRight !== true) return null
    }
   Congratulations();
}

export const gameGCD = () => {
    gameStart();
    console.log('Find the greatest common divisor of given numbers.')
    for (let i = 0; i < rightAnswersToWin; i += 1) {
        let number1 = getRandomIntInclusive(1,100)
        let number2 = getRandomIntInclusive(1,100)
        GetSmallestAndBiggestNum(number1, number2);
        GetGreatestCommonDivider(smallestNum, biggestNum)
        console.log(`Question: ${number1} ${number2}`)
        userAnswer = readlineSync.question('Your answer: ');
        AreUserRightCheck();
        if (userAreRight !== true) return null
    }
   Congratulations();
}