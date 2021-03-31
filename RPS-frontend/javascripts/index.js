const baseUrl = "http://localhost:3000"
let userScore = 0;
let roboScore = 0;
let userName = ""
const nameInput = () => document.getElementById("name")
const userScore_span = document.getElementById("user-score");
const roboScore_span = document.getElementById("robo-score");
const randomNumber = Math.floor(Math.random() * 3)
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); //stored in p tag in HTML
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const game_div = document.getElementById("game");
const user_div = document.getElementById("user");
const possibleChoices = document.querySelectorAll('.choices')
window.addEventListener('DOMContentLoaded', (event) => {
  Game.renderForm()
  Game.addButtonFunctionality()
  Game.fetchScores()
});
/*Dom Variables Element span tag */
// Get users userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    generatedRoboChoice()
    results()
    userChoice.innerHTML = userChoice
    roboChoice.innerHTML = roboChose
    displayResult.innerHTML = result
  }))
  
  //Get a random computers choice
  function generatedRoboChoice() {
    if (randomNumber === 1) {
      return roboChose = 'r'
    } else if (randomNumber === 2) {
      return roboChose = 'p'
    } else if (randomNumber === 3) {
      return roboChose = 's'
    }
  }
  
  function results() {
    if (roboChose == userChoice) {
      return result = 'There was a draw'
    } else if (roboChose === 'r' && userChoice === 'p') {
      return result = 'you lost'
    } else if (roboChose === 'r' && userChoice === 's') {
      return result = 'you win!'
    } else if (roboChose === 'p' && userChoice === 'r') {
      return result = 'you lost'
    } else if (roboChose === 'p' && userChoice === 's') {
      return result = 'you win!'
    } else if (roboChose === 's' && userChoice === 'r') {
      return result = 'you win!'
    } else if (roboChose === 's' && userChoice === 'p') {
      return lose(userChoice, roboChoice)
    }
  }

// function getRoboChoice() {
//   const choices = ['r','p','s'];
//   const randomNumber = Math.floor(Math.random() * 3);
//   return choices[randomNumber];
// }
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
// }
// function win(userChoice, roboChoice) {
//   userScore++;
//   userScore_span.innerHTML = userScore;
//   roboScore_span.innerHTML = roboScore;
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "robo".fontsize(3).sub();
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(roboChoice)}${smallCompWord}  You Win! `;
// }
// function lose(userChoice, roboChoice) {
//   roboScore++;
//   userScore_span.innerHTML = userScore;
//   roboScore_span.innerHTML = roboScore;
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "robo".fontsize(3).sub();
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses  ${convertToWord(roboChoice)}${smallCompWord}  You Lost!..  `;
//   ;
// }
// function draw(userChoice, roboChoice) {
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "robo".fontsize(3).sub();
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(roboChoice)}${smallCompWord}  Draw `;
// }
// function game(userChoice) {
//   const roboChoice = getRoboChoice();
//   switch (userChoice + roboChoice) {
//     case "rs":
//     case "pr":
//     case "sp":
//       win(userChoice, roboChoice);
//       break;
//     case "rp":
//     case "ps":
//     case "sr":
//       lose(userChoice, roboChoice);
//       break;
//     case "rr":
//     case "pp":
//     case "ss":
//       draw(userChoice, roboChoice);
//       break;
//   }
// }
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