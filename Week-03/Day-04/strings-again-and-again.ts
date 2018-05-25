'use strict';
export {};

function starryString(string: string): string {
  if (string.length === 0) {
    return '*';
  } else if (string.length === 1) {
    return string + '*';
  } else {(string.slice (0, string.length - 1)) + '*'
    return starryString(string.slice (0, string.length - 1)) + string.charAt(string.length - 1) +'*';
  }
  }

console.log(starryString('A fat fox is sitting in a box'));


// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.