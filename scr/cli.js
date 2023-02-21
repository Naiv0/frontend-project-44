import readlineSync from 'readline-sync';

export function MakeFirstName (userName) {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}