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

