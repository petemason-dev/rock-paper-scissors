console.log("Hello World");

const validChoices = ["rock", "paper", "scissors"];

const numberRounds = 5;

let computerScore = 0;
let humanScore = 0;

// Randomly pick between rock, paper, scissors
const getComputerChoice = () => validChoices[Math.floor(Math.random() * 3)];

// get the human choice, and format correctly
const getHumanChoice = () =>
  prompt("What is your choice?").trim().toLowerCase();

//play a round
//return true if the round was valid
//increment the human or computer score as appropriate
// (a draw awards no points)
const playRound = (humanChoice, computerChoice) => {
  //FIRST check that the human choice is valid
  if (!validChoices.includes(humanChoice)) {
    console.log("You must choose either rock, paper or scissors!");
    return false;
  }

  //capitalise the first letter of each choice for display purposes
  const formattedHumanChoice =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  const formattedComputerChoice =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  //determine the winner!
  if (humanChoice === computerChoice) {
    console.log(`Draw! We both chose ${formattedHumanChoice}!`);
  } else {
    let isHumanWin =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rocks") ||
      (humanChoice === "scissors" && computerChoice === "paper");

    let gameMessage = isHumanWin
      ? `You win! ${formattedHumanChoice} beats ${formattedComputerChoice}!`
      : `You lose! ${formattedComputerChoice} beats ${formattedHumanChoice}!`;

    console.log(gameMessage);

    if (isHumanWin) {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }

  return true;
};
