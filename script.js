// Give the computer a random choice between rock, paper and scissors
// Ask player to input choice
// Compare player and computer choice
// Declare winner

const getComputerChoice = () => {
    const arrayOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrayOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player wins! Rock breaks scissors'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins! Paper covers rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player wins! Paper covers rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer wins! Scissors cut paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer wins! Rock breaks scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins! scissors cut paper'
    }
}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;
let round = 0;

const play = (playerSelection) => {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const div = document.createElement('div');
    div.classList.add('result');
    div.textContent = result;
    const previousResult = container.querySelector('.result');
    if (previousResult) {
      container.removeChild(previousResult);
    }
    container.appendChild(div);
    if (result.includes('Player wins')) {
        playerScore++;
    } else if (result.includes('Computer wins')) {
        computerScore++;
    }
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    round++;
    if (round === 5) {
      if (playerScore > computerScore) {
        alert(`Player ${playerScore} - ${computerScore} Computer. Player wins!`);
      } else if (playerScore < computerScore) {
        alert(`Player ${playerScore} - ${computerScore} Computer. Computer wins!`);
      } else {
        alert(`Player ${playerScore} - ${computerScore} Computer. Tie game..`);
      }
    }
  }
  
  
rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    play(playerSelection);
});

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    play(playerSelection);
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    play(playerSelection);
});