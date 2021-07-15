/* 
ROCK, PAPER, OR SCISSORS PROJECT
--------------------------------
Write your functions below.
*/

// testing git add, commit, and push
function getUserChoice (userInput) {
    const tpyeIn = userInput.toLowerCase()

    if (tpyeIn === 'rock' || tpyeIn === 'scissors' || tpyeIn === 'paper') {
        return tpyeIn
    }
    else console.log("Error");
}
