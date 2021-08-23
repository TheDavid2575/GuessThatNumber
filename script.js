'use strict';

//Guess my Number!

// Creates Random Number
let correctNumber = Math.floor(1 + Math.random() * 20);
let score = 20;
let highScore = 0;

// Button "Check!" triggers (Event Listener)
document
  .querySelector('.check')
  .addEventListener('click', function checkAnswer() {
    let guessNumber = Number(document.querySelector('.guess').value);

    // If no number is passed or Number is lower than 1 or higher than 20
    if (guessNumber === '' || guessNumber < 1 || guessNumber > 20) {
      document.querySelector('.message').textContent = 'Invalid Number ⛔️';
    }

    // If lose
    else if (score === 1) {
      document.querySelector('.number').textContent = 'You lose! ';
      document.querySelector(
        '.message'
      ).textContent = `The number was: ${correctNumber}`;
      score = 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').style.width = '35rem';
    }

    // If number is too low
    else if (guessNumber < correctNumber) {
      document.querySelector('.message').textContent = '⬇️ Too low ...';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // If number is too high
    else if (guessNumber > correctNumber) {
      document.querySelector('.message').textContent = '⬆️ Too high ...';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // If won
    else if (guessNumber === correctNumber) {
      document.querySelector('.message').textContent = '🥳 You Win! 🎉';
      document.querySelector('.number').textContent = correctNumber;
      document.querySelector('body').style.backgroundColor = 'limeGreen';
      document.querySelector('.number').style.width = '20rem';
      if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
      }
    }
  });

// Reseting Game Button

document
  .querySelector('.again')
  .addEventListener('click', function againButton() {
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    correctNumber = Math.floor(1 + Math.random() * 20);
    document.querySelector('.guess').value = '';
  });
