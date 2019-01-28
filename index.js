var numOne, numTwo, answer, userAnswer;

const WIN = 5;
const LOSS = 3;

var plus = false;
var minus = false;
var mixed = false;

var correct = 0;
var incorrect = 0;
var max = 10;
var min = 0;
var op = ["+", "-"];

var lastName = prompt("Quel est ton nom de famille?");
var firstName = prompt("Quel est ton prénom?")
var whichlevel = prompt("addition, soustraction ou les deux?")


switch (whichlevel.toLowerCase()) {
  case "addition":
    alert("D'accord, en avant!");
    this.plus = true;
    break;
    case "soustraction":
    this.minus = true;
    break;
    case "les deux":
    this.mixed = true;
    break;
  default:
  location.reload();
}

function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkAnswer(){
  if (userAnswer === answer) {
    correct++;
    $('.results').text("Bravo");
  } else {
    incorrect++;
    $('.results').text("Dommage");
  }
};

function checkScore(){
  if (correct >= WIN) {
    $('.results').text("Tu as gagné :D");
  } else if (incorrect >= LOSS) {
    $('.results').text("Tu as perdu :()");
  };
};

function resetGame(){
  $('.submit').prop('disabled', true);
  if ((correct === WIN) || (incorrect === LOSS)) {
    setTimeout(function(){
      $('body').html("<h1 class='text-center'>" + firstName + " " + lastName + "</h1><div class='area'>★ " + correct + " bonnes réponses ★</div> <hr> <div class='area2'>★ " + incorrect + " mauvaises réponses ★</div> <hr>");
      $('.area').css({
	'text-align' : 'center',
	'font-family' : '"Open Sans",  Impact',
	'font-size' : '20px',
	'color' : '#6ab04c',
	'letter-spacing' : '7px',
	'font-weight' : 'bold',
	'text-transform' : 'uppercase',
	'animation' : 'blur .75s ease-out infinite',
	'text-shadow' : '0px 0px 5px #fff, 0px 0px 7px #fff'
});
$('.area2').css({
'text-align' : 'center',
'font-family' : '"Open Sans",  Impact',
'font-size' : '20px',
'color' : '#eb4d4b',
'letter-spacing' : '7px',
'font-weight' : 'bold',
'text-transform' : 'uppercase',
'animation' : 'blur .75s ease-out infinite',
'text-shadow' : '0px 0px 5px #fff, 0px 0px 7px #fff'
});
    }, 2000);
  } else {
    setTimeout(function(){
        document.getElementById('yourAnswer').value = '';
        setGame();
        $('.submit').prop('disabled', false);
    }, 1000);
  };
};

function setGame(){
  $('.results').text('');
  if(this.plus == true){
    numOne = getRandomNumbers(min, max);
    numTwo = getRandomNumbers(min, max);
    $('.numOne').text(numOne);
    $('.numTwo').text(numTwo);
    $('.operator').text("+");
    addNumbers();
}else if (this.minus == true){
  numOne = getRandomNumbers(max, min);
  numTwo = getRandomNumbers(max, min);
  while(numOne < numTwo){
    numOne = getRandomNumbers(max, min);
    numTwo = getRandomNumbers(max, min);
  }
  $('.numOne').text(numOne);
  $('.numTwo').text(numTwo);
  $('.operator').text("-");
  addNumbers();
}else if(this.mixed == true){
  var operator = op[Math.floor(Math.random()*op.length)];
  numOne = getRandomNumbers(max, min);
  numTwo = getRandomNumbers(max, min);
  while(numOne < numTwo){
    numOne = getRandomNumbers(max, min);
    numTwo = getRandomNumbers(max, min);
  }
  $('.numOne').text(numOne);
  $('.numTwo').text(numTwo);
  $('.operator').text(operator);
  addNumbers();
}
function addNumbers(){
  if(this.plus == true){
  answer = numOne + numTwo;
}else if (this.minus == true){
  answer = numOne - numTwo;
}else if (this.mixed == true){
  if(operator === "+"){
    answer = numOne + numTwo;
  }else{
    answer = numOne - numTwo;
  }
}
};

};

setGame();

$('.submit').on('click', function(){
    userAnswer = parseInt(document.getElementById('yourAnswer').value);
    checkAnswer();
    checkScore();
    resetGame();
});

var originalBG = $(".grButton").css("background");

$('.grButton').mousemove(function(e) {
    x = e.pageX;
    bgPos = x/2 + "% " + "0%";

    $(this).css({
      'background-position': bgPos
    });
});

$('.grButton').mouseleave(function() {
  $(this).css({
    background: originalBG
  });
});
