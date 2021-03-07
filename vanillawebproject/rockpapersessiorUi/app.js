let user = 0;
let computer = 0;
let draw = 0
function rockPaper(input) {
    //take input
    console.log(input)
    let userInput = input

    let computerInput = ['rock', 'paper', 'sessiors']
    let randomInput = Math.floor(Math.random() * 3)
    //console.log(randomInput);
    let computerFinalInput = computerInput[randomInput]
    console.log(computerFinalInput)
    //point


    //computer choice image
    if (computerFinalInput == 'rock') {
        let rockImg = document.querySelector(".computer-choice-img")
        rockImg.setAttribute("src", "./image/rock.jpg")
    }
    if (computerFinalInput == 'paper') {
        let paperImg = document.querySelector(".computer-choice-img")
        paperImg.setAttribute("src", "./image/paper.jpg")
    }
    if (computerFinalInput == 'sessiors') {
        let sessiorsImg = document.querySelector(".computer-choice-img")
        sessiorsImg.setAttribute("src", "./image/sessiors.jpg")
    }
    //check condition
    //for user rock
    if (userInput == 'rock') {
        let rockImg = document.querySelector(".player-choice-img")
        rockImg.setAttribute("src", "./image/rock.jpg")


        if (computerFinalInput == 'rock') {
            console.log("draw");
            draw++
        }
        if (computerFinalInput == 'paper') {
            console.log("computer won");
            computer++
        }
        if (computerFinalInput == 'sessiors') {
            console.log("user won")
            user++
        }
    }
    //for user paper
    if (userInput == 'paper') {
        let paperImg = document.querySelector(".player-choice-img")
        paperImg.setAttribute("src", "./image/paper.jpg")

        if (computerFinalInput == 'rock') {
            console.log("user won");
            user++
        }
        if (computerFinalInput == 'paper') {
            console.log("draw");
            draw++
        }
        if (computerFinalInput == 'sessiors') {
            console.log("computer won")
            computer++
        }
    }
    //for user sessior
    if (userInput == 'sessiors') {
        let sessiorsImg = document.querySelector(".player-choice-img")
        sessiorsImg.setAttribute("src", "./image/sessiors.jpg")

        if (computerFinalInput == 'rock') {
            console.log("computer won");
            computer++
        }
        if (computerFinalInput == 'paper') {
            console.log("user won");
            user++
        }
        if (computerFinalInput == 'sessiors') {
            console.log("draw")
            draw++
        }
    }
    //final point
    //user point
    let playerPointEl = document.querySelector(".player-point")
    playerPointEl.textContent = user
    //computer point
    let computerPointEl = document.querySelector(".computer-point")
    computerPointEl.textContent = computer


}
function winInput() {
    let userwonEl = document.querySelector(".playerwon")
    let computerwonEl = document.querySelector(".computerwon")


    if (user == 5) {
        userwonEl.textContent = "You won"
        computerwonEl.textContent = "Press F5 to play again"

    } if (computer == 5) {
        computerwonEl.textContent = "Computer won"
        userwonEl.textContent = "Press F5 to play again"
    }

}


//rock click
const rockEl = document.querySelector(".rock")
console.log(rockEl)
rockEl.addEventListener("click", function () {
    let input = 'rock'
    rockPaper(input);
    winInput();
})
//paper click
const paperEl = document.querySelector(".paper")
console.log(paperEl)
paperEl.addEventListener("click", function () {
    let input = 'paper'
    rockPaper(input);
    winInput();
})
//sessiors click
const sessiorsEl = document.querySelector(".sessiors")
console.log(sessiorsEl)
sessiorsEl.addEventListener("click", function () {
    let input = 'sessiors'
    rockPaper(input);
    winInput();
})
