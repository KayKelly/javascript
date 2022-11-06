/* Computer randomizes between rock, paper and scissors.
Ask player to input rock, paper or scissors.
If rock against scissors, rock wins
if rock against paper, paper wins
if paper against scissors, scissors wins
Show if player or computer won */

for (let i = 0; i < 5; i++) { // loop until 5 rounds are played


    let computerChoice = Math.random(); // random between 0 and 1
    if (computerChoice < 0.34) { // 3 choices, so ~ 100 / 3
        computerChoice = "rock"
    }
    else if (computerChoice <= 0.67) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }

console.log("Computer plays: " + computerChoice) // Displays computer's choice

let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase() // Asks player's choice



console.log("Player plays: " + playerChoice) // Displays player's choice

function playRound (computerChoice, playerChoice) { // A round of rock, paper, scissors

    if (playerChoice === computerChoice) {
        return "It's a draw.."
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Player wins!"
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Player wins!"
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Player wins!"
    }
    else { return "Computer wins.."}
}
console.log(playRound(computerChoice, playerChoice)) // Show result per round

}
