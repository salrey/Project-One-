/* 
ROCK, PAPER, OR SCISSORS PROJECT
--------------------------------
Write your functions below.
*/

// Write an alternative solution using switch statements
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' || 'scissors') {
    return userInput;
  } else {
  console.log('Error!');
  }
};

// Test getUserChoice
// getUserChoice('p');
//> 'Error!'

// Alternative solution using arrow function syntax
const getComputerChoice = () => {
  const random = Math.floor(3 * Math.random())  
  if (random > 0) {
      if (random === 1) {
          return 'scissors';
      } return 'paper';
  } return 'rock';
};

//Test getComputerChoice
//console.log(getComputerChoice()); 

//Alternative solution using arrow function syntax and if / else ifs
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins!'
        } return 'User Wins!'
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins!'
        } return 'User Wins!'
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins!'
        } return 'User Wins!'
    } 
};

// Test determineWinner
// let result = getComputerChoice()
// console.log(result)
// console.log(determineWinner('paper', result))

//playGame
function playGame() {
    let userChoice = getUserChoice('rock')
    console.log(userChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
};

playGame()