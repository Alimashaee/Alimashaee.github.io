'use strict';
/*
document.querySelector('.again').textContent = 'kir to milad!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 23;
document.querySelector('.guess').value = 21;
*/

var number = Math.trunc(Math.random() * 20) + 1;
var highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

var score = Number(document.querySelector('.score').textContent);

var checkEvntHandler = function checkEvntHandler() {
  var guess = Number(document.querySelector('.guess').value);

  if (!guess || guess > 20) {
    displayMessage('⛔ Invalid number');
  } else if (guess === number) {
    displayMessage('🎉 Correct number');
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess < number ? '❌ Try higher' : '❌ Try lower');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 Game Over');
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.score').textContent = 0;
    }
  } // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '❌ Try higher';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💀 Game Over';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '❌ Try lower';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💀 Game Over';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

};

var againEventHandler = function againEventHandler() {
  score = 5;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  highScore = document.querySelector('.highscore').textContent;
};

document.querySelector('.check').addEventListener('click', checkEvntHandler);
document.querySelector('.again').addEventListener('click', againEventHandler);