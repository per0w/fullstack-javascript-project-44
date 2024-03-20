import readlineSync from 'readline-sync';
import cli from './cli.js';

const brainEvenGame = (repeatCount = 3) => {
  const name = cli();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;

  do {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;

    const correctAnswer = isEven ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`,
      );

      return;
    }

    i += 1;
  } while (i <= repeatCount);

  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
