var randomNumber = Math.floor(Math.random()*100) + 1;
var gueses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
vat resetButton;

function checkGuess(){
  var userGuess = Number(guessField.value);
  if(guessCount===1){
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  if(userGuess === randomNumber){
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent =' ';
    setGameOver();
  } else if (guessCount === 10){
    lastResult.textContent = '!!!GAMEOVER!!!;
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'last guess was too low';
    } else {
      lowOrHi.textContent = 'last guess was too high';
    }
  }  
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
