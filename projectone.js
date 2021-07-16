/* 
ROCK, PAPER, OR SCISSORS PROJECT
--------------------------------
Write your functions below.
*/

// Updating based on your request 
function getUserChoice (userInput) {
    // As requested, I modified the parameter with the method toLowerCase()
    userInput = userInput.toLowerCase()

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    }
    // I added ! to the existing text, Error, as requested
    else console.log("Error!");
}

function getComputerChoice () {

    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return 'rock';
    }
    if (randomNum === 1) {
        return 'paper';
    }
    if (randomNum === 2) {
        return 'scissors';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You won'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!'
      }
    }if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer won!';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  }
  
  function playGame () {
    const userChoice 
    = getUserChoice('paper');
  
    const computerChoice 
    = getComputerChoice()
    console.log('You threw:' + userChoice);
    console.log('The computer threw:'+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
   };
  
  playGame()

//   Added a secret cheat code too.