'use strict';

function formatWords(words){
  let bigAnswerString;
  let smallAnswerString;

  if (words === [] || words === null) {
    return '';
  }
  words = words.filter(a => a !== '' && a !== null);

  if (words.length > 2) {
    bigAnswerString = words.slice(0, -2).join(', ') + ', ' + words.slice(-2).join(' and ');
    return bigAnswerString;
  }

  else {
    smallAnswerString = words.slice(0, -2).join(', ') + words.slice(-2).join(' and ');
    return smallAnswerString;
  }
}