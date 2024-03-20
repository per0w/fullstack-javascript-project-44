import createGame, { getRandomNumber } from '../index.js';

const getIsPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const evenGame = () => {
  const randomNumber = getRandomNumber(1, 100);

  const isPrime = getIsPrime(randomNumber);

  const correctAnswer = isPrime ? 'yes' : 'no';

  return {
    gameQuestion: randomNumber,
    correctAnswer,
  };
};

export default () => createGame(evenGame, {
  gameDescription:
      'Answer "yes" if given number is prime. Otherwise answer "no".',
});
