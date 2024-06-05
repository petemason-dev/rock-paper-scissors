console.log("Hello World");

const validChoices = ["rock", "paper", "scissors"];

const numberRounds = 5;

// Randomly pick between rock, paper, scissors
const getComputerChoice = () => validChoices[Math.floor(Math.random() * 3)];

// get the human choice, and format correctly
const getHumanChoice = () =>
  prompt("What is your choice?").trim().toLowerCase();

//play the game
const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  let roundNumber = 1;

  //play the required number of rounds
  while (roundNumber <= numberRounds) {
    //increment the round number if the round was valid
    roundNumber += playRound(getHumanChoice(), getComputerChoice()) ? 1 : 0;
  }

  //declare a winner
  let gameMessage;

  if (humanScore === computerScore) {
    gameMessage = "Draw!";
  } else if (humanScore > computerScore) {
    gameMessage = "You win!";
  } else {
    gameMessage = "I win!";
  }

  console.log(
    `${gameMessage} You scored ${humanScore}, and I scored ${computerScore}.`
  );

  //play a round
  //return true if the round was valid
  //increment the human or computer score as appropriate
  // (a draw awards no points)
  function playRound(humanChoice, computerChoice) {
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

      let roundMessage = isHumanWin
        ? `You win! ${formattedHumanChoice} beats ${formattedComputerChoice}!`
        : `You lose! ${formattedComputerChoice} beats ${formattedHumanChoice}!`;

      console.log(roundMessage);

      if (isHumanWin) {
        humanScore += 1;
      } else {
        computerScore += 1;
      }
    }

    return true;
  }
};
