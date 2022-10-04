// use strict

const toggleGameFeatures = (show) => {
  const gameTitle = document.getElementsByClassName('gameTitle')[0];
  const userChoicesDiv = document.getElementById('userChoicesDiv');
  const score = document.getElementById('score');

  const hideOrShow = show ? 'block' : 'none';

  userChoicesDiv.style.display = hideOrShow;
  gameTitle.style.display = hideOrShow;
  score.style.display = hideOrShow;
};

window.addEventListener('load', () => {
  toggleGameFeatures(false);

  const countdown = document.getElementById('countdown');

  let timeleft = 6;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 1) {
      countdown.style.display = 'none';

      toggleGameFeatures(true);

      clearInterval(downloadTimer);
    } else if (timeleft === 5) {
      countdown.innerHTML = 'Are you ready?!';
    }

    countdown.innerHTML = timeleft - 1;
    timeleft -= 1;
  }, 1000);
});

const validChoices = ['rock', 'paper', 'scissors'];

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const resetScore = document.getElementById('resetScore');

resetScore.addEventListener('click', () => {
  sessionStorage.removeItem('playerScore');
  sessionStorage.removeItem('computerScore');

  playerScore.innerHTML = updateScore('playerScore');
  computerScore.innerHTML = updateScore('computerScore');
});

const updateScore = (typeScore) => {
  let score = 0;

  if (sessionStorage.getItem(typeScore)) {
    let currentScore = sessionStorage.getItem(typeScore);
    score = parseInt(JSON.parse(currentScore), 10) + 1;
  }

  sessionStorage.setItem(typeScore, JSON.stringify(score));

  return score;
};

const createChoiceDiv = (chosenOption, isUser) => {
  const container = document.createElement('div');
  container.classList.add('finalChoiceDiv');
  const span = document.createElement('span');
  span.innerHTML = isUser ? 'User Chose' : 'Computer Chose';
  container.appendChild(span);

  const img = document.createElement('img');
  img.src = `${chosenOption}2.png`;

  container.appendChild(img);

  return container;
};

const runGame = (e) => {
  const { alt: userInput } = e.target;

  let randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = validChoices[randomNumber].toLowerCase();

  let outcome = '';

  if (userInput === computerChoice) {
    outcome = 'Draw!';
  } else {
    if (userInput === 'rock') {
      if (computerChoice === 'paper') {
        outcome = 'Computer wins!';
      } else {
        outcome = 'User wins!';
      }
    } else if (userInput === 'paper') {
      if (computerChoice === 'scissors') {
        outcome = 'Computer wins!';
      } else {
        outcome = 'User wins!';
      }
    } else {
      // User input is scissors
      if (computerChoice === 'paper') {
        outcome = 'User wins!';
      } else {
        outcome = 'Computer wins!';
      }
    }
  }

  const gameChoicesDiv = document.getElementById('gameChoices');
  gameChoicesDiv.innerHTML = '';
  const userChoiceAsImg = document.createElement('img');
  userChoiceAsImg.src = `${userInput}.png`;

  const compChoiceAsImg = document.createElement('img');
  compChoiceAsImg.src = `${computerChoice}.png`;

  gameChoicesDiv.childNodes = [];
  gameChoicesDiv.appendChild(createChoiceDiv(userInput, true));
  gameChoicesDiv.appendChild(createChoiceDiv(computerChoice, false));

  const result = document.getElementById('result');
  result.classList.add('bounce');
  result.innerHTML = outcome;

  const message = document.getElementById('message');
  message.innerHTML = 'To play again, simply click on an image!';

  // scores
  if (outcome.includes('User')) {
    playerScore.innerHTML = updateScore('playerScore');
  } else if (outcome.includes('Computer')) {
    computerScore.innerHTML = updateScore('computerScore');
  }
};

rockBtn.addEventListener('click', runGame);
paperBtn.addEventListener('click', runGame);
scissorsBtn.addEventListener('click', runGame);
