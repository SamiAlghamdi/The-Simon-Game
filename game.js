//==============================================================================
//variables
var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var level = 1;

//==============================================================================
//start the game

$(document).keydown(function(){
  if (event.keyCode === 13){
    nextSequence();
  }
});

//==============================================================================
//creating the sequence

function nextSequence() {
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  //choosing a random color
  randomChosenColor = buttonColors[randomNumber];

  //adding the the chosen color to an array ("gamePattern")
  gamePattern.push(randomChosenColor);

  $("h1").text("Level " + level++);


}

//==============================================================================
//flashing animation

// $("#" + randomChosenColor).fadeOut(250).fadeIn(250);

//==============================================================================


$(".btn").on("click",function(){
  //playing audio when a button is clicked
  var audio = new Audio("sounds/click.mp3");
  audio.volume = 0.3;
  audio.play();

  //detecting which button got clicked and storing the pattern in an array (userClickedPattern)
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  //adding animation when a button is pressed
  var aa= event.target;
  $(aa).addClass("pressed");

  setTimeout(function(event){ $(aa).removeClass("pressed"); }, 100);



});
