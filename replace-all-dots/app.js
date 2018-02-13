'use strict'

//"one.two.three"
var re = /\./gi;

var replaceDots = function(str) {
  var turnDotsToDashes = str.replace(re, '-');
  return turnDotsToDashes;
}