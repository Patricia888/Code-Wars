'use strict';

function capitalize(s){
  let array = [];
  let string1 = '';
  let string2 = '';

  let evenArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

  for (var i = 0; i < s.length; i++) {
    if (evenArray.includes(i)) {
      string1 += s[i].toUpperCase();
      string2 += s[i];
    }
    else {
      string1 += s[i];
      string2 += s[i].toUpperCase();
    }
  }

  array.push(string1, string2);
  return array;
}