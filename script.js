/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    return computerChoice;
}

// console.log(getComputerChoice())

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 2
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

    // return the result of score based on if you won, drew, or lost
    let score;

    // All situations where human draws, set `score` to 0
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here

    // Otherwise human loses (aka set score to 2)

    let result = (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper") ? score = 1 : (playerChoice === computerChoice) ? score = 0 : score = 2

    return score

}

// console.log(getResult("Scissors", "Rock"))

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

    let result = document.getElementById("result")
    let player = document.getElementById("player")
    let computer = document.getElementById("computer")

    player.innerText = `${Number(player.innerText) + score}`
    computer.innerText = `Computer chose ${computerChoice}`
    
    let condi = score = 1 ? result.innerText = 'You Win!' : score = 2 ? result.innerText = 'You Lose!' : result.innerText = "It's a tie!"
    
    result.innerText = `${condi}`

    computer.innerText = `You chose ${playerChoice} | Computer chose ${computerChoice}`

    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
}

// console.log(showResult(3, "Rock", "Scissors"))

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument



    // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {

}

playGame()