// get variable elements

var winsCounter = 0; // wins
var lossesCounter = 0; // losses
var totalScore = 0; // total score
var images;


var randomNumbers; // random number



var scoreNumber = 0;


// start the Game

$(document).ready(function () {

    $('.images').on('click', function () {
        var crystalPoints = $(this).data('value');
        console.log(crystalPoints);
        scoreNumber += crystalPoints;

        if (scoreNumber === randomResult) {
            winsCounter++;
            $('#winnercaption').text("YOU WIN!");
            $('#wins').text(winsCounter);
            //(add the winnerscaption and wins text)
            startGame();

        } else if (scoreNumber > randomResult) {
            lossesCounter++;
            $('#losses').text(lossesCounter);
            //(add lose text)
            startGame();
        } else {
            $('#scoreNum').text(scoreNumber);
        }

        /*when image is clicked, retrieve the data- value 
        and then add the value to current score
        check current score against target score
        either the score is equal and they win 
        or the current score is greater than target score and they lose
        or keep updating the DOM and they keep playing 
        */
    });


    $('.images').hover(function () {

        $(this).css("cursor", "pointer");
    });

    function startGame() {

        scoreNumber = 0;
        $('#scoreNum').text(scoreNumber);

        $('#red').attr('data-value', Math.floor(Math.random() * 11) + 1)
        $('#blue').attr('data-value', Math.floor(Math.random() * 11) + 1)
        $('#yellow').attr('data-value', Math.floor(Math.random() * 11) + 1)
        $('#green').attr('data-value', Math.floor(Math.random() * 11) + 1)

        randomResult = Math.floor(Math.random() * 60) + 30;

        $('#randomNum').html(+randomResult);

        randomNumbers = Math.floor(Math.random() * 11) + 1;

        //console.log(pickNumber);
    };

    startGame();

});