let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

/*************************************/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayBG = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
/*************************************/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no num input
  if (!guess) {
    displayMessage('⛔ No input');
  }
  // when right guess
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    displayBG('#60b347');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highScore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // to avoid 0 and negatives
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
      score--;

      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');

      displayScore('0');

      displayBG('red');
    }
  }
});

/************Again btn************/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayBG('#222');

  displayMessage('Start guessing...');

  displayScore(score);
  document.querySelector('.guess').value = '';

  displayNumber('?');
});
