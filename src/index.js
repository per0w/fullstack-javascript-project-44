import cli from './cli.js';

export const getRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const createGame = (game, { round = 3, gameDescription }) => {
  const { name, question } = cli();

  console.log(gameDescription);

  let i = 1;

  do {
    const { gameQuestion, correctAnswer } = game();

    console.log(`Question: ${gameQuestion}`);

    const answer = question('Your answer: ');

    if (String(correctAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`,
      );

      return;
    }

    i += 1;
  } while (i <= round);

  console.log(`Congratulations, ${name}!`);
};

export default createGame;
