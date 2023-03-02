import readlineSync from 'readline-sync';

export default function nameAsk() {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}
