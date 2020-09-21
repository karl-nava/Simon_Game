var buttonColours =  ["red","blue","green","yellow"]
var gamePattern = [];
var userChosenColour;
var userClickedPattern = [];
var gameStart = false;
var level = 0;

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  $("#level-title").text("level "+level++);
}

$("#green").click(function(){
  userChosenColour="green";
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
})

$("#red").click(function(){
  userChosenColour="red";
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
})

$("#blue").click(function(){
  userChosenColour="blue";
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
})

$("#yellow").click(function(){
  userChosenColour="yellow";
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
})

function playSound(chosenColour){
  var audio = new Audio("sounds/"+chosenColour+".mp3");
  audio.play();
}

function animatePress(currentColour){
  var activeButton = document.querySelector("."+currentColour);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}

function checkAnswer(chosenColour){
  if(chosenColour==gamePattern[userClickedPattern.length-1]){
    if(userClickedPattern.length==gamePattern.length){
      setTimeout(function(){nextSequence();},1000);
      userClickedPattern = [];
    }
    else{

    }

  }
  else{
    $("#level-title").text("Wrong colour. Press any button to try again.");
    level = 0;
    playSound("wrong");
    gameStart=false;
    userClickedPattern = [];
    gamePattern = [];
  }
}

$(document).keypress(function(event){
  if(!gameStart){
    gameStart=true;
    nextSequence();
  }
})
