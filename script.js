// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Fuck You are Right!!🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.score').value = 29;
// console.log(document.querySelector('.score').value);

// Handling event listner

// const number = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
// let score = 20;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent =
//       'Please Type a Valid Number!! ❌';
//   } else if (guess === number) {
//     document.querySelector('.message').textContent = 'Fuck You are Right!!🎉';
//   } else if (guess > number) {
//     document.querySelector('.message').textContent = 'Too High!!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < number) {
//     document.querySelector('.message').textContent = 'Too Low!!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

let number = Math.floor(Math.random() * 20) + 1; //Random number between 1-20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When the input is not a number

  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '❌ Please Enter Valid Number ❌';
      displayMessage('❌ Please Enter Valid Number ❌');
    //When Player wins the game
  } else if (guess === number) {
    // document.querySelector('.message').textContent = '🎉 Fuck You are Right 🎉';
    displayMessage('🎉 Fuck You are Right 🎉')
    document.querySelector('body').style.backgroundColor = '#54B431';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    //Updating High Score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When the Player Loose the Game
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈 Oops Too High!' : '📉 Too Low!'; //using ternary operator
      score--;
      document.querySelector('.score').textContent = score;
    } else {
    //   document.querySelector('.message').textContent = '😓You lost the Game!';
      displayMessage('😓You lost the Game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#CC3636';
    }
  }
  //When guess is too high
  // } else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Oops Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = '😓You lost the Game!';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('body').style.backgroundColor = '#CC3636';

  //     }
  //     //When guess is too low
  //   } else if (guess < number) {
  //     if(score > 1){
  //         document.querySelector('.message').textContent = '📉 Too Low!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = '😓You lost the Game!';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('body').style.backgroundColor = '#CC3636';
  //     }
  //   }
});

//Restarting the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
