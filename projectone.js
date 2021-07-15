/* 
ROCK, PAPER, OR SCISSORS PROJECT
--------------------------------
Write your functions below.
*/


function getUserChoice (userInput) {
    userInput.toLowerCase()

    if (!userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        console.log("Error!")
    }
    return (userInput)
}
