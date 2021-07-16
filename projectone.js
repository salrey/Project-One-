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