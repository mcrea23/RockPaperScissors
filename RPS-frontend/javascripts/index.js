const baseUrl = "http://localhost:3000"
let userName = ""
let userScore = document.querySelector("userScore");
let roboScore = document.querySelector("RoboScore");

let choice = document.querySelector(".choice");

let userResult = document.querySelector("userResult");
let resultText = document.querySelector("resultText");
let roboResult = document.querySelector("roboResult");

const rock_div = document.getElementById("0");
const paper_div = document.getElementById("1");
const scissors_div = document.getElementById("2");

window.addEventListener('DOMContentLoaded', (event) => {
    Game.renderForm()
    Game.addButtonFunctionality()
    Game.fetchScores()
  });

let userWin = 0;
let roboWin = 0;

// if (userChoice ==0 && roboChoice ===0 ){
//     if (roboChoice === 0) {
//         console.log("draw")
//     } else if (roboChoice === 1) {
//         console.log("loose")
//     } else if (roboChoice === 2) {
//         console.log("win")
//     }
// } else if (userChoice ==1){
//     if (roboChoice === 0) {
//         console.log("win")
//     } else if (roboChoice === 1) {
//         console.log("draw")
//     } else if (roboChoice === 2) {
//         console.log("loose")
//     }
// } else if (userChoice ==2){
//     if (roboChoice === 0) {
//         console.log("loose")
//     } else if (roboChoice === 1) {
//         console.log("win")
//     } else if (roboChoice === 2) {
//         console.log("draw")
//     }
// }
const rock_div = document.getElementById("0")
rock_div.addEventListener("click", this.chooseRock())

function chooseRock () {
    console.log("0")
}

const paper_div = document.getElementById("1")
paper_div.addEventListener("click", choosePaper)

function choosePaper () {
    console.log("1")
}

const scissors_div = document.getElementById("2")
scissors_div.addEventListener("click", chooseScissors)

function chooseScissors () {
    runsLogic(2)
}

function runsLogic(choice){
    // your if statements here
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
  }
  main();
  

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

// let submitScore = (e) => {
//     let params = {
//             "name": userName
//             }
//     fetch(baseUrl + "/users", {
//         headers: {
//         "Accept": "application/json",
//         "Content-type": "application/json",
//         },
//         body: JSON.stringify(params),
//         method: "POST"})
//         .then(resp => resp.json())
//         .then(() => {
//         Game.fetchScores();


//     })
// })
        




