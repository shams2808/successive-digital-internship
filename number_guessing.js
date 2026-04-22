const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let n = Math.floor(Math.random() * 100) + 1

function guess() {
    readline.question("Guess a number between 1 and 100: ", function(input){
        let g = Number(input)
        if (g < n) {
            console.log("Higher")
            guess()
        }
        else if (g > n) {
            console.log("Lower")
            guess()
        }
        else {
            console.log("BINGO!")
            readline.close()
        }
    })
}
guess()