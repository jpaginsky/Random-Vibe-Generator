
var vibeQuotes = [ "'Don't cry because it's over, smile because it happened.'' ― Dr. Seuss",
"'Happiness is when what you think, what you say, and what you do are in harmony.' ― Mahatma Gandhi",
"'Happiness is a warm puppy.' ― Charles M. Schulz", "'You can't be happy unless you're unhappy sometimes.'― Lauren Oliver, Delirium"]

//function to make background and quote appear

  var myButton1 = document.getElementById('myButton1');

myButton1.addEventListener("click", function(){
  var number= randNum(vibeQuotes);
  changeText(number);
});



function randNum(array){
  var randQuote= Math.random();
  var randDeci= randQuote * array.length;
  var random= Math.floor(randDeci);
  return random;
}

function changeText(someNum){
  var text= document.getElementById('text');
  text.innerHTML = vibeQuotes[someNum]
}
