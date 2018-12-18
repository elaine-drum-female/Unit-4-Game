// get variable elements

var winsCounter = 0; // wins
var lossesCounter = 0; // losses
var totalScore; // total score

var numList = []; // Array displaying number
var chosenNum; // Chosen number
var randomNumber; // random number

varallNumbers = []; // stores all numbers guessed
varcorrectNum = []; // correct number
var wrongNum = []; // wrong number


// start the Game

$(document).ready(function(){
   
    function startGame(){

       randomNumbers = Math.floor(Math.random() * 100);
       //console.log(randomNumbers);
       
    }

    startGame();

});
