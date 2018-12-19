// get variable elements

var winsCounter = 0; // wins
var lossesCounter = 0; // losses
var totalScore; // total score

var numList = []; // Array displaying number
var chosenNum= null; // Chosen number
var randomNumbers; // random number

varallNumbers = []; // stores all numbers guessed
varcorrectNum = []; // correct number
var wrongNum = []; // wrong number

var counter = 0; // counter



// start the Game

$(document).ready(function () {

    function startGame() {

        randomNumbers = Math.floor(Math.random() * 100) + 1;
        //console.log(randomNumbers);
        var Container = $('#randomContainer');

        $('#randomNum').append(randomNumbers);

        $('.images').hover(function () {

            $(this).css("cursor", "pointer");
        });

        $('.images').on('click', function () {
            var pickNumber = Math.floor(Math.random() * 10);

            //console.log(pickNumber);
        })

        // create a for each loop checking each images length then determining whether they have a value , set value to true
        // IF they have a value make sure its the right one

       



    };

    startGame();

});