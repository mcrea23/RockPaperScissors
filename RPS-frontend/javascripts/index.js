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
    resultText.innerHTML = "WIN"
  }
  function lose(userChoice, roboChoice) {
    roboScore++;
    userScore_span.innerHTML = userScore = (userScore > 0) ? userScore++ : 0;
    roboScore_span.innerHTML = roboScore = (roboScore > 0) ? roboScore++ : 0;;
    userResult.innerHTML = convertToIcon(userChoice);
    roboResult.innerHTML = convertToIcon(roboChoice);
    resultText.innerHTML = "LOSES";
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



