'use strict';

function cubeOdd(arr) {
  let onlyNumbersArray = arr.filter(x => typeof x === 'number');

  let cubedArray = onlyNumbersArray.map(x => x * x * x);

  let onlyOddNumbersArray = cubedArray.filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0);

  if (arr.some(i => typeof i !== 'number')) {
    return undefined;
  }
  else {
    return onlyOddNumbersArray;
  }
}


