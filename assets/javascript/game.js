$( document ).ready(function(){
// generate random number for each crystal 0
var crystal1=Math.floor(Math.random() * 12) + 1;
var crystal2=Math.floor(Math.random() * 12) + 1;
var crystal3=Math.floor(Math.random() * 12) + 1;
var crystal4=Math.floor(Math.random() * 12) + 1;
// Create a random number to start each game

var Random=Math.floor(Math.random() * 90) + 30;
// Display random number
$('#scoreToMatch').text(Random);
// varables to track games, wins and loses
var playerTotal= 0;
var wins=0;
var losses=0;
$('#wins').text(wins);
$('#losses').text(losses);
// Reset game
function reset(){
  Random=Math.floor(Math.random()*90+30);
  console.log(Random)
  $('#scoreToMatch').text(Random);
  crystal1= Math.floor(Math.random()*12+1);
  crystal2= Math.floor(Math.random()*12+1);
  crystal3= Math.floor(Math.random()*12+1);
  crystal4= Math.floor(Math.random()*12+1);
  playerTotal= 0;
  $('#totalScore').text(playerTotal);
  } 
// Display wins
function winner(){
alert("Your a Winner!");
wins++; 
$('#wins').text(wins);
reset();
}
// Display losses
function loser(){
alert ("Too Much! You lose!");
losses++;
$('#losses').text(losses);
reset()
}
// Clicking crystals
$('.red').on ('click', function(){
playerTotal = playerTotal + crystal1;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
      //Win & lose conditions
    if (playerTotal == Random){
      winner();
    }
    else if ( playerTotal > Random){
      loser();
    }   
})  
$('.blue').on ('click', function(){
playerTotal = playerTotal + crystal2;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
    if (playerTotal == Random){
      winner();
    }
    else if ( playerTotal > Random){
      loser();
    } 
})  
$('.yellow').on ('click', function(){
playerTotal = playerTotal + crystal3;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal);

      if (playerTotal == Random){
      winner();
    }
    else if ( playerTotal > Random){
      loser();
    } 
})  
$('.green').on ('click', function(){
playerTotal = playerTotal + crystal4;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
  
      if (playerTotal == Random){
      winner();
    }
    else if ( playerTotal > Random){
      loser();
    }
});   
}); 
