function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    alert ("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    alert( `You win! ${playerSelection} beats ${computerSelection}.`);
  } else {
    alert( `You lose! ${computerSelection} beats ${playerSelection}.`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter rock, paper, or scissors:");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}

game();
