const baseUrl = "http://localhost:3000"
let userName = ""
const nameInput = () => document.getElementById("name")
const userScore_span = document.getElementById("user-score");
const roboScore_span = document.getElementById("robo-score");
let userScore = document.querySelector("userScore");
let roboScore = document.querySelector("RoboScore");

let choice = document.querySelector(".choice");
 
let userResult = document.getElementById("userResult");
let resultText = document.getElementById("resultText");
let roboResult = document.getElementById("roboResult");

const rock_div = document.getElementById("0");
const paper_div = document.getElementById("1");
const scissors_div = document.getElementById("2");

const rockIcon = "<i class='fas fa-hand-rock fa-10x'></i>";
const paperIcon = "<i class='fas fa-hand-paper fa-10x'></i>";
const scissorIcon = "<i class='fas fa-hand-scissors fa-10x'></i>";

const scoreBoard_div = document.querySelector(".score-board");
const game_div = document.getElementById("game");
const user_div = document.getElementById("user");


window.addEventListener('DOMContentLoaded', (event) => {
    Game.renderForm()
    Game.addButtonFunctionality()
    Game.fetchScores()
  });

let convertToIcon = (n) => { if (n === "0") return rockIcon; if (n === '1') return paperIcon ; return scissorIcon }

function getRoboChoice() {
    const choices = ['0','1','2'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  function win(userChoice, roboChoice) {
    userScore++;
    userScore_span.innerHTML = userScore = (userScore > 0) ? userScore++ : 0;
    roboScore_span.innerHTML = roboScore = (roboScore > 0) ? roboScore++ : 0;;
    userResult.innerHTML = convertToIcon(userChoice);
    roboResult.innerHTML = convertToIcon(roboChoice);
    resultText.innerHTML = "win"
  }
  function lose(userChoice, roboChoice) {
    roboScore++;
    userScore_span.innerHTML = userScore = (userScore > 0) ? userScore++ : 0;
    roboScore_span.innerHTML = roboScore = (roboScore > 0) ? roboScore++ : 0;;
    userResult.innerHTML = convertToIcon(userChoice);
    roboResult.innerHTML = convertToIcon(roboChoice);
    resultText.innerHTML = "loses";
  }
  function draw(userChoice, roboChoice) {
    userResult.innerHTML = convertToIcon(userChoice);
    roboResult.innerHTML = convertToIcon(roboChoice);
    resultText.innerHTML = "DRAW"
  }
  

function game(userChoice) {
    const roboChoice = getRoboChoice();
    switch (userChoice + roboChoice) {
      case "02":
      case "10":
      case "21":
        win(userChoice, roboChoice);
        break;
      case "01":
      case "12":
      case "20":
        lose(userChoice, roboChoice);
        break;
      case "00":
      case "11":
      case "22":
        draw(userChoice, roboChoice);
        break;
    }
  }
  // r = 0  p= 1 s= 2
function main() {
    rock_div.addEventListener('click', function() {
        game("0");
    })
    paper_div.addEventListener('click', function() {
        game("1");
    })
    scissors_div.addEventListener('click', function() {
        game("2");
    })
}
main();

let submitScore = (e) => {
    let params = {
            "name": userName
            }
    fetch(baseUrl + "/users", {
        headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        },
        body: JSON.stringify(params),
        method: "POST"})
        .then(resp => resp.json())
        .then(() => {
        Game.fetchScores();


    })
}

// choices.forEach( (choose, userChoose) => {
//     choose.addEventListener("click", () => {
//         userResult.innerHTML = '${choose.innerHTML}
//             <h2>User</h2>';
        
//         let roboChoose = Math.floor(Math.random() * 3);
//         console.log(roboChoose);

//         if(roboChoose === 0){
//             roboResult.innerHTML = '<i class="fas fa-hand-rock fa-10x"></i>
//             <h2> Robo </h2>';
//         }
//         else if(roboChoose === 1){
//             roboResult.innerHTML = '<i class="fas fa-hand-paper fa-10x"></i>
//             <h2>Robo</h2>';
//         }
//         else if(roboChoose === 2){
//             roboResult.innerHTML = '<i class="fas fa-hand-scissors fa-10x"></i>
//             <h2>Robo</h2>';
//         }
//         //Robo WINS
//         if(userChoose === roboChoose){
//             resultText.innerText = 'Draw';
//         }
//         else if(userChoose === 0 && roboChoose === 1){
//             roboScore ++;
//             resultText.innerHTML = "Loss";
//         }
//         else if(userChoose === 1 && roboChoose === 2){
//             roboScore ++;
//             resultText.innerHTML = "Loss";
//         }        
//         else if(userChoose === 2 && roboChoose === 3){
//             roboScore ++;
//             resultText.innerHTML = "Loss";
//         }

//         //User WINS
        
//         else{
//             userScore ++;
//             resultText.innerHTML = "Win";
//         }
//         userScore.innerHTML = userWin;
//         roboScore.innerHTML = Win;

        




