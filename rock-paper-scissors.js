console.log("Hello World");

const validChoices = ["rock", "paper", "scissors"];

const targetScore = 5;

// Randomly pick between rock, paper, scissors
const getComputerChoice = () => validChoices[Math.floor(Math.random() * 3)];

//play the game
const playGame = () => {
  let computerScore, humanScore, roundNumber, gameMessage;

  const rockButton = document.querySelector("button.rock");
  rockButton.addEventListener("click", () => playRound("rock"));
  const paperButton = document.querySelector("button.paper");
  paperButton.addEventListener("click", () => playRound("paper"));
  const scissorsButton = document.querySelector("button.scissors");
  scissorsButton.addEventListener("click", () => playRound("scissors"));
  const resetButton = document.querySelector("button.reset");
  resetButton.addEventListener("click", resetGame);

  const gameMessageDisplay = document.querySelector("p.message");
  const roundsList = document.querySelector("ul.rounds");

  resetGame();

  function resetGame() {
    computerScore = 0;
    humanScore = 0;
    roundNumber = 1;
    gameMessage = "Press a button below to make your move!";
    gameMessageDisplay.textContent = gameMessage;
    roundsList.replaceChildren();
    resetButton.classList.add("hidden");
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
  }

  function isGameWin() {
    let isWin = false;
    let winText = "";

    if (humanScore >= targetScore || computerScore >= targetScore) {
      if (humanScore === computerScore) {
        winText = "Draw!";
      } else if (humanScore > computerScore) {
        winText = "You win!";
      } else {
        winText = "I win!";
      }

      isWin = true;
      gameMessage = `${winText} You scored ${humanScore}, and I scored ${computerScore}.`;
    } else {
      gameMessage = `Your score: ${humanScore} - My score: ${computerScore}`;
    }

    return isWin;
  }

  //play a round
  //increment the human or computer score as appropriate
  // (a draw awards no points)
  function playRound(humanChoice) {
    computerChoice = getComputerChoice();

    //capitalise the first letter of each choice for display purposes
    const formattedHumanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    const formattedComputerChoice =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    //determine the round winner!
    let roundMessage = `Round ${roundNumber}: `;

    if (humanChoice === computerChoice) {
      roundMessage += `Draw! We both chose ${formattedHumanChoice}!`;
    } else {
      // Rock beats scissors; paper beats rock; scissors beat paper
      let isHumanWin =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

      roundMessage += isHumanWin
        ? `You win! ${formattedHumanChoice} beats ${formattedComputerChoice}!`
        : `You lose! ${formattedComputerChoice} beats ${formattedHumanChoice}!`;

      if (isHumanWin) {
        humanScore += 1;
      } else {
        computerScore += 1;
      }
    }

    //display the roundMessage
    const li = document.createElement("li");
    li.textContent = roundMessage;
    roundsList.appendChild(li);

    //check for win
    if (isGameWin()) {
      //disable the buttons
      rockButton.setAttribute("disabled", "");
      paperButton.setAttribute("disabled", "");
      scissorsButton.setAttribute("disabled", "");

      //show the reset button
      resetButton.classList.remove("hidden");
    }
    gameMessageDisplay.textContent = gameMessage;
    roundNumber += 1;
    return true;
  }
};
