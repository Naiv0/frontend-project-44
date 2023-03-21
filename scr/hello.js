import nameAsk from './cli.js';

const hello = (description = null) => {
  console.log('Welcome to the Brain Games!');
  const name = nameAsk();
  console.log(`Hello, ${name}!`);
  if (description !== null) {
    console.log(description);
  }
  return name;
};
export default hello;
