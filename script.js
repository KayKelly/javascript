// Give the computer a random choice between rock, paper and scissors
// Ask player to input choice
// Compare player and computer choice
// Declare winner

function getComputerChoice() {
    const arrayOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrayOfChoices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
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

let playerSelection = "rock"
let computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))