pChoice = document.querySelectorAll(".pChoice");
result = document.querySelector(".result");
let playerWins = 0;
let computerWins = 0;
winner = document.querySelector(".winner");
pChoice.forEach((choice) =>
  choice.addEventListener("click", (event) => {
    // Get the text from the clicked element, convert to lowercase
    const playerChoice = event.target.textContent.toLowerCase();

    // Call the playRound function
    result.textContent = playRound(getComputerChoice(), playerChoice);

    winCheck();
  })
);
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "Tie!";
        case "paper":
          computerWins++;
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
        case "scissors":
          playerWins++;
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          playerWins++;
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
        case "paper":
          return "Tie!";
        case "scissors":
          computerWins++;
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          computerWins++;
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
        case "paper":
          playerWins++;
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
        case "scissors":
          return "Tie!";
      }
      break;
    default:
      return "Please answer Rock, Paper, or Scissors";
  }
}
function winCheck() {
  if (computerWins == 5) {
    winner.textContent = "You Lose!";
    computerWins = 0;
    playerWins = 0;
  }
  if (playerWins == 5) {
    winner.textContent = "You Win!";
    playerWins = 0;
    computerWins = 0;
  }
}
