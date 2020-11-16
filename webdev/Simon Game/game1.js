
//array of colours
var buttonColours = ["red", "blue", "green", "yellow"];

//empty array to store the patter of the game
var gamePattern = [];

//next sequence function to be played.
function nextSequence() {
    //random number from 0 to 4
    var randomNumber = Math.floor((Math.random() * 4));

    //random number used to chose a colour in the array buttonColours
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    //concatenate the Id with the random chosen colours to dae in/out the colour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

//create a new class/object of Audio and play it.
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function (e) {
    var idClicked = e.target.id;
});