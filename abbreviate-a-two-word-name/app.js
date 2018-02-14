'use strict';

function abbrevName(name){
  let splitNameArray = name.split(" ");

  let firtName = splitNameArray[0][0];
  let lastName = splitNameArray[1][0];

  return firtName.toUpperCase() + '.' + lastName.toUpperCase();

}