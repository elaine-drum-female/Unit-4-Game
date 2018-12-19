// get variable elements

var winsCounter = 0; // wins
var lossesCounter = 0; // losses
var totalScore = null; // total score
var images;

var numList = []; // Array displaying number
var chosenNum = null; // Chosen number
var randomNumbers; // random number

varallNumbers = []; // stores all numbers guessed
varcorrectNum = []; // correct number
var wrongNum = []; // wrong number

var counter = 0; // counter
var scoreNumber;


// start the Game

$(document).ready(function () {

    function startGame() {

        randomResult = Math.floor(Math.random() * 60) + 30;

        $('#randomNum').html(+randomResult);


        for (var i = 0; i < 4; i++) {

            $('.images').hover(function () {

                $(this).css("cursor", "pointer");
            });
        }

        $('.images').on('click', function () {
            randomNumbers = Math.floor(Math.random() * 11) + 1;
            //console.log(randomNumbers);
            scoreNumber = $('#scoreNum');
            $('#scoreNum').html(randomNumbers); 

        });


        //console.log(pickNumber);
    };

    startGame();

});