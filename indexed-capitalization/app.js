'use strict';

function capitalize(s, arr) {
  let answerString = '';

  for (let i = 0; i < s.length ; i++) { 

    if (arr.includes(i)) {
      answerString += s.charAt(i).toUpperCase();   
    }
    else {
      answerString += s.charAt(i);
    }

  }
  return answerString;
}
