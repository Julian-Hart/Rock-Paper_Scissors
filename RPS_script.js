function Rounds() {
  let num = prompt("How many rounds would you like to play");
  num -= "0";
  if (typeof num == "number") {
    return num;
  } else {
    return Rounds;
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(computerChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "Tie!";
          break;
        case "paper":
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
        case "scissors":
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
        case "paper":
          return "Tie!";
          break;
        case "scissors":
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return `you Lose! ${computerChoice} beats ${playerChoice}`;
          break;
        case "paper":
          return `you Win! ${playerChoice} beats ${computerChoice}`;
          break;
        case "scissors":
          return "Tie!";
          break;
      }
      break;
    default:
      return "Please answer Rock, Paper, or Scissors";
  }
}

function play(playRounds) {
  for (let i = 0; i < +playRounds; i++) {
    let getPlayerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(playRound(getComputerChoice(), getPlayerChoice));
  }
}

play(Rounds());
