'use strict';

function disemvowel(str) {
  let trollArray = [];
  let consonant;

  for(var i = 0; i < str.length; i++){
    consonant = str[i];

    if(consonant !== 'a' && consonant !== 'A' && consonant !== 'e' && consonant !== 'E' && consonant !== 'i' && consonant !== 'I' && consonant !== 'o' && consonant !== 'O' && consonant !== 'u' && consonant !== 'U') {
      trollArray.push(consonant);
    }
  }
  return trollArray.join('');
}