const baseUrl = "http://localhost:3000"
let userName = ""
let userScore = document.querySelector("userScore");
let roboScore = document.querySelector("RoboScore");

let choice = document.querySelector(".choice");

let userResult = document.querySelector("userResult");
let resultText = document.querySelector("resultText");
let roboResult = document.querySelector("roboResult");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s")

window.addEventListener('DOMContentLoaded', (event) => {
    Game.renderForm()
    Game.addButtonFunctionality()
    Game.fetchScores()
  });

let userWin = 0;
let roboWin = 0;

choices.forEach( (choose, userChoose) => {
    choose.addEventListener("click", () => {
        userResult.innerHTML = '${choose.innerHTML}
            <h2>User</h2>';
        
        let roboChoose = Math.floor(Math.random() * 3);
        console.log(roboChoose);
        
    })
})
        




