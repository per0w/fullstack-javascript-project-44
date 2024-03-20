import createGame, { getRandomNumber } from '../index.js';

const evenGame = () => {
  const randomNumber = getRandomNumber();

  const isEven = randomNumber % 2 === 0;

  const correctAnswer = isEven ? 'yes' : 'no';

  return {
    gameQuestion: randomNumber,
    correctAnswer,
  };
};

export default () => createGame(evenGame, { gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".' });
