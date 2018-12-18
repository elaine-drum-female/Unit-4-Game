// get variable elements

var winsCounter = 0; // wins
var lossesCounter = 0; // losses
var totalScore; // total score

var numList = []; // Array displaying number
var chosenNum; // Chosen number
var randomNumbers; // random number

varallNumbers = []; // stores all numbers guessed
varcorrectNum = []; // correct number
var wrongNum = []; // wrong number

var redCounter = 0; // counts reds
var blueCounter = 0; // counts blue
var yellowCounter = 0; // counts yellow
var greenCounter = 0; // counts green


// start the Game

$(document).ready(function () {

    function startGame() {

        randomNumbers = Math.floor(Math.random() * 100) + 1;
        //console.log(randomNumbers);
        var Container = $('#randomContainer');

        $('#randomNum').append(randomNumbers);

        $('.images').hover(function() {
    
            $(this).css("cursor", "pointer");
            });
    
            
    
        };

        startGame();

    });


