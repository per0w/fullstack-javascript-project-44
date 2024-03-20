import createGame, { getRandomNumber } from '../index.js';

const generateListOfNumber = (startOfList = 1, endOfList = 10) => {
  const result = [];

  const step = getRandomNumber(1, 4);

  for (let i = startOfList; i <= endOfList * step; i += step) {
    result.push(i);
  }

  return result;
};

const progressionGame = () => {
  const startOfList = getRandomNumber(1, 19);

  const endOfList = getRandomNumber(20, 30);

  const progressionNumbers = generateListOfNumber(startOfList, endOfList);

  const randomIndex = getRandomNumber(0, progressionNumbers.length - 1);

  const correctAnswer = progressionNumbers[randomIndex];

  progressionNumbers[randomIndex] = '..';

  return {
    gameQuestion: progressionNumbers.join(' '),
    correctAnswer,
  };
};

export default () => createGame(progressionGame, {
  gameDescription: 'What number is missing in the progression?',
});
