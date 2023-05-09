// Get the add point buttons
const addTeam1PointBtn = document.getElementById("add-team1-point");
const addTeam2PointBtn = document.getElementById("add-team2-point");

// Get the team score elements
const team1Score = document.getElementById("team1-score");
const team2Score = document.getElementById("team2-score");

// Add event listeners to the add point buttons
addTeam1PointBtn.addEventListener("click", function() {
// Get the current score
let currentScore = parseInt(team1Score.innerText);
// Increment the score
currentScore++;
// Update the score element
team1Score.innerText = currentScore;
});

addTeam2PointBtn.addEventListener("click", function() {
// Get the current score
let currentScore = parseInt(team2Score.innerText);
// Increment the score
currentScore++;
// Update the score element
team2Score.innerText = currentScore;
});