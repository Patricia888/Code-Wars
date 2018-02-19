'use strict';

function validatePIN (pin) {

  let testing = /^([0-9]{4}|[0-9]{6})$/.test(pin);
  return testing;
}