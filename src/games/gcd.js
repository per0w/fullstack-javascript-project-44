import createGame, { getRandomNumber } from '../index.js';

/**
 * Алгоритм Евклида
 * 1. Большее число делим на меньшее.
 * 2. Если делится без остатка, то меньшее число и есть НОД (следует выйти из цикла).
 * 3. Если есть остаток, то большее число заменяем на остаток от деления.
 * 4. Переходим к пункту 1.
*/
const getGcd = (numberOne, numberTwo) => {
  let a = numberOne;

  let b = numberTwo;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const gcdGame = () => {
  const randomNumberOne = getRandomNumber(20, 50);

  const randomNumberTwo = getRandomNumber(20, 50);

  const correctAnswer = getGcd(randomNumberOne, randomNumberTwo);

  return {
    gameQuestion: `${randomNumberOne} ${randomNumberTwo}`,
    correctAnswer,
  };
};

export default () => createGame(gcdGame, {
  gameDescription: 'Find the greatest common divisor of given numbers.',
});
