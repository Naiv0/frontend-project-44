import nameAsk from './cli.js';

const hello = (description) => {
  console.log('Welcome to the Brain Games!');
  const name = nameAsk();
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  return name;
};
export default hello;
