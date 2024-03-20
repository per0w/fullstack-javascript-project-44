import createGame, { getRandomNumber } from '../index.js';

const OPERATIONS = ['+', '-', '*'];

const calcGame = () => {
  const randomNumberOne = getRandomNumber();

  const randomNumberTwo = getRandomNumber();

  const randomOperationsIndex = getRandomNumber(0, 2);

  const randomOperation = OPERATIONS[randomOperationsIndex];

  let correctAnswer = 0;

  switch (randomOperation) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;

      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;

      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;

      break;
    default:
      break;
  }

  return {
    gameQuestion: `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`,
    correctAnswer,
  };
};

export default () => createGame(calcGame, {
  gameDescription: 'What is the result of the expression?',
});
