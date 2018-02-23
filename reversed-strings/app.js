'use strict';

function solution(str){
  let splitString = str.split('');
  let revStringArray = [];

  for(var i = 0; i < str.length; i++) {
    revStringArray.push(splitString.pop());
  }

  revStringArray = revStringArray.join('');
  return revStringArray;
}