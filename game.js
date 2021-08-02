//variables
var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

//==============================================================================

$(".btn").click(function() {
  var audio = new Audio("sounds/click.mp3");
  audio.volume = 0.3;
  audio.play();

  //detecting which button got clicked and storing the pattern in an array (userClickedPattern)
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  //adding animation when a button is pressed
  var aa = event.target;
  $(aa).addClass("pressed");

  setTimeout(function(event) {
    $(aa).removeClass("pressed");
  }, 100);

  checkAnswer(userClickedPattern.length-1);


});


//==============================================================================

$(document).keydown(function() {
  if (!started) {
    if (event.keyCode === 13) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  }

});

//==============================================================================

function nextSequence() {

  userClickedPattern = [];

  level++;

  $("h1").text("Level " + level);

  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(250).fadeIn(250);

}

//==============================================================================

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1200);
    }
  } else {
    $("h1").text("Game Over, Press Enter to Restart");

    var audio = new Audio("sounds/wrong.mp3");
    audio.volume = 0.03;
    audio.play();

    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    level = 0;
    started = false;
    gamePattern = [];

  }

}
