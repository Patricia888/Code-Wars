'use strict';

function insertDash(num) {
  let numbers = '' + num;
  let result = '';
  
  let oddArray = ['1', '3', '5', '7', '9'];
  
  for(var i = 0; i < numbers.length; i++) {
    if(i > 0 && oddArray.includes(numbers[i-1]) && oddArray.includes(numbers[i])) {
      result += '-';
    }
    result += numbers[i];
  }

  return result;
}