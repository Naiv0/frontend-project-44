import readlineSync from 'readline-sync';

function nameAsk () {
    let userName = readlineSync.question('May I have your name? ');
    return userName;
}
export { nameAsk };