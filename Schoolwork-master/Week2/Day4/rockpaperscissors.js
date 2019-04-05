var choices = document.querySelectorAll('.choice');
var losses = 0;
var wins = 0;
var ties = 0;
choices.forEach(function (val) {
    val.addEventListener('click', function () {
        var pChoice = this.value.toUpperCase();
        var cChoice = computerChoice().toUpperCase();
        document.querySelector("#userChoice").innerText = "You chose: " + pChoice;
        document.querySelector("#computerChoice").innerText = "Computer chose: " + cChoice;  
        whoWon(pChoice, cChoice);
    })
})
function computerChoice() {
    var options = ["rock", "paper", "scissors"];
    var rdm = Math.floor(Math.random() * 3);
    return options[rdm];
}
function whoWon(play, comp) {
    if (play == comp) {
        ties++;
        return document.querySelector("#ties").innerText = "Ties: " + ties;;
    }
    if ((play == 'ROCK' && comp == "SCISSORS") || 
    (play == "SCISSORS" && comp == "PAPER") || 
    (play == "PAPER" && comp == 'ROCK')) {
        wins++;
        return document.querySelector("#wins").innerText = "Wins: " + wins;;
    }
    losses++;
    return document.querySelector("#losses").innerText = "Losses: " + losses;  
}