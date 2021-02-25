const userText = document.getElementById("user")
const computerText = document.getElementById("computer")
function rockPaper() {
    //take input
    let userInput = prompt("you choose:").toLowerCase()
    console.log(userInput);
    let computerInput = ['rock', 'paper', 'sessior']
    let randomInput = Math.floor(Math.random() * 3)
    console.log(randomInput);
    let computerFinalInput = computerInput[randomInput]
    console.log(computerFinalInput);
    //point
    let user = 0;
    let computer = 0;
    let draw = 0
    //check condition
    //for user rock
    if (userInput == 'rock') {
        if (computerFinalInput == 'rock') {
            console.log("draw");
            draw++
        }
        if (computerFinalInput == 'paper') {
            console.log("computer won");
            computer++
        }
        if (computerFinalInput == 'sessior') {
            console.log("user won")
            user++
        }
    }
    //for user paper
    if (userInput == 'paper') {
        if (computerFinalInput == 'rock') {
            console.log("user won");
            user++
        }
        if (computerFinalInput == 'paper') {
            console.log("draw");
            draw++
        }
        if (computerFinalInput == 'sessior') {
            console.log("computer won")
            computer++
        }
    }
    //for user sessior
    if (userInput == 'sessior') {
        if (computerFinalInput == 'rock') {
            console.log("computer won");
            computer++
        }
        if (computerFinalInput == 'paper') {
            console.log("user won");
            user++
        }
        if (computerFinalInput == 'sessior') {
            console.log("draw")
            draw++
        }
    }
    //final point
    userText.textContent = user
    computerText.textContent = computer
}
rockPaper()
