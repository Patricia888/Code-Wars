'use strict';

function high(x){
  let splitString = x.split(' ');
 
  let sortTheArray = splitString.sort((a, b) => wordCalcValue(b) - wordCalcValue(a));
  return sortTheArray[0];

}
function wordCalcValue(word){
  let scoreForWord = 0;
  for (let i in word) {
    scoreForWord += ((word.charCodeAt(i)) - 96);
  }
  return scoreForWord;
}
