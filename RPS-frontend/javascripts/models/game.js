  class Game {

  static all = []

  constructor(attr){
    this.id = attr.id
    this.score = attr.score
    this.user = attr.user
  }

  save(){
    Game.all.push(this)
  }

  static create(attr){
    let game = new Game(attr)
    game.save()
    return game
  }

  static clearScores(){
  document.getElementById("scores").innerHTML = ""
  }

  static renderScores(){
    Game.sortedGames().forEach(game => Game.putScoresOnDom(game))
  }

  static sortedGames(){
    let sortedGames = [...Game.all].sort((a ,b) => b.score - a.score)
    return sortedGames
  }

  static updateScores(){
    this.clearScores()
    this.renderScores()
  }

  static renderGameScore(){
    scoreDiv.innerText = score
  }

  static deleteButton(){
    let form = document.getElementById("form")
    form.innerHTML = ""
  }

   static putScoresOnDom(score){
    let li = document.createElement("li")
    li.innerText = `${score.user.name}: ${score.score}`
    let btn = document.createElement("button")
    btn.innerText =  "Delete Score"
    li.appendChild(btn)
    document.getElementById("scores").appendChild(li)
    btn.id = score.id
    btn.addEventListener("click", Game.deleteScore)

  }


  /** requests to the backend */

  static fetchScores = () => {
    Game.all = []
    Game.clearScores()
    fetch(baseUrl + "/games")
      .then(response => response.json())
      .then(data => {
        data.forEach(score => {
          Game.create(score)
        });
        Game.renderScores()
      });
  }

  static submitScore = (e) => {
    let params = {
      "score": document.getElementById("user-score").innerHTML,
          "user": {
            "name": nameInput().value
          }
      }

    fetch(baseUrl + "/games", {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
      method: "POST"})
      .then(resp => resp.json())
      .then(data => { 
        Game.create(data)
        Game.clearScores()
        Game.renderScores()
        nameInput().value = "";
  })
}

  static deleteScore = (e) => {
    
    let id = parseInt(e.target.id)
    
    fetch(baseUrl + "/games/" + id, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(function(data){
      Game.all = Game.all.filter(function(game){
        return game.id !== data.id
      })
      Game.updateScores()
    })
  }

static renderForm = () => {
  let form = `<h3>Enter Your Name</h3>
  <form id="form">
    <div class="input-field">
      <input type="text" name="name" id="name"/>
    </div>
    <br>
    <input type="submit" value="Submit Score!" />
  </form>
  `
  user_div.innerHTML = form
}

static addButtonFunctionality = () => {
  let button = document.getElementById("form").children[2]
  button.addEventListener("click", function(e) {
    userName = nameInput().value
    e.preventDefault()
    if(userName === ""){
      alert("Please enter a name")
    }
    else { 
      Game.submitScore()
    }
  })
}
}

